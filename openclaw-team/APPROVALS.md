# Approvals

Utiliser ce fichier seulement si une vraie decision humaine bloque la suite.

Format:

- `pending`: question
- `impact`: pourquoi c'est bloquant
- `options`: 2 ou 3 choix max
- `owner`: qui attend la reponse

## Open

### APPR-01: Cles API pour le mode premium

- **pending:** Est-ce qu'une cle OpenAI ou Anthropic est disponible pour tester le mode premium (DEV-04) pendant la session?
- **impact:** Non bloquant. Le fallback heuristique est demo-ready. Mais le KPI "delta qualitatif heuristique vs premium" restera `N/A` dans la scorecard si on ne teste pas.
- **options:**
  1. Fournir au moins une cle API avant 16:30 → on teste le premium
  2. Ne pas fournir → on coupe DEV-04 et la demo tourne en mode heuristique uniquement
- **owner:** humain (Alexis)

## Resolved

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
