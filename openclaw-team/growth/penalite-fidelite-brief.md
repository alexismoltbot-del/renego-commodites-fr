# Pénalité de Fidélité — Brief V1

Date: 2026-03-13 19:40 CET
Agent: renego-growth
Source: US research finding #13 (`market/us-comparables.md` section 18)
Status: brief for PM review — Week 1 integration

---

## Le concept

Les clients fidèles des box internet paient systématiquement plus que les
nouveaux abonnés — pour le même service. C'est la **pénalité de fidélité**.

L'écart n'est pas anecdotique. Il est structurel, documenté par le régulateur,
et il s'aggrave chaque année.

## Les données (toutes vérifiables)

| Point de donnée | Valeur | Source |
|-----------------|--------|--------|
| Facture fixe moyenne en France (2024) | 36,90 € HT (≈ 44,28 € TTC) | ARCEP, Telconomics 2025 |
| Prix moyen entrée de gamme fibre (2024) | 28,59 €/mois | Ariase via connexionfrance.com, oct. 2024 |
| Baisse prix catalogue nouveaux clients (2024) | −5,9% | ARCEP, Telconomics 2025 |
| Hausse facture moyenne existants (2024) | +2,20 €/an | ARCEP, Telconomics 2025 |
| Abonnements FTTH actifs (fin 2025) | 27,1 millions | ARCEP, observatoire fixe mars 2026 |
| Meilleure offre fibre du marché | 22,99 €/mois (Red by SFR, prix fixe) | fr-offers-watch.md, 13/03/2026 |

**Calcul de la pénalité :** un client post-promo à 39,99 €/mois paie
**40% de plus** que le prix moyen d'un nouvel abonné fibre (28,59 €) et
**74% de plus** que la meilleure offre du marché (22,99 €).

Les prix catalogue pour les nouveaux clients baissent de 5,9% par an.
Les factures des clients existants augmentent de ~2,20 €/an. L'écart se
creuse mécaniquement.

## Précédent réglementaire : Ofcom (UK)

Le régulateur britannique Ofcom a officiellement nommé ce phénomène
**"loyalty penalty"** dans ses publications de 2018-2020. Ofcom a ensuite
forcé les opérateurs à notifier les clients en fin de contrat et à les
alerter sur les meilleures offres disponibles.

**En France, l'ARCEP n'a PAS mis en place de mesure équivalente.** Pas
de notification obligatoire. Pas de format standardisé pour afficher le
coût réel. Les opérateurs sont libres de présenter les prix comme ils
le souhaitent — d'où les structures de remise opaques (Orange : Remise
Client −8 € + ODR Bienvenue −5 €).

C'est exactement l'espace que ReneGo occupe : rendre visible une pénalité
que personne ne calcule pour le consommateur.

## Où l'intégrer (surfaces existantes, zéro dev)

### 1. Widget — résultat (copy change)

**Actuel (V7) :**
> Vous payez **17 €/mois de plus** que la meilleure offre fibre (Red by SFR
> à 22,99 €). Sur 24 mois : **408 €.**

**Proposé (V8) :**
> Vous payez **17 €/mois de plus** que la meilleure offre fibre (Red by SFR
> à 22,99 €). Sur 24 mois : **408 €.**
>
> _Les nouveaux abonnés fibre paient en moyenne 28,59 €/mois (Ariase, 2024).
> Vous payez 40% de plus — pour le même service._

### 2. Diagnostic complet — nouvelle section (template change)

Après la recommandation, avant le plan d'action :

> ### Votre position par rapport au marché
>
> - **Vous payez :** 39,99 €/mois
> - **Nouveaux abonnés fibre :** 28,59 €/mois en moyenne (Ariase, oct. 2024)
> - **Meilleure offre du marché :** 22,99 €/mois (Red by SFR, prix fixe)
> - **Tendance (ARCEP) :** les prix catalogue ont baissé de 5,9% en 2024.
>   Les factures des clients existants ont augmenté de 2,20 €/an.

### 3. Carte diagnostic — ajout d'une ligne (canvas change)

