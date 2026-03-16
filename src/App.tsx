import { startTransition, useState } from "react";
import isabellePortrait from "./assets/story-isabelle.svg";
import marcPortrait from "./assets/story-marc.svg";
import sarahPortrait from "./assets/story-sarah.svg";
import { PriceTrendChart } from "./components/PriceTrendChart";
import { InstantPriceCheck } from "./components/InstantPriceCheck";
import { DiagnosticCard } from "./components/DiagnosticCard";
import { EmbedSection } from "./components/EmbedSection";
import { analyzeContractText } from "./lib/contractAnalysis";
import { fetchDecisionMemo } from "./lib/api";
import { formatMoney, formatSaving, formatScore } from "./lib/format";
import { extractPdfText } from "./lib/pdf";
import { buildOfferLensInsights } from "./lib/recommendationEngine";
import { buildObservatorySeries, MARKET_SNAPSHOT_AS_OF } from "./lib/boxMarketSnapshot";
import type {
  ActionSection,
  AnalysisResult,
  AuditEntry,
  DecisionMemo,
  CandidateOffer,
  WorkflowStatus,
} from "./types";

function delay(duration: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function buildRuntimeAuditEntry(title: string, detail: string): AuditEntry {
  return {
    title,
    detail,
    timestampLabel: new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date()),
  };
}

function flattenOffers(result: AnalysisResult) {
  return [result.retentionOffer, ...result.alternatives, result.waitOption];
}

function buildOfferBadges(
  offer: CandidateOffer,
  priceChampionId?: string,
  valueChampionId?: string,
) {
  const badges = [];

  if (offer.id === priceChampionId) {
    badges.push("Top prix");
  }

  if (offer.id === valueChampionId) {
    badges.push("Top prix/features");
  }

  return [...badges, ...offer.featureBadges];
}

function countSteps(sections: ActionSection[]) {
  const allSteps = sections.flatMap((section) => section.steps);
  const done = allSteps.filter((step) => step.status === "done").length;
  return { done, total: allSteps.length };
}

function applyExecution(sections: ActionSection[]) {
  return sections.map((section) => ({
    ...section,
    steps: section.steps.map((step) => {
      if (step.owner === "outil" && step.status === "ready") {
        return { ...step, status: "done" as const };
      }

      return step;
    }),
  }));
}

const PUBLIC_OBSERVATORY = buildObservatorySeries();

const ILLUSTRATIVE_STORIES = [
  {
    id: "isabelle",
    name: "Isabelle",
    context: "Orange depuis 20 ans",
    quote:
      "Je payais 49 EUR depuis des annees chez Orange sans y penser. Maintenant, je paie 19 EUR. Je vais economiser 3 600 EUR sur les 10 prochaines annees.",
    takeaway: "Cas illustratif - economie forte apres un changement de contrat trop longtemps oublie.",
    metric: "3 600 EUR economises sur 10 ans",
    portrait: isabellePortrait,
  },
  {
    id: "marc",
    name: "Marc",
    context: "Famille de 4, Freebox",
    quote:
      "Je pensais que changer allait etre penible. ReneGo a fait le tri, m'a explique le compromis prix-features, puis j'ai juste eu l'offre finale a signer.",
    takeaway: "Cas illustratif - delegation simple avec un mandat et une offre finale claire.",
    metric: "107 EUR gagnes sur 24 mois sans perdre la TV",
    portrait: marcPortrait,
  },
  {
    id: "sarah",
    name: "Sarah",
    context: "Contrat recent, gain limite",
    quote:
      "Le plus rassurant, c'est qu'on m'a dit de ne pas changer. Le gain etait trop faible pour justifier la paperasse.",
    takeaway: "Cas illustratif - si le changement ne vaut pas l'effort, ReneGo le dit.",
    metric: "Recommandation: ne pas bouger",
    portrait: sarahPortrait,
  },
] as const;

