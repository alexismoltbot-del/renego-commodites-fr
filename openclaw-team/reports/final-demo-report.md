# Final Demo Report

Session: 2026-03-12
Redige par: PM
Statut: **DRAFT — a finaliser a 18:40 apres les fixes dev**

---

## Mission

Prouver qu'une equipe de 4 agents (PM, Research-US, Dev, QA) peut produire une demo credible sur la verticale "box internet France" en un apres-midi, a partir du repo existant.

## Ce qui a ete livre

### Recherche US (RES-01)

- 4 services US analyses en profondeur (Rocket Money, Billshark, Trim, Hiatus) + 4 secondaires
- Marche US: $1.2B, CAGR 15%
- Whitespace FR confirme: aucun acteur francais ne fait de negociation active
- 5 lecons actionnables (fee model, acquisition hook, AI-first, B2B, exit pattern)
- Source complete: `market/us-comparables.md`

### Benchmark FR (PM-02)

- 4 offres alternatives sourcees: SFR Fibre Starter, Bouygues Bbox Must, Orange Livebox, Red by SFR
- + offre de retention Free + option "attendre"
- Prix, engagement, TV, debit, source, date de releve pour chaque offre

### Dev (DEV-01 a DEV-05)

- 4 alternatives visibles dans le flow (etait 2)
- Sources et dates affichees par offre
- "Non visible sur la facture" elimine — specs publiques utilisees
- Lignes "Prix apres promo" ajoutees (SFR, Bouygues, Orange)
- Cout total 24 mois calcule et affiche
- Plan d'action avec resume financier et owner par etape
- Double lens scoring: champion prix (Red by SFR) vs champion valeur (SFR Starter)
- Snapshot marche centralise dans `boxMarketSnapshot.ts`

### QA (QA-01, QA-02)

- Build propre (0 erreurs TypeScript, 0 erreurs Vite)
- Flow de bout en bout verifie
- Scoring retrace independamment
- 10 findings documentes avec severites
- Verdict: GO WITH CAVEATS

## Ce qui n'a pas ete fait

- Test du mode premium LLM (pas de cle API)
- Eligibilite par adresse
- Scraping dynamique des prix
- Nouvelles verticales (mobile, energie, assurance)

## Bugs connus a la demo

| # | Severite | Description | Mitigation |
|---|----------|-------------|------------|
| BUG-02 | P0 | URLs sources retournent 404/400/403 | FIX-01: liens desactives ou URLs corrigees |
| BUG-04 | P1 | Observatoire Orange trace prix standard vs prix promo | FIX-02: corriger ou retirer |
| BUG-03 | P1 | `bestActionId` = dead code | Non visible en demo, post-demo |
| BUG-05 | P1 | Orange = deal negatif sur 24 mois | Le panel l'affiche correctement (verdict "worse") |
| BUG-10 | P2 | Chemin LLM non teste | Heuristique suffit |

## Talking points demo

1. **L'utilisateur importe sa facture Freebox** → extraction instantanee, 98% confiance
2. **Le moteur compare a 4 alternatives sourcees** avec prix, TV, debit, engagement
3. **Double recommandation visible:** SFR Starter (champion valeur: 144 EUR/an, TV 160 chaines, 1 Gb/s) vs Red by SFR (champion prix: 180 EUR/an, sans engagement, mais TV minimale)
4. **Prix apres promo affiche** — le consommateur voit le vrai cout, pas juste la promo
5. **Cout sur 24 mois calcule** — Orange est un deal negatif, le moteur le montre
6. **Plan d'action structure:** qui fait quoi, quelles preuves, quel statut
7. **Aucun equivalent francais n'existe** — les comparateurs FR ne negocient pas

## Timeline de la session

| Heure | Agent | Livrable |
|-------|-------|----------|
| 14:45 | PM | Scope gele, backlog, criteria d'acceptation |
| 15:25 | Research-US | Handoff US avec 5 lecons actionnables |
| 15:29 | PM | Benchmark FR + handoff dev v2 |
| 15:55 | Dev | 4 alternatives, sources, prix apres promo, plan d'action |
| 17:09 | QA | Rapport complet, 10 findings, verdict GO WITH CAVEATS |
| 17:20 | PM | Triage QA, fix priorities, scorecard draft |
| 18:00-18:40 | Dev | Fixes P0/P1 |
| 18:40-19:00 | PM | Scorecard finale, rapport final |

## Verdict preliminaire

**GO WITH CAVEATS**

La demo est montrable si:
1. Les liens sources ne sont pas cliques (ou sont corriges par FIX-01)
2. Le PM presente SFR comme reco principale (pas Red by SFR)
3. Le gain annonce est 144 EUR/an (SFR), avec Red by SFR a 180 EUR/an en alternative prix pur

L'equipe d'agents a produit un increment mesurable en ~4h: +2 offres, sources visibles, prix post-promo, cout 24 mois, plan d'action structure, QA rigoureuse. Le flow existant est significativement plus credible qu'en debut de session.

---

*Score final et verdict definitif: voir `KPI_SCORECARD.md` (a remplir a 18:40)*
