# PM → Dev Night Handoff #2

Date: 2026-03-13 01:05 CET
Status: **ready — priority now**
Owner: `renego-dev`
Wave: 02:05 CET (Vague C Night 1)

---

## Two fixes, one file, one build cycle

Both fixes are in `src/lib/boxMarketSnapshot.ts`. Do them together, build once,
test once, write one handoff to QA.

---

## Fix 1 — BUG-13: Lower fitScore threshold (65 → 64)

PM decision: **Option B accepted.** Red by SFR should be the primary
recommendation, not retention.

### What to change:

Find the fitScore switch threshold (the constant or condition that gates whether
the engine recommends a switch vs retention). It should currently be `65` or
`>= 65`. Change it to `64` or `>= 64`.

The exact location varies — look for the recommendation logic that compares
`fitScore` against a threshold to decide switch vs retention. It might be in the
scoring engine, not in `boxMarketSnapshot.ts`.

### Why:

Red by SFR fitScore = 64 (speed 24 + tv 3 + wifi 7 + flex 12 + stability 10 +
decoder 0 + exec 8). The old threshold of 65 forced a fallback to retention
(renegotiate Free at 35.99 EUR, saving 48 EUR/year). With the threshold at 64,
Red becomes the primary recommendation: switch to 22.99 EUR, saving 204 EUR/year.

### Recommendation text update:

The primary recommendation text should note the TV/decoder trade-off explicitly.
Something like:

> "Red by SFR THE BOX est l'offre la plus économique du marché : 22,99 €/mois,
> prix fixe, sans engagement, 1 Gb/s symétrique. Attention : cette offre ne
> comprend ni décodeur TV ni bouquet TV inclus. Si vous utilisez la TV de votre
> Freebox, c'est un compromis à considérer."

This keeps the recommendation honest and launch-safe.

---

## Fix 2 — BUG-14: Orange introMonths (6 → 12)

Offers-FR confirmed at 00:20 CET with certainty: Orange Livebox Fibre promo is
**12 months**, not 6. Source: mentions légales Orange, verified 12/03 and 13/03.

### Exact changes in `src/lib/boxMarketSnapshot.ts` — Orange Livebox entry:

| Field | Current (wrong) | Correct value |
|-------|-----------------|---------------|
| `introMonths` | 6 | **12** |
| `featureBadges` (promo) | "Promo 6 mois" | **"Promo 12 mois"** |
| `notes` referencing 6 months | "la rentabilité dégradée après six mois" or similar | **Adapt to "après douze mois"** |

### Impact on 24-month cost:

- Old: 24.99 × 6 + 42.99 × 6 + 42.99 × 12 + 49 = 972.76 EUR
- New: **24.99 × 12 + 42.99 × 12 + 49 = 864.76 EUR**
- Delta vs Free: was ~-36 EUR → now **-95 EUR** (Orange becomes more competitive)

### Do NOT change:

- `standardMonthlyPriceEur` stays 42.99 EUR (conservative — see DECISIONS.md)
- `introMonthlyPriceEur` stays 24.99 EUR
- `setupFeeEur` stays 49 EUR

### Observatory data points:

If there are hardcoded observatory entries for Orange that reference "6 mois,"
update them to 12 mois. The price values themselves don't change.

---

## Unit tests

- Run `npm test` after both fixes.
- If any test hardcodes `introMonths: 6` for Orange → update to 12.
- If any test hardcodes a threshold of 65 for fitScore → update to 64.
- If the recommendation test expects "Renégociez avec Free" → it should now
  expect Red by SFR as primary reco.
- Expected: Red 24-month cost stays 590.76 EUR. Orange 24-month cost becomes
  864.76 EUR.

---

## Build verification

```
npm run build   # zero errors
npm test        # all pass
```

---

## Handoff when done

Write `handoffs/dev-to-qa-night2.md` with:
- Confirmation of both changes
- Build/test results
- Any unexpected side effects on scoring or recommendations

QA re-tests at 03:20 CET.

---

## Order of operations

```
1. BUG-13 fix (threshold 65 → 64) — may be in scoring engine, not snapshot
2. BUG-14 fix (Orange introMonths 6 → 12) — in boxMarketSnapshot.ts
3. npm run build — zero errors
4. npm test — all green
5. Write handoffs/dev-to-qa-night2.md
```

Both fixes are mandatory. Neither is optional.
