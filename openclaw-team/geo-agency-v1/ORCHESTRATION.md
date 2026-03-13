# Orchestration

## Mode recommande

Utilise une orchestration par fichiers et baton ecrit. C'est plus robuste que des conversations libres entre agents.

## Etat d'un run

1. `intake`
   - humain remplit `runs/<client>/intake.md`
   - humain ou PM remplit `runs/<client>/client-facts.yaml`
2. `scope-frozen`
   - PM cree `runs/<client>/job.yaml`
   - PM ecrit `runs/<client>/handoffs/pm-to-specialists.md`
3. `specialists-working`
   - `geo-research`, `geo-content-entity`, `geo-tech` travaillent en parallele
   - chacun ecrit dans son propre fichier de livrable
4. `builder-window`
   - `product-builder` applique les quick wins non risques ou prepares pour approval
5. `qa-review`
   - QA relit tous les livrables
   - QA produit `qa-report.md` et un handoff vers PM
6. `pm-synthesis`
   - PM compile `final-pack.md`
   - PM cree la liste des approvals humaines restantes
7. `approved-for-execution`
   - humain valide ou bloque les actions sensibles
8. `done`

## Regles de possession

- PM possede `job.yaml`, `backlog`, `final-pack.md`
- chaque specialiste possede son livrable et son handoff
- `product-builder` possede les notes d'execution du cycle
- QA possede `qa-report.md`
- humain possede la decision finale sur les gates

## Regles d'ecriture

- pas d'edition croisee d'un livrable deja possede par un autre role
- pas de changements en production dans V1 sans demande explicite
- toute hypothese doit etre marquee `Assumption`
- toute affirmation externe doit avoir `Source` et `As of`

## Contrat de handoff

Chaque handoff doit contenir:

- objectif du passage de relais
- fichiers a lire en premier
- ce qui est termine
- ce qui reste a faire
- risques ouverts
- approvals necessaires
- definition of done du destinataire

Le template est dans `templates/handoff.md`.

## Boucle quotidienne minimale

- cycle 1: PM freeze le scope avant tout travail profond
- cycle 2: specialistes livrent une premiere passe en parallele
- cycle 3: QA bloque ou valide
- cycle 4: PM arbitre, coupe, et passe a l'humain

## Quand stopper l'autonomie

Stop immediate et escalade humaine si:

- changement `robots.txt`, `noindex`, canonical, redirects, sitemap ou navigation principale
- creation d'un contenu public avec claims non verifies
- edition de profils tiers (Wikipedia, Reddit, LinkedIn, GBP, Wikidata)
- generation de plus de 20 pages
- toute action legale, medicale, financiere, ou reputationally risky
