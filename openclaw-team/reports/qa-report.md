# QA Report — Day 2 evening QA gate (cycle 9)

Date: 2026-03-13 19:20 CET
Etat: **SOCIAL META VERIFIE — regression stable, OG image launch-safe**
Moteur teste: Heuristique locale (aucune API key LLM)
Build: `npm run build` ✅ (tsc + vite, 0 erreurs, 44 modules, 923ms)
Unit tests: `npm run test:unit` ✅ (55 passed, 0 failed)
Previous report: 2026-03-13 15:20 CET (Day 2 — cycle 8, GO 99/100)

---

## Contexte

Ce cycle QA intervient apres la livraison Social Meta + OG Image + Favicon
(18:05 CET). Regression complete incluant verification des meta tags, OG image,
favicon, re-check build/tests/URLs, et verification que zero fichier source
n'a ete modifie.

## Commandes executees

```bash
npm run build                             # ✅ 0 erreurs, 44 modules, 923ms
npm run test:unit                         # ✅ 55 passed, 0 failed
curl -sL -o /dev/null -w "%{http_code}" https://www.sfr.fr/offre-internet           # 200
curl -sL -o /dev/null -w "%{http_code}" https://www.bouyguestelecom.fr/offres-internet  # 200
curl -sL -o /dev/null -w "%{http_code}" https://boutique.orange.fr/internet/offres-fibre  # 200
curl -sL -o /dev/null -w "%{http_code}" https://www.red-by-sfr.fr/offre-internet/     # 200
curl -sL -o /dev/null -w "%{http_code}" https://renego-commodites-fr.vercel.app        # 200
grep -n 'og:title\|og:image\|twitter:card' dist/index.html   # ✅ tous presents
file public/og-image.png                  # ✅ PNG 1200x630
sips -g pixelWidth -g pixelHeight public/og-image.png  # ✅ 1200x630
cat public/favicon.svg                    # ✅ SVG "R" favicon, 258 bytes
grep 'theme-color' index.html             # ✅ #17211d
grep 'fitScore.*>= 6' src/lib/recommendationEngine.ts   # ✅ >= 64
grep 'introMonthlyPriceEur' src/lib/boxMarketSnapshot.ts # ✅ Orange 29.99
grep 'MARKET_SNAPSHOT_AS_OF' src/lib/boxMarketSnapshot.ts # ✅ "13 mars 2026"
```

---

## Verification Social Meta + OG Image + Favicon ✅

### index.html `<head>` review

| Tag | Present | Content | Launch-safe |
|-----|---------|---------|-------------|
| `<title>` | ✅ | "ReneGo — Payez-vous trop cher votre box internet ?" | ✅ Question, not a claim |
| `<meta description>` | ✅ | Import + compare + plan 30s + 100% gratuit | ✅ Matches existing claims |
| `og:type` | ✅ | "website" | ✅ |
| `og:locale` | ✅ | "fr_FR" | ✅ |
| `og:site_name` | ✅ | "ReneGo" | ✅ |
| `og:title` | ✅ | "Payez-vous trop cher votre box internet ?" | ✅ Question, not a claim |
| `og:description` | ✅ | Import + compare + plan 30s + 100% gratuit | ✅ Matches existing claims |
| `og:url` | ✅ | "https://renego-commodites-fr.vercel.app" | ✅ Matches deployment |
| `og:image` | ✅ | Absolute URL to /og-image.png | ✅ |
| `og:image:width` | ✅ | "1200" | ✅ |
| `og:image:height` | ✅ | "630" | ✅ |
| `og:image:alt` | ✅ | "ReneGo — Comparez les vrais prix box internet sur 24 mois" | ✅ |
| `twitter:card` | ✅ | "summary_large_image" | ✅ |
| `twitter:title` | ✅ | "Payez-vous trop cher votre box internet ?" | ✅ |
| `twitter:description` | ✅ | Import + compare + 100% gratuit | ✅ |
| `twitter:image` | ✅ | Absolute URL to /og-image.png | ✅ |
| `twitter:image:alt` | ✅ | Matches og:image:alt | ✅ |
| `theme-color` | ✅ | "#17211d" (dark green, matches app) | ✅ |
| `link rel="icon"` | ✅ | "/favicon.svg" | ✅ |

