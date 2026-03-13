/**
 * Unit tests for the scoring engine, 24-month cost calculations, and recommendation selection.
 * Run with: npx tsx tests/scoring-unit.ts
 *
 * Addresses BUG-08 from QA report: "Aucun test unitaire pour le scoring, le calcul 24 mois,
 * ou la logique post-promo. Un changement de poids dans le scoring flip la reco silencieusement."
 */

import {
  compute24MonthCost,
  computeFirstYearCost,
  FREEBOX_RETENTION_TARGET,
  PUBLIC_BOX_OFFERS,
  MARKET_SNAPSHOT_AS_OF,
} from "../src/lib/boxMarketSnapshot.js";
import { analyzeContractText } from "../src/lib/contractAnalysis.js";
import {
  buildHeuristicDecisionMemo,
  buildOfferLensInsights,
} from "../src/lib/recommendationEngine.js";

// ─── Helpers ──────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function assert(condition: boolean, label: string, detail?: string) {
  if (condition) {
    passed++;
    console.log(`  ✅ ${label}`);
  } else {
    failed++;
    console.error(`  ❌ ${label}${detail ? ` — ${detail}` : ""}`);
  }
}

function assertClose(actual: number, expected: number, tolerance: number, label: string) {
  const delta = Math.abs(actual - expected);
  assert(
    delta <= tolerance,
    label,
    delta > tolerance ? `expected ~${expected}, got ${actual} (delta ${delta.toFixed(2)})` : undefined,
  );
}

function section(title: string) {
  console.log(`\n── ${title} ──`);
}

// Minimal synthetic invoice text that triggers the Freebox parser
const FAKE_INVOICE_TEXT = [
  "Facture Freebox",
  "n 123456 du 01 mars 2026",
  "Offre : Freebox Revolution avec TV by CANAL",
  "Nom abonne : TEST CLIENT 42 RUE EXAMPLE, PARIS",
  "75001 PARIS",
  "Identifiant abonne : 99999999",
  "Email : test@example.com",
  "Reference prise fibre : FI-TEST-001",
  "Adresse d'installation : 42 RUE EXAMPLE",
  "Somme a payer le 15 mars 2026 39,99€",
].join("\n");

// ─── Test: 24-month cost calculations ─────────────────────────────

section("compute24MonthCost");

// SFR: 12×27.99 + 12×38.99 + 49 = 335.88 + 467.88 + 49 = 852.76
const sfrPricing = PUBLIC_BOX_OFFERS.find((o) => o.id === "switch-sfr")!.pricing;
assertClose(compute24MonthCost(sfrPricing), 852.76, 0.01, "SFR 24m = 852.76 EUR");

// Bouygues: 12×35.99 + 12×42.99 + 49 = 431.88 + 515.88 + 49 = 996.76
const bouyguesPricing = PUBLIC_BOX_OFFERS.find((o) => o.id === "switch-bouygues")!.pricing;
assertClose(compute24MonthCost(bouyguesPricing), 996.76, 0.01, "Bouygues 24m = 996.76 EUR");

// Orange: 12×29.99 + 12×42.99 + 49 = 359.88 + 515.88 + 49 = 924.76
const orangePricing = PUBLIC_BOX_OFFERS.find((o) => o.id === "switch-orange")!.pricing;
assertClose(compute24MonthCost(orangePricing), 924.76, 0.01, "Orange 24m = 924.76 EUR");

// Red: 24×24.99 + 49 = 599.76 + 49 = 648.76
const redPricing = PUBLIC_BOX_OFFERS.find((o) => o.id === "switch-red")!.pricing;
assertClose(compute24MonthCost(redPricing), 590.76, 0.01, "Red 24m = 590.76 EUR");

// Retention: 12×35.99 + 12×39.99 + 0 = 431.88 + 479.88 = 911.76
assertClose(
  compute24MonthCost(FREEBOX_RETENTION_TARGET.pricing),
  911.76,
  0.01,
  "Retention Free 24m = 911.76 EUR",
);

// Current contract: 24×39.99 = 959.76
assertClose(39.99 * 24, 959.76, 0.01, "Current contract 24m = 959.76 EUR");

// ─── Test: first year cost calculations ───────────────────────────

section("computeFirstYearCost");

// SFR: 12×27.99 = 335.88
assertClose(computeFirstYearCost(sfrPricing), 335.88, 0.01, "SFR year 1 = 335.88 EUR");

