# Dev → QA Handoff

Date: 2026-03-12 15:55
Build status: **npm run build passes, zero errors**

---

## What changed (summary)

### DEV-01 — Added Orange Livebox Fibre + Red by SFR THE BOX (P0)
- **File:** `src/lib/contractAnalysis.ts`
- Two new offers in the `alternatives` array (Orange at 24,99 EUR promo / Red at 24,99 EUR fixe)
- Full comparison rows for both (5 rows each including "Prix apres promo")
- Red by SFR added to the price observatory (flat line at 24,99 EUR)
- `bestActionId` changed from `"switch-sfr"` to `"switch-red"` — the scoring engine ranks Red by SFR highest (score 134 vs SFR 124)
- Diagnostic fact "Meilleur prix public repere" updated to cite Red by SFR at 180 EUR/an
- **Panel now shows 4 alternatives** (SFR Starter, Bouygues Bbox Must, Orange Livebox, Red by SFR)

### DEV-02 — Fixed "Non visible sur la facture" + source links (P0)
- **File:** `src/lib/contractAnalysis.ts`
- Replaced all 5 instances of "Non visible sur la facture" with factual Freebox Revolution specs:
  - Debit: "1 Gb/s (Freebox Revolution fibre)"
  - Engagement: "Sans engagement (client > 12 mois)"
  - Wi-Fi: "Wi-Fi 5 (Freebox Revolution)"
- SFR Debit verdict changed from "unknown" to "same"
- SFR Engagement note now clarifies the current no-commitment status
- Bouygues Wi-Fi verdict changed from "unknown" to "better"
- **File:** `src/App.tsx`
- Source labels are now clickable `<a>` tags when `source.url` exists, opening in new tab
- Display text changed from "· 11 mars 2026" to "· Releve du 12 mars 2026"
- All `asOf` dates updated from "11 mars 2026" to "12 mars 2026" (7 occurrences)

### DEV-03 — "Prix apres promo (annee 2)" rows + 24-month cost (P1)
- **File:** `src/lib/contractAnalysis.ts`
- Added "Prix apres promo (annee 2)" comparison row to:
  - SFR: 38,99 EUR, verdict "same"
  - Bouygues: 42,99 EUR, verdict "worse"
  - Orange: 42,99 EUR, verdict "worse"
  - Red by SFR: 24,99 EUR identique, verdict "better"
- Added 24-month cost notes in the `notes[]` array for Orange and Red by SFR offers
- **File:** `src/lib/recommendationEngine.ts`
- Added "Recap cout sur 24 mois" step as first step in switch preparation section
- Added "Resume financier final" step at end of switch closure section
- `buildSwitchSections()` now takes `analysis` as second parameter for cost computation

### DEV-05 — Action plan clarity (P1)
- **File:** `src/lib/recommendationEngine.ts`
- Owner language already consistent (L'outil / L'utilisateur patterns present)
- Financial summary step added at end of closure section with gain, cost, and fees

### Test updates
- **File:** `tests/freebox-flow.spec.ts`
- Updated to expect Red by SFR as selected offer (was SFR)
- Updated expected saving from "144 EUR / an" to "180 EUR / an"
- Updated expected source text from "Site officiel SFR" to "Site officiel Red by SFR"
- Added assertions for all 4 alternative providers being visible

---

## What to test

### Critical path (must pass for demo)
1. **Upload Freebox PDF** → verify parsing still works, contract card shows 39,99 EUR
2. **Recommendation headline** → should read "Le gain est assez fort pour pousser un changement maintenant vers Red by SFR."
3. **4 alternatives visible** → SFR Starter, Bouygues Bbox Must, Orange Livebox, Red by SFR
4. **Each offer has a source link** → clickable for SFR, Bouygues, Orange, Red (retention and wait have no URL)
5. **Source dates** → all show "Releve du 12 mars 2026"
6. **No "Non visible sur la facture"** anywhere in comparison rows
7. **Red by SFR offer card** → shows "180 EUR / an gagnes", "Sans engagement", "Prix fixe" badges
8. **Comparison panel for Red by SFR** → 5 rows including "Prix apres promo" as "better"
9. **Comparison panel for Orange** → "Prix apres promo" verdict = "worse" (42,99 EUR)
10. **Full flow** → mandate toggle → approve → execute → completion messages all appear

### Observatory
11. **Price chart** → 5 series now (Free, SFR, Bouygues, Orange, Red by SFR)
12. **Red by SFR line** → flat at 24,99 EUR, accent color #cc0000

### Action plan
13. **Switch plan for Red by SFR** → first step is "Recap cout sur 24 mois" (outil)
14. **Last step** → "Resume financier final" showing gain
15. **Each step** → owner clearly labeled (outil vs utilisateur)

### Regression
16. **Retention offer** → still shows "Garder et renegocier", 35,99 EUR cible
17. **Wait option** → still shows "Attendre", 0 EUR saving
18. **Diagnostic facts** → 4 facts, last one cites Red by SFR at 24,99 EUR

---

## Known fragilities

| # | Area | Risk | Notes |
|---|------|------|-------|
| 1 | **Scoring tightly coupled** | Medium | Red by SFR wins by 10 points (134 vs 124). If scoring weights change, the selected offer flips. The test hardcodes the expectation. |
| 2 | **24-month cost in action plan is approximate** | Low | Uses `annualSavingEur * 2` which doesn't account for promo/post-promo split or setup fees. Good enough for demo, not production. |
| 3 | **No postPromoMonthlyPriceEur field in types** | Low | 24-month cost details are in `notes[]` strings, not structured data. PM handoff mentioned adding the field but pragmatism won — demo is tonight. |
| 4 | **Source URLs not verified** | Medium | The Orange and Red by SFR URLs are plausible but may 404 if their site structure changed. Source links open in new tab so it won't break the app. |
| 5 | **Observatory data is synthetic** | Low | Red by SFR flat line is realistic (prix fixe), but all observatory data is hardcoded, not scraped. |
| 6 | **E2E test requires real PDF** | Blocking if missing | `RENEGO_TEST_PDF` env var must point to the Freebox invoice. Test skips gracefully if unset. |
| 7 | **LLM mode untested** | Low | No API key provided, so heuristic path only. The LLM path in `server/llm.ts` was not touched but may need schema updates if the DecisionMemo shape changes. |

---

## Build & run

```bash
cd /Users/alexis/Documents/Playground/renego-commodites-fr
npm run build                    # must pass, zero errors ✅ verified
npm run dev                      # local dev server
RENEGO_TEST_PDF="/path/to/facture.pdf" npm run test:e2e  # E2E with real PDF
```

---

## Files touched

- `src/lib/contractAnalysis.ts` — offers, comparisons, observatory, diagnostics, dates
- `src/lib/recommendationEngine.ts` — cost recap steps, financial summary, signature change
- `src/App.tsx` — source links clickable
- `tests/freebox-flow.spec.ts` — updated expectations for Red by SFR
