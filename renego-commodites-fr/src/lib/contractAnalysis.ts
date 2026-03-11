import type {
  AnalysisResult,
  AuditEntry,
  CandidateOffer,
  ComparisonRow,
  DiagnosticFact,
  LineItem,
  ParsedContract,
  PriceSeries,
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

function buildObservatory(): PriceSeries[] {
  return [
    {
      id: "free",
      label: "Freebox Revolution",
      accent: "#f1643c",
      currentPrice: 39.99,
      delta30d: 0,
      points: [
        { day: "J-13", price: 39.99 },
        { day: "J-12", price: 39.99 },
        { day: "J-11", price: 39.99 },
        { day: "J-10", price: 39.99 },
        { day: "J-9", price: 39.99 },
        { day: "J-8", price: 39.99 },
        { day: "J-7", price: 39.99 },
        { day: "J-6", price: 39.99 },
        { day: "J-5", price: 39.99 },
        { day: "J-4", price: 39.99 },
        { day: "J-3", price: 39.99 },
        { day: "J-2", price: 39.99 },
        { day: "J-1", price: 39.99 },
        { day: "J", price: 39.99 },
      ],
    },
    {
      id: "sfr",
      label: "SFR Fibre Starter",
      accent: "#7d1c2f",
      currentPrice: 27.99,
      delta30d: -2,
      points: [
        { day: "J-13", price: 29.99 },
        { day: "J-12", price: 29.99 },
        { day: "J-11", price: 29.99 },
        { day: "J-10", price: 29.49 },
        { day: "J-9", price: 28.99 },
        { day: "J-8", price: 28.99 },
        { day: "J-7", price: 28.99 },
        { day: "J-6", price: 28.49 },
        { day: "J-5", price: 27.99 },
        { day: "J-4", price: 27.99 },
        { day: "J-3", price: 27.99 },
        { day: "J-2", price: 27.99 },
        { day: "J-1", price: 27.99 },
        { day: "J", price: 27.99 },
      ],
    },
    {
      id: "bouygues",
      label: "Bbox Must Fibre",
      accent: "#0d7a6d",
      currentPrice: 35.99,
      delta30d: -1,
      points: [
        { day: "J-13", price: 36.99 },
        { day: "J-12", price: 36.99 },
        { day: "J-11", price: 36.99 },
        { day: "J-10", price: 36.99 },
        { day: "J-9", price: 35.99 },
        { day: "J-8", price: 35.99 },
        { day: "J-7", price: 35.99 },
        { day: "J-6", price: 35.99 },
        { day: "J-5", price: 35.99 },
        { day: "J-4", price: 35.99 },
        { day: "J-3", price: 35.99 },
        { day: "J-2", price: 35.99 },
        { day: "J-1", price: 35.99 },
        { day: "J", price: 35.99 },
      ],
    },
    {
      id: "orange",
      label: "Livebox Fibre",
      accent: "#f4a300",
      currentPrice: 42.99,
      delta30d: -1,
      points: [
        { day: "J-13", price: 43.99 },
        { day: "J-12", price: 43.99 },
        { day: "J-11", price: 43.99 },
        { day: "J-10", price: 43.99 },
        { day: "J-9", price: 43.99 },
        { day: "J-8", price: 43.49 },
        { day: "J-7", price: 43.49 },
        { day: "J-6", price: 42.99 },
        { day: "J-5", price: 42.99 },
        { day: "J-4", price: 42.99 },
        { day: "J-3", price: 42.99 },
        { day: "J-2", price: 42.99 },
        { day: "J-1", price: 42.99 },
        { day: "J", price: 42.99 },
      ],
    },
  ];
}

function buildComparisons(): Record<string, ComparisonRow[]> {
  return {
    "switch-sfr": [
      {
        label: "Prix mensuel",
        currentValue: "39,99 EUR",
        candidateValue: "27,99 EUR",
        verdict: "better",
        note: "12 EUR de moins par mois sur la base publique actuelle.",
      },
      {
        label: "TV incluse",
        currentValue: "TV by CANAL + bouquet TV",
        candidateValue: "Bouquet SFR TV 160 chaines",
        verdict: "same",
        note: "Il y a bien une TV incluse, mais pas le label TV by CANAL.",
      },
      {
        label: "Debit",
        currentValue: "Non visible sur la facture",
        candidateValue: "Jusqu'a 1 Gb/s annonce",
        verdict: "unknown",
        note: "Impossible de comparer de facon certaine depuis la facture seule.",
      },
      {
        label: "Engagement",
        currentValue: "Non visible sur la facture",
        candidateValue: "12 mois",
        verdict: "worse",
        note: "Le vrai cout d'un switch est ici: tu reprends un engagement.",
      },
      {
        label: "Frais de changement",
        currentValue: "Aucun a payer",
        candidateValue: "49 EUR d'ouverture et jusqu'a 100 EUR de frais rembourses",
        verdict: "better",
        note: "Le dossier de remboursement doit etre suivi proprement par l'outil.",
      },
    ],
    "retain-free": [
      {
        label: "Prix mensuel",
        currentValue: "39,99 EUR",
        candidateValue: "35,99 EUR cible",
        verdict: "better",
        note: "Gain modere mais tres simple a capturer.",
      },
      {
        label: "TV incluse",
        currentValue: "TV by CANAL + bouquet TV",
        candidateValue: "Identique",
        verdict: "same",
        note: "Pas de changement fonctionnel si Free accepte.",
      },
      {
        label: "Changement materiel",
        currentValue: "Aucun",
        candidateValue: "Aucun",
        verdict: "same",
        note: "Friction quasi nulle.",
      },
      {
        label: "Engagement",
        currentValue: "Non visible sur la facture",
        candidateValue: "A confirmer avec Free",
        verdict: "unknown",
        note: "Le script doit verifier qu'aucun nouvel engagement cache n'est ajoute.",
      },
    ],
    "switch-bouygues": [
      {
        label: "Prix mensuel",
        currentValue: "39,99 EUR",
        candidateValue: "35,99 EUR",
        verdict: "better",
        note: "Gain trop faible pour justifier un switch agressif.",
      },
      {
        label: "TV incluse",
        currentValue: "TV by CANAL + bouquet TV",
        candidateValue: "TV incluse",
        verdict: "same",
        note: "TV presente, mais equivalence exacte non garantie.",
      },
      {
        label: "Wi-Fi",
        currentValue: "Non visible sur la facture",
        candidateValue: "Wi-Fi 6",
        verdict: "unknown",
        note: "Peut etre un plus, mais pas assez fort pour compenser un faible gain.",
      },
      {
        label: "Engagement",
        currentValue: "Non visible sur la facture",
        candidateValue: "12 mois",
        verdict: "worse",
        note: "Tu reprends de la rigidite pour seulement 48 EUR par an.",
      },
    ],
    wait: [
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
    ],
  };
}

function buildDiagnosticFacts(contract: ParsedContract): DiagnosticFact[] {
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
        "La presence d'une reference prise fibre rend le changement plus concret: on arbitre surtout prix, TV et friction.",
      tone: "positive",
    },
    {
      label: "Feature distinctive",
      value: "TV by CANAL visible sur facture",
      implication:
        "Toute reco de switch doit dire clairement si cette feature est preservee ou non.",
      tone: "neutral",
    },
    {
      label: "Meilleur prix public repere",
      value: "27,99 EUR / mois chez SFR Fibre Starter",
      implication:
        "Le delta brut monte a 144 EUR / an. C'est assez haut pour pousser un changement si la TV by CANAL n'est pas indispensable.",
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
      detail: "Offres box internet recensees au 11 mars 2026 pour recommendation et execution.",
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
  const retentionOffer = buildOffer("retain-free", {
    provider: "Free",
    offer: "Renegociation cible sur la ligne actuelle",
    priceLabel: "35,99 EUR / mois pendant 12 mois",
    monthlyPriceEur: 35.99,
    annualCostEur: 431.88,
    annualSavingEur: Number((contract.annualCostEur - 431.88).toFixed(2)),
    fitScore: 95,
    riskLabel: "Risque faible",
    verdict: "Garder et renegocier",
    commitmentLabel: "A confirmer avec Free",
    setupFeeLabel: "Aucun",
    tvLabel: "Identique si retention acceptee",
    speedLabel: "Identique",
    featureBadges: ["Pas de coupure", "Pas de retour materiel", "Meme experience"],
    notes: [
      "Le chemin le plus simple si tu veux garder exactement la meme box.",
      "Le gain reste limite face au meilleur prix public du marche.",
      "Le script doit verifier qu'aucun nouvel engagement n'est ajoute.",
    ],
    source: {
      label: "Scenario retention interne",
      asOf: "11 mars 2026",
    },
    actionKind: "retain",
  });

  const alternatives = [
    buildOffer("switch-sfr", {
      provider: "SFR",
      offer: "Fibre Starter",
      priceLabel: "27,99 EUR / mois",
      monthlyPriceEur: 27.99,
      annualCostEur: 335.88,
      annualSavingEur: Number((contract.annualCostEur - 335.88).toFixed(2)),
      fitScore: 81,
      riskLabel: "Risque moyen",
      verdict: "Changer maintenant",
      commitmentLabel: "12 mois",
      setupFeeLabel: "49 EUR remboursables",
      tvLabel: "TV incluse, bouquet different",
      speedLabel: "Jusqu'a 1 Gb/s",
      featureBadges: ["144 EUR / an gagnes", "TV incluse", "ODR frais de resiliation"],
      notes: [
        "C'est la meilleure economie publique identifiee dans le snapshot actuel.",
        "La TV reste incluse, mais la promesse n'est pas strictement la meme que TV by CANAL.",
        "Le moteur d'action doit suivre ouverture, remboursement et restitution Free.",
      ],
      source: {
        label: "Site officiel SFR",
        url: "https://www.sfr.fr/offre-internet/box-fibre-starter",
        asOf: "11 mars 2026",
      },
      actionKind: "switch",
    }),
    buildOffer("switch-bouygues", {
      provider: "Bouygues Telecom",
      offer: "Bbox Must Fibre",
      priceLabel: "35,99 EUR / mois la 1ere annee",
      monthlyPriceEur: 35.99,
      annualCostEur: 431.88,
      annualSavingEur: Number((contract.annualCostEur - 431.88).toFixed(2)),
      fitScore: 84,
      riskLabel: "Risque moyen",
      verdict: "Changer maintenant",
      commitmentLabel: "12 mois",
      setupFeeLabel: "49 EUR",
      tvLabel: "TV incluse",
      speedLabel: "Jusqu'a 2 Gb/s descendant",
      featureBadges: ["Wi-Fi 6", "TV incluse", "Gain faible"],
      notes: [
        "Plus moderne techniquement, mais le gain prix est trop faible pour un switch agressif.",
        "La deuxieme annee remonte, donc le gain est surtout court terme.",
        "C'est une bonne alternative seulement si le Wi-Fi 6 compte vraiment.",
      ],
      source: {
        label: "Guide des tarifs Bouygues Telecom",
        url: "https://www.bouyguestelecom.fr/static/cms/tarifs/guide_des_tarifs.pdf",
        asOf: "11 mars 2026",
      },
      actionKind: "switch",
    }),
  ];

  const waitOption = buildOffer("wait", {
    provider: "Observatoire",
    offer: "Attendre une meilleure fenetre promo",
    priceLabel: "Surveillance active 30 jours",
    monthlyPriceEur: contract.monthlyPriceEur,
    annualCostEur: contract.annualCostEur,
    annualSavingEur: 0,
    fitScore: 62,
    riskLabel: "Risque faible",
    verdict: "Attendre",
    commitmentLabel: "Aucun nouveau contrat",
    setupFeeLabel: "Aucun",
    tvLabel: "Tu gardes ton contrat actuel",
    speedLabel: "Inchange",
    featureBadges: ["Aucune friction", "Aucun gain immediat", "Option defensive"],
    notes: [
      "Option seulement rationnelle si TV by CANAL est indispensable et non substituable.",
      "Economiquement, ce n'est pas la meilleure issue.",
    ],
    source: {
      label: "Observatoire interne",
      asOf: "11 mars 2026",
    },
    actionKind: "wait",
  });

  return {
    contract,
    sectorSummary:
      "La box internet est une commodite imparfaite: le prix peut varier fortement pour un service coeur proche, mais il faut rendre visible l'effet TV, engagement et friction de changement.",
    marketSummary:
      "Sur cette facture Freebox a 39,99 EUR / mois, le moteur doit maintenant pousser un vrai changement quand l'economie est forte et que la comparaison reste lisible pour un non-specialiste.",
    diagnosticFacts: buildDiagnosticFacts(contract),
    retentionOffer,
    alternatives,
    waitOption,
    bestActionId: "switch-sfr",
    comparisons: buildComparisons(),
    observatory: buildObservatory(),
    auditTrail: buildAuditTrail(contract),
  };
}
