# Sources de Données

## Contrats utilisateur

Ordre recommandé:

1. import PDF / facture;
2. forwarding mail vers une adresse dédiée;
3. import manuel de captures ou champs clés;
4. connecteurs spécifiques par fournisseur quand ils existent proprement.

Pourquoi:

- les fournisseurs n'offrent pas un standard OAuth interopérable;
- le parsing de facture suffit souvent pour calculer la plupart des économies;
- la donnée utilisateur doit rester minimale et justifiée.

## Marché énergie

Sources prioritaires:

- comparateur officiel du médiateur national de l'énergie: [comparateur.energie-info.fr](https://comparateur.energie-info.fr/)
- outil exportable et CGU associées: [CGU comparateur exportable](https://comparateur-offres.energie-info.fr/CGV_outil_exportable_energie_info.pdf)
- prix repère gaz / signaux marché: [Bercy](https://www.economie.gouv.fr/particuliers/faire-des-economies-denergie/tout-comprendre-votre-abonnement-de-gaz-et-delectricite)
- qualité service fournisseurs: [Energie-Info](https://www.energie-info.fr/qualite-de-service-clients/)

Usage produit:

- recommandation énergie;
- page publique d'évolution des prix;
- scoring de qualité fournisseur.

## Marché mobile

Sources prioritaires:

- couverture et qualité: [Mon réseau mobile](https://monreseaumobile.arcep.fr/) et [open data Arcep](https://data.arcep.fr/mobile/)
- mesures de qualité terrain: [mesures_qualite_arcep](https://data.arcep.fr/mobile/mesures_qualite_arcep/)

Usage produit:

- filtrer les recommandations par adresse ou lieux d'usage;
- expliquer pourquoi une offre moins chère n'est pas la meilleure;
- alimenter une vue publique "prix + qualité".

## Marché internet fixe

Sources prioritaires:

- éligibilité à l'adresse et opérateurs disponibles: [Ma connexion internet](https://www.arcep.fr/cartes-et-donnees/nos-cartes/ma-connexion-internet-documentation-technique.html)

Usage produit:

- ne recommander qu'une offre réellement disponible;
- distinguer fibre, câble, DSL, 4G fixe;
- pondérer la recommandation par débit et techno.

## Marché assurance

Constat produit:

- pas de source officielle unique comparable à l'énergie;
- les tarifs dépendent fortement du profil, du risque et des garanties;
- les devis sont souvent générés dans des parcours web dynamiques.

Conséquence:

- ne pas démarrer par du scraping massif;
- commencer par une matrice d'équivalence de garanties et des comparaisons sur profils synthétiques;
- ouvrir ensuite des intégrations APIs ou partenariats courtage.

## Veille tarifaire et page publique

### Ce qu'il faut stocker

- URL source;
- HTML ou PDF brut;
- snapshot horodaté;
- version du scraper;
- prix mensuel facial;
- promo et durée;
- frais d'ouverture;
- frais de résiliation;
- engagement;
- prix annualisé normalisé.

### Normalisation minimale

Le produit doit afficher au moins trois vues:

- prix facial;
- coût 12 mois;
- coût 24 mois si engagement long.

Sinon les comparaisons seront trompeuses.

## Règles de collecte

- vérifier robots.txt et CGU avant scraping;
- privilégier open data et sources officielles;
- limiter la fréquence des scrapes par fournisseur;
- détecter la dérive de structure HTML;
- journaliser chaque snapshot et sa provenance.

## Données de confiance

Le produit doit pouvoir dire:

- "prix officiel importé";
- "prix scrapé";
- "prix estimé";
- "prix utilisateur déclaré".

Ces niveaux de confiance doivent être visibles dans le back-office et, quand utile, côté utilisateur.