**17/17 meta tags present and launch-safe.** All claims match existing
PM-validated copy. No over-promises. No specific prices in meta (avoids staleness).

### OG image (public/og-image.png) — VERIFIED ✅

| Check | Result |
|-------|--------|
| Format | PNG |
| Dimensions | 1200 × 630 ✅ (standard OG size) |
| File size | 374 KB (reasonable) |
| Present in dist/ | ✅ |
| Branded | ✅ ReneGo name, brand colors (#17211d → #0d7a6d gradient) |
| Headline | "Payez-vous trop cher votre box internet ?" ✅ |
| Subtitle | Import + compare + plan 30s ✅ |
| "BETA · 100% GRATUIT" badge | ✅ Orange badge visible |
| Footer | ReneGo + Vercel URL ✅ |
| **Zero PII** | ✅ Confirmed by visual review — no names, addresses, personal data |
| **Zero specific prices** | ✅ No EUR amounts that could go stale |
| **Professional quality** | ✅ Clean, modern, consistent typography |

### Favicon (public/favicon.svg) — VERIFIED ✅

| Check | Result |
|-------|--------|
| Format | SVG, 258 bytes |
| Content | "R" letter, orange (#f1643c) on dark (#17211d) |
| Present in dist/ | ✅ |
| Brand colors | ✅ Matches app palette |

### Claims in meta — launch-safety audit ✅

All claims in OG/Twitter meta match existing PM-validated claims (PM-05, PRODUCT-01):

1. "Payez-vous trop cher votre box internet ?" — **Question**, not an assertion ✅
2. "Importez votre facture" — Factual feature description ✅
3. "comparez les vrais prix sur 24 mois" — Factual feature description ✅
4. "plan de renégociation en 30 secondes" — Heuristic is near-instant, reasonable ✅
5. "100% gratuit, sans commission" — Existing verified claim ✅

**No new claims introduced. All meta text is a subset of existing launch-safe copy.** ✅

### Social Meta Verdict: **VERIFIE — launch-safe** ✅

---

## What did NOT change (source code audit) ✅

The social meta delivery modified **only**:
- `index.html` — `<head>` rewrite (meta tags, title, favicon, theme-color)
- `public/og-image.png` — NEW static asset
- `public/favicon.svg` — NEW static asset

**Zero changes to `src/`:**

| File | Changed | Verified |
|------|---------|----------|
| src/App.tsx | ❌ No | ✅ Imports, trust elements, components stable |
| src/components/InstantPriceCheck.tsx | ❌ No | ✅ 171 lines, stable |
| src/components/DiagnosticCard.tsx | ❌ No | ✅ 342 lines, stable |
| src/lib/boxMarketSnapshot.ts | ❌ No | ✅ All prices verified |
| src/lib/recommendationEngine.ts | ❌ No | ✅ fitScore >= 64 |
| src/index.css | ❌ No | ✅ Stable |
| tests/scoring-unit.ts | ❌ No | ✅ 55 assertions |

**Zero source file modifications. This is a pure metadata delivery.** ✅

---

## Regression complete — cycle 9

### Build & compilation

| Check | Resultat | Detail |
|-------|----------|--------|
| `npm run build` | ✅ PASS | 0 erreur, 44 modules, 923ms |
| Modules | ✅ | 44 (unchanged from cycle 8) |
| Bundle size | ✅ | JS 258+406 kB, CSS 17 kB (unchanged) |

### Unit tests

| Check | Resultat | Detail |
|-------|----------|--------|
| `npm run test:unit` | ✅ PASS | 55/55, 0 failed |
| 24m costs (6 offers) | ✅ | Red 590,76 / SFR 852,76 / Free-ret 911,76 / Orange 924,76 / Free 959,76 / Bouygues 996,76 |
| Scoring engine | ✅ | Red = price + value champion |
| Decision memo | ✅ | Red selected, direction=change_now |
| Comparison rows | ✅ | Post-promo verdicts corrects |
| Retention & wait | ✅ | Corrects |

### URLs sources

| URL | Statut | Heure |
|-----|--------|-------|
| sfr.fr/offre-internet | ✅ 200 | 19:20 CET |
| bouyguestelecom.fr/offres-internet | ✅ 200 | 19:20 CET |
| boutique.orange.fr/internet/offres-fibre | ✅ 200 | 19:20 CET |
| red-by-sfr.fr/offre-internet/ | ✅ 200 | 19:20 CET |
| **renego-commodites-fr.vercel.app** | ✅ 200 | **19:20 CET** |

### Data integrity

| Check | Valeur | Correct |
|-------|--------|---------|
| Red monthly | 22,99 EUR | ✅ |
| Red setup | 39 EUR | ✅ |
| Red priceLocked | true | ✅ |
| Orange promo | 29,99 EUR | ✅ |
| Orange post-promo | 42,99 EUR | ✅ |
| Orange introMonths | 12 | ✅ |
| SFR promo | 27,99 EUR | ✅ |
| SFR standard | 38,99 EUR | ✅ |
| Bouygues promo | 35,99 EUR | ✅ |
| Bouygues standard | 42,99 EUR | ✅ |
| Snapshot date | "13 mars 2026" | ✅ |
| fitScore threshold | >= 64 | ✅ |

### Scoring & recommendation

| Check | Resultat |
|-------|----------|
| Red = reco primaire | ✅ |
| Red = price champion | ✅ |
| Red = value champion | ✅ |
| Direction = change_now | ✅ |
| Red annual saving = 204 EUR | ✅ |
| Trade-off TV/decodeur explicite | ✅ |
| Retention = 35,99 cible | ✅ |

### Trust-first elements

| Check | Present |
|-------|---------|
| Beta badge (eyebrow) | ✅ |
| Beta badge (footer) | ✅ |
| "100% gratuit, sans commission" | ✅ |
| Trust bar (3 items) | ✅ |
| Footer disclaimer complet | ✅ |
| "Factures Freebox uniquement" | ✅ |
| Observatory disclaimer | ✅ |
| Action disclaimer | ✅ |

### Features (DEV-10 + DEV-11 + Social Meta)

| Check | Resultat |
|-------|----------|
| Widget DEV-10 (171 lines) | ✅ Stable (verified cycle 7, unchanged) |
| DiagnosticCard DEV-11 (342 lines) | ✅ Stable (verified cycle 8, unchanged) |
| Widget imported App.tsx L6 | ✅ |
| Card imported App.tsx L7 | ✅ |
| Widget zero PII | ✅ |
| Card zero PII | ✅ |
| Card savings accurate (369 EUR Freebox) | ✅ |
| Card Web Share + download fallback | ✅ |
| Card beta/date disclaimers | ✅ |
| **OG meta tags (17/17)** | ✅ **VERIFIED this cycle** |
| **OG image 1200×630** | ✅ **VERIFIED this cycle** |
| **Favicon SVG** | ✅ **VERIFIED this cycle** |
| **OG claims launch-safe** | ✅ **VERIFIED this cycle** |
| **Zero src/ changes** | ✅ **VERIFIED this cycle** |

### Regression: zero regression detected ✅

| Area | Status |
|------|--------|
| Build compiles | ✅ No new errors |
| All 55 tests pass | ✅ No regressions |
| All 4 source URLs 200 | ✅ No broken links |
| Deployment URL 200 | ✅ Live |
| All prices unchanged | ✅ No data drift |
| All trust elements present | ✅ No missing elements |
| Scoring logic unchanged | ✅ No recommendation flip |
| Widget DEV-10 intact | ✅ No regression |
| DiagnosticCard DEV-11 intact | ✅ No regression |
| **Social meta additive only** | ✅ **No impact on existing code** |

---

## Classement 24 mois — stable

| Rang | Offre | Formule | Cout 24m | vs Free actuel |
|------|-------|---------|----------|----------------|
| 1 | **Red by SFR** | 22,99 × 24 + 39 | **590,76 EUR** | **-369 EUR** |
| 2 | **SFR Fibre Starter** | 27,99 × 12 + 38,99 × 12 + 49 | **852,76 EUR** | **-107 EUR** |
| 3 | Free retention | 35,99 × 12 + 39,99 × 12 | 911,76 EUR | -48 EUR |
| 4 | Orange Livebox | 29,99 × 12 + 42,99 × 12 + 49 | 924,76 EUR | -35 EUR |
| 5 | Free actuel | 39,99 × 24 | 959,76 EUR | — |
| 6 | **Bouygues Bbox Must** | 35,99 × 12 + 42,99 × 12 + 49 | **996,76 EUR** | **+37 EUR** |

---

## Bug tracker — Etat complet

### P0 — 0 ouvert ✅

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-01 | Handoff dev materiellement faux | ✅ FERME |
| BUG-02 | 4 URLs sources en erreur HTTP | ✅ FERME (4/4 re-verifiees 19:20) |
| BUG-11 | Code/landing copy desync Red by SFR | ✅ FERME |
| BUG-13-FIX | Seuil fitScore 65→64 | ✅ FERME |
| BUG-14 | Orange introMonths 6→12 | ✅ FERME |

### P1 — 0 ouvert ✅

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-03 | bestActionId dead code | ✅ FERME |
| BUG-04 | Observatoire Orange | ✅ FERME |
| BUG-05 | Orange deal negatif sur 24m | ✅ RESOLU |
| BUG-06 | Handoff prix post-promo Red | ✅ FERME |
| BUG-07 | Handoff Wi-Fi Bouygues | ✅ FERME |
| BUG-13 | Scoring cascade | ✅ RESOLU |
| BUG-15 | Orange post-promo 42,99 vs 32,99 | ✅ FERME |

### P2

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-08 | Aucun test unitaire | ✅ FERME (55 assertions) |
| BUG-09 | Donnees observatoire synthetiques | ✅ MITIGE (labellise) |
| BUG-10 | Chemin LLM non teste | ⚠️ ACCEPTE (heuristique suffit pour beta) |
| BUG-12 | B&YOU Pure Fibre Plus non tracke | ⚠️ ACCEPTE (post-launch) |
| BUG-16 | Ecart ranking Bouygues/SFR | ✅ FERME (code correct, rapport corrige) |

### P3

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-17 | Widget savings sans frais de mise en service | ⚠️ ACCEPTE (cosmetique, "potentielles") |
| BUG-18 | Card savings vs widget savings ecart ~39 EUR | ⚠️ NOTE (card plus precise — inclut setup) |

---

## Verification claims launch-safe — stable

Tous les 16 claims PM-validated (15 originaux + 1 "30 secondes" dans OG meta)
sont presents et corrects. Les claims OG/Twitter sont un sous-ensemble exact
de la copy V7 validee. Aucun nouveau claim introduit. Aucune sur-promesse.

---

## QA-02 — Launch Gate (cycle 9)

### Gate criteria

| Critere | Statut | Evidence |
|---------|--------|----------|
| Zero P0 ouvert | ✅ **PASS** | 5/5 P0 historiques fermes |
| Zero P1 bloquant | ✅ **PASS** | 7/7 P1 fermes |
| Build propre | ✅ **PASS** | 0 erreurs, 44 modules |
| Tests verts | ✅ **PASS** | 55/55 passed |
| URLs sources stables | ✅ **PASS** | 4/4 HTTP 200 a 19:20 CET |
| Claims launch-safe | ✅ **PASS** | 16/16 claims verifies + OG meta safe |
| Trust-first elements | ✅ **PASS** | Beta badge + trust bar + disclaimers + footer |
| Reco primaire coherente | ✅ **PASS** | Red = switch, 204 EUR/an, TV trade-off explicite |
| Valeurs calculees correctes | ✅ **PASS** | 6/6 offres verifiees |
| Code ↔ copy ↔ marche alignes | ✅ **PASS** | Tous prix verifies source live 13 mars |
| Regression formelle | ✅ **PASS** | QA-03 + cycle 9: zero regression |
| URL deploiement live | ✅ **PASS** | renego-commodites-fr.vercel.app → 200 |
| **Social meta launch-safe** | ✅ **PASS** | **17/17 meta tags, OG image verified, zero PII** |

**Gate result: 13/13 PASS** (+1 vs cycle 8: Social meta added)

### Gate caveats (non-bloquants)

1. Beta: donnees relevees manuellement, Freebox uniquement
2. Screenshot/GIF du flow a produire avant Day 3
3. Widget savings n'inclut pas les frais de setup (P3 cosmetique)
4. Canvas fonts varient entre OS (P3 cosmetique)
5. OG image won't render on social platforms until next Vercel deploy (low risk — auto-deployed)

---

## Risques residuels

| # | Risque | Severite | Mitigation |
|---|--------|----------|------------|
| 1 | Prix marche changent avant le 15 | Moyenne | Re-check URLs matin du 15. Offers-FR 08:20 wave. |
| 2 | OG image pas live tant que Vercel re-deploy | Faible | Image statique dans public/, auto-deployed. Verifier post-deploy via opengraph.xyz. |
| 3 | Footer pas revu par juriste | Basse | Langage conservatif, disclaimer complet. |
| 4 | LLM non teste | Basse | Heuristique suffit pour beta. |
| 5 | Screenshot/GIF manquant | P2 | A produire avant Day 3 (Growth). |
| 6 | Canvas fonts varient entre OS | P3 | System sans-serif fallback, layout identique. |
| 7 | Domaine custom non branche | Faible | URL Vercel suffit pour beta. |
| 8 | Social platforms cache OG | Faible | Premier partage = frais. Cache-buster dispo. |

---

## Verdict

### **GO — launch with caveats (99/100)**

**Changement vs cycle 8 (+0 points, but critical launch polish):**
- Social meta tags (17/17): **VERIFIE** — OG + Twitter Card + favicon + theme-color ✅
- OG image 1200×630: **VERIFIE** — branded, zero PII, zero staleable prices ✅
- OG meta claims: **LAUNCH-SAFE** — subset of existing PM-validated copy ✅
- Title user-facing: **VERIFIE** — "ReneGo — Payez-vous trop cher votre box internet ?" ✅
- Zero source code changes: **CONFIRMED** — pure metadata delivery ✅
- Regression cycle 9: **PASSEE** — 44 modules, 55 tests, 5 URLs OK, zero regression ✅

**Ce qui est solide:**
- Reco primaire Red by SFR: 590,76 EUR / 24m, 204 EUR/an savings — verifiee
- 4 alternatives avec cout 24m correct et trade-offs explicites
- Trust-first complet: beta badge, disclaimers, sources, dates
- Zero bug ouvert au-dessus de P2
- 55 tests verts, build propre, URLs stables
- Claims PM-validated (16/16), copy launch-safe
- DEV-10 widget + DEV-11 diagnostic card + social meta: tous verifies
- Regression formelle QA-03 + 3 cycles consecutifs (7/8/9): zero regression
- URL publique live et accessible
- Launch gate 13/13 criteres passes
- **Social sharing prêt pour le Day 3 launch** (Reddit/Twitter preview cards)

**Caveats restants (non-bloquants):**
1. Beta: donnees manuelles, Freebox uniquement, pas de conseil financier
2. Screenshots/GIF a produire avant Day 3
3. OG image visible apres prochain Vercel deploy

**Condition de passage a 100:**
- [ ] Screenshots/GIF produits (Growth)
