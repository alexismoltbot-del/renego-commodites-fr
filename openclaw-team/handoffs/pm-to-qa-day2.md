# PM → QA Day 2 Handoff

Date: 2026-03-13 09:05 CET
Status: **ready — pick up at 15:20 wave (Day 2 afternoon)**
Owner: `renego-qa`

---

## Context

QA-02 launch gate passed 10/10. Zero P0/P1. Score 97/100. Day 2 QA focus is
formal regression (QA-03) + verification of a data discrepancy found during
PM triage.

---

## Task 1 — QA-03: Mini regression suite (P2)

### AC

- Build passes (`npm run build`) with 0 errors
- All existing tests pass (`npm test`)
- Flow critique end-to-end: import Freebox PDF → 4 alternatives → Red = primary
  reco → plan d'action visible
- Scoring assertions: Red fitScore ≥ 64, Red = best price, SFR Starter = best
  value
- 24m cost assertions for all 6 offers match the code snapshot data
- URLs: 4/4 HTTP 200
- Trust-first elements present: beta badge, disclaimers, footer legal, trust bar
- If DEV-10 (widget) is ready: basic widget validation (input → result → CTA)
- If DEV-11 (diagnostic card) is ready: card renders, share button works, no PII

### Deliverable

`reports/qa-regression-day2.md` — pass/fail for each assertion above.

---

## Task 2 — BUG-16 (P2): Verify Bouygues/SFR 24m cost ranking

### Problem found during PM triage (09:05 CET)

QA cycle 6 ranking table reports:
- Bouygues: 803,76 EUR (-156 vs Free)
- SFR: 996,76 EUR (+37 vs Free)

But the code data in `boxMarketSnapshot.ts` says:
- **SFR Starter:** 27,99 × 12 + 38,99 × 12 + 49 = **852,76 EUR** (-107 vs Free)
- **Bouygues Must:** 35,99 × 12 + 42,99 × 12 + 49 = **996,76 EUR** (+37 vs Free)

The cost calculation function (line 266) clearly includes `setupFeeEur`:
```
introMonths * introPrice + standardMonths * pricing.standardMonthlyPriceEur + pricing.setupFeeEur
```

**Two issues:**
1. Labels appear swapped (Bouygues ↔ SFR)
2. The 803,76 figure = 27,99 × 12 + 38,99 × 12 = 803,76 — which is SFR Starter
   WITHOUT the 49 EUR setup fee. Missing setup fee in the calculation?

### Action

1. Run the actual application and check what 24m costs are displayed for each offer
2. If the **rendered UI** shows 803,76 for SFR Starter → the code is missing the
   setup fee in the UI display (BUG-16, P1 — data accuracy)
3. If the **rendered UI** shows 852,76 for SFR Starter → the QA report transcribed
   wrong (P2, report correction only)
4. Verify Bouygues in the UI: should be 996,76 EUR

### Impact

**Not a launch blocker.** Red at 590,76 wins by 260+ EUR regardless. But data
accuracy is a core trust promise — "on calcule le vrai coût." If the UI shows
wrong totals for SFR/Bouygues, that's a credibility issue.

### Deliverable

Add to `reports/qa-regression-day2.md`:
- Actual 24m costs displayed in the UI for all 6 offers
- Confirm match with code snapshot data
- If discrepancy → file BUG-16 with severity

---

## Task 3 — QA-05 recheck (if GROWTH-03 copy changed in code)

If Dev implemented any copy changes from GROWTH-03/V5 into the actual rendered
landing page during Day 2, QA needs to spot-check:
- Claims still match the verified list (13/13)
- No new promises added (sentinel, B&YOU, "IA")
- Illustrative client stories still labeled as illustrative
- Footer/disclaimers intact

---

## Priority

1. BUG-16 verification (quick — 15 min, gives PM confidence before Day 3 freeze)
2. QA-03 regression suite (thorough — 1-2h)
3. QA-05 recheck (conditional on GROWTH-03 code changes)

---

## Handoff when done

Write `handoffs/qa-to-pm-day2.md` with:
- Regression results
- BUG-16 verdict
- Updated score (target: 98-99/100)
- Any new bugs found

PM picks up at Day 3 morning (09:05 CET, 15 mars) for go/no-go.
