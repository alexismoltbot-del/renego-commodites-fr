# Landing Copy V6 — ReneGo

Date: 2026-03-13 (V6 — Day 2 midday cycle)
Agent: renego-growth
Status: V6 — widget live, regression passed, QA 98/100, ranking confirmed
Previous: V5 2026-03-13 07:40 CET

---

## What changed in V6

- **DEV-10 Instant Price Check widget SHIPPED** (10:05 CET, QA verified 11:20).
  The landing page now leads with a 2-field widget above the fold. The hero
  section is restructured: widget first (10-second check), then full analysis
  CTA. This is the US finding #9 conversion bridge — personalized value before
  any upload. 5 edge cases verified by QA; zero PII; data aligned with engine.
- **QA-03 Regression formelle PASSÉE** (11:20 CET). Zero regressions. Build,
  tests, URLs, data, scoring, trust — all stable.
- **BUG-16 FERMÉ — 24m ranking CONFIRMED.** The V5 Bouygues discrepancy
  (804 vs 997) was a documentation error in earlier QA reports. Code was always
  correct. Definitive ranking: SFR Starter #2 (852,76 €), Bouygues #6
  (996,76 €). Proof table updated — no more footnotes about pending
  confirmation.
- **QA score: 98/100** (up from 97). QA gate maxed at 20/20.
- **Proof table corrected.** SFR Starter now shows 853 € / −107 €. Bouygues
  now shows 997 € / comparable. No ambiguity.

---

## Instant Price Check — above the fold

### Micro-headline

**Payez-vous trop cher votre box internet ?**

### Widget

| Quel est votre opérateur ? | Combien payez-vous par mois ? |
|---|---|
| [Orange ▾] | [___] €/mois |

**[Vérifier →]**

### Résultat (exemple : Orange, 40 €/mois)

> Vous payez **17 €/mois de plus** que la meilleure offre fibre équivalente
> (Red by SFR à 22,99 €). Sur 24 mois : **408 €.**

_Pour un diagnostic complet avec le détail des alternatives, importez votre
facture ci-dessous — gratuit, 2 minutes._

### Edge cases (gérés dans le code, QA-verified)

- Prix ≤ 22,99 € → « Votre prix est au niveau de la meilleure offre du
  marché. »
- Prix > 50 € → fonctionne normalement, le surcoût est simplement plus élevé.
- Opérateur = Red by SFR → « Vous êtes déjà sur l'offre la moins chère de
  notre panel. »

---

## Hero

### Headline

**Votre box internet vous coûte trop cher. On vous le prouve.**

### Sous-titre

Importez votre facture. En quelques secondes, ReneGo compare les offres fibre du
marché, calcule le vrai coût sur 24 mois, et vous donne un plan d'action
concret.

100% gratuit. Aucune commission. Aucune rétro-commission opérateur.

### CTA principal

**Analysez votre facture →**

_(Upload PDF — aucun compte requis)_

---

## Chiffres — preuve immédiate

