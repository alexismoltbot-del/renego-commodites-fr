# PM → Dev Handoff (v2)

Date: 2026-03-12 15:29
Status: **ready — start now**
Deadline: dev work must be committable by 17:15 for QA.

---

## Context in 30 seconds

We're demoing a "box internet France" renegotiation flow tonight (19:00). A real Freebox Revolution invoice at 39,99 EUR/mois feeds the engine. The research agent confirmed **no French product does what we do** — the US market ($1.2B, 15% CAGR) validates the model. Today's job: make the demo credible by adding missing offers, showing sources, and displaying real 24-month costs.

The codebase is in the parent repo (`renego-commodites-fr/`). You touch only `src/` and test files. No server changes.

---

## Priority order (strict — execute top to bottom, cut from the bottom if time runs out)

### P0 — DEV-01: Add Orange Livebox Fibre + Red by SFR to alternatives

**File:** `src/lib/contractAnalysis.ts` — inside the `analyzeContractText()` function, in the `alternatives` array (currently contains `switch-sfr` and `switch-bouygues`).

Add these two offers **after** the existing Bouygues entry:

#### Orange Livebox Fibre

```typescript
buildOffer("switch-orange", {
  provider: "Orange",
  offer: "Livebox Fibre",
  priceLabel: "24,99 EUR / mois pendant 6 mois puis 42,99 EUR",
  monthlyPriceEur: 24.99,
  annualCostEur: 407.88, // (24.99 × 6) + (42.99 × 6)
  annualSavingEur: Number((contract.annualCostEur - 407.88).toFixed(2)),
  fitScore: 79,
  riskLabel: "Risque moyen",
  verdict: "Changer maintenant",
  commitmentLabel: "12 mois",
  setupFeeLabel: "49 EUR",
  tvLabel: "TV 140 chaines incluses",
  speedLabel: "Jusqu'a 500 Mb/s (Up 500 Mb/s)",
  featureBadges: ["Promo 6 mois", "TV incluse", "Reseau Orange"],
  notes: [
    "Prix promo attractif les 6 premiers mois, mais remontee forte a 42,99 EUR ensuite.",
    "Le debit descendant est inferieur aux autres offres fibre (500 Mb/s vs 1+ Gb/s).",
    "Orange a le meilleur taux de satisfaction reseau selon l'ARCEP, ce qui peut jouer pour un utilisateur non-technique.",
  ],
  source: {
    label: "Site officiel Orange",
    url: "https://boutique.orange.fr/internet/offres-702",
    asOf: "12 mars 2026",
  },
  actionKind: "switch",
})
```

#### Red by SFR Fibre (THE BOX)

```typescript
buildOffer("switch-red", {
  provider: "Red by SFR",
  offer: "THE BOX Fibre",
  priceLabel: "24,99 EUR / mois sans engagement",
  monthlyPriceEur: 24.99,
  annualCostEur: 299.88,
  annualSavingEur: Number((contract.annualCostEur - 299.88).toFixed(2)),
  fitScore: 86,
  riskLabel: "Risque faible",
  verdict: "Changer maintenant",
  commitmentLabel: "Sans engagement",
  setupFeeLabel: "49 EUR",
  tvLabel: "35 chaines incluses, TV sur app",
  speedLabel: "Jusqu'a 500 Mb/s",
  featureBadges: ["Sans engagement", "180 EUR / an gagnes", "Prix fixe"],
  notes: [
    "Le meilleur rapport qualite-prix du marche: pas d'engagement, prix fixe, pas de remontee.",
    "Bouquet TV minimal (35 chaines, app RED TV). Pas de decodeur TV sauf option payante.",
    "L'utilisateur perd TV by CANAL — c'est le principal trade-off a verbaliser clairement.",
  ],
  source: {
    label: "Site officiel Red by SFR",
    url: "https://www.red-by-sfr.fr/box-internet/",
    asOf: "12 mars 2026",
  },
  actionKind: "switch",
})
```

**Also add to `buildComparisons()`:**

