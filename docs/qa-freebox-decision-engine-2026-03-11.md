# QA Freebox Decision Engine

Date de verification: 11 mars 2026

## Document teste

- `/Users/alexis/Downloads/Facture Free 2026-03.pdf`

## Resultat attendu

- extraction correcte des champs critiques;
- recommandation plus directive quand l'economie est forte;
- comparaison simple des features;
- plan d'action post-decision exploitable par l'outil;
- flow UX testable de bout en bout.

## Resultat obtenu

### Extraction

- fournisseur: `Free`
- facture: `1452905043`
- offre: `Abonnement Freebox Revolution avec TV by CANAL`
- montant: `39,99 EUR`
- date facture: `02 Mars 2026`
- date prelevement: `04 Mars 2026`
- adresse: `132 AVENUE ACHILLE PERETTI, 92200 NEUILLY SUR SEINE`

### Recommandation

- recommandation principale: `Changer maintenant`
- offre cible: `SFR Fibre Starter`
- economie annuelle: `144 EUR / an`
- rationale: gain assez fort pour pousser un switch, tout en rendant visible la perte potentielle de `TV by CANAL` et le retour d'un engagement 12 mois.

### Action engine

- preparation de souscription;
- verrouillage des preuves;
- suivi remboursement frais;
- checklist de restitution Free;
- verification premiere facture du nouvel operateur.

## Tests lances

```bash
npm run build
npm run test:invoice -- "/Users/alexis/Downloads/Facture Free 2026-03.pdf"
RENEGO_TEST_PDF="/Users/alexis/Downloads/Facture Free 2026-03.pdf" npm run test:e2e
npm run test:qa
curl http://127.0.0.1:8787/api/health
```

## Etat des modeles

- `OPENAI_API_KEY`: absente pendant cette QA
- `ANTHROPIC_API_KEY`: absente pendant cette QA
- moteur effectivement teste: fallback heuristique local

## Sources marche utilisees

- [OpenAI models](https://developers.openai.com/api/docs/models)
- [Anthropic models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
- [SFR Box Fibre Starter](https://www.sfr.fr/offre-internet/box-fibre-starter)
- [Bouygues Telecom guide des tarifs](https://www.bouyguestelecom.fr/static/cms/tarifs/guide_des_tarifs.pdf)