> **Exemple réel** — Facture Freebox Revolution à 39,99 €/mois (post-promo) :
>
> | Offre | Prix/mois | Après promo | Coût 24 mois¹ | vs Freebox |
> |-------|-----------|-------------|---------------|------------|
> | **Red by SFR** ⭐ | 22,99 € | 22,99 € (fixe) | 591 € | **−369 €** |
> | **SFR Starter** | 27,99 € | 38,99 € | 853 € | **−107 €** |
> | **Orange Livebox** | 29,99 €² | 42,99 € | 925 € | **−35 €** |
> | **Bouygues Must** | 35,99 € | 42,99 € | 997 € | **Comparable** |
>
> ⭐ Red by SFR = recommandation principale. Prix fixe, sans engagement,
> 1 Gb/s symétrique. Trade-off : pas de décodeur TV (35 chaînes via l'app).
>
> ¹ Coût total = 12 mois promo + 12 mois post-promo + frais d'ouverture.
> Freebox actuelle : 960 € sur 24 mois (39,99 × 24, pas de frais).
>
> ² Orange : promo 12 mois composée de deux remises — Remise Nouveau Client
> (−8 €/mois) et ODR Bienvenue (−5 €/mois). Le prix de base est 42,99 €.
> Après 12 mois, votre facture Orange serait 3 € de plus que votre Freebox
> actuelle. Le gain (35 €/24 mois) est réel mais modeste — à peser face à
> l'effort de changement.
>
> _Relevé du 13 mars 2026. Orange vérifié depuis la page opérateur live.
> Prix vérifiables sur les sites des opérateurs. Classement confirmé par
> QA regression cycle 7 (11:20 CET)._

---

## Comment ça marche

### 0. Vérifiez en 10 secondes (nouveau)

Pas encore prêt à importer votre facture ? Utilisez le widget en haut de page :
opérateur + prix → estimation d'économie instantanée. Zéro donnée personnelle,
zéro inscription.

### 1. Importez votre facture

Glissez votre PDF de facture box internet. ReneGo extrait les faits utiles :
opérateur, forfait, prix, options, date de souscription.

### 2. Comparez le vrai coût

ReneGo compare votre forfait à 4+ offres du marché avec le **coût réel sur
24 mois** — pas juste le prix promo du premier mois. Promo, post-promo, frais
d'ouverture, engagement : tout est dans le calcul.

### 3. Voyez les pièges

Certaines offres « moins chères » coûtent en fait plus cher une fois la promo
finie. ReneGo les identifie, avec le montant exact du surcoût. Et si le
changement ne vaut pas l'effort, on vous le dit aussi.

### 4. On agit pour vous

Vous nous donnez mandat. ReneGo porte la renégociation. Vous recevez l'offre
finale et vous souscrivez seulement si elle vous convient. Pas de changement
de forfait sans votre accord. Pas de commission. On disparaît quand c'est fait.

---

## 3 garanties

- **🔍 Transparent** — Chaque offre est sourcée avec un lien vers le site de
  l'opérateur et une date de relevé. Le moteur de recommandation est open
  source : vous savez pourquoi une offre est recommandée.
- **💸 Aligné** — 100% gratuit. Aucune commission, aucune rétro-commission,
  aucun intéressement opérateur. Si on recommande Red by SFR, c'est parce que
  c'est le moins cher — pas parce que Red paie pour être là.
- **⚖️ Honnête** — On montre le coût réel, y compris quand l'alternative est
  pire que ce que vous avez. Si le changement ne vaut pas l'effort, on vous le
  dit. Et on vous dit aussi quand la recommandation a un trade-off — comme
  l'absence de décodeur TV sur Red.

---

## L'observatoire box internet

Avant même d'importer votre facture, consultez les prix réels des principaux
opérateurs fibre en France — promo, post-promo, frais, engagement. Les données
que les opérateurs enfouissent dans les mentions légales, rassemblées et datées
au même endroit.

**Voir l'observatoire →**

---

## Exemples clients illustratifs

> _Histoires représentatives de cas d'usage typiques. À remplacer par de vrais
> témoignages dès que les premiers clients opérés auront donné leur accord._

### Isabelle, 62 ans — Orange depuis 20 ans

_"Je payais 49 € depuis des années sans y penser. J'ai fait le test en 10
secondes : 26 € de trop par mois. Maintenant, je sais exactement combien
j'économise."_

### Marc, 41 ans — Freebox, famille de 4

_"Je pensais que changer allait être pénible. ReneGo a fait le tri, m'a expliqué
pourquoi Red était le meilleur prix mais m'a prévenu pour la TV. On a donné
mandat, et j'ai juste eu à valider l'offre finale."_

### Sarah, 35 ans — box récente, peu de gain potentiel

_"Le plus rassurant, c'est qu'on m'a dit de ne pas changer. Le gain était trop
faible pour justifier les démarches. Au moins, j'ai su pourquoi."_

---

## « Mais je peux le faire moi-même… »

Oui. Vous pouvez aller sur sfr.fr, orange.fr, bouyguestelecom.fr, free.fr,
red-by-sfr.fr. Ouvrir les mentions légales. Chercher le prix post-promo.
Calculer le coût sur 24 mois avec les frais. Comparer les débits, chaînes TV,
engagement.

Ou vous entrez votre prix dans le widget, vous avez la réponse en 10 secondes,
et si vous voulez le diagnostic complet, vous importez votre facture — on
s'occupe du reste si vous le souhaitez.

---

## FAQ rapide

**C'est gratuit ?**
Oui. Beta publique, 100% gratuite. Pas de frais cachés, pas de commission, pas
de paywall, pas de rétro-commission opérateur.

**Quels opérateurs ?**
Free, SFR, Red by SFR, Bouygues Telecom, Orange. D'autres à venir.

**Et le mobile / l'énergie ?**
Pas encore. On commence par la box internet, on fait ça bien, puis on élargit.

**Comment vous gagnez de l'argent ?**
Aujourd'hui, on ne gagne rien. Le modèle viendra si l'outil est utile —
probablement un abonnement annuel. Pas de commission sur les offres recommandées,
jamais.

**Mes données sont en sécurité ?**
On vous demande uniquement ce qu'il faut pour analyser votre contrat et opérer
la renégociation. Aucun accès à votre espace opérateur sans votre mandat
explicite. Le code est open source — vous pouvez vérifier ce qu'on fait.

**Les prix sont-ils à jour ?**
C'est un snapshot daté — la date du relevé est affichée dans l'outil. Les prix
opérateurs changent sans préavis. Vérifiez le lien source avant d'agir.

**C'est fiable ?**
C'est une beta honnête. Les prix viennent des sites publics des opérateurs, le
calcul est dans le code (open source), et on affiche les limites clairement. On
préfère dire « on ne sait pas » que de deviner.

**Vous allez changer mon forfait sans me demander ?**
Non. Jamais de changement sans votre accord. Vous donnez mandat, on négocie,
vous validez l'offre finale, vous décidez.

**Red by SFR n'a pas de TV — pourquoi c'est la recommandation ?**
Parce que c'est le moins cher sur 24 mois (591 € vs 960 € Freebox), prix fixe,
sans engagement. Le trade-off TV est expliqué : 35 chaînes via l'app, pas de
décodeur. Si la TV est essentielle, SFR Starter (160 chaînes, 853 €) est
l'alternative.

**Et si mon opérateur me fait une contre-offre quand j'appelle ?**
C'est probable — les opérateurs ont des offres de rétention non publiées.
ReneGo vous montre le vrai prix du marché AVANT d'appeler. Si on vous propose
25 €/mois « fidélité », vous saurez comparer : est-ce que c'est mieux que Red
à 22,99 € prix fixe ? Sur combien de mois ? Avec quel post-promo ? Vous
négociez en position de force, pas à l'aveugle.

---

## CTA de fermeture

**Votre promo a expiré il y a combien de temps ?**

Red by SFR à 22,99 €/mois — c'est 369 € de moins que votre Freebox sur 2 ans.
Prix fixe, sans engagement, 1 Gb/s symétrique. Le trade-off ? Pas de
décodeur TV.

Vérifiez en 10 secondes avec le widget, ou importez votre facture pour le
diagnostic complet.

**Analysez votre facture →**

---

## Disclaimer (footer)

ReneGo est un service opéré en version beta. Les prix affichés sont relevés sur
les sites publics des opérateurs à la date indiquée et peuvent évoluer à tout
moment. ReneGo peut préparer et porter une renégociation avec mandat explicite de
l'utilisateur, mais la souscription finale reste toujours validée par
l'utilisateur. Aucune commission ni rétro-commission n'est perçue sur les offres
recommandées. Les recommandations constituent une analyse indicative basée sur les
données disponibles, pas un engagement contractuel ni un conseil financier.
Vérifiez toujours les conditions sur le site de l'opérateur. Code source public.

---

## Notes internes (ne pas publier)

### Méthodologie coût 24 mois

Le coût total 24 mois est calculé comme suit :
- (prix promo × durée promo en mois) + (prix post-promo × mois restants) + frais
  d'ouverture
- Freebox actuelle : 39,99 × 24 = 959,76 € (arrondi 960 € dans la copy)
- Red by SFR : 22,99 × 24 + 39 = 590,76 € (arrondi 591 €). Delta = −369 €.
- SFR Starter : 27,99 × 12 + 38,99 × 12 + 49 = 852,76 € (arrondi 853 €).
  Delta = −107 €.
- Orange Livebox : 29,99 × 12 + 42,99 × 12 + 49 = 924,76 € (arrondi 925 €).
  Delta = −35 €.
- Bouygues Must : 35,99 × 12 + 42,99 × 12 + 49 = 996,76 € (arrondi 997 €).
  Delta ≈ comparable (Freebox = 960 €, Bouygues = 997 € frais inclus).

### QA 24m ranking (cycle 7, 11:20 CET — regression confirmed)

| Rang | Offre | Coût 24m | vs Free |
|------|-------|----------|---------|
| 1 | Red by SFR | 590,76 € | −369 € |
| 2 | SFR Fibre Starter | 852,76 € | −107 € |
| 3 | Free retention | 911,76 € | −48 € |
| 4 | Orange Livebox | 924,76 € | −35 € |
| 5 | Free actuel | 959,76 € | — |
| 6 | Bouygues Bbox Must | 996,76 € | +37 € |

**V6 note:** The Bouygues discrepancy from V5 (804 vs 997) is resolved. Earlier
QA cycles had a formula error in documentation — the code was always correct at
996,76 €. BUG-16 closed. SFR Starter was similarly mis-documented; correct value
is 852,76 € (#2 in ranking). All six positions are now confirmed across code,
QA, and copy.

### Claims utilisés — tous vérifiés par QA (cycle 7, 11:20 CET)

| Claim | Source | QA status |
|-------|--------|-----------|
| Red by SFR 22,99 €/mois, prix fixe | `market/fr-offers-watch.md` (13/03/2026) | ✅ Code = copy = marché |
| Red by SFR −369 € sur 24 mois vs Free | Calcul vérifié | ✅ |
| Red by SFR 1 Gb/s sym, frais 39 € | `market/fr-offers-watch.md` | ✅ |
| Red by SFR = recommandation principale | BUG-13-FIX, seuil 64, QA confirmed | ✅ |
| Red trade-off TV explicit | BUG-13-FIX, headline + explanation | ✅ |
| SFR Starter 27,99 €/mois (38,99 € post-promo) | `market/fr-offers-watch.md` | ✅ |
| SFR Starter 853 € / −107 € vs Free | Calcul vérifié, BUG-16 CLOSED | ✅ CONFIRMED |
| Orange 29,99 € promo 12 mois | Live page 06:05 CET | ✅ |
| Orange 42,99 € post-promo | Live page 06:05 CET, BUG-15 CLOSED | ✅ |
| Orange 925 € / −35 € vs Free | Calcul vérifié | ✅ |
| Orange discount: Remise −8 + ODR −5 | Live page mentions légales | ✅ |
| Bouygues Must 997 € / comparable vs Free | Calcul vérifié, BUG-16 CLOSED | ✅ CONFIRMED |
| « Aucun équivalent français » | `market/us-comparables.md` section 8 | ✅ |
| Open source | Repo public | ✅ |
| 100% gratuit, aucune commission | Architecture + founder direction | ✅ |
| Renégociation opérée sur mandat | Founder pass 12/03 | ✅ |
| Widget: vérification instantanée | DEV-10 SHIPPED + QA verified 11:20 | ✅ NEW |

### Ce qui n'est PAS dans la copy (volontairement)

- Aucun pourcentage d'économies (« jusqu'à X% ») — trop vague, indéfendable
- Aucune promesse de résultat garanti
- Pas de faux avis clients présentés comme réels — histoires étiquetées
  illustratives (QA-05 vérifié)
- Aucune mention de pricing futur avec chiffre précis
- Aucune mention de la Promo-Expiry Sentinel (pas développée)
- Aucun claim « IA » (le mode heuristique n'est pas de l'IA au sens strict)
- Aucun claim sur B&YOU (pas encore dans le panel)
- Aucune promesse d'automatisation non prouvée
- Aucune promesse de souscription sans accord utilisateur
- Aucune promesse sur les offres de rétention cachées (données pas collectées)
- Aucune promesse sur la carte diagnostic partageable (pas encore développée)
- Orange est présenté honnêtement : 35 € d'économie, mais modeste et post-promo
  au-dessus de la Freebox
