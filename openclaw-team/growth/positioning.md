# Positioning — ReneGo Box Internet France

Date: 2026-03-13 (V6 — Day 2 midday cycle)
Agent: renego-growth
Status: V6 — widget shipped, regression passed, QA 98/100, ranking confirmed
Previous: V5 2026-03-13 07:40 CET

---

## What changed in V6

- **DEV-10 Instant Price Check widget SHIPPED and QA-verified** (10:05 CET).
  The landing page now has a 2-field widget above the fold: operator dropdown +
  monthly price → instant savings estimate in 10 seconds. 5 edge cases verified
  by QA, zero PII, data aligned with the engine. This changes the value
  proposition: visitors get personalized value before uploading anything.
- **QA-03 Regression formelle PASSÉE** (11:20 CET). Zero regressions across
  build, tests, URLs, data, scoring, and trust elements. First formal regression
  gate of the sprint.
- **BUG-16 FERMÉ** (11:20 CET). SFR/Bouygues ranking was a doc error in earlier
  QA cycles — code was always correct. Definitive ranking: SFR Starter #2
  (852,76 €), Bouygues #6 (996,76 €). The Bouygues "804 €" in V5 was wrong.
- **QA score: 98/100** (up from 97). +1 from QA gate maxed (20/20). QA-03
  regression + BUG-16 closure + DEV-10 verification.
- **Bouygues discrepancy RESOLVED.** No more open data questions. All 6 offers
  in the ranking are confirmed and aligned across code, copy, and market.

---

## Cible principale

Ménages français payant le prix post-promo de leur box internet — quiconque est
abonné depuis plus de 12 mois sans avoir renégocié.

Persona typique : « J'ai la Freebox depuis 3 ans, je paye 40 €/mois, je sais
que c'est trop mais comparer les offres me prend du temps et j'ai peur des
mauvaises surprises. »

Taille estimée : dizaines de millions de foyers fibrés en France. L'ARCEP
rapporte 22M+ accès FTTH actifs en métropole au T3 2025. La majorité sont en
post-promo à un instant donné — les promos standard durent 6 à 12 mois.
[FACT — arcep.fr, observatoire des marchés]

## Problème

1. **Le piège post-promo est silencieux.** Après 6-12 mois de promo, le prix
   remonte de 8 à 20 €/mois. Aucune alerte, aucune notification — juste un
   prélèvement plus lourd. Les opérateurs comptent sur l'inertie.
2. **Comparer est pénible.** Les opérateurs affichent le prix promo, pas le coût
   réel sur 24 mois. Les frais d'ouverture (39 à 49 €), les conditions
   d'engagement et les prix post-promo sont dispersés dans les mentions légales.
   Exemple : Orange affiche « 29,99 € » mais la combinaison de deux remises
   distinctes (Remise Client −8 € + ODR Bienvenue −5 €) rend le vrai prix
   post-promo (42,99 €) quasi-invisible.
3. **Les contre-offres opérateur sont opaques.** Quand un client menace de
   partir, les opérateurs sortent des offres de rétention non publiées. Sans
   savoir ce qui existe, le consommateur négocie à l'aveugle. [INFERENCE —
   based on US research finding #10, `market/us-comparables.md` section 15]
4. **Personne ne le fait à votre place — jusqu'ici.** Aux États-Unis, Rocket
   Money (10M+ utilisateurs, acquis $1,275Mds) négocie pour le consommateur. En
   France, il n'existe que des comparateurs passifs (Origame, Ideel) qui ne
   négocient rien, ne calculent pas le coût réel sur 24 mois, et ne détectent
   pas les pièges post-promo. [FACT — `market/us-comparables.md` section 8]

## Promesse

**ReneGo analyse votre facture box internet, la compare aux offres du marché
avec le vrai coût sur 24 mois, puis renégocie pour vous — gratuitement et sans
commission.**

### Ce que la promesse couvre (défendable au 13 mars 2026)

- **Vérification instantanée en 10 secondes** — widget sur la landing page :
  choisissez votre opérateur, entrez votre prix, voyez immédiatement combien
  vous surpayez par rapport à la meilleure offre fibre. Sans upload, sans
  inscription, sans donnée personnelle. [DEV-10 SHIPPED, QA-verified 11:20 CET]
- Extraction automatique de votre facture PDF (opérateur, forfait, prix)
- Comparaison avec 4+ offres sourcées, datées, avec lien opérateur vérifiable
- Calcul du coût total 24 mois : prix promo + prix post-promo + frais
  d'ouverture — pas juste le prix du premier mois
- Recommandation principale : Red by SFR à 22,99 €/mois (prix fixe, sans
  engagement, 1 Gb/s sym) — champion prix à 591 € sur 24 mois vs 960 € pour
  la Freebox. Trade-off clair : pas de décodeur TV, 35 chaînes app seulement.
- Identification des pièges post-promo (exemple : Orange Livebox passe de
  29,99 € à 42,99 € après 12 mois de promo — le gain n'est que de 35 € sur
  24 mois vs la Freebox, un chiffre qu'il faut mettre en face de l'effort)
