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

export type CandidateOffer = {
  id: string;
  provider: string;
  offer: string;
  priceLabel: string;
  annualCostEur: number;
  annualSavingEur: number;
  fitScore: number;
  riskLabel: string;
  verdict: "Garder et renegocier" | "Changer maintenant" | "Attendre";
  notes: string[];
};

export type ActionItem = {
  title: string;
  detail: string;
  status: "ready" | "done";
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

export type AnalysisResult = {
  contract: ParsedContract;
  sectorSummary: string;
  marketSummary: string;
  retentionOffer: CandidateOffer;
  alternatives: CandidateOffer[];
  waitOption: CandidateOffer;
  bestActionId: string;
  observatory: PriceSeries[];
  actionPlan: ActionItem[];
  auditTrail: AuditEntry[];
};
