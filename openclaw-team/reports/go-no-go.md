# Go / No-Go — Dossier de Lancement

**Date:** 2026-03-13 17:05 CET (DRAFT — finalized Day 3 09:05)
**Owner:** renego-pm (PM-03)
**Target launch:** 2026-03-15 ~15:00 CET

---

## Verdict préliminaire: **GO — launch with caveats**

Ce dossier sera finalisé le 15 mars matin après le dernier run QA et le
spot-check prix. La structure et les données ci-dessous reflètent l'état au
13 mars 17:05 CET. Les sections marquées `[DAY 3 UPDATE]` seront complétées.

---

## 1. Critères de lancement — état actuel

| # | Critère | Requis | Statut | Source |
|---|---------|--------|--------|--------|
| 1 | Zero P0 ouvert | Obligatoire | ✅ 0 P0 (5/5 fermés) | QA cycle 8 |
| 2 | Zero P1 bloquant | Obligatoire | ✅ 0 P1 (7/7 fermés) | QA cycle 8 |
| 3 | Build propre | Obligatoire | ✅ 44 modules, 0 erreurs | QA cycle 8 |
| 4 | Tests unitaires verts | Obligatoire | ✅ 55/55 passés | QA cycle 8 |
| 5 | URLs sources vivantes | Obligatoire | ✅ 4/4 HTTP 200 | QA 15:20 CET |
| 6 | URL déploiement live | Obligatoire | ✅ Vercel HTTP 200 | QA 15:20 CET |
| 7 | Claims launch-safe | Obligatoire | ✅ 16/16 vérifiés | PM-05 + QA-05 |
| 8 | Code ↔ copy ↔ marché alignés | Obligatoire | ✅ Tous alignés | QA + Offers-FR |
| 9 | Reco primaire cohérente | Obligatoire | ✅ Red = switch, TV trade-off | QA cycle 8 |
| 10 | Régression formelle passée | Obligatoire | ✅ QA-03 + cycle 8 | QA 15:20 CET |
| 11 | Landing copy validée | Obligatoire | ✅ V7, PM-validated | PM-05 |
| 12 | Launch gate formalisée | Obligatoire | ✅ 12/12 critères | QA-02 cycle 8 |
| 13 | Screenshots/GIF produits | Souhaité | ✅ 3 PNGs (19:42 CET) | Growth 19:40 |
| 14 | Prix re-vérifiés J-0 | Souhaité | ⏳ `[DAY 3 UPDATE]` | Offers-FR 08:20 |
| 15 | Régression finale J-0 | Souhaité | ⏳ `[DAY 3 UPDATE]` | QA 11:20 |

**Critères obligatoires: 12/12 passés.**
**Critères souhaités: 2/3 passés (URL + screenshots), 1 en cours (Day 3 confirmations).**

---

## 2. Risques résiduels

| # | Risque | Probabilité | Impact | Mitigation |
|---|--------|-------------|--------|------------|
| R1 | Prix marché changent entre 13/03 et 15/03 | Faible | Moyenne | Spot-check 15/03 matin. Si changement, patch immédiat (<30 min). |
| R2 | Domaine custom non branché | Nulle | Faible | URL Vercel suffit pour beta. Domaine custom = post-launch. |
| R3 | Footer non relu par juriste | Faible | Faible | Langage conservatif ("beta", "snapshot daté", "aucun engagement"). |
| R4 | LLM non testé (heuristique seule) | Confirmé | Faible | Heuristique donne des résultats cohérents. LLM = V2. |
| R5 | B&YOU absent du panel | Confirmé | Faible | Reddit response préparée. Ajout post-launch en priorité. |
| R6 | Bouygues setup fee 48 vs 49 EUR | Confirmé | Négligeable | Écart 1 EUR, P2 accepté. |
| R7 | Orange ODR Bienvenue = remboursement différé | Faible | Faible | Approche conservatrice documentée. |

**Aucun risque critique. Tous mitigés ou acceptés.**

---

## 3. Ce que le produit fait (scope du lancement)

