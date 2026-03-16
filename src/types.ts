export type WorkflowStatus =
  | "idle"
  | "analyzing"
  | "ready"
  | "approved"
  | "executing"
  | "completed"
  | "error";

export type ContractSector =
  | "electricity"
  | "gas"
  | "mobile"
  | "fixed_internet"
  | "home_insurance";

export type LineItem = {
  label: string;
  amountLabel: string;
  tone?: "neutral" | "positive";
};

export type ParsedContract = {
  filename: string;
  pages: number;
  provider: string;
  sector: ContractSector;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  subscriberName: string;
  subscriberEmail: string;
  accountId: string;
  fiberReference?: string;
  installAddress: string;
  offerName: string;
  monthlyPriceEur: number;
  annualCostEur: number;
  totalLabel: string;
  extractionConfidence: number;
  parsedFrom: string;
  lineItems: LineItem[];
};

export type OfferSource = {
  label: string;
  url?: string;
  asOf: string;
};

export type CandidateOffer = {
  id: string;
  provider: string;
  offer: string;
  priceLabel: string;
  monthlyPriceEur: number;
  monthlyPriceAfterPromoEur?: number;
  promoMonths?: number;
  annualCostEur: number;
  totalCost24mEur?: number;
  annualSavingEur: number;
  fitScore: number;
  riskLabel: string;
  verdict: "Garder et renegocier" | "Changer maintenant" | "Attendre";
  commitmentLabel: string;
  commitmentMonths?: number;
  setupFeeLabel: string;
  setupFeeEur?: number;
  tvLabel: string;
  tvChannels?: number;
  includesCanal?: boolean;
  decoderIncluded?: boolean;
  speedLabel: string;
  speedDownMbps?: number;
  speedUpMbps?: number;
  wifiGeneration?: number;
  priceLocked?: boolean;
  featureBadges: string[];
  notes: string[];
  source: OfferSource;
  actionKind: "retain" | "switch" | "wait";
};

export type DiagnosticFact = {
  label: string;
  value: string;
  implication: string;
  tone: "positive" | "neutral" | "warning";
};

export type ComparisonRow = {
  label: string;
  currentValue: string;
  candidateValue: string;
  verdict: "better" | "same" | "worse" | "unknown";
  note: string;
};

export type ActionTask = {
  id: string;
  title: string;
  detail: string;
  owner: "outil" | "utilisateur" | "operateur";
  channel: string;
  proof: string;
  automation: "auto" | "assistee" | "manuelle";
  status: "ready" | "waiting_user" | "waiting_provider" | "done";
};

export type ActionSection = {
  title: string;
  summary: string;
  steps: ActionTask[];
};

export type AuditEntry = {
  title: string;
  detail: string;
  timestampLabel: string;
};

export type PricePoint = {
  day: string;
  price: number;
};

export type PriceSeries = {
  id: string;
  label: string;
  accent: string;
  currentPrice: number;
  delta30d: number;
  points: PricePoint[];
};

export type DecisionDirection = "change_now" | "renegotiate_now" | "wait_watch";


export type NegotiateFirstData = {
  currentProvider: string;
  currentMonthlyPriceEur: number;
  sameIspNewCustomerPriceEur: number;
  sameIspNewCustomerOffer: string;
  batnaProvider: string;
  batnaMonthlyPriceEur: number;
  batnaOffer: string;
  openingScript: string;
  retentionCompetitiveThresholdEur: number;
};

export type DecisionMemo = {
  engineMode: "heuristic" | "gpt-5.4" | "claude-opus-4-6";
  modelLabel: string;
  generatedAt: string;
  direction: DecisionDirection;
  headline: string;
  recommendationLabel: string;
  urgencyLabel: string;
  confidenceLabel: string;
  explanationForUser: string;
  whyThisChoice: string[];
  pushReason?: string;
  selectedOfferId: string;
  selectedComparison: ComparisonRow[];
  gainSummary: {
    currentAnnualCostLabel: string;
    selectedAnnualCostLabel: string;
    annualSavingLabel: string;
    savingPercentLabel: string;
    firstYearDeltaLabel: string;
    pushChange: boolean;
  };
  executionSections: ActionSection[];
  nextBestAlternativeId?: string;
  negotiateFirst?: NegotiateFirstData;
  switchFallbackSections?: ActionSection[];
};

export type AnalysisResult = {
  contract: ParsedContract;
  sectorSummary: string;
  marketSummary: string;
  diagnosticFacts: DiagnosticFact[];
  retentionOffer: CandidateOffer;
  alternatives: CandidateOffer[];
  waitOption: CandidateOffer;
  comparisons: Record<string, ComparisonRow[]>;
  observatory: PriceSeries[];
  auditTrail: AuditEntry[];
  decisionMemo?: DecisionMemo;
};