```typescript
"switch-orange": [
  {
    label: "Prix mensuel",
    currentValue: "39,99 EUR",
    candidateValue: "24,99 EUR (6 mois) puis 42,99 EUR",
    verdict: "better",
    note: "Gain fort les 6 premiers mois, mais cout annee 2 superieur au contrat actuel.",
  },
  {
    label: "TV incluse",
    currentValue: "TV by CANAL + bouquet TV",
    candidateValue: "TV 140 chaines",
    verdict: "same",
    note: "TV incluse, pas de label CANAL mais offre TV large.",
  },
  {
    label: "Debit",
    currentValue: "1 Gb/s (Freebox Revolution fibre)",
    candidateValue: "Jusqu'a 500 Mb/s",
    verdict: "worse",
    note: "Debit inferieur — significatif pour un foyer multi-usages.",
  },
  {
    label: "Engagement",
    currentValue: "Sans engagement (client > 12 mois)",
    candidateValue: "12 mois",
    verdict: "worse",
    note: "Reprise d'engagement et prix post-promo eleve.",
  },
  {
    label: "Prix apres promo (annee 2)",
    currentValue: "39,99 EUR",
    candidateValue: "42,99 EUR",
    verdict: "worse",
    note: "Attention: l'annee 2 est plus chere que le contrat actuel.",
  },
],
"switch-red": [
  {
    label: "Prix mensuel",
    currentValue: "39,99 EUR",
    candidateValue: "24,99 EUR (prix fixe)",
    verdict: "better",
    note: "15 EUR de moins par mois, et ce prix ne bouge pas.",
  },
  {
    label: "TV incluse",
    currentValue: "TV by CANAL + bouquet TV",
    candidateValue: "35 chaines sur app, pas de decodeur",
    verdict: "worse",
    note: "C'est le vrai trade-off: TV by CANAL disparait. A verbaliser.",
  },
  {
    label: "Debit",
    currentValue: "1 Gb/s (Freebox Revolution fibre)",
    candidateValue: "Jusqu'a 500 Mb/s",
    verdict: "worse",
    note: "Debit divise par 2 — acceptable pour la plupart des usages mais a mentionner.",
  },
  {
    label: "Engagement",
    currentValue: "Sans engagement (client > 12 mois)",
    candidateValue: "Sans engagement",
    verdict: "same",
    note: "Aucune rigidite ajoutee, tu peux repartir quand tu veux.",
  },
  {
    label: "Prix apres promo (annee 2)",
    currentValue: "39,99 EUR",
    candidateValue: "24,99 EUR (identique)",
    verdict: "better",
    note: "Pas de mauvaise surprise: le prix reste le meme.",
  },
],
```

**Also add to `buildObservatory()`:**

```typescript
{
  id: "red",
  label: "Red by SFR THE BOX",
  accent: "#cc0000",
  currentPrice: 24.99,
  delta30d: 0,
  points: [
    { day: "J-13", price: 24.99 },
    { day: "J-12", price: 24.99 },
    { day: "J-11", price: 24.99 },
    { day: "J-10", price: 24.99 },
    { day: "J-9", price: 24.99 },
    { day: "J-8", price: 24.99 },
    { day: "J-7", price: 24.99 },
    { day: "J-6", price: 24.99 },
    { day: "J-5", price: 24.99 },
    { day: "J-4", price: 24.99 },
    { day: "J-3", price: 24.99 },
    { day: "J-2", price: 24.99 },
    { day: "J-1", price: 24.99 },
    { day: "J", price: 24.99 },
  ],
},
```

**Update `buildDiagnosticFacts()`** — change the "Meilleur prix public repere" fact:

```typescript
{
  label: "Meilleur prix public repere",
  value: "24,99 EUR / mois chez Red by SFR (sans engagement, prix fixe)",
  implication:
    "Le delta brut monte a 180 EUR / an. C'est le gain le plus eleve du panel, et le prix ne remonte pas apres promo.",
  tone: "positive",
},
```

