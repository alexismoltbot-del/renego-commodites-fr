# TaxGPT Parity Gates

Dire "au moins aussi bien que TaxGPT" n'est utile que si on le traduit en gates observables.

Je reprends les lecons visibles du benchmark local TaxGPT:

- contexte client clair
- trust et securite visibles
- produit operationnel, pas simple chat
- garde-fous et revue humaine assumes

Source interne:

- `/Users/alexis/Documents/Playground/fiscalgpt/docs/taxgpt-benchmark.md`

## Gate 1 - Contexte exploitable

Le produit doit montrer un contexte dossier minimal:

- domaine
- marche
- langue
- pages prioritaires
- entites et claims verifies

Sans cela, l'agence ressemble a un audit jetable.

## Gate 2 - Trust visible

Le produit doit rendre visibles:

- sources
- dates de releve
- hypotheses marquees
- claims interdits
- revue QA

Sans cela, on est en dessous du niveau de confiance attendu.

## Gate 3 - Workflow produit

Le produit doit operer comme une plateforme de travail:

- intake
- job scope
- livrables par role
- backlog
- approvals
- verdict QA

Sans cela, on a juste une equipe qui improvise.

## Gate 4 - Safe launch

Avant launch:

- aucun P0 ouvert
- zero claim critique sans source
- zero action risquee sans approval
- plan de rollback pour les changements techniques

## Gate 5 - User-facing quality

Avant de dire "pret":

- les quick wins sont priorises
- le pack final est compréhensible par un humain en 10 minutes
- il existe un verdict go/no-go clair
- la proposition de valeur est credible sans sur-promesse

## Verdict

Le produit n'est "au moins aussi bien que TaxGPT" sur sa couche operationnelle V1 que si les 5 gates passent.

On ne compare pas la profondeur fiscale ou la taille de corpus. On compare la rigueur produit visible, la confiance, et l'operabilite.
