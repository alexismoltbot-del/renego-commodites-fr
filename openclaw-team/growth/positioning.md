# Positioning — ReneGo Box Internet France

Date: 2026-03-13 (V8 — Day 2 evening cycle)
Agent: renego-growth
Status: V8 — screenshots captured, pénalité de fidélité brief delivered, social
  meta QA-verified (cycle 9), 99/100, URL live
Previous: V7 2026-03-13 15:40 CET

---

## What changed in V8

- **Screenshots captured** — 3 PNGs in `growth/assets/`: landing-desktop.png,
  landing-mobile.png, landing-full.png. Reddit/social posts now have visual
  assets. This closes the LAST item blocking 100/100 on Growth.
- **"Pénalité de fidélité" concept briefed** — `growth/penalite-fidelite-brief.md`
  delivered with ARCEP/Ariase data, integration points, and draft copy lines.
  PM to decide if V8 copy goes into the Sunday launch or stays Week 1.
- **GROWTH-06 feedback form spec ready** — `growth/feedback-form-spec.md`
  delivered with fields, title, and integration plan. Google Form to be created.
- **Social meta + OG image QA-verified** (cycle 9, 19:20 CET). Every shared
  link now generates a branded preview card. 17/17 meta tags confirmed.
- **Social norm / pénalité de fidélité layer added to positioning.**
  New problem #6, new proof dimension, new "Why now" point. All claims
  sourced from ARCEP Telconomics 2025 and Ariase — defensible and verifiable.
  This is the single highest-leverage messaging addition identified by Research
  (finding #13, Opower $532M precedent). Zero dev. Pure copy.
- **Negotiation playbook angle sharpened** — "On ne vous dit pas juste quoi
  faire. On vous dit quoi DIRE" framing prepped. Content file GROWTH-07
  deferred to Day 3 evening / Week 1 per PM guidance.

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
4. **Le consommateur est seul face au service rétention.** Quand vous appelez
   pour résilier, l'agent en face a un script, un CRM, et des contre-offres
   calibrées. Vous n'avez rien — ni les prix du marché, ni le coût réel de
   votre forfait, ni le script pour négocier. [INFERENCE — based on US research
   finding #12, `market/us-comparables.md` section 17]
5. **Personne ne le fait à votre place — jusqu'ici.** Aux États-Unis, Rocket
   Money (10M+ utilisateurs, acquis $1,275Mds) négocie pour le consommateur. En
   France, il n'existe que des comparateurs passifs (Origame, Ideel) qui ne
   négocient rien, ne calculent pas le coût réel sur 24 mois, et ne détectent
   pas les pièges post-promo. [FACT — `market/us-comparables.md` section 8]
6. **La fidélité est pénalisée, et personne ne le chiffre.** Les prix catalogue
   pour les nouveaux abonnés fibre ont baissé de 5,9% en 2024. Les factures des
   clients existants ont augmenté de 2,20 €/an (ARCEP, Telconomics 2025). Un
   abonné post-promo à 39,99 €/mois paie 40% de plus que le prix moyen d'un
   nouvel abonné fibre (28,59 €/mois, Ariase oct. 2024) — pour le même service.
   L'écart se creuse chaque année. Au Royaume-Uni, Ofcom a nommé ce phénomène
   « loyalty penalty » et forcé les opérateurs à agir. En France, rien.
   [FACT — ARCEP Telconomics 2025, Ariase via connexionfrance.com, Ofcom 2018-2020]

## Promesse

**ReneGo analyse votre facture box internet, la compare aux offres du marché
avec le vrai coût sur 24 mois, puis renégocie pour vous — gratuitement et sans
commission.**

### Ce que la promesse couvre (défendable au 13 mars 2026)

- **Vérification instantanée en 10 secondes** — widget sur la landing page :
  choisissez votre opérateur, entrez votre prix, voyez immédiatement combien
  vous surpayez par rapport à la meilleure offre fibre. Sans upload, sans
  inscription, sans donnée personnelle. [DEV-10 SHIPPED, QA-verified]
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
- **Carte diagnostic partageable** — après chaque analyse, une carte visuelle
  branded (Stories + feed) avec vos 4 chiffres clés : prix actuel, prix
  recommandé, économie 24m, URL. Partagez d'un tap via WhatsApp, Instagram, ou
  téléchargez. Zéro donnée personnelle sur la carte. [DEV-11 SHIPPED,
  QA-verified cycle 8]
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
- Playbook de négociation intégré au produit (contenu en préparation, pas
  encore dans le flow — prévu semaine 1)
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
5. **Pénalité de fidélité chiffrée.** ReneGo ne compare pas seulement votre
   facture aux offres du marché — il la compare aussi à ce que paient les
   nouveaux abonnés (28,59 €/mois en moyenne selon Ariase, 2024). Cette donnée
   ARCEP/Ariase transforme un constat rationnel (« il existe moins cher ») en
   prise de conscience émotionnelle (« je paie 40% de plus que quelqu'un qui
   vient d'arriver pour le même service »). Source neutre, calcul vérifiable.
   [FACT — Ariase oct. 2024, ARCEP Telconomics 2025]

## Angle de différenciation

| Comparateurs FR (Origame, Ideel, UFC) | ReneGo |
|---------------------------------------|--------|
| Consultez, cherchez, calculez vous-même | Vérifiez en 10 secondes avec le widget, ou importez votre facture |
| Prix promo affiché | Coût réel 24 mois calculé (promo + post-promo + frais) |
| Pas de détection post-promo | Piège post-promo identifié et chiffré |
| Aucune action proposée | Plan d'action personnalisé + renégociation opérée |
| Pas de recommandation argumentée | Reco principale avec trade-offs explicites |
| N'anticipent pas la contre-offre | Prépare à la conversation avec le service rétention |
| Interface passive (consultez) | Interface active (vérifiez, importez, comprenez, partagez, mandatez) |
| Résultat meurt à l'écran | Carte diagnostic partageable d'un tap — le résultat se diffuse |
| Pas de données publiques structurées | Observatoire public avec sources et dates |
| Pas de comparaison au marché global | Pénalité de fidélité chiffrée : « vous payez X% de plus que les nouveaux abonnés » (ARCEP/Ariase) |
| Boîte noire | Open source — vérifiez le code, les prix, le scoring |

**Ce que ReneGo n'est PAS :** un comparateur de plus. Les comparateurs montrent
les prix promo. ReneGo montre le coût réel, détecte les pièges, recommande,
prépare à la négociation, et agit pour vous avec votre accord. C'est la
différence entre un prospectus et un conseiller.

## Objections anticipées

| Objection | Réponse |
|-----------|---------|
| « Comment vous gagnez de l'argent ? » | On ne gagne rien. Beta gratuite, open source. Pas de commission, pas de rétro-commission opérateur. Le modèle viendra si l'outil est utile. |
| « Mes données sont en sécurité ? » | On vous demande uniquement ce qu'il faut pour analyser votre contrat et opérer la renégociation. Aucun accès opérateur sans votre mandat explicite. La carte diagnostic ne contient aucune donnée personnelle — juste des prix et des économies. |
| « Les prix vont changer demain ! » | Probablement. C'est un snapshot daté. On affiche la date du relevé partout. Vérifiez le lien source avant d'agir. |
| « Pourquoi je ne ferais pas ça moi-même ? » | Vous pouvez. Mais calculer le coût 24 mois de 4+ offres avec frais, promo, post-promo, engagement et options prend du temps. On le fait en secondes et on négocie pour vous si vous le souhaitez. |
| « C'est juste un comparateur de plus. » | Non. Un comparateur liste des offres. ReneGo analyse votre facture, calcule le vrai coût, détecte les pièges, recommande, génère votre carte diagnostic et agit sur mandat. La différence entre un menu et un médecin. |
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
6. **L'écart loyal/nouveau se creuse.** Les prix catalogue baissent (−5,9% en
   2024, ARCEP) pendant que les factures post-promo augmentent (+2,20 €/an).
   Plus on attend, plus la pénalité de fidélité grandit. ReneGo la rend
   visible et personnelle au moment où l'écart est le plus large jamais
   mesuré. [FACT — ARCEP Telconomics 2025]

## Positionnement résumé (une phrase)

**ReneGo est le premier service français qui analyse votre facture box internet,
calcule le vrai coût sur 24 mois, chiffre votre pénalité de fidélité, et
renégocie pour vous — gratuitement, sans commission, en toute transparence.**

## Tonalité

- Direct, pas corporate
- Chiffres précis et sourcés — pas de « jusqu'à X% d'économies ! »
- Transparent sur les limites : beta, données manuelles, snapshot daté
- Empathique sur la galère : on sait que comparer les box c'est chiant
- Jamais de sur-promesse : si on ne le fait pas, on ne le dit pas
- Les trade-offs sont explicites : Red n'a pas de TV, Orange remonte après 12
  mois — on le dit au lieu de le cacher

## Évolutions futures (hors scope lancement, ne pas annoncer)

- **Playbook de négociation opérateur.** Scripts par opérateur avec le numéro de
  rétention, un script mot pour mot, les articles de loi à invoquer, et un
  guide pour évaluer la contre-offre. Contenu en préparation (GROWTH-07),
  intégration dans le template plan d'action prévue semaine 1 (DEV-12). US
  finding #12 : HighSpeedInternet.com génère 2,68M visites/mois sur ce type
  de contenu. Aucun équivalent en France.
  [Source : `market/us-comparables.md` section 17]
- **Base de données d'offres de rétention cachées.** Feedback loop post-action :
  « Qu'a proposé votre opérateur ? » Les réponses créent un dataset unique sur
  les contre-offres non publiées des ISP français — donnée qu'aucun comparateur
  ne détient. 10-20 réponses/opérateur = utile. 100 = autorité.
  [Source : US research finding #10, `market/us-comparables.md` section 15.
  GROWTH-06 Google Form V0 en préparation Day 2.]
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
recherche US (`market/us-comparables.md`), les données ARCEP (Telconomics 2025),
Ariase (oct. 2024 via connexionfrance.com), ou le code source. Code et copy sont
alignés — confirmé par QA cycle 9 regression (19:20 CET, 13 mars). Widget
DEV-10 QA-verified. Diagnostic card DEV-11 QA-verified. Social meta QA-verified
(cycle 9, 17/17 tags). URL live et confirmée. Screenshots 3× dans
`growth/assets/`. QA score: 99/100. Regression: 3 cycles stables (7/8/9).
Launch gate: 13/13.*