- Import PDF facture box internet → diagnostic automatique
- 4 alternatives comparées avec coût 24 mois, sources, dates
- Reco primaire: Red by SFR (−369 € vs Freebox, trade-off TV explicite)
- Instant Price Check widget (0 PII, 10 secondes)
- Carte diagnostic partageable (0 PII, WhatsApp/feed)
- Observatoire public des prix (sans import)
- Trust-first: beta badge, disclaimers, sources, footer légal

## 4. Ce que le produit NE fait PAS (exclusions explicites)

- ❌ Négociation automatisée auprès des opérateurs
- ❌ Souscription en un clic
- ❌ Surveillance des promos (sentinel → V2)
- ❌ Panel B&YOU, Free Pop, ou offres régionales
- ❌ Mobile, énergie, assurance
- ❌ "IA" ou machine learning (heuristique pure)
- ❌ Données en temps réel (snapshot daté)

## 5. Caveats du lancement

Le verdict est "GO with caveats" — voici les caveats:

1. **Beta explicite.** Le produit est étiqueté beta partout. Pas de promesse
   de continuité de service.
2. **Données manuelles.** Le benchmark est mis à jour manuellement. Les prix
   sont datés et vérifiés, mais pas temps réel.
3. **Cas unique.** Le flow est testé sur une facture Freebox. Les autres cas
   (Orange, SFR, Bouygues comme opérateur actuel) fonctionnent mais ne sont
   pas testés de bout en bout.
4. **Canaux organiques seuls.** Zéro budget pub. La distribution repose sur
   Reddit, Twitter, bouche-à-oreille, et la carte diagnostic.
5. **Pas de juriste.** Le disclaimer est conservatif mais non relu par un
   professionnel du droit.

## 6. Métriques J+7 (cibles indicatives)

| Métrique | Seuil | Objectif | Source |
|----------|-------|----------|--------|
| Widget interactions | > 50 | 200 | Analytics Vercel |
| Factures analysées | > 20 | 100 | Server logs |
| Cartes partagées | > 5 | 30 | Share button events |
| Mandats reçus | > 0 | 10 | Formulaire |
| Feedback form réponses | > 5 | 20 | Google Form |

## 7. Plan de contingence

**Si un problème critique est détecté entre le GO et les posts sociaux:**
- Freeze des posts, diagnostic immédiat
- Si corrigeable en <1h: patch + re-deploy Vercel + continuer
- Si non corrigeable: rollback au dernier état stable, report au lundi 16 mars

**Si les prix changent le 15 mars:**
- Patch `boxMarketSnapshot.ts` + re-deploy (<30 min)
- Si le classement change: mettre à jour la copy avant publication

## 8. Evidence pack

| Document | Localisation | Dernière MAJ |
|----------|-------------|-------------|
| QA launch gate | `reports/qa-report.md` | 15:20 CET 13/03 |
| QA-02 gate (12/12) | `reports/qa-report.md` | 15:20 CET 13/03 |
| Claims table (16/16) | `growth/landing-copy.md` V7 | 15:44 CET 13/03 |
| Benchmark FR | `market/fr-offers-watch.md` | 16:20 CET 13/03 |
| KPI Scorecard | `KPI_SCORECARD.md` | 15:20 CET 13/03 |
| Positioning | `growth/positioning.md` V7 | 15:42 CET 13/03 |
| Landing copy | `growth/landing-copy.md` V7 | 15:44 CET 13/03 |
| Launch plan | `growth/launch-plan.md` V7 | 15:47 CET 13/03 |

---

## `[DAY 3 UPDATE]` — Section à compléter le 15/03 09:05

### Prix spot-check final (Offers-FR 08:20)
_En attente Trust Pass 8._

### Régression finale (QA 11:20)
_En attente cycle 9._

### Screenshots confirmés
✅ 3 PNGs livrés 19:42 CET (desktop 1280×800, mobile 390×844, full-page). Prêts pour Reddit/Twitter Day 3.

### Verdict final
_En attente PM 13:05._

---

**Draft PM-03 — 17:05 CET 13 mars 2026**
