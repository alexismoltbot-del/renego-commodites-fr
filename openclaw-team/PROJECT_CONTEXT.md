# Project Context

Etat constate dans le repo avant la session:

- le repo contient deja un prototype React + Vite;
- le backend local expose `GET /api/health` et `POST /api/recommendation`;
- une facture Freebox reelle sert deja de cas de test;
- un moteur heuristique local existe;
- un mode premium existe via `server/llm.ts`;
- un test E2E Playwright existe sur le flow Freebox.

Points d'appui:

- `README.md`
- `docs/product-plan.md`
- `docs/architecture.md`
- `docs/qa-freebox-decision-engine-2026-03-11.md`
- `server/llm.ts`
- `src/lib/recommendationEngine.ts`
- `tests/freebox-flow.spec.ts`

Ce qu'il faut optimiser aujourd'hui:

- qualite percue des livrables;
- traçabilite des recommendations;
- qualite du benchmark marche;
- rigueur du rapport QA;
- clarté de la proposition de valeur.

Tranchages deja pris:

- verticale du jour: `box internet France`;
- compte OpenClaw existant, agents isoles;
- modeles du jour: `anthropic/claude-opus-4-6` pour les agents de pilotage, recherche et QA;
- aucune sortie externe automatique.
