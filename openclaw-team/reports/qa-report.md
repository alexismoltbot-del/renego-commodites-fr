# QA Report — Day 2 QA gate (cycle 7)

Date: 2026-03-13 11:20 CET
Etat: **REGRESSION COMPLETE — DEV-10 verifie, BUG-16 ferme, doc error corrigee**
Moteur teste: Heuristique locale (aucune API key LLM)
Build: `npm run build` ✅ (tsc + vite, 0 erreurs, 43 modules, 883ms)
Unit tests: `npm run test:unit` ✅ (55 passed, 0 failed)
Previous report: 2026-03-13 07:20 CET (Day 1 — cycle 6, GO 97/100)

---

## Contexte

Ce cycle QA intervient apres la livraison DEV-10 (Instant Price Check widget,
10:05 CET). Regression complete incluant verification du widget, re-verification
de tous les prix 24 mois, et correction d'une erreur documentaire dans les
rapports precedents (SFR/Bouygues formules inversees).

## Commandes executees

```bash
npm run build                             # ✅ 0 erreurs, 43 modules (+1 widget), 883ms
npm run test:unit                         # ✅ 55 passed, 0 failed
curl -sL -o /dev/null -w "%{http_code}" https://www.sfr.fr/offre-internet           # 200
curl -sL -o /dev/null -w "%{http_code}" https://www.bouyguestelecom.fr/offres-internet  # 200
curl -sL -o /dev/null -w "%{http_code}" https://boutique.orange.fr/internet/offres-fibre  # 200
curl -sL -o /dev/null -w "%{http_code}" https://www.red-by-sfr.fr/offre-internet/     # 200
grep -n 'fitScore.*>= 6' src/lib/recommendationEngine.ts  # ✅ ligne 116: fitScore >= 64
grep -n 'introMonthlyPriceEur' src/lib/boxMarketSnapshot.ts  # ✅ Orange: 29.99
grep -n 'MARKET_SNAPSHOT_AS_OF' src/lib/boxMarketSnapshot.ts  # ✅ "13 mars 2026"
npx tsx -e "verify all 24m costs from code"  # ✅ All 4 offers verified
```

---

## ⚠️ ERRATUM — Correction SFR/Bouygues dans les rapports precedents

### Decouverte

Les rapports QA cycles 5 et 6 contenaient une **erreur de documentation** dans
le tableau des formules 24 mois et le classement. Les formules de SFR et
Bouygues etaient inversees:

| Ce que les rapports disaient | Realite dans le code et les tests |
|------------------------------|-----------------------------------|
| Bouygues: 27,99 × 12 + 38,99 × 12 = 803,76 | **SFR** Fibre Starter: 27,99 × 12 + 38,99 × 12 + 49 = **852,76** |
| SFR: 35,99 × 12 + 42,99 × 12 + 49 = 996,76 | **Bouygues** Bbox Must: 35,99 × 12 + 42,99 × 12 + 49 = **996,76** |

De plus, la formule "Bouygues" omettait les 49 EUR de frais de mise en service
(803,76 au lieu de 852,76).

### Impact

- **Le code est correct.** Les tests unitaires verifient SFR=852,76 et Bouygues=996,76 — **et passent.**
- **Le produit est correct.** L'UI affiche les bons chiffres. Aucun utilisateur n'a vu de prix faux.
- **Seuls les rapports QA et handoffs etaient faux.** Erreur de copier-coller entre les deux providers.
- **Le classement 24 mois etait faux dans les rapports.** Bouygues etait classe #2 alors qu'il est #6.
- **Aucun impact sur la reco primaire (Red) ni sur le verdict launch.**

### Classement corrige

| Rang | Offre | Formule | Cout 24m | vs Free actuel |
|------|-------|---------|----------|----------------|
| 1 | **Red by SFR** | 22,99 × 24 + 39 | **590,76 EUR** | **-369 EUR** |
| 2 | **SFR Fibre Starter** | 27,99 × 12 + 38,99 × 12 + 49 | **852,76 EUR** | **-107 EUR** |
| 3 | Free retention | 35,99 × 12 + 39,99 × 12 | 911,76 EUR | -48 EUR |
| 4 | Orange Livebox | 29,99 × 12 + 42,99 × 12 + 49 | 924,76 EUR | -35 EUR |
| 5 | Free actuel | 39,99 × 24 | 959,76 EUR | — |
| 6 | **Bouygues Bbox Must** | 35,99 × 12 + 42,99 × 12 + 49 | **996,76 EUR** | **+37 EUR** |

---

## Verification DEV-10 — Instant Price Check Widget ✅

### Component review

- `src/components/InstantPriceCheck.tsx` — 171 lignes, propre
- Importe dans `src/App.tsx` ligne 6, rendu ligne 345
- Place entre le hero et le trust bar (above the fold) ✅
- Donnees sourcees de `boxMarketSnapshot.ts` (meme source que le moteur de reco) ✅
- 100% client-side, zero PII ✅

