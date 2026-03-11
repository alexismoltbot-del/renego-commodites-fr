import type {
  ActionSection,
  ActionTask,
  AnalysisResult,
  CandidateOffer,
  ComparisonRow,
  DecisionDirection,
  DecisionMemo,
} from "../types";

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

function scoreOffer(offer: CandidateOffer) {
  let score = offer.fitScore + Math.min(40, offer.annualSavingEur / 3);

  if (offer.actionKind === "switch" && offer.annualSavingEur >= 100 && offer.fitScore >= 78) {
    score += 8;
  }

  if (offer.actionKind === "switch" && offer.commitmentLabel.includes("12")) {
    score -= 5;
  }

  if (offer.actionKind === "retain") {
    score += 4;
  }

  return score;
}

function selectOffer(analysis: AnalysisResult) {
  const offers = [analysis.retentionOffer, ...analysis.alternatives, analysis.waitOption];

  return offers
    .map((offer) => ({ offer, score: scoreOffer(offer) }))
    .sort((left, right) => right.score - left.score)[0]?.offer;
}

function buildSwitchSections(offer: CandidateOffer): ActionSection[] {
  const preparationSteps: ActionTask[] = [
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
      detail: "Le dossier suit automatiquement les 49 EUR d'ouverture et jusqu'a 100 EUR de frais de resiliation rembourses.",
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
      detail: "L'outil controle que le prix promo promis est bien celui facture.",
      owner: "outil",
      channel: "pdf/email",
      proof: "Controle facture 1",
      automation: "assistee",
      status: "waiting_provider",
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
  const bullets = [
    `Tu paies aujourd'hui ${formatCurrency(analysis.contract.annualCostEur)} par an pour la ligne Free.`,
    `L'option choisie descend a ${formatCurrency(selectedOffer.annualCostEur)} par an, soit ${Math.round(selectedOffer.annualSavingEur)} EUR de gain.`,
  ];

  const engagementRow = selectedComparison.find((row) => row.label === "Engagement");
  if (engagementRow) {
    bullets.push(`${engagementRow.label}: ${engagementRow.note}`);
  }

  const tvRow = selectedComparison.find((row) => row.label === "TV incluse");
  if (tvRow) {
    bullets.push(`${tvRow.label}: ${tvRow.note}`);
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

  let direction: DecisionDirection = "renegotiate_now";
  if (selectedOffer.actionKind === "switch") {
    direction = "change_now";
  }
  if (selectedOffer.actionKind === "wait") {
    direction = "wait_watch";
  }

  const executionSections =
    direction === "change_now"
      ? buildSwitchSections(selectedOffer)
      : direction === "renegotiate_now"
        ? buildRetentionSections()
        : buildWaitSections();

  const nextBestAlternativeId =
    direction === "change_now" ? analysis.retentionOffer.id : analysis.alternatives[0]?.id;

  return {
    engineMode: "heuristic",
    modelLabel: "Heuristique factuelle locale",
    generatedAt: nowIso(),
    direction,
    headline:
      direction === "change_now"
        ? `Le gain est assez fort pour pousser un changement maintenant vers ${selectedOffer.provider}.`
        : direction === "renegotiate_now"
          ? "La renegociation immediate offre le meilleur ratio gain / effort."
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
        ? `Tu paies aujourd'hui ${formatCurrency(analysis.contract.monthlyPriceEur)} par mois. L'offre ${selectedOffer.provider} retenue tombe a ${formatCurrency(selectedOffer.monthlyPriceEur)} par mois. Meme avec un peu plus de friction, l'economie de ${Math.round(selectedOffer.annualSavingEur)} EUR par an est assez haute pour justifier le changement.`
        : `Le gain existe, mais la friction d'un switch n'est pas justifiee. La bonne decision est de comprimer le prix chez l'operateur actuel.`,
    whyThisChoice: buildWhyBullets(analysis, selectedOffer, selectedComparison),
    pushReason:
      direction === "change_now" && selectedOffer.annualSavingEur >= 100
        ? `Gain fort detecte: ${Math.round(selectedOffer.annualSavingEur)} EUR / an. Le moteur pousse donc clairement le changement.`
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
