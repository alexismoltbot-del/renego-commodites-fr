import { startTransition, useState } from "react";
import { PriceTrendChart } from "./components/PriceTrendChart";
import { analyzeContractText } from "./lib/contractAnalysis";
import { fetchDecisionMemo } from "./lib/api";
import { formatMoney, formatSaving, formatScore } from "./lib/format";
import { extractPdfText } from "./lib/pdf";
import { buildOfferLensInsights } from "./lib/recommendationEngine";
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
    "Charge une facture pour obtenir un diagnostic et un plan d'execution.",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const availableOffers = analysis ? flattenOffers(analysis) : [];
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
      setErrorMessage("Active d'abord le mandat pour passer du diagnostic a l'action.");
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
          <p className="eyebrow">Renego Commodites FR</p>
          <h1>Diagnostic clair, recommendation poussee, execution outillee.</h1>
          <p className="hero-text">
            Le moteur lit la facture, calcule le vrai ecart de prix, compare les
            features dans un langage simple, puis separe le meilleur `prix pur`
            du meilleur `prix/features` avant de preparer la mise en place de la
            decision.
          </p>
          <div className="hero-actions">
            <label className="button button-primary uploader">
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
            <a className="button button-secondary" href="#observatoire">
              Voir l'observatoire prix
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
              <span>{mandateEnabled ? "Mandat actif" : "Analyse seule"}</span>
            </label>
          </div>

          {!analysis ? (
            <div className="empty-state">
              <h3>Le moteur produit d'abord un constat factuel.</h3>
              <p>
                Il ne classe pas seulement des prix: il montre les faits sortis du
                PDF, l'ecart economique, les differences de features et la friction
                d'execution.
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
                        Le moins cher sur 24 mois. Ideal si tu arbitres la box comme une
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

        <section id="observatoire" className="observatory glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Observatoire prix</p>
              <h2>Evolution visuelle des prix pour ancrer la reco dans le marche</h2>
            </div>
          </div>

          {analysis ? (
            <>
              <PriceTrendChart
                series={analysis.observatory}
                highlightedId={highlightedSeriesId}
                onHighlight={setHighlightedSeriesId}
              />
              <div className="observatory-metrics">
                {analysis.observatory.map((series) => (
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
            </>
          ) : (
            <p className="placeholder-copy">
              L'observatoire vient appuyer le diagnostic une fois le dossier charge.
            </p>
          )}
        </section>

        <section className="action-center glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Moteur d'action</p>
              <h2>Le produit prepare la mise en place, pas seulement la recommandation</h2>
            </div>
          </div>

          {decisionMemo ? (
            <>
              <div className="cta-row">
                <button type="button" className="button button-primary" onClick={handleApprovePlan}>
                  Approuver la decision
                </button>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => {
                    void handleExecutePlan();
                  }}
                  disabled={workflowStatus !== "approved"}
                >
                  Mettre en place la decision
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
    </div>
  );
}
