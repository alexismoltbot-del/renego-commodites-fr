import { startTransition, useDeferredValue, useState } from "react";

type SectorKey =
  | "electricity"
  | "gas"
  | "mobile"
  | "fixed_internet"
  | "home_insurance";

type SectorDefinition = {
  key: SectorKey;
  label: string;
  kicker: string;
  summary: string;
  confidence: string;
  currentContract: {
    provider: string;
    offer: string;
    monthlyPrice: string;
    commitment: string;
    extractedFrom: string;
  };
  retentionOffer: {
    provider: string;
    delta: string;
    detail: string;
  };
  recommendations: Array<{
    provider: string;
    offer: string;
    annualGain: string;
    tradeoff: string;
    quality: string;
    recommendation: string;
  }>;
  observatory: Array<{
    label: string;
    current: string;
    weekly: string;
    monthly: string;
  }>;
};

const sectors: SectorDefinition[] = [
  {
    key: "electricity",
    label: "Electricite",
    kicker: "MVP le plus propre",
    summary:
      "Changement gratuit, resiliation automatique et observatoire public des prix.",
    confidence: "Confiance produit: tres elevee",
    currentContract: {
      provider: "EDF",
      offer: "Zen Online 9 kVA",
      monthlyPrice: "118 EUR/mois estimes",
      commitment: "Sans engagement",
      extractedFrom: "Facture PDF importee le 11 mars 2026",
    },
    retentionOffer: {
      provider: "EDF",
      delta: "-84 EUR/an",
      detail: "Remise retention simulee si le client menace un changement immediat.",
    },
    recommendations: [
      {
        provider: "Octopus Energy",
        offer: "Eco Saison",
        annualGain: "212 EUR/an",
        tradeoff: "Aucun impact service attendu",
        quality: "Support correct, prix 12 mois le plus bas",
        recommendation: "Changer maintenant",
      },
      {
        provider: "TotalEnergies",
        offer: "Fixe 1 an",
        annualGain: "176 EUR/an",
        tradeoff: "Prix moins agressif mais plus stable",
        quality: "Bon compromis budget / lisibilite",
        recommendation: "Option prudente",
      },
    ],
    observatory: [
      { label: "Prix annuel median", current: "1 428 EUR", weekly: "-1.2%", monthly: "-3.8%" },
      { label: "Promo la plus agressive", current: "-140 EUR", weekly: "+12 EUR", monthly: "+18 EUR" },
      { label: "Taux d'offres sans engagement", current: "100%", weekly: "stable", monthly: "stable" },
    ],
  },
  {
    key: "gas",
    label: "Gaz",
    kicker: "Tres comparable",
    summary:
      "Bonne verticale pour tracker le prix repere, les remises et les evolutions mensuelles.",
    confidence: "Confiance produit: elevee",
    currentContract: {
      provider: "Engie",
      offer: "Gaz Ajust 2 ans",
      monthlyPrice: "96 EUR/mois estimes",
      commitment: "Sans engagement de duree",
      extractedFrom: "Contrat PDF importe le 11 mars 2026",
    },
    retentionOffer: {
      provider: "Engie",
      delta: "-51 EUR/an",
      detail: "Retention utile mais encore battue par le marche a date.",
    },
    recommendations: [
      {
        provider: "EDF",
        offer: "Avantage Gaz 2 ans",
        annualGain: "104 EUR/an",
        tradeoff: "Prix fixe, peu de risque",
        quality: "Lecture tres simple des conditions",
        recommendation: "Changer maintenant",
      },
      {
        provider: "Vattenfall",
        offer: "Gaz Eco Plus",
        annualGain: "87 EUR/an",
        tradeoff: "Plus agressif sur 12 mois",
        quality: "Moins lisible que l'option EDF",
        recommendation: "Alternative budget",
      },
    ],
    observatory: [
      { label: "Prix repere equivalent", current: "1 152 EUR", weekly: "-0.8%", monthly: "-2.5%" },
      { label: "Remise mediane", current: "7.4%", weekly: "+0.2 pt", monthly: "+0.9 pt" },
      { label: "Ecarts max fournisseur", current: "241 EUR", weekly: "+9 EUR", monthly: "+21 EUR" },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    kicker: "Prix oui, couverture d'abord",
    summary:
      "Le moteur ne doit jamais pousser un switch sans score local de couverture et qualite.",
    confidence: "Confiance produit: moyenne a elevee",
    currentContract: {
      provider: "Orange",
      offer: "120 Go 5G",
      monthlyPrice: "24,99 EUR/mois",
      commitment: "Sans engagement",
      extractedFrom: "Email de facture transfere",
    },
    retentionOffer: {
      provider: "Orange",
      delta: "-72 EUR/an",
      detail: "Offre retention credible si l'usage reseau est prioritaire.",
    },
    recommendations: [
      {
        provider: "Sosh",
        offer: "100 Go 5G",
        annualGain: "108 EUR/an",
        tradeoff: "Legerement moins de data",
        quality: "Couverture locale quasi identique",
        recommendation: "Changer maintenant",
      },
      {
        provider: "B&You",
        offer: "130 Go 5G",
        annualGain: "144 EUR/an",
        tradeoff: "Prix meilleur mais qualite trajet domicile-travail plus faible",
        quality: "Bonne option si usage peu sensible",
        recommendation: "Changer avec prudence",
      },
    ],
    observatory: [
      { label: "Panier median 100 Go+", current: "11,99 EUR", weekly: "stable", monthly: "-1,00 EUR" },
      { label: "Difference low-cost / premium", current: "13,00 EUR", weekly: "+0,50 EUR", monthly: "-2,00 EUR" },
      { label: "Taux promos sans engagement", current: "96%", weekly: "stable", monthly: "+1 pt" },
    ],
  },
  {
    key: "fixed_internet",
    label: "Box internet",
    kicker: "Fort gain, plus de friction",
    summary:
      "Il faut croiser prix, eligibilite a l'adresse, techno et restitution de materiel.",
    confidence: "Confiance produit: moyenne",
    currentContract: {
      provider: "Free",
      offer: "Freebox Pop",
      monthlyPrice: "39,99 EUR/mois",
      commitment: "Sans engagement",
      extractedFrom: "Facture PDF importee",
    },
    retentionOffer: {
      provider: "Free",
      delta: "-96 EUR/an",
      detail: "Reduction retention plausible si le dossier est eligible fibre chez plusieurs concurrents.",
    },
    recommendations: [
      {
        provider: "SFR",
        offer: "Starter Fibre",
        annualGain: "168 EUR/an",
        tradeoff: "Setup plus agressif, experience support moins stable",
        quality: "Bonne option si le prix domine",
        recommendation: "Changer avec checklist",
      },
      {
        provider: "Orange",
        offer: "Livebox Fibre",
        annualGain: "72 EUR/an",
        tradeoff: "Gain moindre",
        quality: "Meilleur confort d'execution",
        recommendation: "Option premium",
      },
    ],
    observatory: [
      { label: "Prix fibre entree de gamme", current: "26,99 EUR", weekly: "-2,00 EUR", monthly: "-4,00 EUR" },
      { label: "Prix fibre milieu de gamme", current: "33,99 EUR", weekly: "stable", monthly: "-1,00 EUR" },
      { label: "Frais de mise en service medians", current: "39 EUR", weekly: "stable", monthly: "stable" },
    ],
  },
  {
    key: "home_insurance",
    label: "Assurance habitation",
    kicker: "Verticale plus delicate",
    summary:
      "Pas une commodite pure. Le moteur doit bloquer si les garanties minimales ne sont pas equivalentes.",
    confidence: "Confiance produit: moyenne",
    currentContract: {
      provider: "MAIF",
      offer: "Contrat residence principale",
      monthlyPrice: "31,40 EUR/mois",
      commitment: "Resiliable apres 1 an",
      extractedFrom: "Contrat PDF importe",
    },
    retentionOffer: {
      provider: "MAIF",
      delta: "-38 EUR/an",
      detail: "Marge retention plus faible que dans les autres verticales.",
    },
    recommendations: [
      {
        provider: "Acheel",
        offer: "Habitation Connect",
        annualGain: "92 EUR/an",
        tradeoff: "Franchise plus haute sur degats des eaux",
        quality: "Equivalent seulement si l'utilisateur accepte la franchise",
        recommendation: "Attendre validation",
      },
      {
        provider: "Luko by Allianz Direct",
        offer: "Habitation Flex",
        annualGain: "58 EUR/an",
        tradeoff: "Garanties plus proches",
        quality: "Option la plus propre juridiquement",
        recommendation: "Option prudente",
      },
    ],
    observatory: [
      { label: "Prime mediane T3 Paris", current: "287 EUR", weekly: "+1 EUR", monthly: "+4 EUR" },
      { label: "Prime mediane T3 Lyon", current: "221 EUR", weekly: "stable", monthly: "+3 EUR" },
      { label: "Dispersion selon franchise", current: "jusqu'a 37%", weekly: "stable", monthly: "stable" },
    ],
  },
];

const flowSteps = [
  "Importer un contrat, une facture ou un email de facturation.",
  "Extraire les clauses critiques et calculer le cout reel annuel.",
  "Chercher les offres equivalentes du moment.",
  "Tenter une retention chez le fournisseur actuel.",
  "Faire valider la meilleure action par l'utilisateur.",
  "Executer la resiliation, la souscription ou la portabilite avec preuves.",
];

const testCases = [
  {
    title: "Cas A - electricite simple",
    detail:
      "Importer une facture EDF, verifier extraction du prix, proposer 2 alternatives et 1 retention.",
  },
  {
    title: "Cas B - mobile avec couverture",
    detail:
      "Comparer Orange vs Sosh vs B&You et s'assurer qu'une offre moins chere peut etre declassée si la couverture locale baisse.",
  },
  {
    title: "Cas C - box fibre",
    detail:
      "Bloquer les offres non eligibles a l'adresse et imposer une checklist de restitution materiel.",
  },
  {
    title: "Cas D - assurance habitation",
    detail:
      "Verifier qu'une prime plus basse n'est pas marquee 'Changer maintenant' si la franchise ou les exclusions degradent la couverture.",
  },
];

const metrics = [
  { label: "Economies annuelles cible", value: "180 a 540 EUR" },
  { label: "Temps vers recommandation", value: "< 5 min" },
  { label: "Actions irreversibles sans validation", value: "0" },
  { label: "Sources prix historisees", value: "quotidien" },
];

function formatUploadedFiles(files: FileList | null) {
  if (!files || files.length === 0) {
    return "Aucun document importe pour l'instant.";
  }

  return Array.from(files)
    .map((file) => `${file.name} (${Math.max(1, Math.round(file.size / 1024))} ko)`)
    .join(" | ");
}

export default function App() {
  const [activeSector, setActiveSector] = useState<SectorKey>("electricity");
  const [query, setQuery] = useState("");
  const [uploadedSummary, setUploadedSummary] = useState(
    "Aucun document importe pour l'instant.",
  );
  const [mandateEnabled, setMandateEnabled] = useState(false);

  const deferredQuery = useDeferredValue(query);
  const activeData = sectors.find((sector) => sector.key === activeSector) ?? sectors[0];

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredSectors = normalizedQuery
    ? sectors.filter((sector) => {
        return (
          sector.label.toLowerCase().includes(normalizedQuery) ||
          sector.summary.toLowerCase().includes(normalizedQuery) ||
          sector.kicker.toLowerCase().includes(normalizedQuery)
        );
      })
    : sectors;

  return (
    <div className="page-shell">
      <div className="background-blur background-blur-left" />
      <div className="background-blur background-blur-right" />
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Renego Commodites FR</p>
          <h1>On importe le contrat, on mesure le marche, on pousse la meilleure action.</h1>
          <p className="hero-text">
            Prototype front pour un agent de renegociation de contrats francais.
            Le coeur du flow est deja cadre: import, mandat, equivalence, retention,
            switch et preuve.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#workspace">
              Voir le prototype
            </a>
            <a className="button button-secondary" href="#tests">
              Process de test
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <p className="panel-title">Ce front repond a ta question</p>
          <ul className="signal-list">
            <li>Oui, un front existe maintenant.</li>
            <li>Il montre les 5 verticales et leur niveau de maturite.</li>
            <li>Il expose une recommendation lisible, pas un comparateur brut.</li>
          </ul>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main id="workspace" className="content-grid">
        <section className="panel panel-large">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Pilotage dossier</p>
              <h2>Simuler un dossier utilisateur</h2>
            </div>
            <span className="badge">{activeData.confidence}</span>
          </div>

          <div className="control-bar">
            <label className="search-box">
              <span>Filtrer les verticales</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="energie, mobile, assurance..."
              />
            </label>
            <label className="upload-box">
              <span>Importer un contrat</span>
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.eml"
                multiple
                onChange={(event) => {
                  startTransition(() => {
                    setUploadedSummary(formatUploadedFiles(event.target.files));
                  });
                }}
              />
            </label>
          </div>

          <div className="sector-tabs" role="tablist" aria-label="Secteurs">
            {filteredSectors.map((sector) => (
              <button
                key={sector.key}
                className={sector.key === activeSector ? "tab is-active" : "tab"}
                type="button"
                onClick={() => {
                  startTransition(() => {
                    setActiveSector(sector.key);
                  });
                }}
              >
                <span>{sector.label}</span>
                <small>{sector.kicker}</small>
              </button>
            ))}
          </div>

          <div className="sector-summary">
            <article className="card current-contract">
              <p className="eyebrow">Contrat actuel</p>
              <h3>
                {activeData.currentContract.provider} · {activeData.currentContract.offer}
              </h3>
              <p>{activeData.summary}</p>
              <dl className="data-grid">
                <div>
                  <dt>Prix actuel</dt>
                  <dd>{activeData.currentContract.monthlyPrice}</dd>
                </div>
                <div>
                  <dt>Engagement</dt>
                  <dd>{activeData.currentContract.commitment}</dd>
                </div>
                <div>
                  <dt>Source</dt>
                  <dd>{activeData.currentContract.extractedFrom}</dd>
                </div>
              </dl>
              <p className="upload-summary">{uploadedSummary}</p>
            </article>

            <article className="card mandate-card">
              <p className="eyebrow">Mandat d'action</p>
              <h3>Pouvoir limite et explicite</h3>
              <p>
                Le produit reste en analyse seule tant que l'utilisateur n'active pas
                le mandat pour la negociation ou le switch.
              </p>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={mandateEnabled}
                  onChange={() => setMandateEnabled((value) => !value)}
                />
                <span>{mandateEnabled ? "Mandat active pour actions assistees" : "Analyse seule"}</span>
              </label>
              <div className="retention-box">
                <strong>Retention chez {activeData.retentionOffer.provider}</strong>
                <span>{activeData.retentionOffer.delta}</span>
                <p>{activeData.retentionOffer.detail}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Recommandations</p>
              <h2>Trois sorties maximum, jamais plus</h2>
            </div>
          </div>
          <div className="recommendation-list">
            {activeData.recommendations.map((recommendation) => (
              <article key={`${recommendation.provider}-${recommendation.offer}`} className="recommendation-card">
                <div className="recommendation-topline">
                  <span className="provider-pill">{recommendation.provider}</span>
                  <strong>{recommendation.annualGain}</strong>
                </div>
                <h3>{recommendation.offer}</h3>
                <p>{recommendation.quality}</p>
                <ul className="signal-list compact">
                  <li>{recommendation.tradeoff}</li>
                  <li>{recommendation.recommendation}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Observatoire live</p>
              <h2>Evolution des prix et promos</h2>
            </div>
          </div>
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Aujourd'hui</th>
                  <th>7 jours</th>
                  <th>30 jours</th>
                </tr>
              </thead>
              <tbody>
                {activeData.observatory.map((entry) => (
                  <tr key={entry.label}>
                    <td>{entry.label}</td>
                    <td>{entry.current}</td>
                    <td>{entry.weekly}</td>
                    <td>{entry.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Flow agentique</p>
              <h2>Simple, mais journalise</h2>
            </div>
          </div>
          <ol className="step-list">
            {flowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="tests" className="panel panel-large">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Test process</p>
              <h2>Ce qu'il faut verifier avant d'aller plus loin</h2>
            </div>
          </div>
          <div className="test-grid">
            {testCases.map((testCase) => (
              <article key={testCase.title} className="test-card">
                <h3>{testCase.title}</h3>
                <p>{testCase.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
