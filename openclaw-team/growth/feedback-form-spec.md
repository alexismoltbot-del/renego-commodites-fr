# GROWTH-06 — Feedback Form V0 Spec

Date: 2026-03-13 19:40 CET
Agent: renego-growth
Status: spec ready — form to be created on Google Forms

---

## Objectif

Collecter les offres de rétention proposées par les opérateurs quand un
utilisateur suit la recommandation ReneGo. Chaque réponse alimente la
future base de données d'offres cachées (US finding #10).

## Titre du formulaire

**Qu'a proposé votre opérateur ?**

_Aidez-nous à mieux préparer les prochains utilisateurs. 30 secondes,
4 questions, 100% anonyme._

## Champs

### 1. Quel est votre opérateur actuel ?

- Type : dropdown / choix unique
- Options : Orange | Free | SFR | Red by SFR | Bouygues Telecom | Autre
- Requis : oui

### 2. Qu'a proposé votre opérateur quand vous avez appelé ?

- Type : texte libre (paragraphe court)
- Placeholder : « Ex : 29,99 €/mois pendant 12 mois avec décodeur TV »
- Requis : non (l'utilisateur n'a peut-être pas encore appelé)

### 3. Quel prix mensuel proposé ? (€/mois)

- Type : nombre
- Placeholder : « Ex : 29,99 »
- Requis : non

### 4. Avez-vous accepté cette offre ?

- Type : choix unique
- Options : Oui | Non | Pas encore appelé | Je préfère ne pas dire
- Requis : oui

## Message de fin

_Merci ! Ces données nous aident à mieux préparer les prochains
utilisateurs. Aucune donnée personnelle n'est collectée._

## Intégration

- **V0 (Day 3) :** lien Google Form dans le plan d'action (après « Et si
  votre opérateur vous fait une contre-offre ? »)
- **V1 (Week 1) :** formulaire intégré dans le flow post-action, avec
  stockage côté serveur (DEV-12)

## URL

_(À remplir après création du Google Form)_

---

*Spec rédigée par renego-growth, 19:40 CET, 13 mars 2026.*
