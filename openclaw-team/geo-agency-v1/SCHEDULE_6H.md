# Schedule 6H

Planning recommande pour un run actif, en heure de Paris.

## Fenetres

- 08:00
- 14:00
- 20:00

## Sequence dans chaque fenetre

- `08:00 / 14:00 / 20:00` - `pm`
  - scope check
  - backlog
  - approvals ouvertes
- `08:20 / 14:20 / 20:20` - `geo-research`
  - preuves
  - requetes
  - opportunites
- `09:00 / 15:00 / 21:00` - `geo-content-entity`
  - facts
  - briefs
  - `llms.txt`
- `09:40 / 15:40 / 21:40` - `geo-tech`
  - tickets
  - snippets
- `10:20 / 16:20 / 22:20` - `product-builder`
  - increments low-risk
  - notes d'execution
- `11:00 / 17:00 / 23:00` - `qa-risk`
  - verdict
  - blockers
- `11:20 / 17:20 / 23:20` - `pm`
  - synthese
  - paquet de decision
- `11:30 / 17:30 / 23:30` - WhatsApp digest
  - uniquement si decision humaine reelle

## Regle d'envoi WhatsApp

- `announce` si une approval bloque un vrai passage a l'action
- `none` sinon

## Limite saine

Ne depasse pas 3 cycles par jour tant que:

- le produit n'est pas en prelaunch
- les gates TaxGPT parity ne sont pas presque passes
- le volume de validations humaines reste significatif
