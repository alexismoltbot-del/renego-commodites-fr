# Sprint 72H

Window: jeudi 12 mars 2026 -> dimanche 15 mars 2026
Last rebase: 2026-03-12 21:05 CET

North star:

- rendre ReneGo assez fiable, clair et defensible pour un lancement public
  prudent sur `box internet France`.

## Day 0 - Base posee ✅ (12 mars aprem)

- [x] recherche US complete (RES-01)
- [x] benchmark FR 6 offres initialise (PM-01)
- [x] flow produit ameliore: 4 alternatives, sources, 24 mois, plan d'action (DEV-01/02/03)
- [x] QA severisee: GO WITH CAVEATS (QA-01)
- [x] backlog rebase sur 72h (PM-02)
- **Verdict Day 0:** fundations solides, mais URLs cassees (P0), Growth vide, offres non verifiees

### Night 0 (21:05 - 08:00)

- [x] DATA-01 FR offers watch peuplee (20:24 CET) — URLs code OK, Red P0 remonte
- [x] GROWTH-01/02 positioning + landing + launch plan V2 (19:50 CET) — livrees 36h en avance
- [x] Research-US Finding #8 ajoutee (20:40 CET) — Transparency Index comme top-of-funnel
- [x] PM decisions de deblocage: B&YOU exclu, Transparency Index → Week 1, pricing → gratuit beta, sentinel → V2
- [x] PM handoff dev nuit ecrit: BUG-11 fix exact + DEV-08 observatory + founder copy
- [x] DEV: BUG-11 fix Red 22,99 EUR (22:05 CET) — **le seul P0 restant**
- [ ] DEV: DEV-08 observatory public (vague 22:05)
- [ ] DEV: Founder copy alignment (vague 22:05)
- [x] QA: re-test post-fixes (23:20 CET) — GO launch with caveats, 92/100
- **Verdict Night 0 (21:05):** 84/100, GO WITH CAVEATS. Growth n'est plus un bloqueur. Le seul P0 = data Red stale dans le code. Fix dev cette nuit → QA re-test → retour projete a 92/100 GO.

## Day 1 - Trust and launch safety (13 mars)

Focus: rendre le produit montrable sans embarras et poser les bases de confiance.

### Matin (08:00-12:00) — COMPLETED EARLY

| Agent | Ticket | Livrable | Statut |
|-------|--------|----------|--------|
| `renego-dev` | DEV-04 | FIX-01 (URLs) + FIX-02 (Orange obs.) fermes | ✅ Done |
| `renego-offers-fr` | DATA-01 | `market/fr-offers-watch.md` rempli avec URLs valides | ✅ Done |
| `renego-pm` | PRODUCT-01 | Claims launch-safe, langage produit prudent | ✅ Done 05:05 |
| `renego-pm` | PM-05 | Landing copy V4 validated | ✅ Done 05:05 |
| `renego-dev` | BUG-15 | Orange post-promo browser investigation | ⏳ 06:05 wave |

### Apres-midi (14:00-18:00)

| Agent | Ticket | Livrable | Statut |
|-------|--------|----------|--------|
| `renego-qa` | QA-02 | Gate de lancement formalisee (re-test post-fixes) | ✅ Done 07:20 |
| `renego-pm` | — | Triage Day 1, update board, handoff Day 2 | ✅ Done 09:05 |

### Gate Day 1

- [x] Zero P0 ouvert ✅ (QA cycle 5 — 03:20 CET)
- [x] URLs desactivees ou corrigees ✅ (4/4 HTTP 200, QA confirme)
- [x] Observatoire Orange coherent ✅ (BUG-14 ferme, Orange 12 mois)
- [x] Claims produit revus et launch-safe ✅ (PM-05 + PRODUCT-01 fermes — 05:05 CET)
- [x] V5 copy re-validee ✅ (PM 09:05 CET — chiffres corrects, Orange corrige)
- [x] APPR-04 resolu ✅ (PM 09:05 CET — video post-launch, screenshots + GIF)
- [x] Day 2 handoffs ecrits ✅ (PM 09:05 CET — dev + QA + Growth)

**Verdict Day 1 (09:05): Day 1 gate 100% passee 12h en avance. Equipe libre pour polish. Day 2 = conversion + viralite.**

## Day 2 - Conversion + viralite + regression (14 mars)

Focus: conversion widget, diagnostic card partageable, regression formelle.

### Matin (08:00-12:00)

| Agent | Ticket | Livrable |
|-------|--------|----------|
| `renego-dev` | DEV-10 | Instant Price Check widget (2-4h) |
| `renego-offers-fr` | DATA-01 (refresh) | Spot-check SFR/Bouygues profiles + prix stables |
| `renego-growth` | GROWTH-06 | Google Form feedback V0 (20 min) |

### Apres-midi (14:00-18:00)

| Agent | Ticket | Livrable |
|-------|--------|----------|
| `renego-dev` | DEV-11 | Shareable Diagnostic Card (2-4h) |
| `renego-qa` | BUG-16 | Verifier Bouygues/SFR 24m costs dans l'UI |
| `renego-qa` | QA-03 | Mini regression suite (build + flow + scoring + 24m) |
| `renego-growth` | — | Screenshots/GIF du flow (Red comme reco) |

### Soir (18:00-22:00)

| Agent | Ticket | Livrable |
|-------|--------|----------|
| `renego-pm` | — | Pre-go/no-go prep, Day 3 handoff |
| `renego-qa` | — | Regression results, score update |

### Gate Day 2

- [x] Flow trust-first en place ✅ (DEV-05 livre Day 1)
- [x] Positionnement et landing copy finalises ✅ (V5, PM re-validated)
- [x] Plan de lancement finalise ✅ (V5)
- [ ] DEV-10 widget en place
- [ ] DEV-11 diagnostic card en place
- [ ] QA-03 regression suite passe
- [ ] BUG-16 Bouygues/SFR verifie
- [ ] URL deploiement confirmee (ESCALADE SI NON RESOLU Day 2 soir)
- [ ] Screenshots/GIF produits

## Day 3 - Launch package (15 mars)

Focus: verdict final et gel de la version publique.

### Matin (08:00-12:00)

| Agent | Ticket | Livrable |
|-------|--------|----------|
| `renego-pm` | PM-03 | Dossier go/no-go complet |
| `renego-pm` | PM-04 | KPI Scorecard finale |
| `renego-pm` | PM-05 | Landing copy et message validates |
| `renego-qa` | — | Run final de regression |

### Apres-midi (14:00-16:00)

| Agent | Ticket | Livrable |
|-------|--------|----------|
| `renego-pm` | — | Verdict final: launch / launch with caveats / no launch |
| tous | — | Freeze de la version si GO |

## Cadence d'equipe

- l'equipe tourne maintenant 24/7 jusqu'au 15 mars 2026, sans coupure de nuit;
- `Offers-FR` et `Research-US` ouvrent une vague toutes les 4 heures;
- `PM` passe juste apres pour reprioriser et ecrire les handoffs;
- `Dev` implemente ensuite le plus fort ROI visible;
- `QA` et `Growth` ferment la vague avec gate, copy et plan de lancement;
- le PM peut te ping sur WhatsApp chaque heure si, et seulement si, une
  validation humaine bloque la vague suivante.