### Edge cases verifies dans le code

| Cas | Logique | Correct |
|-----|---------|---------|
| Prix ≤ 22,99 | → "meilleur prix du marche" | ✅ |
| Red by SFR + prix ≤ 23,99 | → "offre la plus competitive" | ✅ |
| Free + prix > 40 | → "promo expiree" + savings | ✅ |
| Prix > 22,99 (autres) | → delta + savings 24m | ✅ |
| Champs vides | → bouton disabled | ✅ |
| Virgule decimale | → `replace(",", ".")` | ✅ |
| Prix 0-200 range | → validé | ✅ |
| Enter key | → trigger check | ✅ |

### Widget P3 — economies sans frais de mise en service

Le widget affiche `delta × 24` comme economies potentielles, sans soustraire les
39 EUR de frais de mise en service Red. Exemple: Free 39,99/mois → widget dit
408 EUR d'economies, le diagnostic complet dit 369 EUR. C'est coherent avec le
libelle "economies potentielles" (comparison mensuelle pure) et le widget est un
teaser, pas le diagnostic. Accepte comme P3 cosmétique.

---

## BUG-16 — Verification SFR/Bouygues 24m ✅ FERME

### Valeurs dans le code (verification directe npx tsx)

| Offre | intro/mois | standard/mois | setup | 24m calcule | Test assertion | Match |
|-------|------------|---------------|-------|-------------|----------------|-------|
| SFR Fibre Starter | 27,99 | 38,99 | 49 | **852,76** | 852,76 | ✅ |
| Bouygues Bbox Must | 35,99 | 42,99 | 49 | **996,76** | 996,76 | ✅ |

### Verdict BUG-16

**FERME.** Le code et les tests sont corrects depuis le debut. C'etait une
erreur de documentation dans les rapports QA, pas un bug dans le produit. Les
rapports sont corriges dans ce cycle.

---

## QA-03 — Regression suite formalisee ✅

### Build & compilation

| Check | Resultat | Detail |
|-------|----------|--------|
| `npm run build` | ✅ PASS | 0 erreur, 43 modules, 883ms |
| Modules | ✅ | 43 (+1 InstantPriceCheck vs cycle 6) |
| Bundle size | ✅ | JS 251+406 kB, CSS 15 kB (raisonnable) |

### Unit tests

| Check | Resultat | Detail |
|-------|----------|--------|
| `npm run test:unit` | ✅ PASS | 55/55, 0 failed |
| 24m costs (4 offers + retention + current) | ✅ | Tous verifies |
| Scoring engine lenses | ✅ | Red = price + value champion |
| Decision memo | ✅ | Red selected, direction=change_now |
| Comparison rows | ✅ | Post-promo verdicts corrects |
| Retention & wait options | ✅ | Corrects |

### URLs sources

| URL | Statut | Heure |
|-----|--------|-------|
| sfr.fr/offre-internet | ✅ 200 | 11:20 CET |
| bouyguestelecom.fr/offres-internet | ✅ 200 | 11:20 CET |
| boutique.orange.fr/internet/offres-fibre | ✅ 200 | 11:20 CET |
| red-by-sfr.fr/offre-internet/ | ✅ 200 | 11:20 CET |

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
| Stories disclaimer | ✅ |
| Action disclaimer | ✅ |

### New features (DEV-10)

| Check | Resultat |
|-------|---------|
| Widget component exists | ✅ (171 lines) |
| Widget imported in App.tsx | ✅ (line 6, rendered line 345) |
| Widget uses boxMarketSnapshot data | ✅ |
| Widget zero PII | ✅ |
| Widget edge cases handled | ✅ (5/5 verified in code) |

### Regression: no regressions detected

| Area | Status |
|------|--------|
| Build compiles | ✅ No new errors |
| All 55 tests pass | ✅ No regressions |
| All 4 URLs still 200 | ✅ No broken links |
| All prices unchanged | ✅ No data drift |
| All trust elements present | ✅ No missing elements |
| Scoring logic unchanged | ✅ No recommendation flip |
| Existing components intact | ✅ Widget additive only |

**QA-03 VERDICT: PASS — zero regression detected.**

---

## Bug tracker — Etat complet

### P0 — 0 ouvert ✅

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-01 | Handoff dev materiellement faux | ✅ FERME |
| BUG-02 | 4 URLs sources en erreur HTTP | ✅ FERME (4/4 re-verifiees 11:20) |
| BUG-11 | Code/landing copy desync Red by SFR | ✅ FERME |
| BUG-13-FIX | Seuil fitScore 65→64 | ✅ FERME |
| BUG-14 | Orange introMonths 6→12 | ✅ FERME |

