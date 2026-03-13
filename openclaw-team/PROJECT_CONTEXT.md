# Project Context

Etat constate dans le repo au debut du sprint:

- le repo contient deja un prototype React + Vite;
- le backend local expose `GET /api/health` et `POST /api/recommendation`;
- une facture Freebox reelle sert deja de cas de test;
- un moteur heuristique local existe;
- un mode premium existe via `server/llm.ts`;
- un test E2E Playwright existe sur le flow Freebox.

Acquis de la session du 12 mars 2026:

- recherche US livree;
- benchmark FR livre;
- double lens prix / prix-features livre;
- QA complete avec verdict `GO WITH CAVEATS`;
- deux fixes critiques restent a fermer avant une demo "launch-safe".

Points d'appui:

- `README.md`
- `docs/product-plan.md`
- `docs/architecture.md`
- `docs/qa-freebox-decision-engine-2026-03-11.md`
- `server/llm.ts`
- `src/lib/recommendationEngine.ts`
- `src/lib/boxMarketSnapshot.ts`
- `tests/freebox-flow.spec.ts`

Ce qu'il faut optimiser pendant les 72h:

- confiance produit visible;
- hygiene des sources et des claims;
- qualite du benchmark FR;
- qualite du plan de lancement;
- rigueur du gate QA;
- copy et positionnement publics.

Tranchages deja pris:

- wedge: `box internet France`;
- compte OpenClaw existant, agents isoles;
- `GPT-5.4` pour PM / Research / Offers / Dev / Growth;
- `Claude Opus 4.6` pour QA;
- aucune sortie externe automatique;
- aucune action irreversibile sans approval humaine.
