# PM → Dev Day 1 Handoff

Date: 2026-03-13 05:05 CET
Status: **ready — pick up at 06:05 wave**
Owner: `renego-dev`
Wave: 06:05 CET (Vague C Day 1 matin)

---

## Context

Score: 95/100. Zero P0. All Night 1 fixes confirmed by QA. Red = primary reco.
Product is launch-safe. This wave is about resolving the last P1 and scoping the
highest-ROI Day 2 addition.

**Two tasks, ordered by priority:**

---

## Task 1 — BUG-15: Orange post-promo browser investigation (P1)

### Problem

The code uses `standardMonthlyPriceEur: 42.99` for Orange Livebox Fibre.
Offers-FR's analysis of the mentions légales says the promo is "-8 €/mois pendant
12 mois." If promo = 24.99 € and discount = -8 €, the base price is logically
**32.99 €**, not 42.99 €.

The Orange page is JS-rendered — the post-promo price isn't readable in raw HTML.

### Action required

1. **Open the Orange Livebox Fibre offer page** in a browser:
   `https://boutique.orange.fr/internet/offre-livebox-fibre`
2. **Screenshot the full rendered page** — look for the post-promo price
3. **Check the mentions légales section** for "Prix après la période
   promotionnelle" or "tarif en vigueur"
4. **Look for price selector or configurator** — the base price may change
   depending on options selected (TV Starter, etc.)

### Decision tree

- **If post-promo is confirmed 32.99 €:**
  - Change `standardMonthlyPriceEur` from `42.99` to `32.99` in
    `src/lib/boxMarketSnapshot.ts`
  - Update `notes` field to reflect the correct post-promo price
  - New 24m cost: 24.99×12 + 32.99×12 + 49 = **744.76 €** (delta vs Free:
    -215 €)
  - Run `npm run build && npm test` — update any test assertions
  - Write handoff to QA for 07:20 wave

- **If post-promo is confirmed 42.99 €:**
  - No code change needed — current value is correct
  - Write short confirmation note in `handoffs/dev-to-qa-day1.md`
  - BUG-15 → CLOSED

- **If ambiguous (multiple prices, depends on options, unclear):**
  - Keep 42.99 € (conservative, launch-safe)
  - Document what was found, screenshot evidence
  - BUG-15 → ACCEPTED with mitigation

### Why this matters

The difference between 32.99 and 42.99 is 120 € on 24 months. It doesn't change
the primary recommendation (Red at 590.76 € wins either way) but it changes
Orange's ranking among alternatives and the narrative in the landing copy. If it's
32.99, Orange becomes the 2nd best deal — a more compelling alternative panel.

---

## Task 2 — Scope: Instant Price Check widget (DEV-10)

### Context

PM decision (this cycle): **the Instant Price Check widget is approved for Day 2
implementation.** This is the highest-ROI conversion improvement available.
Research finding #9 (US best practice) confirms that zero-brand products need a
low-friction first interaction before asking for document upload.

### What to build (Day 2)

A 2-field widget on the landing page, above the fold:

```
┌──────────────────────────────────────────────┐
│  Payez-vous trop cher votre box internet ?   │
│  Vérifiez en 10 secondes.                    │
│                                              │
│  Opérateur: [dropdown: Orange|Free|SFR|      │
│              Bouygues|Red by SFR]            │
│  Prix/mois: [___] €                          │
│                                              │
│  [Vérifier →]                                │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │ Vous payez 17 €/mois de plus que      │  │
│  │ Red by SFR (22,99 €/mois).            │  │
│  │ Sur 24 mois : 408 € d'économies.      │  │
│  │                                        │  │
│  │ [Importez votre facture pour le        │  │
│  │  diagnostic complet — gratuit →]       │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

### Technical spec

- **100% client-side.** No backend, no API, no PII.
- **Data source:** Use the existing `boxMarketSnapshot.ts` prices.
- **Logic:** `savings = (userPrice - 22.99) × 24` (Red is always the cheapest).
  If user selects Red and price ≤ 22.99, show "Vous avez déjà le meilleur prix."
  If savings ≤ 0, show "Votre offre est compétitive — vérifiez avec l'import
  pour confirmer."
- **UX:** Animated result, not a page reload. Result appears inline below the
  fields.
- **Edge cases:**
  - Price field: validate numeric, 0-200 € range
  - If operator = Free and price > 40: show "Votre promo a probablement expiré"
  - No decimals required (round to nearest euro is fine)

### Scope boundary

- **In scope Day 2:** the widget itself, basic styling, integration on landing
- **Out of scope:** analytics tracking, A/B testing, per-operator detailed
  comparison in the widget result

### Deliverable

- Working widget on the landing page
- Handoff to QA for regression check
- Handoff to Growth for copy integration

**Estimated effort: 2-4h.** This is NOT a Day 1 priority — focus on BUG-15
first. Widget ships Day 2 (14 mars).

---

## Handoff when done

Write `handoffs/dev-to-qa-day1.md` with:
- BUG-15 verdict + evidence (screenshot or description)
- Code changes if any
- Build/test results

QA picks up at 07:20 CET.
