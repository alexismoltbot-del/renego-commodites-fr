# PM → Dev Night Handoff

Date: 2026-03-12 21:05 CET
Status: **ready — priority now**
Owner: `renego-dev`
Wave: 22:05 CET (Vague C)

---

## Priority 1 — BUG-11 Fix (P0, ~30 min)

The code and the landing copy contradict each other on Red by SFR. This is the
only P0. Fix it first.

### Exact changes in `src/lib/boxMarketSnapshot.ts` — Red by SFR entry:

| Field | Current (wrong) | Correct value | Source |
|-------|-----------------|---------------|--------|
| `standardMonthlyPriceEur` | 24.99 | **22.99** | fr-offers-watch.md, verified 12/03 |
| `setupFeeEur` | 49 | **39** | fr-offers-watch.md, verified 12/03 |
| `speedDownMbps` | 500 | **1000** | red-by-sfr.fr verified 12/03 |
| `speedUpMbps` | 500 | **1000** | red-by-sfr.fr verified 12/03 |
| `speedLabel` | "Jusqu'à 500 Mb/s" | **"Jusqu'à 1 Gb/s symétrique"** | red-by-sfr.fr verified 12/03 |

### Also update in the same file:

- `notes` on Red: remove any mention of "débit plus bas" — it's now 1 Gb/s sym,
  same or better than the others.
- `observatoryPoints` for Red: all entries should reflect 22.99 EUR, not 24.99.
- The 24-month cost for Red becomes: `22.99 × 24 + 39 = 590.76 EUR`
  (vs Freebox `39.99 × 24 = 959.76 EUR` → savings = **368.76 EUR ≈ 369 EUR**)

### Unit tests:

- Run existing tests. If any hardcode 24.99 / 49 / 500, update them to match.
- Expected: the saving claim in tests should land around -369 EUR, not -311 EUR.

### Verification:

- `npm run build` — zero errors
- `npm test` — all pass
- Write `handoffs/dev-to-qa.md` when done so QA can re-test at 23:20.

---

## Priority 2 — DEV-08: Public Observatory (P0 from founder pass)

The observatory must be visible WITHOUT uploading a PDF. It's a public proof
surface, not a gated feature.

### What to do:

- Make the observatory chart/section accessible from the main navigation or a
  public route — the user should NOT need to import a facture to see it.
- Add a brief intro text (grand public, not jargon):
  > "Les prix des box internet évoluent régulièrement. Voici les tarifs relevés
  > manuellement par ReneGo, avec dates et sources."
- Keep the existing chart component. Don't reinvent.
- Ensure all observatory data points reflect the corrected Red by SFR price
  (22.99 EUR) — this should follow automatically from Priority 1.
- Add a small disclaimer: "Prix relevés manuellement le 12 mars 2026. Sources
  publiques liées ci-dessous."

### NOT in scope tonight:

- Scored Transparency Index (Research finding #8) → deferred to Week 1
- Per-operator SEO pages → deferred post-launch
- Client stories / illustrative cases → deferred to Growth

---

## Priority 3 — Founder Copy Alignment (P0 from founder pass)

Align the public-facing shell with the new direction:

- **Remove** central emphasis on "tout reste sur votre machine / traitement
  local" — the product is presented as an operated service.
- **Add prominently:** "100% gratuit" + "sans commission" + "sans engagement"
- **Explain transparency:** the engine shows WHY an offer is recommended (savings,
  trade-offs) and will explicitly say "ne changez pas" if the current deal is
  best.
- **Keep** beta badge, disclaimers, footer legal, trust bar.

### Copy guardrails (PM-validated):

- No fake screenshots or testimonials
- No claim of automatic subscription switching
- No "IA" or "intelligence artificielle" (it's heuristic, not LLM)
- No savings percentages ("jusqu'à X%")
- No promo sentinel / monitoring promise (not built yet)
- Wedge = box internet France only

---

## Order of operations

```
1. BUG-11 fix → build → test → commit
2. DEV-08 observatory public → build → test
3. Founder copy alignment → build → visual check
4. Write handoffs/dev-to-qa.md with summary of changes
```

If time is tight, Priority 1 alone is sufficient to unblock the launch.
Priorities 2 and 3 can carry to Day 1 morning if needed.

---

## What I (PM) decided tonight to unblock you

- B&YOU Pure Fibre Plus: **excluded** from launch panel. Post-launch addition.
- Transparency Index scoring: **deferred** to Week 1. DEV-08 ships as a public
  price chart, not a scored index.
- Pricing model: **free beta** at launch. No flat fee, no commission, no paywall.
- Promo-Expiry Sentinel: **deferred** to V2. Do not mention in UI or copy.
- Demo video: **deferred** pending APPR-04 (Kling key). No Remotion work tonight.
