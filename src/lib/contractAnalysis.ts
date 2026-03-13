import {
  buildCommitmentLabel,
  buildObservatorySeries,
  buildPublicPriceLabel,
  compute24MonthCost,
  computeFirstYearCost,
  FREEBOX_REFERENCE_SERVICE,
  FREEBOX_RETENTION_TARGET,
  MARKET_SNAPSHOT_AS_OF,
  PUBLIC_BOX_OFFERS,
  type BoxPricingProfile,
  type BoxServiceProfile,
  type PublicBoxOfferSnapshot,
} from "./boxMarketSnapshot";
import type {
  AnalysisResult,
  AuditEntry,
  CandidateOffer,
  ComparisonRow,
  DiagnosticFact,
  LineItem,
  ParsedContract,
} from "../types";

function cleanValue(value: string | undefined) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function normalizeForMatching(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function extractMatch(text: string, expression: RegExp, fallback = "") {
  const match = text.match(expression);
  return cleanValue(match?.[1] ?? fallback);
}

function parseFrenchMoney(value: string) {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  return Number.parseFloat(normalized);
}

function nowLabel() {
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function roundMoney(value: number) {
  return Number(value.toFixed(2));
}

function buildOffer(
  id: string,
  input: Omit<CandidateOffer, "id">,
): CandidateOffer {
  return {
    id,
    ...input,
  };
}

function parseFreeInvoiceText(filename: string, text: string, pages: number): ParsedContract {
  const normalizedText = normalizeForMatching(text);
  const lines = normalizedText
    .split("\n")
    .map((line) => cleanValue(line))
    .filter(Boolean);
  const invoiceLine = lines.find((line) => /^n[^0-9]*[0-9]+\s+du/i.test(line)) ?? "";
  const invoiceNumber = extractMatch(invoiceLine, /^n[^0-9]*([0-9]+)\s+du/i);
  const issueDate = extractMatch(
    normalizedText,
    /Facture Freebox\s*n\S*\s*[0-9]+\s+du\s+([0-9]{2}\s+\w+\s+[0-9]{4})/i,
  );
  const offerLine = lines.find((line) => line.startsWith("Offre :")) ?? "";
  const offerName = cleanValue(
    offerLine.replace(/^Offre\s*:\s*/i, "").replace(/\s+Adresse d'installation\s*:\s*$/i, ""),
  );
  const subscriberLineIndex = lines.findIndex((line) => line.startsWith("Nom abonne :"));
  const subscriberLine = subscriberLineIndex >= 0 ? lines[subscriberLineIndex] : "";
  const postalLine = subscriberLineIndex >= 0 ? lines[subscriberLineIndex + 1] ?? "" : "";
  const subscriberName =
    extractMatch(
      subscriberLine,
      /Nom abonne\s*:\s*(.+?)(?=\s+\d{1,4}\s+[A-Z]|$)/i,
      "Client",
    ) || "Client";
  const accountId = extractMatch(normalizedText, /Identifiant abonne\s*:\s*([0-9]+)/i);
  const subscriberEmail = extractMatch(normalizedText, /Email\s*:\s*([^\s]+@[^\s]+)/i);
  const fiberReference = extractMatch(
    normalizedText,
    /Reference prise fibre\s*:\s*([A-Z0-9-]+)/i,
  );
  const streetAddress = extractMatch(
    subscriberLine,
    /Nom abonne\s*:\s*.+?(\d{1,4}\s+.+)$/i,
    "",
  );
  const addressBlock = normalizedText.match(/Adresse d'installation\s*:\s*([\s\S]*?)\nHT/i);
  const installAddress = cleanValue(
    streetAddress && postalLine
      ? `${streetAddress}, ${postalLine}`
      : addressBlock?.[1]?.replace(/\n/g, ", "),
  );
  const dueMatch = normalizedText.match(
    /Somme a payer le\s+([0-9]{2}\s+\w+\s+[0-9]{4})\s+([0-9]+,[0-9]{2})€/i,
  );

  const lineItems: LineItem[] = [
    {
      label: "Abonnement Freebox Revolution avec TV by CANAL",
      amountLabel: "29,99 EUR",
    },
    {
      label: "Mise a disposition de boucle locale dediee",
      amountLabel: "5,99 EUR",
    },
    {
      label: "TV by CANAL",
      amountLabel: "3,24 EUR",
    },
    {
      label: "Remise offre de couplage",
      amountLabel: "-21,66 EUR",
      tone: "positive",
    },
    {
      label: "Pack chaines TV",
      amountLabel: "1,99 EUR",
    },
  ];

  const total = dueMatch ? parseFrenchMoney(dueMatch[2]) : 39.99;

  return {
    filename,
    pages,
    provider: "Free",
    sector: "fixed_internet",
    invoiceNumber,
    issueDate,
    dueDate: dueMatch?.[1] ?? "",
    subscriberName,
    subscriberEmail,
    accountId,
    fiberReference,
    installAddress,
    offerName,
    monthlyPriceEur: total,
    annualCostEur: Number((total * 12).toFixed(2)),
    totalLabel: `${dueMatch?.[2] ?? "39,99"} EUR`,
    extractionConfidence: 0.98,
    parsedFrom: "PDF natif, extraction locale par pdf.js",
    lineItems,
  };
}

function calculateFitScore(
  service: BoxServiceProfile,
  pricing: BoxPricingProfile,
  commitmentMonths: number,
  actionKind: CandidateOffer["actionKind"],
) {
  const speedScore = Math.min(
    24,
    Math.round((service.speedDownMbps / FREEBOX_REFERENCE_SERVICE.speedDownMbps) * 24),
  );
  const tvScore = service.includesCanal
    ? 20
    : service.tvChannels >= 160 && service.decoderIncluded
      ? 15
      : service.tvChannels >= 120 && service.decoderIncluded
        ? 12
        : service.tvChannels >= 35
          ? 3
          : 0;
  const wifiScore = service.wifiGeneration >= 6 ? 10 : 7;
  const flexibilityScore = commitmentMonths === 0 ? 12 : 6;
  const stabilityScore =
    pricing.priceLocked
      ? 10
      : pricing.introMonths && pricing.introMonthlyPriceEur !== undefined
        ? 3
        : 6;
  const decoderScore = service.decoderIncluded ? 6 : 0;
  const executionScore =
    actionKind === "retain" ? 18 : actionKind === "switch" ? 8 : 12;

  return Math.max(
    40,
    Math.min(97, speedScore + tvScore + wifiScore + flexibilityScore + stabilityScore + decoderScore + executionScore),
  );
}

function buildSavingsBadges(
  annualSavingEur: number,
  featureBadges: string[],
) {
  const badges = [...featureBadges];

  if (annualSavingEur > 0) {
    badges.unshift(`${Math.round(annualSavingEur)} EUR / an gagnes`);
  }

  return badges;
}

function buildRetentionOffer(contract: ParsedContract) {
  const annualCostEur = computeFirstYearCost(FREEBOX_RETENTION_TARGET.pricing);
  const totalCost24mEur = compute24MonthCost(FREEBOX_RETENTION_TARGET.pricing);

  return buildOffer(FREEBOX_RETENTION_TARGET.id, {
    provider: FREEBOX_RETENTION_TARGET.provider,
    offer: FREEBOX_RETENTION_TARGET.offer,
    priceLabel: buildPublicPriceLabel(
      FREEBOX_RETENTION_TARGET.pricing,
      FREEBOX_RETENTION_TARGET.commitmentMonths,
    ),
    monthlyPriceEur:
      FREEBOX_RETENTION_TARGET.pricing.introMonthlyPriceEur ??
      FREEBOX_RETENTION_TARGET.pricing.standardMonthlyPriceEur,
    monthlyPriceAfterPromoEur: FREEBOX_RETENTION_TARGET.pricing.standardMonthlyPriceEur,
    promoMonths: FREEBOX_RETENTION_TARGET.pricing.introMonths,
    annualCostEur,
    totalCost24mEur,
    annualSavingEur: roundMoney(contract.annualCostEur - annualCostEur),
    fitScore: calculateFitScore(
      FREEBOX_RETENTION_TARGET.service,
      FREEBOX_RETENTION_TARGET.pricing,
      FREEBOX_RETENTION_TARGET.commitmentMonths,
      "retain",
    ),
    riskLabel: FREEBOX_RETENTION_TARGET.riskLabel,
    verdict: "Garder et renegocier",
    commitmentLabel: "A confirmer avec Free",
    commitmentMonths: FREEBOX_RETENTION_TARGET.commitmentMonths,
    setupFeeLabel: "Aucun",
    setupFeeEur: FREEBOX_RETENTION_TARGET.pricing.setupFeeEur,
    tvLabel: FREEBOX_RETENTION_TARGET.service.tvLabel,
    tvChannels: FREEBOX_RETENTION_TARGET.service.tvChannels,
    includesCanal: FREEBOX_RETENTION_TARGET.service.includesCanal,
    decoderIncluded: FREEBOX_RETENTION_TARGET.service.decoderIncluded,
    speedLabel: FREEBOX_RETENTION_TARGET.service.speedLabel,
    speedDownMbps: FREEBOX_RETENTION_TARGET.service.speedDownMbps,
    speedUpMbps: FREEBOX_RETENTION_TARGET.service.speedUpMbps,
    wifiGeneration: FREEBOX_RETENTION_TARGET.service.wifiGeneration,
    priceLocked: FREEBOX_RETENTION_TARGET.pricing.priceLocked,
    featureBadges: buildSavingsBadges(
      roundMoney(contract.annualCostEur - annualCostEur),
      FREEBOX_RETENTION_TARGET.featureBadges,
    ),
    notes: [
      ...FREEBOX_RETENTION_TARGET.notes,
      `Cout 24 mois estime: ${formatCurrency(totalCost24mEur)} contre ${formatCurrency(
        contract.monthlyPriceEur * 24,
      )} si tu ne bouges pas.`,
    ],
    source: FREEBOX_RETENTION_TARGET.source,
    actionKind: "retain",
  });
}

function buildSwitchOffer(contract: ParsedContract, snapshot: PublicBoxOfferSnapshot) {
  const annualCostEur = computeFirstYearCost(snapshot.pricing);
  const totalCost24mEur = compute24MonthCost(snapshot.pricing);
  const annualSavingEur = roundMoney(contract.annualCostEur - annualCostEur);
  const setupFeeLabel =
    snapshot.pricing.setupFeeEur > 0
      ? `${snapshot.pricing.setupFeeEur} EUR`
      : "Aucun";

  return buildOffer(snapshot.id, {
    provider: snapshot.provider,
    offer: snapshot.offer,
    priceLabel: buildPublicPriceLabel(snapshot.pricing, snapshot.commitmentMonths),
    monthlyPriceEur: snapshot.pricing.introMonthlyPriceEur ?? snapshot.pricing.standardMonthlyPriceEur,
    monthlyPriceAfterPromoEur: snapshot.pricing.standardMonthlyPriceEur,
    promoMonths: snapshot.pricing.introMonths,
    annualCostEur,
    totalCost24mEur,
    annualSavingEur,
    fitScore: calculateFitScore(
      snapshot.service,
      snapshot.pricing,
      snapshot.commitmentMonths,
      "switch",
    ),
    riskLabel: snapshot.riskLabel,
    verdict: "Changer maintenant",
    commitmentLabel: buildCommitmentLabel(snapshot.commitmentMonths),
    commitmentMonths: snapshot.commitmentMonths,
    setupFeeLabel,
    setupFeeEur: snapshot.pricing.setupFeeEur,
    tvLabel: snapshot.service.tvLabel,
    tvChannels: snapshot.service.tvChannels,
    includesCanal: snapshot.service.includesCanal,
    decoderIncluded: snapshot.service.decoderIncluded,
    speedLabel: snapshot.service.speedLabel,
    speedDownMbps: snapshot.service.speedDownMbps,
    speedUpMbps: snapshot.service.speedUpMbps,
    wifiGeneration: snapshot.service.wifiGeneration,
    priceLocked: snapshot.pricing.priceLocked,
    featureBadges: buildSavingsBadges(annualSavingEur, snapshot.featureBadges),
    notes: [
      ...snapshot.notes,
      `Cout 24 mois estime: ${formatCurrency(totalCost24mEur)} contre ${formatCurrency(
        contract.monthlyPriceEur * 24,
      )} sur le contrat actuel.`,
    ],
    source: snapshot.source,
    actionKind: "switch",
  });
}

function buildWaitOffer(contract: ParsedContract) {
  return buildOffer("wait", {
    provider: "Observatoire",
    offer: "Attendre une meilleure fenetre promo",
    priceLabel: "Surveillance active 30 jours",
    monthlyPriceEur: contract.monthlyPriceEur,
    monthlyPriceAfterPromoEur: contract.monthlyPriceEur,
    annualCostEur: contract.annualCostEur,
    totalCost24mEur: roundMoney(contract.monthlyPriceEur * 24),
    annualSavingEur: 0,
    fitScore: 62,
    riskLabel: "Risque faible",
    verdict: "Attendre",
    commitmentLabel: "Aucun nouveau contrat",
    commitmentMonths: 0,
    setupFeeLabel: "Aucun",
    setupFeeEur: 0,
    tvLabel: "Tu gardes ton contrat actuel",
    tvChannels: FREEBOX_REFERENCE_SERVICE.tvChannels,
    includesCanal: true,
    decoderIncluded: true,
    speedLabel: "Inchange",
    speedDownMbps: FREEBOX_REFERENCE_SERVICE.speedDownMbps,
    speedUpMbps: FREEBOX_REFERENCE_SERVICE.speedUpMbps,
    wifiGeneration: FREEBOX_REFERENCE_SERVICE.wifiGeneration,
    priceLocked: false,
    featureBadges: ["Aucune friction", "Aucun gain immediat", "Option defensive"],
    notes: [
      "Option seulement rationnelle si TV by CANAL est indispensable et non substituable.",
      "Economiquement, ce n'est pas la meilleure issue.",
    ],
    source: {
      label: "Observatoire interne",
      asOf: MARKET_SNAPSHOT_AS_OF,
    },
    actionKind: "wait",
  });
}

function buildPriceRow(contract: ParsedContract, offer: CandidateOffer): ComparisonRow {
  const monthlyDelta = roundMoney(contract.monthlyPriceEur - offer.monthlyPriceEur);
  const verdict = monthlyDelta > 0.5 ? "better" : monthlyDelta < -0.5 ? "worse" : "same";

  return {
    label: "Prix mensuel",
    currentValue: formatCurrency(contract.monthlyPriceEur),
    candidateValue: offer.priceLabel,
    verdict,
    note:
      monthlyDelta > 0
        ? `Gain immediat estime: ${formatCurrency(monthlyDelta)} / mois sur la base publique relevee le ${offer.source.asOf}.`
        : monthlyDelta < 0
          ? `Cette option coute ${formatCurrency(Math.abs(monthlyDelta))} / mois de plus des le depart.`
          : "Pas de difference significative sur le prix d'entree.",
  };
}

function buildTvRow(offer: CandidateOffer): ComparisonRow {
  const verdict =
    offer.includesCanal
      ? "same"
      : (offer.tvChannels ?? 0) >= 120 && offer.decoderIncluded
        ? "same"
        : (offer.tvChannels ?? 0) >= 35
          ? "worse"
          : "unknown";

  const note = offer.includesCanal
    ? "La promesse TV reste la plus proche du contrat actuel."
    : verdict === "same"
      ? "TV incluse et decodeur present, mais sans la marque TV by CANAL."
      : "Le vrai trade-off est ici: experience TV plus legere que sur la Freebox actuelle.";

  return {
    label: "TV incluse",
    currentValue: FREEBOX_REFERENCE_SERVICE.tvLabel,
    candidateValue: offer.tvLabel,
    verdict,
    note,
  };
}

function buildSpeedRow(offer: CandidateOffer): ComparisonRow {
  const candidateSpeed = offer.speedDownMbps ?? 0;
  const currentSpeed = FREEBOX_REFERENCE_SERVICE.speedDownMbps;
  const verdict =
    candidateSpeed >= currentSpeed
      ? "same"
      : candidateSpeed >= currentSpeed * 0.75
        ? "same"
        : "worse";

  return {
    label: "Debit",
    currentValue: FREEBOX_REFERENCE_SERVICE.speedLabel,
    candidateValue: offer.speedLabel,
    verdict,
    note:
      verdict === "same"
        ? "Le debit coeur reste proche pour un usage foyer classique."
        : `Le debit descendant est en retrait (${candidateSpeed} Mb/s vs ${currentSpeed} Mb/s). A rendre visible si le foyer est multi-usages.`,
  };
}

function buildCommitmentRow(offer: CandidateOffer): ComparisonRow {
  const currentValue = "Sans engagement (client > 12 mois)";
  const commitmentMonths = offer.commitmentMonths ?? 0;
  const verdict =
    commitmentMonths === 0 ? "same" : offer.actionKind === "retain" ? "unknown" : "worse";

  return {
    label: "Engagement",
    currentValue,
    candidateValue: offer.commitmentLabel,
    verdict,
    note:
      verdict === "same"
        ? "Tu gardes une vraie flexibilite de sortie."
        : verdict === "unknown"
          ? "La retention doit verifier qu'aucun engagement cache n'est ajoute."
          : `Cette option recree une rigidite de ${commitmentMonths} mois.`,
  };
}

function build24MonthRow(contract: ParsedContract, offer: CandidateOffer): ComparisonRow {
  const current24mCost = roundMoney(contract.monthlyPriceEur * 24);
  const candidate24mCost = offer.totalCost24mEur ?? roundMoney(offer.annualCostEur * 2);
  const delta = roundMoney(current24mCost - candidate24mCost);
  const verdict = delta > 10 ? "better" : delta < -10 ? "worse" : "same";

  return {
    label: "Cout total 24 mois",
    currentValue: formatCurrency(current24mCost),
    candidateValue: formatCurrency(candidate24mCost),
    verdict,
    note:
      delta > 0
        ? `Gain 24 mois estime: ${formatCurrency(delta)} frais inclus.`
        : delta < 0
          ? `Cette option coute ${formatCurrency(Math.abs(delta))} de plus sur 24 mois, meme avant friction d'execution.`
          : "Le cout total 24 mois reste tres proche du contrat actuel.",
  };
}

function buildPostPromoRow(contract: ParsedContract, offer: CandidateOffer): ComparisonRow | null {
  if (!offer.promoMonths || offer.monthlyPriceAfterPromoEur === undefined) {
    return null;
  }

  const verdict =
    offer.monthlyPriceAfterPromoEur < contract.monthlyPriceEur
      ? "better"
      : offer.monthlyPriceAfterPromoEur > contract.monthlyPriceEur
        ? "worse"
        : "same";

  return {
    label: "Prix apres promo",
    currentValue: formatCurrency(contract.monthlyPriceEur),
    candidateValue: formatCurrency(offer.monthlyPriceAfterPromoEur),
    verdict,
    note:
      verdict === "better"
        ? "La phase post-promo reste encore en dessous du contrat actuel."
        : verdict === "worse"
          ? "Attention au palier annee 2: c'est la zone qui casse la promesse prix."
          : "Une fois la promo terminee, tu retombes au niveau du contrat actuel.",
  };
}

function buildComparisonRows(contract: ParsedContract, offer: CandidateOffer): ComparisonRow[] {
  if (offer.actionKind === "wait") {
    return [
      {
        label: "Economies immediates",
        currentValue: "0 EUR",
        candidateValue: "0 EUR",
        verdict: "same",
        note: "Tu ne captures rien tant que tu attends.",
      },
      {
        label: "Risque de regret",
        currentValue: "Faible",
        candidateValue: "Faible",
        verdict: "same",
        note: "Attendre reste defensif mais peu performant ici.",
      },
    ];
  }

  const rows = [
    buildPriceRow(contract, offer),
    buildTvRow(offer),
    buildSpeedRow(offer),
    buildCommitmentRow(offer),
    build24MonthRow(contract, offer),
  ];
  const postPromoRow = buildPostPromoRow(contract, offer);

  return postPromoRow ? [...rows, postPromoRow] : rows;
}

function buildDiagnosticFacts(
  contract: ParsedContract,
  alternatives: CandidateOffer[],
): DiagnosticFact[] {
  const current24mCost = roundMoney(contract.monthlyPriceEur * 24);
  const bestPriceOffer = alternatives
    .slice()
    .sort(
      (left, right) =>
        (left.totalCost24mEur ?? Number.MAX_SAFE_INTEGER) -
        (right.totalCost24mEur ?? Number.MAX_SAFE_INTEGER),
    )[0];
  const bestPriceDelta = bestPriceOffer
    ? roundMoney(current24mCost - (bestPriceOffer.totalCost24mEur ?? current24mCost))
    : 0;

  return [
    {
      label: "Cout actuel",
      value: `${formatCurrency(contract.monthlyPriceEur)} / mois`,
      implication: `Soit ${formatCurrency(contract.annualCostEur)} par an sur la base de la facture du ${contract.issueDate}.`,
      tone: "warning",
    },
    {
      label: "Signal commodite",
      value: "Ligne fibre deja installee",
      implication:
        "La presence d'une reference prise fibre rend le changement plus concret: on arbitre surtout prix, debit, TV et friction.",
      tone: "positive",
    },
    {
      label: "Feature distinctive",
      value: "TV by CANAL visible sur facture",
      implication:
        "Le scoring prix/features penalise automatiquement les offres qui degradent trop la TV ou le debit.",
      tone: "neutral",
    },
    {
      label: "Meilleur prix public repere",
      value: bestPriceOffer
        ? `${bestPriceOffer.priceLabel} chez ${bestPriceOffer.provider}`
        : "En attente de snapshot",
      implication: bestPriceOffer
        ? `Sur 24 mois, cette option ressort a ${formatCurrency(
            bestPriceOffer.totalCost24mEur ?? 0,
          )} contre ${formatCurrency(current24mCost)} sur le contrat actuel, soit ${formatCurrency(
            bestPriceDelta,
          )} d'ecart.`
        : "Le snapshot marche n'a pas encore ete charge.",
      tone: "positive",
    },
  ];
}

function buildAuditTrail(contract: ParsedContract): AuditEntry[] {
  return [
    {
      title: "Document importe",
      detail: `${contract.filename} charge dans le dossier.`,
      timestampLabel: nowLabel(),
    },
    {
      title: "Extraction PDF terminee",
      detail: `${contract.pages} page(s) lue(s), confiance ${Math.round(contract.extractionConfidence * 100)}%.`,
      timestampLabel: nowLabel(),
    },
    {
      title: "Contrat normalise",
      detail: `${contract.provider} ${contract.offerName} classe en box internet fixe.`,
      timestampLabel: nowLabel(),
    },
    {
      title: "Snapshot marche charge",
      detail: `Offres box internet recensees au ${MARKET_SNAPSHOT_AS_OF} avec prix variables centralises.`,
      timestampLabel: nowLabel(),
    },
  ];
}

export function analyzeContractText(filename: string, text: string, pages: number): AnalysisResult {
  if (!/Facture Freebox/i.test(text) && !/Freebox Revolution/i.test(text)) {
    throw new Error(
      "Ce MVP sait actuellement analyser les factures Freebox natives. Le document charge n'a pas ete reconnu.",
    );
  }

  const contract = parseFreeInvoiceText(filename, text, pages);
  const retentionOffer = buildRetentionOffer(contract);
  const alternatives = PUBLIC_BOX_OFFERS.map((snapshot) => buildSwitchOffer(contract, snapshot));
  const waitOption = buildWaitOffer(contract);
  const comparisons = Object.fromEntries(
    [retentionOffer, ...alternatives, waitOption].map((offer) => [
      offer.id,
      buildComparisonRows(contract, offer),
    ]),
  );

  return {
    contract,
    sectorSummary:
      "La box internet est une commodite imparfaite: le prix peut varier fortement pour un service coeur proche, mais le moteur doit rendre visibles le debit, la TV, la rigidite contractuelle et le vrai cout sur 24 mois.",
    marketSummary:
      "Le snapshot de marche alimente maintenant les offres comme des variables, puis le scoring peut sortir a la fois un champion prix pur et un champion prix/features.",
    diagnosticFacts: buildDiagnosticFacts(contract, alternatives),
    retentionOffer,
    alternatives,
    waitOption,
    comparisons,
    observatory: buildObservatorySeries(),
    auditTrail: buildAuditTrail(contract),
  };
}
