import type {
  ActionSection,
  ActionTask,
  AnalysisResult,
  CandidateOffer,
  ComparisonRow,
  DecisionDirection,
  DecisionMemo,
} from "../types";

type OfferScoreBreakdown = {
  offerId: string;
  priceScore: number;
  valueScore: number;
  effectiveMonthly24mEur: number;
};

export type OfferLensInsights = {
  priceChampionId: string;
  valueChampionId: string;
  scoresByOfferId: Record<string, OfferScoreBreakdown>;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

function nowIso() {
  return new Date().toISOString();
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function computeEffectiveMonthly24mEur(offer: CandidateOffer) {
  const totalCost24mEur = offer.totalCost24mEur ?? offer.annualCostEur * 2;
  return totalCost24mEur / 24;
}

function scoreOfferPrice(
  offer: CandidateOffer,
  bestEffectiveMonthly24mEur: number,
) {
  const deltaVsBest = computeEffectiveMonthly24mEur(offer) - bestEffectiveMonthly24mEur;
  let score = 100 - deltaVsBest * 6;

  if (offer.priceLocked) {
    score += 6;
  }

  if ((offer.commitmentMonths ?? 0) === 0) {
    score += 4;
  }

  if (offer.actionKind === "wait") {
    score -= 10;
  }

  return clamp(Math.round(score), 15, 100);
}

function scoreOfferValue(priceScore: number, offer: CandidateOffer) {
  return Math.round(offer.fitScore * 0.9 + priceScore * 0.1);
}

export function buildOfferLensInsights(analysis: AnalysisResult): OfferLensInsights {
  const switchOffers = analysis.alternatives;
  const bestEffectiveMonthly24mEur = Math.min(
    ...switchOffers.map((offer) => computeEffectiveMonthly24mEur(offer)),
  );

  const scorecards = switchOffers.map((offer) => {
    const priceScore = scoreOfferPrice(offer, bestEffectiveMonthly24mEur);

    return {
      offerId: offer.id,
      priceScore,
      valueScore: scoreOfferValue(priceScore, offer),
      effectiveMonthly24mEur: computeEffectiveMonthly24mEur(offer),
    };
  });

  const priceChampionId =
    scorecards.slice().sort((left, right) => right.priceScore - left.priceScore)[0]?.offerId ??
    switchOffers[0]?.id ??
    analysis.retentionOffer.id;
  const valueChampionId =
    scorecards.slice().sort((left, right) => right.valueScore - left.valueScore)[0]?.offerId ??
    switchOffers[0]?.id ??
    analysis.retentionOffer.id;

  return {
    priceChampionId,
    valueChampionId,
    scoresByOfferId: Object.fromEntries(scorecards.map((scorecard) => [scorecard.offerId, scorecard])),
  };
}

function selectOffer(analysis: AnalysisResult) {
  const lensInsights = buildOfferLensInsights(analysis);
  const switchChampion =
    analysis.alternatives.find((offer) => offer.id === lensInsights.valueChampionId) ??
    analysis.alternatives[0];

  if (
    switchChampion &&
    switchChampion.annualSavingEur >= 120 &&
    switchChampion.fitScore >= 64
  ) {
    return switchChampion;
  }

  if (analysis.retentionOffer.annualSavingEur >= 36) {
    return analysis.retentionOffer;
  }

  return analysis.waitOption;
}

function buildSwitchSections(offer: CandidateOffer, analysis: AnalysisResult): ActionSection[] {
  const preparationSteps: ActionTask[] = [
    {
      id: "switch-cost-recap",
      title: "Recap cout sur 24 mois",
      detail: `Renego calcule le cout total sur 24 mois pour ${offer.provider}: prix promo + prix post-promo + frais de mise en service. Cout actuel sur 24 mois: ${formatCurrency(analysis.contract.monthlyPriceEur * 24)}. Cout ${offer.provider}: ${formatCurrency(offer.totalCost24mEur ?? offer.annualCostEur * 2)}. Gain estime sur 24 mois: ${formatCurrency((analysis.contract.monthlyPriceEur * 24) - (offer.totalCost24mEur ?? offer.annualCostEur * 2))}.`,
      owner: "outil",
      channel: "interface",
      proof: "Tableau comparatif 24 mois",
      automation: "auto",
      status: "ready",
    },
    {
      id: "switch-check-eligibility",
      title: "Verifier l'eligibilite et figer l'offre choisie",
      detail: `L'outil capture la page ${offer.provider} et archive le prix ${offer.priceLabel} avec la date du jour.`,
      owner: "outil",
      channel: "web",
      proof: "Capture offre + horodatage",
      automation: "auto",
      status: "ready",
    },
    {
      id: "switch-user-portability",
      title: "Demander si le numero fixe doit etre conserve",
      detail: "Le choix portabilite oui/non conditionne la suite du dossier operateur.",
      owner: "utilisateur",
      channel: "interface",
      proof: "Choix signe dans le dossier",
      automation: "assistee",
      status: "waiting_user",
    },
    {
      id: "switch-build-order",
      title: "Preparer le panier de souscription",
      detail: "L'outil pre-remplit le dossier avec l'adresse, l'offre cible et le suivi des frais rembourses.",
      owner: "outil",
      channel: "api/web",
      proof: "Brouillon panier + recapitulatif PDF",
      automation: "assistee",
      status: "ready",
    },
  ];

  const executionSteps: ActionTask[] = [
    {
      id: "switch-user-approve-order",
      title: "Valider la souscription",
      detail: "L'utilisateur approuve la commande finale. Rien d'irreversible ne part avant cette validation.",
      owner: "utilisateur",
      channel: "interface",
      proof: "Consentement horodate",
      automation: "manuelle",
      status: "waiting_user",
    },
    {
      id: "switch-track-confirmation",
      title: "Capturer la confirmation operateur",
      detail: "L'outil stocke l'email ou le recapitulatif de commande et la date d'activation.",
      owner: "outil",
      channel: "email/web",
      proof: "Confirmation de commande",
      automation: "assistee",
      status: "waiting_provider",
    },
    {
      id: "switch-track-refunds",
      title: "Suivre les remboursements annonces",
      detail: `Le dossier suit automatiquement les ${offer.setupFeeLabel} d'ouverture et les preuves de resiliation a rembourser si l'operateur le propose.`,
      owner: "outil",
      channel: "backoffice",
      proof: "Dossier ODR et preuve deposee",
      automation: "assistee",
      status: "ready",
    },
  ];

  const closureSteps: ActionTask[] = [
    {
      id: "switch-free-checklist",
      title: "Generer la checklist de sortie Free",
      detail: "L'outil prepare la restitution du materiel, la date de coupure et la verification de la derniere facture.",
      owner: "outil",
      channel: "interface",
      proof: "Checklist restitutions",
      automation: "auto",
      status: "ready",
    },
    {
      id: "switch-return-box",
      title: "Retourner le materiel Free",
      detail: "L'utilisateur renvoie la box et conserve le justificatif depot ou expedition.",
      owner: "utilisateur",
      channel: "logistique",
      proof: "Recu colis / depot",
      automation: "manuelle",
      status: "waiting_user",
    },
    {
      id: "switch-first-bill-audit",
      title: "Verifier la premiere facture du nouvel operateur",
      detail: "L'outil controle que le prix public promis est bien celui facture.",
      owner: "outil",
      channel: "pdf/email",
      proof: "Controle facture 1",
      automation: "assistee",
      status: "waiting_provider",
    },
    {
      id: "cost-summary-final",
      title: "Resume financier final",
      detail: `Renego genere le bilan: Gain annee 1: ${formatCurrency(offer.annualSavingEur)}. Cout total 24 mois: ${formatCurrency(offer.totalCost24mEur ?? offer.annualCostEur * 2)}. Frais de mise en service: ${offer.setupFeeLabel}.`,
      owner: "outil",
      channel: "interface",
      proof: "Fiche recapitulative PDF exportable",
      automation: "auto",
      status: "ready",
    },
  ];

  return [
    {
      title: "Avant la souscription",
      summary: "On verrouille l'offre et les variables qui peuvent casser le switch.",
      steps: preparationSteps,
    },
    {
      title: "Pendant la mise en place",
      summary: "Le produit aide a souscrire et capte les preuves utiles.",
      steps: executionSteps,
    },
    {
      title: "Apres la bascule",
      summary: "L'outil suit les remboursements et la cloture propre de l'ancien contrat.",
      steps: closureSteps,
    },
  ];
}

function buildRetentionSections(): ActionSection[] {
  return [
    {
      title: "Preparation de retention",
      summary: "Le but est de comprimer le prix sans toucher au service.",
      steps: [
        {
          id: "retain-script",
          title: "Generer un script court et factuel",
          detail: "L'outil prepare un argumentaire avec le prix concurrent public et le prix cible.",
          owner: "outil",
          channel: "interface",
          proof: "Script exportable",
          automation: "auto",
          status: "ready",
        },
        {
          id: "retain-approval",
          title: "Choisir telephone ou chat",
          detail: "L'utilisateur valide le canal. Le moteur garde une trace du scenario utilise.",
          owner: "utilisateur",
          channel: "interface",
          proof: "Canal choisi",
          automation: "assistee",
          status: "waiting_user",
        },
      ],
    },
    {
      title: "Execution retention",
      summary: "La renegociation reste plus simple qu'un switch mais doit etre documentee.",
      steps: [
        {
          id: "retain-contact",
          title: "Contacter Free",
          detail: "Le script mentionne le delta de prix et demande explicitement 35,99 EUR / mois.",
          owner: "utilisateur",
          channel: "3244/chat",
          proof: "Compte rendu de l'appel ou capture chat",
          automation: "manuelle",
          status: "waiting_user",
        },
        {
          id: "retain-check-commitment",
          title: "Verifier les nouvelles conditions",
          detail: "L'outil controle qu'aucun engagement ou option parasite n'est ajoute.",
          owner: "outil",
          channel: "pdf/email",
          proof: "Controle recapitulatif",
          automation: "assistee",
          status: "waiting_provider",
        },
      ],
    },
  ];
}

function buildWaitSections(): ActionSection[] {
  return [
    {
      title: "Surveillance",
      summary: "Option defensive quand la feature differenciante est prioritaire.",
      steps: [
        {
          id: "wait-monitor",
          title: "Surveiller les prix 30 jours",
          detail: "L'outil tracke les offres box equivalentes et alerte si le delta repart au-dessus d'un seuil utile.",
          owner: "outil",
          channel: "observatoire",
          proof: "Historique 30 jours",
          automation: "auto",
          status: "ready",
        },
      ],
    },
  ];
}

function buildWhyBullets(
  analysis: AnalysisResult,
  selectedOffer: CandidateOffer,
  selectedComparison: ComparisonRow[],
) {
  const lensInsights = buildOfferLensInsights(analysis);
  const priceChampion = analysis.alternatives.find(
    (offer) => offer.id === lensInsights.priceChampionId,
  );
  const bullets = [
    `Tu paies aujourd'hui ${formatCurrency(analysis.contract.annualCostEur)} par an pour la ligne Free.`,
    `L'option choisie descend a ${formatCurrency(selectedOffer.annualCostEur)} par an, soit ${Math.round(selectedOffer.annualSavingEur)} EUR de gain annee 1.`,
  ];

  const engagementRow = selectedComparison.find((row) => row.label === "Engagement");
  if (engagementRow) {
    bullets.push(`${engagementRow.label}: ${engagementRow.note}`);
  }

  const tvRow = selectedComparison.find((row) => row.label === "TV incluse");
  if (tvRow) {
    bullets.push(`${tvRow.label}: ${tvRow.note}`);
  }

  if (priceChampion && priceChampion.id !== selectedOffer.id) {
    bullets.push(
      `Pour le prix pur, ${priceChampion.provider} reste devant. Mais ${selectedOffer.provider} protege mieux le debit et les features coeur.`,
    );
  }

  return bullets;
}

export function buildHeuristicDecisionMemo(analysis: AnalysisResult): DecisionMemo {
  const selectedOffer = selectOffer(analysis) ?? analysis.retentionOffer;
  const selectedComparison = analysis.comparisons[selectedOffer.id] ?? [];
  const savingPercent =
    analysis.contract.annualCostEur > 0
      ? (selectedOffer.annualSavingEur / analysis.contract.annualCostEur) * 100
      : 0;
  const lensInsights = buildOfferLensInsights(analysis);
  const priceChampion =
    analysis.alternatives.find((offer) => offer.id === lensInsights.priceChampionId) ??
    analysis.alternatives[0];

  let direction: DecisionDirection = "renegotiate_now";
  if (selectedOffer.actionKind === "switch") {
    direction = "change_now";
  }
  if (selectedOffer.actionKind === "wait") {
    direction = "wait_watch";
  }

  const executionSections =
    direction === "change_now"
      ? buildSwitchSections(selectedOffer, analysis)
      : direction === "renegotiate_now"
        ? buildRetentionSections()
        : buildWaitSections();

  const nextBestAlternativeId =
    direction === "change_now"
      ? priceChampion && priceChampion.id !== selectedOffer.id
        ? priceChampion.id
        : analysis.retentionOffer.id
      : analysis.alternatives[0]?.id;

  return {
    engineMode: "heuristic",
    modelLabel: "Heuristique factuelle locale",
    generatedAt: nowIso(),
    direction,
    headline:
      direction === "change_now"
        ? selectedOffer.decoderIncluded === false
          ? `${selectedOffer.provider} est le meilleur prix du marche, mais sans decodeur TV : un compromis a peser.`
          : `Le meilleur compromis prix/features pousse maintenant vers ${selectedOffer.provider}.`
        : direction === "renegotiate_now"
          ? "La renegociation immediate reste le meilleur ratio qualite / effort."
          : "Attendre reste possible, mais ce n'est pas le choix economique optimal.",
    recommendationLabel:
      direction === "change_now"
        ? "Changer maintenant"
        : direction === "renegotiate_now"
          ? "Garder et renegocier"
          : "Attendre",
    urgencyLabel:
      direction === "change_now"
        ? "A faire cette semaine"
        : direction === "renegotiate_now"
          ? "A faire maintenant"
          : "Surveiller sans urgence",
    confidenceLabel:
      direction === "change_now" ? "Confiance moyenne a elevee" : "Confiance elevee",
    explanationForUser:
      direction === "change_now"
        ? selectedOffer.decoderIncluded === false
          ? `${selectedOffer.provider} propose le prix le plus bas du marche, prix fixe, sans engagement. Attention : cette offre ne comprend ni decodeur TV ni bouquet TV inclus. Si la TV de la Freebox est importante, c'est un compromis a considerer. Economie estimee : ${Math.round(selectedOffer.annualSavingEur)} EUR / an.`
          : `Le moteur separe maintenant le prix pur du rapport prix/features. En prix pur, ${priceChampion?.provider ?? selectedOffer.provider} gagne. Mais ${selectedOffer.provider} conserve un meilleur equilibre entre economie, TV et debit, avec ${Math.round(selectedOffer.annualSavingEur)} EUR d'economie annuelle.`
        : `Le gain existe, mais la friction d'un switch n'est pas justifiee. La bonne decision est de comprimer le prix chez l'operateur actuel.`,
    whyThisChoice: buildWhyBullets(analysis, selectedOffer, selectedComparison),
    pushReason:
      direction === "change_now" && selectedOffer.annualSavingEur >= 100
        ? `Gain fort detecte: ${Math.round(selectedOffer.annualSavingEur)} EUR / an avec un niveau de service coeur qui reste defendable.`
        : undefined,
    selectedOfferId: selectedOffer.id,
    selectedComparison,
    gainSummary: {
      currentAnnualCostLabel: formatCurrency(analysis.contract.annualCostEur),
      selectedAnnualCostLabel: formatCurrency(selectedOffer.annualCostEur),
      annualSavingLabel: `${Math.round(selectedOffer.annualSavingEur)} EUR / an`,
      savingPercentLabel: formatPercent(savingPercent),
      firstYearDeltaLabel: `${formatCurrency(analysis.contract.monthlyPriceEur - selectedOffer.monthlyPriceEur)} / mois`,
      pushChange: direction === "change_now" && selectedOffer.annualSavingEur >= 100,
    },
    executionSections,
    nextBestAlternativeId,
  };
}