export default function App() {
  const [workflowStatus, setWorkflowStatus] = useState<WorkflowStatus>("idle");
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [decisionMemo, setDecisionMemo] = useState<DecisionMemo | null>(null);
  const [inspectedOfferId, setInspectedOfferId] = useState<string>("");
  const [highlightedSeriesId, setHighlightedSeriesId] = useState<string>("free");
  const [mandateEnabled, setMandateEnabled] = useState(false);
  const [runtimeAudit, setRuntimeAudit] = useState<AuditEntry[]>([]);
  const [executionSections, setExecutionSections] = useState<ActionSection[]>([]);
  const [executionMessage, setExecutionMessage] = useState(
    "Chargez une facture pour obtenir un diagnostic, une recommandation transparente et un plan de renegociation.",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const availableOffers = analysis ? flattenOffers(analysis) : [];
  const observatorySeries = analysis?.observatory ?? PUBLIC_OBSERVATORY;
  const lensInsights = analysis ? buildOfferLensInsights(analysis) : null;
  const recommendedOffer =
    availableOffers.find((offer) => offer.id === decisionMemo?.selectedOfferId) ?? null;
  const priceChampionOffer =
    availableOffers.find((offer) => offer.id === lensInsights?.priceChampionId) ?? null;
  const valueChampionOffer =
    availableOffers.find((offer) => offer.id === lensInsights?.valueChampionId) ?? null;
  const inspectedOffer =
    availableOffers.find((offer) => offer.id === inspectedOfferId) ?? recommendedOffer;
  const inspectedComparisonRows =
    analysis && inspectedOffer ? analysis.comparisons[inspectedOffer.id] ?? [] : [];
  const actionProgress = countSteps(executionSections);

  async function handleFileUpload(file: File) {
    setErrorMessage("");
    setWorkflowStatus("analyzing");
    setExecutionMessage("Lecture du PDF, diagnostic factuel et moteur de decision...");
    setRuntimeAudit([]);
    setAnalysis(null);
    setDecisionMemo(null);
    setExecutionSections([]);

    try {
      await delay(120);
      const extraction = await extractPdfText(file);
      const baseAnalysis = analyzeContractText(file.name, extraction.text, extraction.pageCount);
      const memo = await fetchDecisionMemo(baseAnalysis);

      startTransition(() => {
        const hydratedAnalysis = { ...baseAnalysis, decisionMemo: memo };
        setAnalysis(hydratedAnalysis);
        setDecisionMemo(memo);
        setExecutionSections(memo.executionSections);
        setInspectedOfferId(memo.selectedOfferId);
        setHighlightedSeriesId(baseAnalysis.observatory[0]?.id ?? "free");
        setRuntimeAudit([
          buildRuntimeAuditEntry(
            "Moteur de recommandation",
            `Decision memo genere par ${memo.modelLabel}.`,
          ),
          ...baseAnalysis.auditTrail,
        ]);
        setWorkflowStatus("ready");
        setExecutionMessage(
          memo.direction === "change_now"
            ? "Diagnostic termine: le moteur recommande de changer maintenant."
            : "Diagnostic termine: la meilleure action est prete.",
        );
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Le document n'a pas pu etre analyse.";
      setWorkflowStatus("error");
      setErrorMessage(message);
      setExecutionMessage("Le flow est bloque tant que le PDF n'est pas interprete.");
    }
  }

  function handleApprovePlan() {
    if (!analysis || !decisionMemo || !recommendedOffer) {
      return;
    }

    if (!mandateEnabled) {
      setErrorMessage("Activez d'abord le mandat pour passer du diagnostic a l'action.");
      return;
    }

    setErrorMessage("");
    setWorkflowStatus("approved");
    setExecutionMessage(
      `Plan approuve: ${decisionMemo.recommendationLabel.toLowerCase()} avec ${recommendedOffer.provider}.`,
    );
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry(
        "Plan approuve",
        `${recommendedOffer.provider} - ${recommendedOffer.offer} retenu comme trajectoire principale.`,
      ),
      ...entries,
    ]);
  }

  async function handleExecutePlan() {
    if (!decisionMemo || workflowStatus !== "approved") {
      return;
    }

    setWorkflowStatus("executing");
    setExecutionMessage("Mise en place de la decision et orchestration des etapes...");

    await delay(250);
    setExecutionSections((sections) => applyExecution(sections));
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry(
        "Automations outil lancees",
        "Les taches internes prêtes ont ete executees ou pre-remplies.",
      ),
      ...entries,
    ]);

    await delay(250);
    setWorkflowStatus("completed");
    setExecutionMessage(
      "Le moteur d'action est lance: les etapes outil sont en place, il reste seulement les validations utilisateur ou operateur.",
    );
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry(
        "Mise en place bouclee",
        `Execution structuree prete avec ${actionProgress.total} points de controle.`,
      ),
      ...entries,
    ]);
  }

  const progressSteps = [
    { label: "Import", done: workflowStatus !== "idle" && workflowStatus !== "error" },
    {
      label: "Diagnostic",
      done:
        workflowStatus === "ready" ||
        workflowStatus === "approved" ||
        workflowStatus === "executing" ||
        workflowStatus === "completed",
    },
    {
      label: "Decision",
      done:
        workflowStatus === "ready" ||
        workflowStatus === "approved" ||
        workflowStatus === "executing" ||
        workflowStatus === "completed",
    },
    {
      label: "Validation",
      done:
        workflowStatus === "approved" ||
        workflowStatus === "executing" ||
        workflowStatus === "completed",
    },
    {
      label: "Mise en place",
      done: workflowStatus === "completed",
    },
  ];

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="hero">
        <section className="hero-copy glass-panel">
          <p className="eyebrow">Renego Commodites FR · <span className="beta-badge">Beta</span></p>
          <h1>Diagnostic factuel, recommandation sourcee, execution guidee.</h1>
          <p className="hero-text">
            Importez votre facture. ReneGo montre pourquoi une offre est
            recommandee, ou pourquoi il vaut mieux ne rien faire. Si vous nous
            donnez mandat, nous portons la renegociation pour vous, vous recevez
            l'offre finale, puis vous decidez. 100% gratuit, sans commission.
          </p>
          <div className="hero-actions">
            <label id="hero-upload" className="button button-primary uploader">
              <input
                type="file"
                accept=".pdf"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    void handleFileUpload(file);
                  }
                }}
              />
              Importer une facture PDF
            </label>
            <a className="button button-secondary" href="#price-check">
              Vérifier mon prix en 10 secondes
            </a>
          </div>
        </section>

        <aside className="hero-panel glass-panel">
          <p className="eyebrow">Etat du flow</p>
          <h2>{executionMessage}</h2>
          <div className="progress-rail">
            {progressSteps.map((step) => (
              <div key={step.label} className={step.done ? "progress-step is-done" : "progress-step"}>
                <span className="progress-dot" />
                <strong>{step.label}</strong>
              </div>
            ))}
          </div>
          <div className="hero-signals">
            <article>
              <span>Moteur courant</span>
              <strong>{decisionMemo?.modelLabel ?? "En attente d'import"}</strong>
            </article>
            <article>
              <span>Reco principale</span>
              <strong>{decisionMemo?.recommendationLabel ?? "Aucune"}</strong>
            </article>
            <article>
              <span>Action engine</span>
              <strong>
                {executionSections.length > 0
                  ? `${actionProgress.done}/${actionProgress.total} etapes bouclees`
                  : "En attente"}
              </strong>
            </article>
          </div>
        </aside>
      </header>


      <InstantPriceCheck />

      <p className="post-widget-link"><a href="#observatoire">Voir l'observatoire des prix ↓</a></p>

      <section className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span className="trust-icon">💸</span>
            <span>100% gratuit. Aucune commission, aucune retro-commission operateur.</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔍</span>
            <span>Le moteur explique pourquoi une offre est recommandee, avec des sources et une date de releve.</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚖️</span>
            <span>Si le changement ne vaut pas l'effort, on vous le dit aussi.</span>
          </div>
        </div>
      </section>

      <main className="content-grid">
        <section className="workspace glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Dossier</p>
              <h2>Faits extraits de la facture et base objective du diagnostic</h2>
            </div>
            <label className="mandate-toggle">
              <input
                type="checkbox"
                checked={mandateEnabled}
                onChange={() => setMandateEnabled((value) => !value)}
              />
              <span>{mandateEnabled ? "Mandat signe" : "Diagnostic seul"}</span>
            </label>
          </div>

          {!analysis ? (
            <div className="empty-state">
              <h3>Le moteur produit d'abord un constat factuel.</h3>
              <p>
                Il ne classe pas seulement des prix: il montre les faits sortis du
                PDF, l'ecart economique, les differences de features et la friction
                d'execution. Et si le gain ne justifie pas l'effort, il le dit.
              </p>
              <ul className="signal-list">
                <li>Extraction contrat: montant, offre, email, adresse, identifiant.</li>
                <li>Diagnostic: cout annuel, feature distinctive, delta marche.</li>
                <li>Action engine: qui fait quoi, par quel canal, avec quelle preuve.</li>
              </ul>
            </div>
          ) : (
            <div className="workspace-grid">
              <article className="card contract-card">
                <p className="eyebrow">Contrat reconnu</p>
                <h3>{analysis.contract.offerName}</h3>
                <p>{analysis.sectorSummary}</p>
                <dl className="detail-grid">
                  <div>
                    <dt>Abonne</dt>
                    <dd>{analysis.contract.subscriberName}</dd>
                  </div>
                  <div>
                    <dt>Facture</dt>
                    <dd>{analysis.contract.invoiceNumber}</dd>
                  </div>
                  <div>
                    <dt>Total TTC</dt>
                    <dd>{analysis.contract.totalLabel}</dd>
                  </div>
                  <div>
                    <dt>Date facture</dt>
                    <dd>{analysis.contract.issueDate}</dd>
                  </div>
                  <div>
                    <dt>Prelevement</dt>
                    <dd>{analysis.contract.dueDate}</dd>
                  </div>
                  <div>
                    <dt>Confiance</dt>
                    <dd>{Math.round(analysis.contract.extractionConfidence * 100)}%</dd>
                  </div>
                  <div>
                    <dt>Adresse</dt>
                    <dd>{analysis.contract.installAddress}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>{analysis.contract.subscriberEmail}</dd>
                  </div>
                  <div>
                    <dt>Identifiant</dt>
                    <dd>{analysis.contract.accountId}</dd>
                  </div>
                </dl>
              </article>

              <article className="card line-items-card">
                <p className="eyebrow">Diagnostic factuel</p>
                <h3>Ce que la facture dit vraiment</h3>
                <div className="fact-list">
                  {analysis.diagnosticFacts.map((fact) => (
                    <article
                      key={fact.label}
                      className={
                        fact.tone === "positive"
                          ? "fact-card tone-positive"
                          : fact.tone === "warning"
                            ? "fact-card tone-warning"
                            : "fact-card"
                      }
                    >
                      <strong>{fact.label}</strong>
                      <span>{fact.value}</span>
                      <p>{fact.implication}</p>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          )}

          {errorMessage ? <p className="error-banner">{errorMessage}</p> : null}
        </section>

        <section className="decision-panel glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Recommendation</p>
              <h2>Le moteur explique le choix en langage normal</h2>
            </div>
          </div>

          {decisionMemo && recommendedOffer ? (
            <>
              <article
                className={
                  decisionMemo.gainSummary.pushChange ? "decision-banner is-push" : "decision-banner"
                }
              >
                <div>
                  <p className="eyebrow">Verdict</p>
                  <h3>{decisionMemo.headline}</h3>
                  <p>{decisionMemo.explanationForUser}</p>
                </div>
                <div className="decision-kpis">
                  <article>
                    <span>Reco</span>
                    <strong>{decisionMemo.recommendationLabel}</strong>
                  </article>
                  <article>
                    <span>Gain annuel</span>
                    <strong>{decisionMemo.gainSummary.annualSavingLabel}</strong>
                  </article>
                  <article>
                    <span>Delta mensuel</span>
                    <strong>{decisionMemo.gainSummary.firstYearDeltaLabel}</strong>
                  </article>
                  <article>
                    <span>Modele</span>
                    <strong>{decisionMemo.modelLabel}</strong>
                  </article>
                </div>
              </article>

              {decisionMemo.pushReason ? (
                <p className="push-copy">{decisionMemo.pushReason}</p>
              ) : null}

              {decisionMemo.negotiateFirst ? (
                <div className="negotiate-first-panel">
                  <article className="voie-card voie-a">
                    <div className="voie-header">
                      <span className="voie-badge voie-badge-primary">Recommandé</span>
                      <h3>Voie A — Négociez avec {decisionMemo.negotiateFirst.currentProvider}</h3>
                      <p className="voie-subtitle">📞 Un appel de 20 minutes. Taux de succès : &gt;90%.</p>
                    </div>
                    <div className="voie-body">
                      <div className="voie-lever">
                        <p><strong>Votre levier :</strong> vous payez {decisionMemo.negotiateFirst.currentMonthlyPriceEur.toFixed(2)} €/mois.</p>
                        <p>{decisionMemo.negotiateFirst.currentProvider} propose la {decisionMemo.negotiateFirst.sameIspNewCustomerOffer} à {decisionMemo.negotiateFirst.sameIspNewCustomerPriceEur.toFixed(2)} € aux nouveaux clients.</p>
                        <p>{decisionMemo.negotiateFirst.batnaProvider} propose une offre équivalente à {decisionMemo.negotiateFirst.batnaMonthlyPriceEur.toFixed(2)} €/mois.</p>
                      </div>
                      <div className="voie-script">
                        <p className="eyebrow">Script d'ouverture</p>
                        <blockquote>"{decisionMemo.negotiateFirst.openingScript}"</blockquote>
                      </div>
                      <div className="voie-threshold">
                        <p><strong>Si l'agent propose une offre de rétention :</strong></p>
                        <ul>
                          <li>En dessous de ~{decisionMemo.negotiateFirst.retentionCompetitiveThresholdEur} €/mois : compétitif — à vous de décider</li>
                          <li>Au-dessus : la Voie B reste la meilleure option financière</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="voie-card voie-b">
                    <div className="voie-header">
                      <span className="voie-badge voie-badge-secondary">Si la négociation échoue</span>
                      <h3>Voie B — Changez pour {recommendedOffer.provider} {recommendedOffer.offer}</h3>
                      <p className="voie-subtitle">{recommendedOffer.priceLabel}{recommendedOffer.priceLocked ? " · Prix fixe" : ""}{(recommendedOffer.commitmentMonths ?? 0) === 0 ? " · Sans engagement" : ""}</p>
                    </div>
                    <div className="voie-body">
                      <p>Économie : {formatSaving(recommendedOffer.annualSavingEur)} / an, soit {formatMoney((recommendedOffer.totalCost24mEur != null && analysis) ? Math.max(0, analysis.contract.annualCostEur * 2 - recommendedOffer.totalCost24mEur) : recommendedOffer.annualSavingEur * 2)} sur 24 mois.</p>
                      {recommendedOffer.decoderIncluded === false ? (
                        <p className="voie-tradeoff">⚠️ Cette offre ne comprend pas de décodeur TV ni de bouquet TV inclus.</p>
                      ) : null}
                    </div>
                  </article>
                </div>
              ) : null}

              {priceChampionOffer || valueChampionOffer ? (
                <div className="lens-grid">
                  {priceChampionOffer ? (
                    <article className="lens-card">
                      <p className="eyebrow">Reco prix</p>
                      <h3>
                        {priceChampionOffer.provider} - {priceChampionOffer.offer}
                      </h3>
                      <p>
                        {priceChampionOffer.priceLabel} · {formatMoney(
                          priceChampionOffer.totalCost24mEur ?? priceChampionOffer.annualCostEur * 2,
                        )} sur 24 mois
                      </p>
      <small>
        Le moins cher sur 24 mois. Ideal si vous arbitrez la box comme une
        commodite pure.
      </small>
                    </article>
                  ) : null}

                  {valueChampionOffer ? (
                    <article className="lens-card">
                      <p className="eyebrow">Reco prix/features</p>
                      <h3>
                        {valueChampionOffer.provider} - {valueChampionOffer.offer}
                      </h3>
                      <p>
                        {formatScore(
                          lensInsights?.scoresByOfferId[valueChampionOffer.id]?.valueScore ??
                            valueChampionOffer.fitScore,
                        )} de score valeur
                      </p>
                      <small>
                        Le meilleur compromis entre economie, debit et experience TV.
                      </small>
                    </article>
                  ) : null}
                </div>
              ) : null}

              <div className="offer-grid">
                {availableOffers.map((offer) => (
                  <button
                    key={offer.id}
                    type="button"
                    className={offer.id === inspectedOfferId ? "offer-card is-selected" : "offer-card"}
                    onClick={() => setInspectedOfferId(offer.id)}
                  >
                    <div className="offer-head">
                      <span className="provider-chip">{offer.provider}</span>
                      <span className="verdict-pill">{offer.verdict}</span>
                    </div>
                    <h3>{offer.offer}</h3>
                    <p>{offer.priceLabel}</p>
                    <dl className="offer-metrics">
                      <div>
                        <dt>Gain</dt>
                        <dd>{formatSaving(offer.annualSavingEur)}</dd>
                      </div>
                      <div>
                        <dt>24 mois</dt>
                        <dd>{formatMoney(offer.totalCost24mEur ?? offer.annualCostEur * 2)}</dd>
                      </div>
                      <div>
                        <dt>Fit</dt>
                        <dd>{formatScore(offer.fitScore)}</dd>
                      </div>
                    </dl>
                    <p className="offer-risk">{offer.riskLabel}</p>
                    <div className="badge-row">
                      {buildOfferBadges(
                        offer,
                        lensInsights?.priceChampionId,
                        lensInsights?.valueChampionId,
                      ).map((badge) => (
                        <span key={badge} className="feature-badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <p className="offer-source">
                      {offer.source.url ? (
                        <a href={offer.source.url} target="_blank" rel="noopener noreferrer">
                          {offer.source.label}
                        </a>
                      ) : (
                        offer.source.label
                      )} · Releve du {offer.source.asOf}
                    </p>
                  </button>
                ))}
              </div>

              {inspectedOffer ? (
                <article className="comparison-panel">
                  <div className="comparison-copy">
                    <p className="eyebrow">Pourquoi ce choix</p>
                    <h3>
                      {inspectedOffer.provider} - {inspectedOffer.offer}
                    </h3>
                    <ul className="signal-list">
                      {(inspectedOffer.id === decisionMemo.selectedOfferId
                        ? decisionMemo.whyThisChoice
                        : inspectedOffer.notes
                      ).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="comparison-table-shell">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Point simple</th>
                          <th>Ton contrat</th>
                          <th>Option comparee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inspectedComparisonRows.map((row) => (
                          <tr key={`${inspectedOffer.id}-${row.label}`}>
                            <td>
                              <strong>{row.label}</strong>
                              <small>{row.note}</small>
                            </td>
                            <td>{row.currentValue}</td>
                            <td className={`verdict-${row.verdict}`}>{row.candidateValue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              ) : null}
            </>
          ) : (
            <p className="placeholder-copy">
              La recommendation structuree apparait des que le moteur a termine son diagnostic.
            </p>
          )}
        </section>

        {decisionMemo && recommendedOffer && analysis ? (
          <section className="diagnostic-share glass-panel">
            <DiagnosticCard
              currentProvider={analysis.contract.provider}
              currentMonthlyPrice={analysis.contract.monthlyPriceEur}
              bestProvider={recommendedOffer.provider}
              bestOffer={recommendedOffer.offer}
              bestMonthlyPrice={recommendedOffer.monthlyPriceEur}
              savings24m={
                (recommendedOffer.totalCost24mEur != null && analysis.contract.annualCostEur)
                  ? Math.max(0, analysis.contract.annualCostEur * 2 - recommendedOffer.totalCost24mEur)
                  : recommendedOffer.annualSavingEur * 2
              }
              ctaUrl="renego.fr"
            />
          </section>
        ) : null}

        <section id="observatoire" className="observatory glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Observatoire prix · Donnees manuelles</p>
              <h2>Evolution des offres des principaux operateurs</h2>
            </div>
          </div>
          <p className="observatory-intro">
            ReneGo suit les prix publics des principaux operateurs pour montrer les
            promos, les remontes post-promo et les ecarts qui comptent vraiment.
            Cette page de preuve est visible avant meme d'importer une facture.
          </p>
          <PriceTrendChart
            series={observatorySeries}
            highlightedId={highlightedSeriesId}
            onHighlight={setHighlightedSeriesId}
          />
          <div className="observatory-metrics">
            {observatorySeries.map((series) => (
              <article key={series.id} className="mini-stat">
                <span>{series.label}</span>
                <strong>{series.currentPrice.toFixed(2)} EUR</strong>
                <small>
                  30 jours: {series.delta30d > 0 ? "+" : ""}
                  {series.delta30d.toFixed(0)} EUR
                </small>
              </article>
            ))}
          </div>
          <p className="observatory-disclaimer">
            Prix releves manuellement sur les sites officiels des operateurs le {MARKET_SNAPSHOT_AS_OF}.
            Ce n'est pas un flux en temps reel, mais un observatoire transparent de ce que nous utilisons
            pour recommander, ou pour vous dire de ne pas bouger.
          </p>
        </section>

        <section className="stories-panel glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Exemples clients illustratifs</p>
              <h2>Des cas concrets pour comprendre la promesse sans jargon</h2>
            </div>
          </div>
          <p className="stories-disclaimer">
            Ces portraits sont illustratifs tant que les premiers clients n'ont pas
            valide la publication de vrais temoignages.
          </p>
          <div className="stories-grid">
            {ILLUSTRATIVE_STORIES.map((story) => (
              <article key={story.id} className="story-card">
                <img
                  className="story-portrait"
                  src={story.portrait}
                  alt={`Portrait illustratif de ${story.name}`}
                />
                <div className="story-copy">
                  <p className="eyebrow">{story.name}</p>
                  <h3>{story.context}</h3>
                  <p className="story-quote">"{story.quote}"</p>
                  <strong>{story.metric}</strong>
                  <p>{story.takeaway}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="action-center glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Moteur d'action · Guide pas-a-pas</p>
              <h2>Le produit prepare la mise en place, pas seulement la recommandation</h2>
            </div>
          </div>

          {decisionMemo ? (
            <>
              <p className="action-disclaimer">
                Avec mandat, ReneGo prepare la renegociation, porte les demarches
                utiles et revient avec une offre finale. Rien n'est souscrit sans
                votre validation explicite.
              </p>
              <div className="cta-row">
                <button type="button" className="button button-primary" onClick={handleApprovePlan}>
                  Donner mandat a ReneGo
                </button>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => {
                    void handleExecutePlan();
                  }}
                  disabled={workflowStatus !== "approved"}
                >
                  Lancer la renegociation
                </button>
              </div>

              <div className="execution-summary">
                <article>
                  <span>Urgence</span>
                  <strong>{decisionMemo.urgencyLabel}</strong>
                </article>
                <article>
                  <span>Confiance</span>
                  <strong>{decisionMemo.confidenceLabel}</strong>
                </article>
                <article>
                  <span>Progression</span>
                  <strong>
                    {actionProgress.done}/{actionProgress.total}
                  </strong>
                </article>
              </div>

              <div className="section-stack">
                {executionSections.map((section) => (
                  <article key={section.title} className="execution-section">
                    <div className="execution-section-head">
                      <h3>{section.title}</h3>
                      <p>{section.summary}</p>
                    </div>
                    <div className="action-list">
                      {section.steps.map((step) => (
                        <article
                          key={step.id}
                          className={step.status === "done" ? "action-step is-done" : "action-step"}
                        >
                          <span className="status-dot" />
                          <div>
                            <h3>{step.title}</h3>
                            <p>{step.detail}</p>
                            <div className="meta-row">
                              <span>{step.owner}</span>
                              <span>{step.channel}</span>
                              <span>{step.automation}</span>
                              <span>{step.proof}</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <p className="placeholder-copy">
              Le moteur d'action se construit a partir de la decision recommandee.
            </p>
          )}
        </section>

        <section className="audit-panel glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Audit trail</p>
              <h2>Chaque etape laisse une trace horodatee</h2>
            </div>
          </div>
          {runtimeAudit.length > 0 ? (
            <div className="audit-list">
              {runtimeAudit.map((entry) => (
                <article key={`${entry.timestampLabel}-${entry.title}`} className="audit-entry">
                  <span>{entry.timestampLabel}</span>
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="placeholder-copy">
              L'historique se remplit a mesure que le flow avance.
            </p>
          )}
        </section>
      </main>

      <EmbedSection />

      <footer className="product-footer">
        <p>
          <strong>Renego Commodites FR</strong> · Beta · Les prix et offres affiches sont
          releves sur les sites publics des operateurs a la date indiquee. Ils peuvent
          avoir change depuis. Service opere, gratuit et sans commission. Ce produit
          ne constitue pas un conseil financier ni juridique. Aucune garantie de
          resultat. Seuls les sites officiels des operateurs font foi pour la
          souscription finale.
        </p>
        <p>
          Factures Freebox uniquement · Box internet France uniquement · Version beta a usage demonstratif.
        </p>
      </footer>
    </div>
  );
}