**Update `bestActionId`** at the end of `analyzeContractText()`:
- Keep `"switch-sfr"` as `bestActionId` for now — the scoring engine should naturally rank Red by SFR higher (fitScore 86 + high savings), but verify. If Red by SFR scores higher in `scoreOffer()`, change `bestActionId` to `"switch-red"`.
- **Test:** run `npm run build` and check no type errors. The scoring engine in `recommendationEngine.ts` must handle the new offers without changes.

**Acceptance criteria:**
- [ ] `npm run build` passes
- [ ] 4 alternatives visible (SFR Starter + Bouygues + Orange + Red by SFR)
- [ ] Each has `source.url` and `source.asOf` = "12 mars 2026"
- [ ] Comparisons populated for all 4
- [ ] Scoring engine ranks Red by SFR at or near top (verify)

---

### P0 — DEV-02: Fix "Non visible sur la facture" and show source links

**File:** `src/lib/contractAnalysis.ts` — `buildComparisons()` function.

The Freebox Revolution specs are public knowledge. Replace these `currentValue` entries:

| Location | Current `currentValue` | Replace with |
|---|---|---|
| `switch-sfr` → "Debit" (line ~266) | `"Non visible sur la facture"` | `"1 Gb/s (Freebox Revolution fibre)"` |
| `switch-sfr` → "Engagement" (line ~273) | `"Non visible sur la facture"` | `"Sans engagement (client > 12 mois)"` |
| `retain-free` → "Engagement" (line ~310) | `"Non visible sur la facture"` | `"Sans engagement (client > 12 mois)"` |
| `switch-bouygues` → "Wi-Fi" (line ~333) | `"Non visible sur la facture"` | `"Wi-Fi 5 (Freebox Revolution)"` |
| `switch-bouygues` → "Engagement" (line ~340) | `"Non visible sur la facture"` | `"Sans engagement (client > 12 mois)"` |

Also update the `verdict` for `switch-sfr` → "Debit" from `"unknown"` to `"same"` and adjust the note: `"Debit comparable, les deux annoncent jusqu'a 1 Gb/s."`.

Also update `switch-sfr` → "Engagement" verdict from `"worse"` to `"worse"` (stays) but change note: `"Tu es actuellement sans engagement. Switcher vers SFR te lie 12 mois."`.

**File:** `src/App.tsx` — around line 461.

Current:
```tsx
<p className="offer-source">
  {offer.source.label} · {offer.source.asOf}
</p>
```

Replace with:
```tsx
<p className="offer-source">
  {offer.source.url ? (
    <a href={offer.source.url} target="_blank" rel="noopener noreferrer">
      {offer.source.label}
    </a>
  ) : (
    offer.source.label
  )} · Releve du {offer.source.asOf}
</p>
```

**Update all existing `asOf` dates** from `"11 mars 2026"` to `"12 mars 2026"` throughout `contractAnalysis.ts`. There are 5 occurrences (retention, SFR, Bouygues, wait, audit trail).

**Acceptance criteria:**
- [ ] Zero "Non visible sur la facture" in comparison rows
- [ ] Source URLs clickable in the UI
- [ ] All dates show "12 mars 2026"

---

### P1 — DEV-03: Add "Prix apres promo" row + 24-month cost summary

**File:** `src/lib/contractAnalysis.ts` — `buildComparisons()`.

Add a `"Prix apres promo (annee 2)"` row to each comparison block where the candidate has a post-promo price increase:

- `switch-sfr`: `candidateValue: "38,99 EUR / mois"`, verdict `"same"`, note: `"Apres 12 mois, SFR remonte a 38,99 EUR. Gain annee 2: ~12 EUR seulement."`
- `switch-bouygues`: `candidateValue: "42,99 EUR / mois"`, verdict `"worse"`, note: `"Le prix remonte plus haut que ton contrat actuel. Gain negatif en annee 2."`
- `retain-free`: not needed (no promo).
- `switch-orange` and `switch-red`: already included above.
- `wait`: not needed.

**File:** `src/lib/recommendationEngine.ts` — in `buildSwitchSections()`.

