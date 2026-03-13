# WhatsApp Escalation

WhatsApp ne doit pas devenir un flux de micro-notifications. Il doit servir uniquement aux validations et aux incidents.

## Quand envoyer un message

- un gate humain bloque la suite
- un P0 ou incident critique apparait
- un verdict launch / no-launch demande une decision
- une deadline proche risque d'etre ratee

## Quand ne pas envoyer

- simple mise a jour de progression
- resume redondant
- question sans impact de decision
- choix deja couvert par le scope fige

## Format du message WhatsApp

Format tres court, en texte simple:

1. `DECISION`
2. `Pourquoi maintenant`
3. `Option recommandee`
4. `Risque si on se trompe`
5. `Lien/fichier a lire`

## Exemple

```text
DECISION
Publier ou non le llms.txt du client X aujourd hui.

Pourquoi maintenant
Le cycle QA est vert sauf ce point. Tout le reste est pret.

Option recommandee
Oui, publier la version courte avec 6 URLs max.

Risque si on se trompe
Narrative incomplete ou pages non prioritaires mises en avant.

Lire
runs/client-x/approvals.md
```

## Regle de silence

Si aucune decision n'est necessaire, aucun message WhatsApp n'est envoye.

## Ownership

- PM prepare le packet de decision
- QA confirme le niveau de risque
- l'humain tranche
