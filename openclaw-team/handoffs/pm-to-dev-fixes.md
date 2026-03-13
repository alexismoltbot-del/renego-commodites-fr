# PM → Dev Fix Priorities

Date: 2026-03-12 17:20
Window: **18:00 - 18:40** (40 minutes max)
Source: QA report `reports/qa-report.md`

---

## Situation

Le QA a rendu un verdict **GO WITH CAVEATS**. Le flow tourne, le scoring est coherent (SFR = champion valeur, Red by SFR = champion prix). Les principaux risques demo sont les URLs cassees et le decalage entre le handoff dev (qui disait Red by SFR) et le code reel (qui dit SFR).

Le code est correct. Le handoff etait faux. Le PM est rebriefe.

---

## FIX-01 (P0) — Reparer ou retirer les liens sources

Les 4 URLs retournent des erreurs HTTP (404/400/403). Un clic pendant la demo = perte de credibilite immediate.

**Option A (rapide, 5 min) — Retirer les liens cliquables:**

Dans `src/App.tsx`, remplacer le `<a>` par un `<span>` non cliquable. Les labels et dates restent visibles, mais on ne promet pas un lien fonctionnel.

**Option B (15 min) — Trouver les vraies URLs:**

Chercher les URLs actuelles des pages:
- SFR Fibre Starter → probablement `https://www.sfr.fr/box-internet`
- Orange Livebox Fibre → probablement `https://boutique.orange.fr/internet`
- Red by SFR → probablement `https://www.red-by-sfr.fr/box-internet`
- Bouygues → guide tarifaire PDF, URL stable a trouver

Verifier chaque URL avec `curl -sL -o /dev/null -w "%{http_code}"` avant de commiter.

**Decision PM:** Faire l'option A maintenant. Si le temps reste apres FIX-02, tenter l'option B.

**AC:** aucun lien cliquable ne mene a une page d'erreur pendant la demo.

---

## FIX-02 (P1) — Corriger le prix observatoire Orange

L'observatoire trace Orange a ~42,99 EUR (prix standard) alors que l'offre affichee est a 24,99 EUR (prix promo). C'est incoherent visuellement.

**Fix:** dans `buildObservatory()`, ajouter un commentaire et tracer le prix promo (24,99 EUR) pour Orange, ou retirer Orange de l'observatoire. L'observatoire n'est pas un element critique de la demo, donc la solution la plus rapide l'emporte.

**AC:** pas de question embarrassante "pourquoi Orange est le plus cher sur le graphe alors qu'il a le 2e meilleur prix".

---

## NE PAS TOUCHER

- Le scoring engine — il est correct, SFR gagne comme champion valeur
- `bestActionId` — c'est du dead code (BUG-03), on le nettoiera apres la demo
- Le test E2E — il est coherent avec le code actuel
- Le chemin LLM — pas de cle API, pas de test premium
- La structure des offres — les 4 alternatives sont correctes

---

## Rappel timing

- 18:00: commencer par FIX-01 option A (5 min)
- 18:10: FIX-02 (10 min)
- 18:20: `npm run build` + verification visuelle rapide
- 18:30: si le temps reste, tenter FIX-01 option B (URLs reelles)
- 18:40: stop, on freeze pour la scorecard PM

Status: ready