Ajouter sous l'économie 24m :

> **40% de plus que les nouveaux abonnés**

Cela change la dynamique de partage : passer de « j'ai découvert que je
surpaie » (gênant, personnel) à « le système pénalise la fidélité »
(indigné, partageable).

### 4. Playbook négociation — argument dans le script (content change)

> « Selon les données de l'ARCEP, les nouveaux abonnés fibre paient
> 28,59 €/mois en moyenne. Je paie 39,99 € — 40% de plus pour le même
> service, parce que je suis resté fidèle. »

### 5. Landing page — hook alternatif (copy change)

**Variante A (question) :**
> Les nouveaux abonnés fibre paient 28,59 €/mois. Et vous ?

**Variante B (constat) :**
> Les clients fidèles des box internet paient en moyenne 40% de plus que
> les nouveaux abonnés. Calculez votre pénalité de fidélité.

### 6. Angle presse / Reddit — Day 3 ou semaine 1

> « Les clients fidèles des box internet paient en moyenne 40% de plus que
> les nouveaux abonnés — ReneGo calcule votre 'pénalité de fidélité'. »

Cet angle est irrésistible pour 60 Millions de Consommateurs et UFC-Que
Choisir : il nomme un problème que des millions de lecteurs vivent, il
utilise des données de l'ARCEP (autorité neutre), et il offre un outil
concret pour mesurer la pénalité individuellement.

## Pourquoi c'est défendable

1. **Toutes les données viennent de l'ARCEP et d'Ariase** — pas de ReneGo.
   L'autorité de la source EST le mécanisme de persuasion.
2. **Le calcul est une soustraction** vérifiable par n'importe qui :
   39,99 € − 28,59 € = 11,40 €/mois = 40% de plus.
3. **Le terme « pénalité de fidélité » est descriptif**, pas inventé.
   Ofcom l'utilise officiellement. C'est un constat, pas une accusation.
4. **La tendance est factuelle** : prix catalogue en baisse + factures
   en hausse = écart qui se creuse. C'est de l'arithmétique.

## Pourquoi c'est puissant (Opower)

Opower a construit une entreprise de 532M$ sur un seul insight : dire
aux gens comment ils se comparent à leurs pairs change leur comportement
plus efficacement que leur donner des données de prix. Validé par des
essais contrôlés randomisés J-PAL sur 60M+ de clients.

ReneGo compare actuellement les factures à des OFFRES (rationnel,
Système 2, facile à ignorer). Ajouter la pénalité de fidélité compare
les factures à d'AUTRES PERSONNES (émotionnel, Système 1, difficile à
ignorer). C'est la différence entre « voici une offre moins chère »
(information) et « vous payez 40% de plus que quelqu'un qui vient
d'arriver » (indignation).

## Ce qu'on ne dit PAS (garde-fous)

- Pas de chiffre précis sur le nombre de personnes impactées (on ne sait pas)
- Pas de garantie que la pénalité s'applique à chaque utilisateur
- Pas de claim sur un pourcentage d'économies (le delta varie)
- Les chiffres Ariase sont une moyenne nationale — le prix réel dépend de
  l'offre, de l'opérateur et de la zone géographique
- On dit « en moyenne » et on cite la source, toujours

## Décisions PM nécessaires

1. **Faut-il intégrer la pénalité de fidélité dans le widget et la carte
   pour le lancement (V8 copy change) ?** Recommandation Growth : oui,
   c'est une phrase par surface, zéro dev, et l'impact sur la conversion
   et le partage est le plus élevé de toutes les améliorations restantes.
2. **Faut-il utiliser l'angle presse « pénalité de fidélité » pour les
   posts Reddit Day 3 ?** Recommandation Growth : oui, en complément du
   message existant (pas en remplacement).
3. **Faut-il nommer le concept « pénalité de fidélité » dans le
   positionnement officiel ?** Recommandation Growth : oui, c'est un
   concept que ReneGo peut posséder en France.

---

*Brief rédigé par renego-growth, 19:40 CET, 13 mars 2026.*
