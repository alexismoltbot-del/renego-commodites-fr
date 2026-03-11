# Roadmap

## Phase 0. Cadrage exécutable

Durée cible: 2 semaines

Livrables:

- matrice des verticales;
- modèle de données canonique;
- politique de mandat et d'approbation;
- 20 fournisseurs prioritaires;
- premiers scrapers et premiers jeux de documents de test.

Gate:

- validation du séquencement énergie -> mobile -> internet -> assurance.

## Phase 1. MVP énergie

Durée cible: 4 à 6 semaines

Livrables:

- import facture PDF;
- extraction des contrats énergie;
- intégration du comparateur officiel;
- scoring d'offres et estimation d'économies;
- proposition de rétention;
- exécution assistée du switch avec preuves.

Gate:

- précision extraction > 95 % sur champs critiques;
- économie réellement confirmée sur premiers dossiers réels.

## Phase 2. MVP mobile

Durée cible: 4 semaines

Livrables:

- parsing forfait mobile;
- intégration RIO et portabilité dans le dossier utilisateur;
- scoring prix + qualité locale via Arcep;
- scripts de négociation rétention;
- suivi de frais restants éventuels.

Gate:

- aucune recommandation sans score de couverture;
- taux d'acceptation utilisateur satisfaisant sur un panel pilote.

## Phase 3. MVP internet fixe

Durée cible: 4 à 6 semaines

Livrables:

- éligibilité à l'adresse;
- normalisation des offres box;
- gestion des bundles et options TV;
- checklist restitution matériel;
- suivi des dates de coupure / activation.

Gate:

- aucune recommandation hors éligibilité;
- pas de rupture de service sur les dossiers pilotes.

## Phase 4. Assurance assistée

Durée cible: 6 à 8 semaines

Livrables:

- extraction des garanties clés habitation / auto;
- matrice d'équivalence;
- assistant devis;
- recommandations avec niveau de confiance;
- exécution limitée aux cas propres.

Gate:

- pas de recommandation automatique en-dessous du seuil de confiance;
- validation humaine sur la matrice de garanties.

## Phase 5. Observatoire public des prix

Durée cible: en parallèle à partir de la phase 2

Livrables:

- snapshots quotidiens;
- courbes d'évolution;
- comparaisons par code postal et profil type;
- alertes sur expiration de promos et hausses de prix.

Point important:

- commencer sur énergie et telco;
- repousser l'assurance publique à des profils synthétiques ou données partenaires.

## Équipe minimale

- 1 produit/fondateur;
- 1 full-stack web;
- 1 backend/data;
- 1 part-time ops/scraping;
- 1 revue juridique ponctuelle.

## Ordre exact recommandé

1. Énergie.
2. Mobile.
3. Internet fixe.
4. Assurance.

Si on inverse cet ordre, on attaque d'abord la verticale la plus complexe au lieu de la plus propre. Ce serait une erreur.
