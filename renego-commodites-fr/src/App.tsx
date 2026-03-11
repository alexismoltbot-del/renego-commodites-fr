import { startTransition, useState } from "react";
import { PriceTrendChart } from "./components/PriceTrendChart";
import { analyzeContractText } from "./lib/contractAnalysis";
import { formatMoney, formatSaving, formatScore } from "./lib/format";
import { extractPdfText } from "./lib/pdf";
import type {
  ActionItem,
  AnalysisResult,
  AuditEntry,
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

export default function App() {
  const [workflowStatus, setWorkflowStatus] = useState<WorkflowStatus>("idle");
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [selectedOfferId, setSelectedOfferId] = useState<string>("");
  const [highlightedSeriesId, setHighlightedSeriesId] = useState<string>("free");
  const [mandateEnabled, setMandateEnabled] = useState(false);
  const [runtimeAudit, setRuntimeAudit] = useState<AuditEntry[]>([]);
  const [actionPlan, setActionPlan] = useState<ActionItem[]>([]);
  const [executionMessage, setExecutionMessage] = useState(
    "Charge une facture pour ouvrir un dossier operable.",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const availableOffers = analysis ? flattenOffers(analysis) : [];
  const selectedOffer =
    availableOffers.find((offer) => offer.id === selectedOfferId) ?? null;

  async function handleFileUpload(file: File) {
    setErrorMessage("");
    setWorkflowStatus("analyzing");
    setExecutionMessage("Lecture du PDF et normalisation du contrat...");
    setRuntimeAudit([]);
    setAnalysis(null);

    try {
      await delay(180);
      const extraction = await extractPdfText(file);
      await delay(120);
      const result = analyzeContractText(file.name, extraction.text, extraction.pageCount);

      startTransition(() => {
        setAnalysis(result);
        setActionPlan(result.actionPlan);
        setRuntimeAudit(result.auditTrail);
        setSelectedOfferId(result.bestActionId);
        setHighlightedSeriesId(result.observatory[0]?.id ?? "free");
        setWorkflowStatus("ready");
        setExecutionMessage(
          "Dossier pret: contrat compris, marche compare, retention preparee.",
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
    if (!analysis || !selectedOffer) {
      return;
    }

    if (!mandateEnabled) {
      setErrorMessage("Active d'abord le mandat pour passer du conseil a l'action.");
      return;
    }

    setErrorMessage("");
    setWorkflowStatus("approved");
    setExecutionMessage(
      `Plan approuve: ${selectedOffer.verdict.toLowerCase()} avec ${selectedOffer.provider}.`,
    );
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry(
        "Plan approuve",
        `${selectedOffer.provider} - ${selectedOffer.offer} retenu comme prochaine action.`,
      ),
      ...entries,
    ]);
  }

  async function handleExecutePlan() {
    if (!analysis || !selectedOffer || workflowStatus !== "approved") {
      return;
    }

    setWorkflowStatus("executing");
    setExecutionMessage("Execution du plan en cours...");
    await delay(350);
    setActionPlan((steps) =>
      steps.map((step, index) => (index === 0 ? { ...step, status: "done" } : step)),
    );
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry("Mandat confirme", "Le dossier est autorise pour action assistee."),
      ...entries,
    ]);
    await delay(350);
    setActionPlan((steps) =>
      steps.map((step, index) =>
        index <= 2 ? { ...step, status: "done" } : step,
      ),
    );
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry(
        "Script de negociation produit",
        "Argumentaire retention pre-rempli avec le delta prix concurrent.",
      ),
      ...entries,
    ]);
    await delay(350);
    setActionPlan((steps) => steps.map((step) => ({ ...step, status: "done" })));
    setWorkflowStatus("completed");
    setExecutionMessage(
      "Flow boucle: dossier qualifie, plan approuve, execution prete avec preuves et checklist.",
    );
    setRuntimeAudit((entries) => [
      buildRuntimeAuditEntry(
        "Execution bouclee",
        `Preuve locale creee: DOSSIER-${analysis.contract.invoiceNumber}-RETENTION.`,
      ),
      ...entries,
    ]);
  }

  const progressSteps = [
    { label: "Import", done: workflowStatus !== "idle" && workflowStatus !== "error" },
    {
      label: "Extraction",
      done:
        workflowStatus === "ready" ||
        workflowStatus === "approved" ||
        workflowStatus === "executing" ||
        workflowStatus === "completed",
    },
    {
      label: "Comparaison",
      done:
        workflowStatus === "ready" ||
        workflowStatus === "approved" ||
        workflowStatus === "executing" ||
        workflowStatus === "completed",
    },
    {
      label: "Approbation",
      done:
        workflowStatus === "approved" ||
        workflowStatus === "executing" ||
        workflowStatus === "completed",
    },
    { label: "Execution", done: workflowStatus === "completed" },
  ];

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="hero">
        <section className="hero-copy glass-panel">
          <p className="eyebrow">Renego Commodites FR</p>
          <h1>Le dossier est maintenant operable sur une vraie facture Freebox.</h1>
          <p className="hero-text">
            Upload PDF, extraction locale, equivalence marche, retention, centre
            d'action, audit trail et observatoire prix. Le flow est calibre pour une
            facture Freebox native comme celle fournie.
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
              Voir l'evolution des prix
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
              <span>PDF pris en charge</span>
              <strong>Facture Freebox native</strong>
            </article>
            <article>
              <span>Action cible</span>
              <strong>{analysis ? analysis.retentionOffer.verdict : "En attente d'import"}</strong>
            </article>
            <article>
              <span>Observatoire prix</span>
              <strong>Courbe 14 jours</strong>
            </article>
          </div>
        </aside>
      </header>

      <main className="content-grid">
        <section className="workspace glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Dossier</p>
              <h2>Import, lecture facture, puis recommandation actionnable</h2>
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
              <h3>Le flow complet demarre a l'import d'une facture.</h3>
              <p>
                Ce MVP detecte deja Freebox, extrait les champs critiques et construit
                un plan retention vs switch.
              </p>
              <ul className="signal-list">
                <li>n de facture, date, montant TTC, offre, email, adresse, identifiant.</li>
                <li>Positionnement marche sur la verticale box internet.</li>
                <li>Trois sorties: renegocier, changer maintenant, attendre.</li>
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
                <p className="eyebrow">Lecture facture</p>
                <h3>Postes retenus dans le calcul</h3>
                <div className="line-item-list">
                  {analysis.contract.lineItems.map((item) => (
                    <div key={`${item.label}-${item.amountLabel}`} className="line-item-row">
                      <span>{item.label}</span>
                      <strong className={item.tone === "positive" ? "tone-positive" : ""}>
                        {item.amountLabel}
                      </strong>
                    </div>
                  ))}
                </div>
                <div className="reading-note">
                  <strong>Source</strong>
                  <span>{analysis.contract.parsedFrom}</span>
                </div>
              </article>
            </div>
          )}

          {errorMessage ? <p className="error-banner">{errorMessage}</p> : null}
        </section>

        <section className="recommendations glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Decision</p>
              <h2>Trois sorties, pas un catalogue illisible</h2>
            </div>
          </div>

          {analysis ? (
            <>
              <p className="market-summary">{analysis.marketSummary}</p>
              <div className="offer-grid">
                {availableOffers.map((offer) => (
                  <button
                    key={offer.id}
                    type="button"
                    className={offer.id === selectedOfferId ? "offer-card is-selected" : "offer-card"}
                    onClick={() => setSelectedOfferId(offer.id)}
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
                        <dt>Fit</dt>
                        <dd>{formatScore(offer.fitScore)}</dd>
                      </div>
                      <div>
                        <dt>Risque</dt>
                        <dd>{offer.riskLabel}</dd>
                      </div>
                    </dl>
                  </button>
                ))}
              </div>

              {selectedOffer ? (
                <article className="selected-offer-panel">
                  <div>
                    <p className="eyebrow">Action retenue</p>
                    <h3>
                      {selectedOffer.provider} - {selectedOffer.offer}
                    </h3>
                    <p>
                      Cout annualise estime: {formatMoney(selectedOffer.annualCostEur)}.
                      Gain annuel: {formatSaving(selectedOffer.annualSavingEur)}.
                    </p>
                  </div>
                  <ul className="signal-list">
                    {selectedOffer.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </>
          ) : (
            <p className="placeholder-copy">
              Les cartes de decision s'activent des qu'une facture compatible est analysee.
            </p>
          )}
        </section>

        <section id="observatoire" className="observatory glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Observatoire prix</p>
              <h2>Oui, il y a maintenant une vraie page stylisee d'evolution des prix</h2>
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
              L'observatoire se centre automatiquement sur la verticale du document importe.
            </p>
          )}
        </section>

        <section className="action-center glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Execution</p>
              <h2>Mandat, approbation, puis centre d'action</h2>
            </div>
          </div>

          {analysis ? (
            <>
              <div className="cta-row">
                <button type="button" className="button button-primary" onClick={handleApprovePlan}>
                  Approuver la meilleure action
                </button>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => {
                    void handleExecutePlan();
                  }}
                  disabled={workflowStatus !== "approved"}
                >
                  Executer le plan
                </button>
              </div>
              <div className="action-list">
                {actionPlan.map((step) => (
                  <article key={step.title} className={step.status === "done" ? "action-step is-done" : "action-step"}>
                    <span className="status-dot" />
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <p className="placeholder-copy">
              Le centre d'action s'ouvre une fois le contrat compris.
            </p>
          )}
        </section>

        <section className="audit-panel glass-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Audit trail</p>
              <h2>Chaque etape laisse une preuve horodatee</h2>
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
