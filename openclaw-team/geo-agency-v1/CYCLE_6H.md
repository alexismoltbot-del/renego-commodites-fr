# Continuous 6H Cycle

Oui, on peut faire tourner le projet en boucles continues de 6 heures. Mais pas comme une boucle infinie opaque.

La bonne forme V1 est:

- agents autonomes dans leur perimetre
- un seul baton d'orchestration
- validations humaines poussees sur WhatsApp seulement quand un gate est touche
- arret quand les gates de lancement sont tous au vert

## Cadence recommandee

Fuseau: Europe/Paris

Chaque bloc de 6h suit le meme schema:

1. `T+00` PM review
   - lit le dernier etat
   - coupe le scope
   - ouvre ou ferme les gates
2. `T+20` Research
   - met a jour les preuves et opportunites
3. `T+60` Content / Entity
   - transforme les preuves en assets de citation
4. `T+100` Tech
   - produit les tickets indexation / schema / parsing
5. `T+150` QA
   - relit le lot du cycle
   - bloque ou valide
6. `T+180` PM synthesis
   - arbitre
   - prepare la decision humaine si necessaire
7. `T+210 -> T+360`
   - execution des quick wins non risqués
   - ou attente d'approval humaine

## Exemple sur 24h

- 08:00 - cycle 1
- 14:00 - cycle 2
- 20:00 - cycle 3
- 02:00 - optionnel, seulement si tu veux vraiment du 24/7

Ma recommandation reelle:

- 08:00
- 14:00
- 20:00

Trois cycles par jour suffisent pour une V1. Le cycle de 02:00 ajoute du bruit plus qu'il n'ajoute de valeur.

## Regle d'autonomie

Chaque agent peut:

- lire les fichiers de contexte du run
- produire ou mettre a jour son livrable
- creer un handoff
- classer un risque
- faire un pas concret sans validation si aucun gate n'est touche

Chaque agent ne peut pas:

- publier
- changer la prod
- changer la strategie
- elargir le scope
- contacter l'exterieur

## Definition d'un bon cycle

Un cycle est utile seulement si au moins un de ces elements a avance:

- une preuve verifiee ajoutee
- un livrable concret ameliore
- un risque ferme
- une approval preparee proprement
- un gate de lancement passe

Sinon le cycle doit se terminer en `HEARTBEAT_OK`, pas en pseudo-travail.

## Conditions d'arret

Le systeme continue tant qu'un de ces etats est vrai:

- il reste un gate de lancement ouvert
- il reste un P0 ou P1 avant launch
- la preuve client est insuffisante
- la UX ou la trust layer est en dessous du niveau cible

Le systeme s'arrete quand:

- QA dit `go for launch`
- PM confirme que les livrables launch sont complets
- les approvals humaines critiques sont fermees
