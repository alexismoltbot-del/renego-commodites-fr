# Backlog

Session: 2026-03-12 — scope gele a 14:45, priorities affinées a 15:29

## Done

- [x] SETUP-01 Creer l'espace de travail `openclaw-team`
- [x] SETUP-02 Definir les roles PM / Research-US / Dev / QA
- [x] PM-01 Geler le scope et ecrire les criteria d'acceptation du jour
- [x] RES-01 Identifier les comparables US et leur feature set
  - **Livre a:** 15:25
  - **Resultat:** 4 services US couverts en profondeur (Rocket Money, Billshark, Hiatus, Trim) + 4 secondaires (Kudos, BillFixers, Cushion, Pine AI). Marche $1.2B, CAGR 15%. Whitespace FR confirme. Handoff `research-to-pm.md` livre.
- [x] PM-02-SYNTHESIS Convertir la recherche US en priorities produit
  - **Livre a:** 15:29
  - **Resultat:** handoff pm-to-dev.md v2 ecrit, backlog re-priorise, 4 offres specifiees avec prix/sources/comparisons

## In Progress

- [ ] PM-02 Consolider un benchmark FR de 4 a 6 offres box officielles
  - **AC:** au moins 4 offres fibre grand public (Orange, SFR, Bouygues, Free) avec prix TTC, engagement, TV, debit, source URL, date de releve
  - **AC:** format tabulaire ou JSON exploitable par le dev
  - **AC:** les offres Red by SFR / Sosh / B&You a considerer en plus des marques principales
  - **Status:** donnees integrees dans pm-to-dev.md v2 avec les 4 offres (SFR Starter, Bouygues Must, Orange Livebox, Red by SFR). Le dev a les prix, URLs et specs.
  - **Due:** 15:30 ✅ (materiel livre dans le handoff dev)

## Ready — Dev Sprint (15:30–17:15)

Priorite stricte: executer de haut en bas, couper par le bas si le temps manque.

### P0

- [ ] DEV-01 Ajouter Orange Livebox Fibre + Red by SFR THE BOX dans `contractAnalysis.ts`
  - **AC:** 4 alternatives visibles (SFR Starter + Bouygues + Orange + Red by SFR)
  - **AC:** chaque offre a `source.url` valide et `source.asOf` du 12 mars 2026
  - **AC:** `comparisons` rempli pour chaque nouvelle offre (incl. ligne "Prix apres promo")
  - **AC:** `buildObservatory()` inclut Red by SFR
  - **AC:** `buildDiagnosticFacts()` met a jour le meilleur prix repere (24,99 EUR Red by SFR)
  - **AC:** `npm run build` passe sans erreur
  - **AC:** scoring engine rank Red by SFR pres du top (verifier `scoreOffer()`)
  - **Spec complete:** voir `handoffs/pm-to-dev.md` section DEV-01

- [ ] DEV-02 Rendre les sources visibles + eliminer "Non visible sur la facture"
  - **AC:** zero "Non visible sur la facture" dans les comparisons — remplace par spec publique Freebox Revolution
  - **AC:** source URL cliquable dans le front (App.tsx, lien `<a>` sur `source.url`)
  - **AC:** toutes les dates `asOf` mises a jour a "12 mars 2026"
  - **Spec complete:** voir `handoffs/pm-to-dev.md` section DEV-02

### P1

- [ ] DEV-03 Ajouter "Prix apres promo" + cout sur 24 mois
  - **AC:** ligne "Prix apres promo (annee 2)" dans les comparisons SFR, Bouygues, Orange
  - **AC:** Red by SFR montre explicitement "prix fixe" / "identique"
  - **AC:** au moins un endroit dans l'UI montre un cout total sur 24 mois
  - **Spec complete:** voir `handoffs/pm-to-dev.md` section DEV-03

- [ ] DEV-05 Clarifier le plan d'action post-decision
  - **AC:** chaque etape montre clairement si c'est l'outil ou l'utilisateur qui agit
  - **AC:** un resume financier apparait dans le plan d'action
  - **Spec complete:** voir `handoffs/pm-to-dev.md` section DEV-05

### P2 (conditionnel — APPR-01)

- [ ] DEV-04 Tester le mode premium (LLM) en condition reelle
  - **AC:** lancer le flow avec au moins une cle API active
  - **AC:** verifier que le DecisionMemo est coherent avec les memes offres
  - **AC:** si les deux cles sont absentes, le fallback heuristique fonctionne (regression zero)
  - **Bloque par:** APPR-01 (cle API necessaire avant 16:30)

## Ready — QA (17:15–18:00)

- [ ] QA-01 Executer le flow de bout en bout avec le cas Freebox
  - **AC:** `npm run build` passe sans erreur
  - **AC:** `npm run test:e2e` passe avec la facture Freebox reelle
  - **AC:** le flow UI fonctionne de l'import a la recommendation
  - **AC:** tester avec et sans cle API
  - **AC:** verifier que les 4 alternatives s'affichent avec sources et prix

- [ ] QA-02 Rediger un rapport avec severites et risque demo
  - **AC:** chaque bug a une severite (P0 bloquant / P1 majeur / P2 mineur / P3 cosmetique)
  - **AC:** verdict clair: demo-ready ou pas, et pourquoi
  - **AC:** rapport ecrit dans `openclaw-team/reports/qa-report.md`

## Ready — PM Final (18:40–19:00)

- [ ] PM-03 Remplir la scorecard finale
  - **Due:** 18:40

## Deferred (hors scope aujourd'hui)

- [ ] Ajouter mobile
- [ ] Ajouter energie
- [ ] Ajouter assurance
- [ ] Eligibilite par adresse (API)
- [ ] Marketing et sales
- [ ] OAuth fournisseurs
- [ ] Negociation vocale automatique
- [ ] Free subscription tracker (hook d'acquisition US) — a etudier pour V2
- [ ] B2B / marque blanche API — architecture a preparer pour V2+
- [ ] Integration Plaid/Bridge/Powens pour open banking — V3