In the first `ActionSection` ("Avant la souscription"), add a step at position 0:

```typescript
{
  id: "switch-cost-recap",
  title: "Recap cout sur 24 mois",
  detail: `Cout actuel sur 24 mois: ${formatCurrency(offer.monthlyPriceEur * 24)}. [Le dev doit compute: promo price × promo months + post-promo price × remaining months + setup fee]. Gain reel sur 24 mois: [computed delta].`,
  owner: "outil",
  channel: "interface",
  proof: "Tableau comparatif 24 mois",
  automation: "auto",
  status: "ready",
},
```

**Note:** The exact post-promo prices are hardcoded per offer. The dev should add a `postPromoMonthlyPriceEur` optional field to `CandidateOffer` in `src/types.ts` and compute the 24-month cost dynamically:
```
cost24m = (monthlyPriceEur × promoMonths) + (postPromoMonthlyPriceEur × (24 - promoMonths)) + setupFee
```

If adding the type field feels too risky this late, hardcode the 24-month costs as notes in the offer `notes[]` array. Pragmatism over purity — the demo is tonight.

**Acceptance criteria:**
- [ ] "Prix apres promo" row visible for SFR, Bouygues, Orange
- [ ] Red by SFR correctly shows "prix fixe" (no post-promo line or an explicit "identique")
- [ ] At least one place in the UI shows a 24-month cost comparison

---

### P1 — DEV-05: Clarify action plan (who does what)

**File:** `src/lib/recommendationEngine.ts` — in `buildSwitchSections()` and `buildRetentionSections()`.

Each `ActionTask` already has an `owner` field. Ensure:
- Every `owner: "outil"` step has `detail` that starts with "L'outil…" or "Renego…"
- Every `owner: "utilisateur"` step has `detail` that starts with "Vous…" or "L'utilisateur…"
- Steps are numbered in the UI or at minimum ordered visually (this is probably already handled by array order)

Add to the final step of every section flow:
```typescript
{
  id: "cost-summary-final",
  title: "Resume financier final",
  detail: "Gain annee 1: [X EUR]. Cout annee 2: [Y EUR/mois]. Cout total sur 24 mois: [Z EUR]. Frais de mise en service: [W EUR].",
  owner: "outil",
  channel: "interface",
  proof: "Fiche recapitulative PDF exportable",
  automation: "auto",
  status: "ready",
},
```

**Acceptance criteria:**
- [ ] Each step clearly shows if it's the tool or the user acting
- [ ] A financial summary appears in the action plan

---

### P2 — DEV-04: Test premium mode (LLM) — conditional on APPR-01

**Only if Alexis provides an API key before 16:30.**

**File:** `server/llm.ts` — no changes needed, just test.

Run the flow with `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` set. Verify:
1. The `DecisionMemo` returns and is coherent with the same offers
2. `decisionMemo.whyThisChoice` mentions the source of the recommended offer
3. If no key available, fallback heuristic works without regression

**If no key is provided by 16:30, skip this entirely.** The heuristic mode is demo-ready.

---

## What NOT to touch

- `server/index.ts` and `server/llm.ts` (unless bug)
- PDF parsing logic in `parseFreeInvoiceText()`
- Scoring weights in `scoreOffer()` (unless Red by SFR doesn't rank correctly)
- Any new API routes
- Any new verticals

## Build & test

```bash
npm run build          # must pass with zero errors
npm run test:e2e       # must pass with freebox flow
```

If `test:e2e` breaks due to new offers in the snapshot, update the test expectations in `tests/freebox-flow.spec.ts` to match the new 4-alternative panel.

---

## Key insight from US research (for context, not action)

The US market validated that **source traceability is table stakes** (every US player shows where their data comes from) and **24-month cost visibility is the trust differentiator** (consumers have been burned by post-promo price hikes). That's why DEV-02 and DEV-03 are P0/P1 — they're not polish, they're credibility.

Red by SFR's "sans engagement, prix fixe" model is the closest thing to the US disruptor pattern (Kudos: flat fee, no commission, no surprises). It should be prominently surfaced.
