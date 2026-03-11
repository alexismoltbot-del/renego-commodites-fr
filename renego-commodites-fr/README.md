# Renego Commodites FR

Outil open-source pour analyser, renégocier et remplacer les contrats récurrents d'un foyer en France.

Objectif produit: réduire les dépenses fixes sans dégrader le service, avec un flow utilisateur très simple et une exécution encadrée juridiquement.

Hypothèses réglementaires et sources vérifiées le 11 mars 2026 dans [`docs/sources.md`](./docs/sources.md).

## Ce que ce dossier contient

- [`docs/product-plan.md`](./docs/product-plan.md): positionnement, MVP, séquencement par verticales.
- [`docs/architecture.md`](./docs/architecture.md): architecture cible, agents, stack, flux techniques.
- [`docs/regulatory-notes.md`](./docs/regulatory-notes.md): contraintes France et implications produit.
- [`docs/data-sources.md`](./docs/data-sources.md): sources de données et stratégie de veille tarifaire.
- [`docs/roadmap.md`](./docs/roadmap.md): plan d'exécution en phases.
- [`docs/sources.md`](./docs/sources.md): sources officielles utilisées.
- [`schema.sql`](./schema.sql): premier modèle de données PostgreSQL.

## Tranchages de départ

- V1 ne doit pas promettre un "full auto" aveugle. Toute action irréversible doit rester approuvée par l'utilisateur.
- L'import de contrats doit commencer par PDF, facture et mail. Les connecteurs OAuth n'existent pas de manière standard chez ces acteurs.
- L'énergie est la meilleure verticale de départ. Le marché est très "commodité", le changement est gratuit et la résiliation est automatique chez l'ancien fournisseur.
- Le mobile et l'internet fixe viennent ensuite, mais avec une couche de qualité locale obligatoire via les données Arcep.
- L'assurance vient en troisième, car l'équivalence de service est plus fragile: exclusions, franchises, bonus-malus, niveau de garantie.
- La page publique de suivi des prix peut démarrer sur énergie + telco. L'assurance doit venir plus tard, sur profils synthétiques ou APIs partenaires, pas sur du scraping sauvage.
- Le coeur du produit doit être self-hostable et gratuit à l'usage côté communauté. Les modèles fermés ne doivent être qu'une option.

## Flow produit cible

1. L'utilisateur importe ses contrats ou ses factures.
2. Le moteur extrait et normalise les clauses utiles: prix, engagement, date anniversaire, garanties, adresse, options.
3. Le comparateur cherche des offres équivalentes selon le secteur et le profil réel du foyer.
4. Le moteur de renégociation teste d'abord une rétention chez le fournisseur actuel.
5. L'utilisateur reçoit trois sorties simples:
   - garder et renégocier;
   - changer maintenant;
   - attendre une meilleure fenêtre.
6. Si l'utilisateur valide, le moteur exécute les démarches permises: portabilité, résiliation en ligne, LRE, souscription, suivi de restitution matériel.

## Positionnement réaliste

Le produit n'est pas un simple comparateur. C'est un "copilot d'arbitrage + moteur d'exécution" pour dépenses fixes du foyer.

En revanche, il faut refuser deux simplifications trompeuses:

- "tous les contrats sont interchangeables": vrai surtout pour énergie, partiellement pour telco, faux si on ignore les garanties d'assurance;
- "on peut tout faire par OAuth": en pratique, il faut prévoir d'abord upload, parsing de facture, forwarding mail et connecteurs spécifiques.

## Décision produit recommandée

Construire en trois étages:

- étage 1: analyse et recommandation;
- étage 2: exécution assistée avec mandat et approbation;
- étage 3: automatisation plus poussée sur les verticales où le cadre est propre.

C'est le chemin le plus crédible pour aller vite sans se raconter d'histoire sur la faisabilité.