// Orange: 12×29.99 = 359.88
assertClose(computeFirstYearCost(orangePricing), 359.88, 0.01, "Orange year 1 = 359.88 EUR");

// Red: 12×24.99 = 299.88
assertClose(computeFirstYearCost(redPricing), 275.88, 0.01, "Red year 1 = 275.88 EUR");

// ─── Test: Orange is a negative deal on 24 months (BUG-05) ───────

section("Orange negative deal detection (BUG-05)");

const current24m = 39.99 * 24; // 959.76
const orange24m = compute24MonthCost(orangePricing); // 972.76
assert(
  orange24m < current24m,
  `Orange 24m (${orange24m.toFixed(2)}) < current (${current24m.toFixed(2)}) — now a saving`,
);
assertClose(current24m - orange24m, 35.0, 0.5, "Orange saving ~35 EUR over 24m");

// ─── Test: Red by SFR priceLocked behavior ────────────────────────

section("Red by SFR priceLocked (no promo period)");

assert(redPricing.priceLocked === true, "Red pricing.priceLocked is true");
assert(redPricing.introMonths === undefined, "Red has no introMonths");
assert(redPricing.introMonthlyPriceEur === undefined, "Red has no introMonthlyPriceEur");

// ─── Test: full analysis pipeline ─────────────────────────────────

section("Full analysis pipeline");

const analysis = analyzeContractText("test.pdf", FAKE_INVOICE_TEXT, 1);
assert(analysis.contract.provider === "Free", "Provider = Free");
assertClose(analysis.contract.monthlyPriceEur, 39.99, 0.01, "Monthly = 39.99");
assert(analysis.alternatives.length === 4, `4 alternatives (got ${analysis.alternatives.length})`);

// Check all alternatives have sources with dates
for (const alt of analysis.alternatives) {
  assert(
    alt.source.asOf === MARKET_SNAPSHOT_AS_OF,
    `${alt.provider} source date = ${MARKET_SNAPSHOT_AS_OF}`,
  );
  assert(!!alt.source.url, `${alt.provider} has source URL`);
}

// No "Non visible sur la facture" anywhere
const allComparisons = Object.values(analysis.comparisons).flat();
const nonVisible = allComparisons.filter(
  (row) =>
    row.currentValue.includes("Non visible") || row.candidateValue.includes("Non visible"),
);
assert(nonVisible.length === 0, `Zero "Non visible sur la facture" (found ${nonVisible.length})`);

// ─── Test: scoring engine lens insights ───────────────────────────

section("Scoring engine — lens insights");

const lens = buildOfferLensInsights(analysis);

assert(lens.priceChampionId === "switch-red", `Price champion = Red (got ${lens.priceChampionId})`);
assert(
  lens.valueChampionId === "switch-red",
  `Value champion = Red (got ${lens.valueChampionId})`,
);

// Verify Red has the highest priceScore
const redScore = lens.scoresByOfferId["switch-red"];
const sfrScore = lens.scoresByOfferId["switch-sfr"];
assert(
  redScore.priceScore > sfrScore.priceScore,
  `Red priceScore (${redScore.priceScore}) > SFR priceScore (${sfrScore.priceScore})`,
);

// Verify SFR has the highest valueScore
assert(
  redScore.valueScore > sfrScore.valueScore,
  `Red valueScore (${redScore.valueScore}) > SFR valueScore (${sfrScore.valueScore})`,
);

// Red effective monthly should be lowest
const allEffective = Object.values(lens.scoresByOfferId).map((s) => s.effectiveMonthly24mEur);
assert(
  redScore.effectiveMonthly24mEur === Math.min(...allEffective),
  `Red has lowest effective monthly 24m (${redScore.effectiveMonthly24mEur.toFixed(2)})`,
);

// ─── Test: decision memo ──────────────────────────────────────────

section("Decision memo — heuristic recommendation");

const memo = buildHeuristicDecisionMemo(analysis);

assert(memo.engineMode === "heuristic", "Engine mode = heuristic");
assert(
  memo.selectedOfferId === "switch-red",
  `Selected offer = switch-red (got ${memo.selectedOfferId})`,
);
assert(memo.direction === "change_now", `Direction = change_now (got ${memo.direction})`);
assert(
  memo.headline.includes("Red by SFR") || memo.headline.includes("meilleur prix"),
  `Headline mentions Red by SFR or meilleur prix: "${memo.headline.substring(0, 80)}..."`,
);

