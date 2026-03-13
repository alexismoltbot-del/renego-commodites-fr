# Demo Video Script

Date: 2026-03-12
Owner: `renego-growth`
Status: draft founder pass

Goal:

- produire une video demo etape par etape pour le lancement public;
- assembler le montage dans `Remotion`;
- utiliser `Kling` uniquement pour les plans d'ambiance ou transitions qui ne
  montrent pas de donnees client reelles.

## Structure cible (60 a 90 secondes)

### Scene 1 - Le probleme

- ecran: facture box internet + surlignage du prix mensuel
- voix / copy:
  - "Beaucoup de foyers paient leur box internet depuis des annees sans savoir
    s'il existe mieux."
- asset:
  - capture produit ou plan Kling generique d'une facture sur table

### Scene 2 - L'import

- ecran: drag and drop du PDF dans ReneGo
- voix / copy:
  - "Vous importez votre facture. ReneGo extrait les faits utiles et compare les
    offres du marche."
- asset:
  - capture d'ecran reelle du produit

### Scene 3 - La comparaison

- ecran: double recommandation `prix pur` / `prix-features`
- voix / copy:
  - "Le moteur montre le vrai cout sur 24 mois et explique pourquoi une offre
    est recommandee."
- asset:
  - capture produit + zoom sur les cartes d'offres

### Scene 4 - L'honnetete

- ecran: cas ou ReneGo dit de ne pas bouger
- voix / copy:
  - "Et si le changement ne vaut pas l'effort, ReneGo vous le dit."
- asset:
  - capture d'ecran du verdict `attendre` ou maquette dediee

### Scene 5 - Le mandat

- ecran: checklist simple "mandat -> renegociation -> offre finale -> vous
  souscrivez"
- voix / copy:
  - "Vous nous donnez mandat. Nous renegocions pour vous. Vous recevez l'offre
    finale, puis vous decidez."
- asset:
  - animation Remotion de la timeline operatoire

### Scene 6 - La promesse

- ecran: hero + preuves + tagline finale
- voix / copy:
  - "100% gratuit. Aucune commission. Une recommandation transparente, ou rien
    si cela ne vaut pas le coup."
- asset:
  - hero produit + CTA

## Pipeline de production

1. `Growth`
   - fige la voix off et les sous-titres;
   - choisit les claims publies et validables.
2. `Dev`
   - capture les ecrans du produit;
   - prepare une composition `Remotion`.
3. `Kling`
   - genere uniquement les plans d'ambiance ou de transition, pas les captures
     produit ni les chiffres.
4. `QA`
   - verifie que la video n'affiche aucun claim non prouve et aucun faux
     parcours.

## Kling prompts (draft)

- "French home office, neutral daylight, printed telecom invoice on a wooden
  table, hands reviewing the monthly price, realistic but generic, no brand
  logos, cinematic close-up"
- "Minimal motion graphic showing a simple four-step service timeline: facture,
  analyse, renegociation, offre finale, clean editorial style, warm neutrals,
  no logos, no UI hallucination"

## Blocages

- cle API `Kling` necessaire pour les plans generes;
- validation du format final:
  - `16:9` pour site / socials
  - ou `9:16` pour ads / WhatsApp / socials courts

## Definition of done

- 1 montage Remotion exportable
- 1 version sous-titree
- 1 version sans son
- claims relus par PM + QA