- Plan d'action étape par étape avec owner (vous ou l'opérateur) et prochaine
  action
- **Renégociation opérée sur mandat explicite** : vous donnez mandat, ReneGo
  porte la négociation, vous validez l'offre finale avant souscription
- **Observatoire public** : courbes de prix des principaux opérateurs, visible
  sans import de facture, avec sources datées

### Ce que la promesse ne couvre PAS (hors scope V1 — ne pas laisser entendre)

- Souscription automatique (la décision finale reste toujours la vôtre)
- Garantie de résultat (snapshot daté — les offres changent)
- Mobile, énergie, assurance
- Alerte proactive d'expiration de promo (prévu V2, pas V1)
- Base de données d'offres de rétention cachées (prévu V2, pas V1)
- B&YOU dans le panel (à évaluer post-launch)

## Preuve — les 4 piliers

1. **Données sourcées et datées.** Chaque offre affiche l'URL publique de
   l'opérateur et la date du relevé. Au 13 mars 2026 : 4 URLs opérateurs
   vérifiées HTTP 200. Orange vérifié depuis la page live (pas par scraping
   HTML brut — le prix a été lu sur la page JS-rendered). Vous pouvez vérifier
   vous-même en un clic.
2. **Coût 24 mois transparent.** Année 1 (promo), année 2 (post-promo), frais
   d'ouverture, et delta exact vs votre forfait actuel. Pas de chiffre miracle —
   un calcul que vous pouvez retracer ligne par ligne.
3. **Observatoire public.** Les courbes de prix et les données de marché sont
   accessibles à tous, même sans importer de facture. ReneGo publie ce que les
   opérateurs ne montrent pas clairement : le coût réel après la promo.
4. **Open source, aligné, gratuit.** Le code est public. L'algorithme de scoring
   et les prix utilisés sont vérifiables. 100% gratuit, aucune commission,
   aucune rétro-commission opérateur. Si ReneGo recommande Red by SFR, c'est
   parce que c'est le moins cher — pas parce que Red paie pour être là.

## Angle de différenciation

| Comparateurs FR (Origame, Ideel, UFC) | ReneGo |
|---------------------------------------|--------|
| Consultez, cherchez, calculez vous-même | Vérifiez en 10 secondes avec le widget, ou importez votre facture |
| Prix promo affiché | Coût réel 24 mois calculé (promo + post-promo + frais) |
| Pas de détection post-promo | Piège post-promo identifié et chiffré |
| Aucune action proposée | Plan d'action personnalisé + renégociation opérée |
| Pas de recommandation argumentée | Reco principale avec trade-offs explicites |
| N'anticipent pas la contre-offre | Prépare à la conversation avec le service rétention |
| Interface passive (consultez) | Interface active (vérifiez, importez, comprenez, mandatez) |
| Pas de données publiques structurées | Observatoire public avec sources et dates |
| Boîte noire | Open source — vérifiez le code, les prix, le scoring |

**Ce que ReneGo n'est PAS :** un comparateur de plus. Les comparateurs montrent
les prix promo. ReneGo montre le coût réel, détecte les pièges, recommande,
et agit pour vous avec votre accord. C'est la différence entre un prospectus
et un conseiller.

## Objections anticipées

| Objection | Réponse |
|-----------|---------|
| « Comment vous gagnez de l'argent ? » | On ne gagne rien. Beta gratuite, open source. Pas de commission, pas de rétro-commission opérateur. Le modèle viendra si l'outil est utile. |
| « Mes données sont en sécurité ? » | On vous demande uniquement ce qu'il faut pour analyser votre contrat et opérer la renégociation. Aucun accès opérateur sans votre mandat explicite. |
| « Les prix vont changer demain ! » | Probablement. C'est un snapshot daté. On affiche la date du relevé partout. Vérifiez le lien source avant d'agir. |
| « Pourquoi je ne ferais pas ça moi-même ? » | Vous pouvez. Mais calculer le coût 24 mois de 4+ offres avec frais, promo, post-promo, engagement et options prend du temps. On le fait en secondes et on négocie pour vous si vous le souhaitez. |
| « C'est juste un comparateur de plus. » | Non. Un comparateur liste des offres. ReneGo analyse votre facture, calcule le vrai coût, détecte les pièges, recommande et agit sur mandat. La différence entre un menu et un médecin. |
| « C'est une beta, pas une entreprise. » | Exact. C'est pour ça qu'on ne promet rien qu'on ne peut pas prouver. Chiffres sourcés, code ouvert, disclaimer visible. On préfère être honnête et utile que poli et vague. |
| « Vous allez changer mon forfait sans me demander ? » | Jamais. La souscription finale est toujours validée par vous. On recommande, on négocie avec votre mandat, vous décidez. |
| « Red by SFR n'a pas de TV ! » | Exact — c'est le trade-off. Red est le champion prix (591 € sur 24 mois) mais offre 35 chaînes via l'app, pas de décodeur. Si la TV est essentielle, SFR Starter (160 chaînes, 853 €) est l'alternative. |
| « Mon opérateur va me faire une contre-offre ! » | C'est probable. Les opérateurs ont des offres de rétention non publiées qu'ils sortent quand vous menacez de partir. ReneGo vous prépare : vous savez le prix réel du marché AVANT d'appeler, vous pouvez évaluer la contre-offre au lieu de l'accepter à l'aveugle. |