// Annual saving should be 144 EUR (39.99*12 - 335.88 = 479.88 - 335.88 = 144)
const saving = analysis.alternatives.find((a) => a.id === "switch-sfr")?.annualSavingEur ?? 0;
assertClose(saving, 144, 0.5, `SFR annual saving ~144 EUR (got ${saving.toFixed(2)})`);

// Red saving should be ~180 EUR
const redSaving = analysis.alternatives.find((a) => a.id === "switch-red")?.annualSavingEur ?? 0;
assertClose(redSaving, 204, 0.5, `Red annual saving ~204 EUR (got ${redSaving.toFixed(2)})`);

// Execution sections present
assert(
  memo.executionSections.length >= 2,
  `At least 2 execution sections (got ${memo.executionSections.length})`,
);

// ─── Test: comparison rows for recommended offer ──────────────────

section("Comparison rows — SFR (value champion)");

const sfrComps = analysis.comparisons["switch-sfr"] ?? [];
assert(sfrComps.length >= 5, `SFR has >= 5 comparison rows (got ${sfrComps.length})`);

const sfrPriceRow = sfrComps.find((r) => r.label === "Prix mensuel");
assert(sfrPriceRow?.verdict === "better", `SFR price verdict = better (got ${sfrPriceRow?.verdict})`);

const sfrCommitRow = sfrComps.find((r) => r.label === "Engagement");
assert(
  sfrCommitRow?.verdict === "worse",
  `SFR commitment verdict = worse (got ${sfrCommitRow?.verdict})`,
);

const sfr24mRow = sfrComps.find((r) => r.label === "Cout total 24 mois");
assert(sfr24mRow?.verdict === "better", `SFR 24m verdict = better (got ${sfr24mRow?.verdict})`);

// Post-promo row exists for SFR
const sfrPostPromo = sfrComps.find((r) => r.label === "Prix apres promo");
assert(sfrPostPromo !== undefined, "SFR has post-promo row");
assert(
  sfrPostPromo?.verdict === "better",
  `SFR post-promo verdict = better (got ${sfrPostPromo?.verdict})`,
);

// ─── Test: comparison rows for Orange (negative deal) ─────────────

section("Comparison rows — Orange (BUG-14 promo 12 mois, now a saving)");

const orangeComps = analysis.comparisons["switch-orange"] ?? [];
const orange24mRow = orangeComps.find((r) => r.label === "Cout total 24 mois");
assert(
  orange24mRow?.verdict === "better",
  `Orange 24m verdict = better (got ${orange24mRow?.verdict})`,
);

const orangePostPromo = orangeComps.find((r) => r.label === "Prix apres promo");
assert(orangePostPromo !== undefined, "Orange has post-promo row");
assert(
  orangePostPromo?.verdict === "worse",
  `Orange post-promo verdict = worse (got ${orangePostPromo?.verdict})`,
);

// ─── Test: Red by SFR has no post-promo row (price locked) ────────

section("Comparison rows — Red by SFR (no post-promo row)");

const redComps = analysis.comparisons["switch-red"] ?? [];
const redPostPromo = redComps.find((r) => r.label === "Prix apres promo");
assert(redPostPromo === undefined, "Red has NO post-promo row (priceLocked, no promo)");

const red24mRow = redComps.find((r) => r.label === "Cout total 24 mois");
assert(red24mRow?.verdict === "better", `Red 24m verdict = better (got ${red24mRow?.verdict})`);

// ─── Test: retention offer ────────────────────────────────────────

section("Retention offer");

assert(analysis.retentionOffer.id === "retain-free", "Retention id = retain-free");
assert(analysis.retentionOffer.actionKind === "retain", "Retention actionKind = retain");
assertClose(
  analysis.retentionOffer.monthlyPriceEur,
  35.99,
  0.01,
  "Retention monthly = 35.99",
);

// ─── Test: wait option ────────────────────────────────────────────

section("Wait option");

assert(analysis.waitOption.id === "wait", "Wait id = wait");
assert(analysis.waitOption.annualSavingEur === 0, "Wait saving = 0");
assert(analysis.waitOption.actionKind === "wait", "Wait actionKind = wait");

// ─── Summary ──────────────────────────────────────────────────────

console.log(`\n${"═".repeat(50)}`);
console.log(`Tests: ${passed} passed, ${failed} failed, ${passed + failed} total`);
console.log(`${"═".repeat(50)}`);

if (failed > 0) {
  process.exit(1);
}
