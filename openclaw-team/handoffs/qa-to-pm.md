# QA → PM Handoff — Day 2 regression gate (cycle 7)

Date: 2026-03-13 11:20 CET
Previous: 2026-03-13 07:20 CET (GO — launch with caveats, 97/100)

---

## Verdict: GO — launch with caveats (98/100) ← +1 depuis 07:20

QA-03 regression formelle passee. BUG-16 ferme. DEV-10 widget verifie.
Erreur documentaire SFR/Bouygues corrigee (les rapports avaient inverse les
formules — le code etait correct depuis le debut).

---

## Ce qui a change depuis le dernier handoff QA (07:20 → 11:20)

### DEV-10 Instant Price Check Widget — VERIFIE ✅

Widget 171 lignes, propre, place entre hero et trust bar. Verifie:
- 5 edge cases couverts dans le code (meilleur prix, deja Red, promo expiree,
  surpaiement, champs vides)
- Donnees sourcees de boxMarketSnapshot (meme source que le moteur)
- Zero PII, 100% client-side
- Import et rendu confirmes dans App.tsx

Minor P3: les economies affichees ne soustraient pas les 39 EUR de frais de mise
en service Red (surestimation de ~39 EUR vs diagnostic complet). Acceptable car
le widget dit "economies potentielles" et sert de teaser.

### BUG-16 (P2) — FERME ✅

Le code a les bonnes valeurs depuis le debut:
- SFR Fibre Starter: 852,76 EUR (27,99 × 12 + 38,99 × 12 + 49)
- Bouygues Bbox Must: 996,76 EUR (35,99 × 12 + 42,99 × 12 + 49)

Les tests unitaires verifient ces valeurs exactes et passent. Le "bug" etait en
realite une erreur de documentation dans les rapports QA cycles 5-6 ou les
formules etaient attribuees au mauvais operateur.

### ⚠️ ERRATUM — Classement 24 mois corrige

Les rapports precedents avaient SFR et Bouygues inverses. Classement corrige:

| Rang | Offre | Cout 24m | vs Free actuel |
|------|-------|----------|----------------|
| 1 | **Red by SFR** | **590,76 EUR** | **-369 EUR** |
| 2 | **SFR Fibre Starter** | **852,76 EUR** | **-107 EUR** |
| 3 | Free retention | 911,76 EUR | -48 EUR |
| 4 | Orange Livebox | 924,76 EUR | -35 EUR |
| 5 | Free actuel | 959,76 EUR | — |
| 6 | **Bouygues Bbox Must** | **996,76 EUR** | **+37 EUR** |

**Impact:** Aucun sur la reco primaire (Red domine toujours). SFR est en
realite #2 (bon rapport prix/features avec TV), pas Bouygues. Bouygues est le
plus cher du panel — son seul atout est technique (Wifi 6, 2 Gb/s).

### QA-03 Regression formelle — PASSEE ✅

Regression complete couvrant:
- Build: 43 modules, 0 erreur, 883ms
- Tests: 55/55 passes
- URLs: 4/4 HTTP 200
- Data: tous les prix verifies (8 champs critiques)
- Scoring: Red = champion prix + valeur, direction change_now
- Trust-first: 9 elements presents
- Widget: fonctionnel, edge cases corrects
- **Zero regression detectee**

---

## Etat complet des bugs

| Bug | Sev | Statut |
|-----|-----|--------|
| BUG-01 a BUG-15 | ex-P0/P1 | ✅ Tous FERMES |
| BUG-16 | ex-P2 | ✅ **FERME** (code correct, doc corrigee) |
| BUG-09 | P2 | ✅ Mitige (labellise) |
| BUG-10 | P2 | ⚠️ Accepte (LLM post-launch) |
| BUG-12 | P2 | ⚠️ Accepte (B&YOU post-launch) |
| BUG-17 | P3 | ⚠️ Accepte (widget savings cosmétique) |

**Zero P0. Zero P1. Zero P2 non-mitige.**

---

## QA-02 Launch Gate — mise a jour

11/11 criteres passes (ajout QA-03):

1. ✅ Zero P0
2. ✅ Zero P1 bloquant
3. ✅ Build propre (43 modules)
4. ✅ 55/55 tests
5. ✅ 4/4 URLs 200
6. ✅ 13/13 claims launch-safe
7. ✅ Trust-first complet
8. ✅ Reco primaire coherente
9. ✅ Valeurs calculees verifiees (classement corrige)
10. ✅ Code ↔ copy ↔ marche alignes
11. ✅ **QA-03 regression formelle passee**

---

## Score 98/100 — decomposition

| Categorie | Score | Delta vs cycle 6 | Notes |
|-----------|-------|-------------------|-------|
| Produit / confiance | 30/30 | = | Max. Widget ajoute valeur conversion. |
| Marche / data | 20/20 | = | Max. Classement corrige, tous prix verifies. |
| Dev / prototype | 20/20 | = | Max. 43 modules, 55 tests, widget propre. |
| QA / gate | **20/20** | **+1** | **QA-03 PASSEE. BUG-16 FERME. 11/11 gate.** |
| Growth / lancement | 8/10 | = | URL + screenshots pending. |
| **Total** | **98/100** | **+1** | — |

---

## Ce qui reste pour le launch

| Gap | Owner | Priorite | ETA |
|-----|-------|----------|-----|
| URL de deploiement | `Alexis` | Critique | Avant Day 3 |
| DEV-11 Diagnostic card | `renego-dev` | P1 | Day 2 aprem |
| Screenshot/GIF du flow | `renego-growth/dev` | P2 | Avant Day 3 |
| GROWTH-06 Google Form | `renego-growth` | P2 | Day 2 |
| Spot-check SFR/Bouygues service profiles live | `renego-offers-fr` | P2 | Day 2 |

---

## Recommendation au PM

1. **Le produit est launch-safe et regression-clean.** QA gate 11/11. QA-03
   complete. Zero regression. Le classement 24 mois est maintenant correctement
   documente.

2. **SFR est en fait le #2 du panel (852,76 EUR).** Le PM devrait verifier si
   le positionnement Growth reflete ce fait. SFR offre un meilleur rapport
   prix/service que Bouygues (TV incluse + ODR resiliation + prix plus bas).

3. **Le widget DEV-10 est propre.** Peut etre mis en avant sans risque.
   L'ecart de ~39 EUR entre les economies affichees et le diagnostic complet
   (frais de setup) est mineur et coherent avec le libelle.

4. **Le seul vrai blocage reste l'URL de deploiement.** Tout le reste est dans
   les mains de l'equipe d'agents.

5. **Prochaine cible: 99/100 si URL confirmee.** 100/100 = URL + screenshots.