## Why now

1. **Vague de fin de promo printemps 2025.** Des millions de promos box 12 mois
   souscrites entre janvier et juin 2025 arrivent à expiration. Chaque mois,
   des centaines de milliers de factures augmentent silencieusement de 8 à 20 €.
   [INFERENCE — basé sur le cycle promo standard 12 mois des opérateurs FR]
2. **Guerre des prix en cours.** Red by SFR à 22,99 € avec 1 Gb/s sym (depuis
   le 20/01/2026). Orange à 29,99 € avec 12 mois de promo (offre en cours au
   13/03/2026, validée depuis la page live). B&YOU lance une Pure Fibre Plus à
   25,99 € à 8 Gb/s. Le marché bouge et les consommateurs en post-promo ratent
   ces baisses. [FACT — `market/fr-offers-watch.md`, live source verification]
3. **Le marché FR est vierge.** Aucun acteur français ne fait ce que Rocket Money
   fait aux US. Le premier entrant crédible capte la catégorie.
   [FACT — `market/us-comparables.md` section 8]
4. **Pouvoir d'achat sous tension.** « Économisez 17 €/mois sur votre box » est
   un message qui résonne quand chaque euro compte. [INFERENCE — contexte macro]
5. **L'observatoire est prêt.** ReneGo peut déjà montrer publiquement ce que les
   opérateurs ne montrent pas clairement : le coût réel après la promo, avec
   sources et dates. C'est une preuve concrète dès le jour 1.

## Positionnement résumé (une phrase)

**ReneGo est le premier service français qui analyse votre facture box internet,
calcule le vrai coût sur 24 mois, et renégocie pour vous — gratuitement, sans
commission, en toute transparence.**

## Tonalité

- Direct, pas corporate
- Chiffres précis et sourcés — pas de « jusqu'à X% d'économies ! »
- Transparent sur les limites : beta, données manuelles, snapshot daté
- Empathique sur la galère : on sait que comparer les box c'est chiant
- Jamais de sur-promesse : si on ne le fait pas, on ne le dit pas
- Les trade-offs sont explicites : Red n'a pas de TV, Orange remonte après 12
  mois — on le dit au lieu de le cacher

## Évolutions futures (hors scope lancement, ne pas annoncer)

- **Carte diagnostic partageable.** Après l'analyse, une carte visuelle
  (1080×1920 Stories + 1080×1080 feed) avec les 4 chiffres clés : prix actuel,
  prix recommandé, économie 24m, URL. Bouton « Partager mon diagnostic » via
  Web Share API. Le moteur de viralité organique à zéro budget — chaque carte
  partagée en WhatsApp group est une acquisition gratuite.
  [Source : US research finding #11, `market/us-comparables.md` section 16.
  DEV-11 prévu Day 2 après-midi.]
- **Base de données d'offres de rétention cachées.** Feedback loop post-action :
  « Qu'a proposé votre opérateur ? » Les réponses créent un dataset unique sur
  les contre-offres non publiées des ISP français — donnée qu'aucun comparateur
  ne détient. 10-20 réponses/opérateur = utile. 100 = autorité.
  [Source : US research finding #10, `market/us-comparables.md` section 15.
  GROWTH-06 Google Form V0 prévu Day 2.]
- **Promo-Expiry Sentinel.** Alerte email 30j avant expiration de votre promo.
  Transforme le produit de « conseil ponctuel » en « surveillance continue ».
  [Source : US research finding #7, `market/us-comparables.md` section 12]
- **Flat fee annuel.** €29-39/an, l'utilisateur garde 100% des économies.
  Modèle inspiré de Kudos ($40/an aux US).
  [Source : US research finding #6, `market/us-comparables.md` section 11]
- **Indice de Transparence Box Internet.** Scoring structuré des opérateurs sur
  la clarté tarifaire (markup post-promo, coûts cachés, engagement, URLs).
  L'observatoire V1 est la base ; la version scorée serait un asset SEO, presse
  et social sharing puissant pour le top-of-funnel.
  [Source : US research finding #8, `market/us-comparables.md` section 13]
- **Ajout B&YOU au panel.** 25,99 €/mois sans engagement, 8 Gb/s. Coût 24 mois
  671,76 € (frais 48 €). PM evaluation en cours.

---

*Ce positionnement ne contient que des claims vérifiables à la date du 13 mars
2026. Chaque affirmation est traçable dans le benchmark
(`market/benchmark-box-fr.md`), la veille FR (`market/fr-offers-watch.md`), la
recherche US (`market/us-comparables.md`), ou le code source. Code et copy sont
alignés — confirmé par QA cycle 7 regression (11:20 CET, 13 mars). Orange
vérifié depuis la page opérateur live. Widget DEV-10 QA-verified. QA score:
98/100. Regression: zero. Launch gate: 11/11.*
