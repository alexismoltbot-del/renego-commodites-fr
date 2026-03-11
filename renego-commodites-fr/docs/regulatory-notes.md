# Notes Réglementaires France

Ce document synthétise les contraintes qui changent le produit. Ce n'est pas un avis juridique.

## Énergie

- Le consommateur peut changer de fournisseur d'électricité ou de gaz gratuitement et sans durée minimale d'engagement. La résiliation de l'ancien contrat est automatique lors de la souscription du nouveau contrat. Source: [Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F18116)
- Le comparateur officiel du médiateur national de l'énergie existe déjà et un outil exportable est prévu contractuellement. Sources: [comparateur officiel](https://comparateur.energie-info.fr/), [CGU outil exportable](https://comparateur-offres.energie-info.fr/CGV_outil_exportable_energie_info.pdf)
- Le fournisseur doit informer le client au moins un mois avant une évolution contractuelle. Source: [Bercy](https://www.economie.gouv.fr/particuliers/faire-des-economies-denergie/tout-comprendre-votre-abonnement-de-gaz-et-delectricite)

Implication produit:

- l'énergie est la verticale la plus simple pour un MVP actionnable;
- on peut automatiser comparaison, recommandation et bascule avec peu de risque opérationnel.

## Telco mobile et internet

- La portabilité du numéro fixe ou mobile repose sur le RIO. Le portage effectif résilie automatiquement le contrat associé au numéro chez l'ancien opérateur, mais n'efface pas les frais ou pénalités éventuellement dus. Source: [Arcep](https://www.arcep.fr/la-regulation/grands-dossiers-thematiques-transverses/la-numerotation/portabilite-numeros-telephone-fixes-et-mobiles.html)
- Les contrats de communications électroniques ont une durée d'engagement maximale de 24 mois. Source: [DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/abonnements-telephoniques-et-internet-comment-bien-analyser-loffre-des-operateurs)
- En cas de modification unilatérale du contrat, le consommateur peut résilier sans frais dans les 4 mois suivant la notification. Source: [DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/abonnements-telephoniques-et-internet-comment-bien-analyser-loffre-des-operateurs)
- Les professionnels doivent permettre la résiliation en ligne pour les contrats pouvant être souscrits en ligne. Source: [Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F33991)
- Les opérateurs doivent conseiller au moins une fois par an leurs clients sur le meilleur tarif qu'ils proposent pour leurs services. Source: [DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/abonnements-telephoniques-et-internet-comment-bien-analyser-loffre-des-operateurs)

Implication produit:

- mobile et internet sont faisables, mais la recommandation doit intégrer l'éligibilité et la qualité locale, pas seulement le prix;
- le moteur de renégociation peut s'appuyer sur les obligations d'information et de changement de tarif.

## Assurance habitation et auto

- Après un an de contrat, l'assuré peut résilier. Pour les assurances obligatoires, comme l'auto ou l'habitation quand l'assuré est locataire ou copropriétaire, le nouvel assureur se charge de la résiliation auprès de l'ancien. Source: [Bercy](https://www.economie.gouv.fr/particuliers/emprunter-et-sassurer/assurance-habitation-auto-complementaire-sante-comment-resilier)
- Pour les assurances non obligatoires, l'assuré envoie lui-même la demande de résiliation. Source: [Bercy](https://www.economie.gouv.fr/particuliers/emprunter-et-sassurer/assurance-habitation-auto-complementaire-sante-comment-resilier)
- La résiliation en 3 clics s'applique aussi aux contrats d'assurance conclus électroniquement. Sources: [Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F33991), [Bercy](https://www.economie.gouv.fr/particuliers/emprunter-et-sassurer/assurance-habitation-auto-complementaire-sante-comment-resilier)

Implication produit:

- l'assurance ne peut pas être traitée comme une pure commodité;
- il faut un moteur d'équivalence de garanties avant de recommander un switch;
- il est plus raisonnable de lancer d'abord une assistance au devis et à la résiliation qu'une bascule totalement automatique.

## Lettre recommandée électronique

- La LRE a la même valeur juridique que le recommandé papier si les conditions légales sont remplies. Source: [Service-Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F31463)

Implication produit:

- utile pour notifier certains acteurs professionnels;
- il faut conserver la preuve de dépôt et la preuve de réception ou de notification;
- la gestion des preuves doit être native dans le produit.

## Garde-fous produit obligatoires

- mandat explicite, versionné et limité dans son périmètre;
- approbation utilisateur pour toute résiliation, toute souscription et tout envoi engageant;
- journal d'audit horodaté;
- conservation des preuves;
- mode "analyse seule" disponible sans pouvoir d'action.

## Conclusion produit

La bonne promesse n'est pas "on agit à votre place sur tout". La bonne promesse est:

"on trouve l'argent perdu, on prépare les démarches, et on exécute ce qui est juridiquement propre avec votre validation".