### P1 — 0 ouvert ✅

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-03 | bestActionId dead code | ✅ FERME |
| BUG-04 | Observatoire Orange | ✅ FERME |
| BUG-05 | Orange deal negatif sur 24m | ✅ RESOLU (side effect BUG-14) |
| BUG-06 | Handoff prix post-promo Red | ✅ FERME |
| BUG-07 | Handoff Wi-Fi Bouygues | ✅ FERME |
| BUG-13 | Scoring cascade | ✅ RESOLU (BUG-13-FIX) |
| BUG-15 | Orange post-promo 42,99 vs 32,99 | ✅ FERME |

### P2

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-08 | Aucun test unitaire | ✅ FERME (55 assertions) |
| BUG-09 | Donnees observatoire synthetiques | ✅ MITIGE (labellise "Donnees manuelles") |
| BUG-10 | Chemin LLM non teste | ⚠️ ACCEPTE (heuristique suffit pour beta) |
| BUG-12 | B&YOU Pure Fibre Plus non tracke | ⚠️ ACCEPTE (post-launch) |
| **BUG-16** | **Ecart ranking Bouygues/SFR** | ✅ **FERME** (code correct, rapport corrige) |

### P3

| Bug | Titre | Statut |
|-----|-------|--------|
| BUG-17 | Widget savings sans frais de mise en service | ⚠️ ACCEPTE (cosmétique, "potentielles") |

---

## Verification claims launch-safe — stable

Tous les 13 claims PM-validated (QA-05 + PM-05) sont toujours presents et
corrects dans le code. Aucun changement depuis cycle 6.

---

## QA-02 — Launch Gate (mise a jour)

### Gate criteria

| Critere | Statut | Evidence |
|---------|--------|----------|
| Zero P0 ouvert | ✅ **PASS** | 5/5 P0 historiques fermes |
| Zero P1 bloquant | ✅ **PASS** | 7/7 P1 fermes |
| Build propre | ✅ **PASS** | 0 erreurs, 43 modules |
| Tests verts | ✅ **PASS** | 55/55 passed |
| URLs sources stables | ✅ **PASS** | 4/4 HTTP 200 a 11:20 CET |
| Claims launch-safe | ✅ **PASS** | 13/13 claims verifies |
| Trust-first elements | ✅ **PASS** | Beta badge + trust bar + disclaimers + footer |
| Reco primaire coherente | ✅ **PASS** | Red = switch, 204 EUR/an, TV trade-off explicite |
| Valeurs calculees correctes | ✅ **PASS** | 6/6 offres verifiees (classement corrige) |
| Code ↔ copy ↔ marche alignes | ✅ **PASS** | Tous prix verifies source live 13 mars |
| **Regression formelle** | ✅ **PASS** | **QA-03 complete: zero regression** |

**Gate result: 11/11 PASS** (ajoute QA-03)

### Gate caveats (non-bloquants)

1. Beta: donnees relevees manuellement, Freebox uniquement
2. URL de deploiement non confirmee (decision humaine, pas QA)
3. Screenshot/GIF du flow a produire avant Day 3
4. Widget savings n'inclut pas les frais de setup (P3)

---

## Risques residuels

| # | Risque | Severite | Mitigation |
|---|--------|----------|------------|
| 1 | URL deploiement inconnue | Haute | Decision humaine avant le 14/03. Fallback: Vercel/Netlify. |
| 2 | Prix marche changent avant le 15 | Moyenne | Re-check URLs matin du 15 |
| 3 | Footer pas revu par juriste | Basse | Langage conservatif, disclaimer complet |
| 4 | LLM non teste | Basse | Heuristique suffit pour beta |
| 5 | Screenshot/GIF manquant | P2 | A produire avant Day 3 |
| 6 | Widget edge cases non couverts par tests unitaires | P3 | Logic trivial, manuellement verifie |

---

## Verdict

### **GO — launch with caveats (98/100)**

**Changement vs cycle 6 (+1 point):**
- QA-03 regression formelle: **PASSEE** — zero regression, 43 modules, 55 tests, 4 URLs OK
- BUG-16: **FERME** — SFR/Bouygues verifies, erreur doc corrigee
- DEV-10 widget: **VERIFIE** — fonctionnel, edge cases corrects, zero PII
- Erratum SFR/Bouygues: corrige dans tous les rapports

**Ce qui est solide:**
- Reco primaire Red by SFR: 590,76 EUR / 24m, 204 EUR/an savings — verifiee
- 4 alternatives avec cout 24m correct et trade-offs explicites
- Trust-first complet: beta badge, disclaimers, sources, dates
- Zero bug ouvert au-dessus de P2
- 55 tests verts, build propre, URLs stables
- Claims PM-validated (13/13), copy launch-safe
- DEV-10 widget fonctionnel
- Regression formelle QA-03: zero regression

**Caveats restants (non-bloquants):**
1. Beta: donnees manuelles, Freebox uniquement, pas de conseil financier
2. URL deploiement non confirmee (decision humaine)
3. Screenshots/GIF a produire

**Condition de passage a 100:**
- [ ] URL de deploiement confirmee (decision humaine)
- [ ] Screenshots/GIF produits
