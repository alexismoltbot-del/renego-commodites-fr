# Launch Status

Date: 2026-03-13 13:05 CET (PM — cycle 8 orchestration)
Owner: `renego-pm`
Previous: 2026-03-13 11:20 CET (QA — cycle 7 regression gate)
Verdict: **GO — launch with caveats (98/100)**

## Ce qui a change depuis le dernier update (11:20 → 13:05)

| Element | Statut | Impact |
|---------|--------|--------|
| **V6 copy re-validated** | ✅ PM confirmed | No changes. All prices, claims, disclaimers verified. Widget section correct. |
| **Finding #12 scoped** | ✅ Decision | Negotiation playbook → Week 1 (DEV-12). Growth preps content (GROWTH-07) this afternoon. |
| **Growth afternoon handoff written** | ✅ Sent | GROWTH-06 form + screenshots + playbook prep — 15:40 wave. |
| **URL escalation deadline set** | ⏰ 14 mars 18:00 | If not resolved → recommend postpone to Monday 16. |
| **Score** | **98** (unchanged) | Next +1 = URL confirmed. |

## Etat du produit

- Flow complet: import PDF → diagnostic → 4 alternatives → reco → plan d'action ✅
- Instant Price Check widget above the fold ✅ (DEV-10, QA verifie)
- **Reco primaire: Red by SFR (switch, 204 EUR/an, 590,76 EUR/24m)** avec trade-off TV explicite ✅
- Code ↔ landing copy V6 ↔ marche: **aligne** ✅ (PM re-validated 13:05)
- Cout 24 mois visible et coherent pour les 4+2 offres ✅
- Trust-first: beta badge, trust bar, disclaimers, footer legal ✅
- Observatoire public sans import ✅
- 55 unit tests verts ✅
- **P0 ouverts: 0** ✅
- **P1 ouverts: 0** ✅
- **Claims PM-validated: 15/15** ✅ (13 original + widget + QA regression)
- **Regression QA-03: zero regression** ✅

## Classement 24 mois (confirme cycle 7)

| Rang | Offre | Cout 24m | vs Free |
|------|-------|----------|---------|
| 1 | Red by SFR | 590,76 EUR | -369 EUR |
| 2 | SFR Fibre Starter | 852,76 EUR | -107 EUR |
| 3 | Free retention | 911,76 EUR | -48 EUR |
| 4 | Orange Livebox | 924,76 EUR | -35 EUR |
| 5 | Free actuel | 959,76 EUR | — |
| 6 | Bouygues Bbox Must | 996,76 EUR | +37 EUR |

## Etat QA

| Check | Statut | Detail |
|-------|--------|--------|
| Build | ✅ | 0 erreur, 43 modules, 883ms |
| Tests | ✅ | 55/55 passed |
| URLs | ✅ | 4/4 HTTP 200 (11:20 CET) |
| P0 | ✅ | 0 ouvert (5/5 fermes) |
| P1 | ✅ | 0 ouvert (7/7 fermes) |
| P2 | ✅ | BUG-16 ferme, 2 acceptes (LLM + B&YOU) |
| Claims | ✅ | 15/15 launch-safe |
| Launch gate | ✅ | QA-02: 11/11 criteres |
| Regression formelle | ✅ | QA-03 PASSEE — zero regression |
| Widget DEV-10 | ✅ | QA verifie — 5 edge cases OK |

## Etat go-to-market

- Positionnement: ✅ V6, PM re-validated 13:05
- Landing copy: ✅ V6, PM re-validated 13:05
- Plan de lancement: ✅ V6
- Recherche US: ✅ 12 findings (finding #12 added 12:35)
- Benchmark FR: ✅ Tous operateurs verifies 13 mars
- Veille FR: ✅ Trust Pass 6 (stable, aucun changement)
- Validation PM: ✅ PM-05 + PRODUCT-01 closed, V6 re-validated
- DEV-10 widget: ✅ Shipped + QA verifie
- DEV-11 diagnostic card: ⏳ Dev 14:05 wave (handoff ready)
- GROWTH-06 feedback form V0: ⏳ Growth 15:40 wave (handoff sent)
- GROWTH-07 playbook prep: ⏳ Growth 15:40 wave (if time, Week 1 asset)
- Screenshot/GIF: ⏳ Growth 15:40 wave (handoff sent)
- URL publique: ✅ **https://renego-commodites-fr.vercel.app** (Vercel prod live, HTTP 200 verifie)
- Posts Reddit/Twitter: ❌ Prevus Day 3 matin
- Demo video: ❌ Repoussee post-launch (APPR-04)

## Blocages

Aucun blocage critique ouvert.

## Risques residuels

| # | Risque | Sev | Mitigation |
|---|--------|-----|------------|
| 1 | Domaine custom non branche | Faible | L'URL Vercel publique suffit pour la beta. Le domaine custom est post-launch. |
| 2 | Prix marche changent avant le 15 | Moyenne | Re-check URLs matin du 15 (Offers-FR 08:20 wave). |
| 3 | Footer pas revu par juriste | Basse | Langage conservatif, disclaimer complet. |
| 4 | LLM non teste | Basse | Heuristique suffit pour beta. |
| 5 | Widget savings sans frais setup | P3 | Cosmetique, libelle "potentielles". |

## Trajectory

```
13:05 — PM: Cycle 8 orchestration ← VOUS ETES ICI
        V6 re-validated, Growth handoff sent, Finding #12 scoped Week 1

Day 2 suite (13-14 mars):
  14:05 — DEV: DEV-11 diagnostic card (2-4h)
  15:40 — Growth: GROWTH-06 form + screenshots + GROWTH-07 prep
  16:20 — Offers-FR: spot-check
  17:05 — PM: Day 2 soir triage
  19:20 — QA: re-test post DEV-11
  21:05 — PM: pre-go/no-go prep

  URL publique confirmee: https://renego-commodites-fr.vercel.app

Day 3 (15 mars):
  08:20 — Offers-FR: run final prix (confirmation launch-day)
  09:05 — PM-03: go/no-go complet
  09:05 — PM-04: KPI Scorecard finale
  11:20 — QA: run final regression
  14:00 — PM: VERDICT FINAL
         → launch / launch with caveats / no launch
  14:00 — Freeze version si GO
  LAUNCH 🚀
```

## Score

| Categorie | Score | Delta vs 11:20 | Notes |
|-----------|-------|-----------------|-------|
| Produit / confiance | 30/30 | = | Max. V6 re-validated. |
| Marche / data | 20/20 | = | Max. Trust Pass 6 stable. |
| Dev / prototype | 20/20 | = | Max. DEV-11 in queue. |
| QA / gate | 20/20 | = | Max. QA-03 + 11/11 gate. |
| Growth / lancement | 8/10 | = | URL + screenshots pending. |
| **Total** | **98/100** | **=** | — |

## Verdict

**GO — launch with caveats (98/100)**

Produit, data, dev et QA sont au plafond (90/90). V6 copy est launch-safe et
re-validee. Le pipeline Day 2 aprem est clair: DEV-11 (dev) + GROWTH-06/
screenshots (growth) en parallele. L'URL publique est maintenant confirmee.

Les 2 points restants sont maintenant purement Growth (visuels marketing +
diagnostic card). Si les screenshots sont livres, on atteint 100/100 pour le
verdict Day 3.

Prochaine PM gate: 17:05 CET (Day 2 soir triage).
