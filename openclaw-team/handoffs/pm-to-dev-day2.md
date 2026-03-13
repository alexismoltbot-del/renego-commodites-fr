# PM → Dev Day 2 Handoff

Date: 2026-03-13 09:05 CET
Status: **ready — pick up at 14:05 wave (Day 2 morning)**
Owner: `renego-dev`
Sprint: Day 2 (14 mars) — product polish + conversion

---

## Context

Score: 97/100. Zero P0/P1. Day 1 fully cleared 12h early. Red = primary reco,
stable 5 cycles. The product is launch-safe. Day 2 is about **conversion** —
closing the gap between top-of-funnel traffic and the full facture analysis flow.

**Two build tasks, ordered by priority:**

---

## Task 1 — DEV-10: Instant Price Check widget (P1, 2-4h)

### Why this matters

The landing page's first interactive step is "upload your PDF facture." For a
zero-brand product in a new category, this is too high friction. US research
(finding #9) shows every best-in-class fintech product delivers personalized
value in <10 seconds before asking for personal data. The widget is the
conversion bridge between press/SEO/scorecard traffic and the full product.

### What to build

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
- **Data source:** `boxMarketSnapshot.ts` prices. Red at 22,99 = cheapest.
- **Logic:** `savings = (userPrice - 22.99) × 24`
- **Edge cases:**
  - Price ≤ 22,99 → "Vous avez déjà le meilleur prix du marché."
  - Operator = Red and price = 22,99 → "Votre offre Red est la plus compétitive."
  - Operator = Free and price > 40 → add hint "Votre promo a probablement expiré."
  - Price field: numeric, 0-200 € range, no decimals required
- **UX:** Animated inline result (not page reload).
- **Out of scope:** analytics, A/B testing, per-operator detail in widget result.

### Effort: 2-4h

---

## Task 2 — DEV-11: Shareable Diagnostic Card (P1, 2-4h)

### Why this matters

US research (finding #11) shows Rocket Money allocated 64% of its TikTok budget
to UGC of users sharing their savings screen. ReneGo has zero ad budget. The
diagnostic card IS the zero-budget viral engine — users share it on WhatsApp
groups ("j'ai fait le test, on surpaie de 17€") and friends check too. Without
it, every analysis dies on-screen and the growth funnel has no overflow.

### What to build

After every facture analysis, generate a branded, screenshot-ready card:

```
┌──────────────────────────────────────────────┐
│                                              │
│         🔍 Diagnostic Box Internet           │
│                                              │
│  Vous payez :     39,99 €/mois               │
│  Meilleur prix :  22,99 €/mois               │
│                                              │
│  Économie potentielle :                      │
│        369 € sur 24 mois                     │
│                                              │
│  Faites le test → renego.fr                  │
│                                              │
└──────────────────────────────────────────────┘
```

### Technical spec

- **Two sizes:** 1080×1920 (WhatsApp Status / Stories) + 1080×1080 (feed/tweet)
- **Generation:** HTML canvas → image, 100% client-side
- **Data:** Only 4 data points — current price, best price, 24m savings, CTA URL
- **No PII on the card.** No name, no address, no facture details.
- **Include operator name:** "Freebox → Red by SFR" (operators are not PII, makes
  it more specific and shareable)
- **Share button:** "Partager mon diagnostic" → Web Share API (native sharing on
  mobile). Fallback: download image button on desktop.
- **Branding:** ReneGo logo, clean design, beta badge visible

### Effort: 2-4h (shares visual/branding work with DEV-10)

---

## Priority order

1. **DEV-10 widget** — conversion bridge, higher immediate impact
2. **DEV-11 diagnostic card** — viral engine, can ship same day

If time is tight, ship DEV-10 first. DEV-11 can stretch to Day 3 morning.

---

## Not in scope for Day 2 dev

- QA-03 regression suite (QA owns)
- GROWTH-03 copy changes (Growth owns)
- B&YOU panel addition (post-launch)
- Sentinel / feedback form backend (post-launch)
- Demo video (APPR-04 resolved: post-launch)

---

## Handoff when done

Write `handoffs/dev-to-qa-day2.md` with:
- DEV-10 widget: working, edge cases tested
- DEV-11 card: rendering correctly, share works
- Build/test results
- Any new test assertions added

QA picks up at 15:20 or 19:20 (Day 2).
