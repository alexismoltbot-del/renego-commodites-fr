# Approvals

Utiliser ce fichier seulement si une vraie decision humaine bloque la suite.

Format:

- `pending`: question
- `impact`: pourquoi c'est bloquant
- `options`: 2 ou 3 choix max
- `owner`: qui attend la reponse

## Open

_Aucune approval en attente._



## Resolved

### APPR-04: Cle API Kling pour la video demo

- **decision:** Option 3 — video repoussee apres le 15 mars. Le launch package
  utilise des screenshots + GIF du flow (Red comme reco primaire). Le storyboard
  Growth est pret pour quand/si la cle est fournie. Pas de blocage sur le launch.
- **resolved_at:** 2026-03-13 09:05 CET (PM triage Day 1)


### APPR-01: Cles API pour le mode premium

- **decision:** Aucune cle fournie avant 16:30. DEV-04 coupe. La demo tourne en mode heuristique uniquement. KPI "delta heuristique vs premium" = N/A.
- **resolved_at:** 2026-03-12 17:20 CET (timeout implicite)

### APPR-02: Prix publics passes en variables de snapshot

- **decision:** Les prix publics ne sont plus portes par le code de recommendation. Ils vivent dans un snapshot centralise et datable dans `src/lib/boxMarketSnapshot.ts`.
- **impact:** Les comparaisons, labels d'offres, couts 24 mois, observatoire et diagnostic consomment maintenant les memes variables de marche.
- **resolved_at:** 2026-03-12 16:35 CET

### APPR-03: Double scoring actif

- **decision:** Le moteur sort maintenant deux lenses:
  1. `prix pur` -> Red by SFR
  2. `prix/features` -> SFR Fibre Starter
- **impact:** La reco principale de demo bascule sur SFR, parce que l'economie reste forte tout en preservant mieux debit et TV. Red reste visible comme champion prix.
- **resolved_at:** 2026-03-12 16:35 CET
