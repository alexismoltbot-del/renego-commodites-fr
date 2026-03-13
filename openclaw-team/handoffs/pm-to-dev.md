# PM -> Dev Handoff (Founder pass)

Date: 2026-03-12 19:40 CET
Status: **ready - priority now**
Owner: `renego-dev`

## What changed

Founder feedback changed the public direction:

- the product is now presented as an **operated service**, not a local-only geek
  tool;
- public messaging must say **100% gratuit, sans commission**;
- the observatory must become a **public proof page visible without PDF import**;
- we can use **illustrative client stories**, but never fake real testimonials;
- a **demo video** is part of the launch package, but `Kling` is blocked on
  APPR-04.

## Dev priorities

### P0 - DEV-08

Make the observatory visible before any upload and frame it as a public proof
surface:

- courbes des principaux operateurs visibles sans PDF;
- texte grand public, pas jargon produit;
- rappeler que les prix sont releves manuellement et dates;
- conserver le chart existant si possible, ne pas reinventer le composant.

### P0 - Founder copy alignment

Align the public product shell with the founder pass:

- retirer le message central "tout reste sur votre machine";
- mettre en avant `gratuit` + `sans commission`;
- expliciter la transparence du moteur de reco;
- dire clairement que ReneGo peut aussi recommander de ne pas changer.

### P1 - Video integration prep

Prepare the cleanest integration point for a future demo video:

- pas besoin de rendre la video finale sans APPR-04;
- mais identifier ou une section ou un bloc "demo" vivra dans le produit;
- si `Remotion` n'est pas initialise, documenter la marche la plus courte.

## Guardrails

- no fake screenshots;
- no fake testimonials presented as real;
- no claim of automatic subscription;
- keep the wedge strictly `box internet France`.

## Checks

- `npm run build`
- if UI copy changes affect flow understanding, update `dev-to-qa.md`
- document residual risk in `reports/launch-status.md`
