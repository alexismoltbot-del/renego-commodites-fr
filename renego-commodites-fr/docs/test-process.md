# Process de Test

## Lancer le front

```bash
cd /Users/alexis/Documents/Playground/renego-commodites-fr
npm install
npm run dev
```

Le front tourne ensuite sur `http://127.0.0.1:4173`.

## Tests manuels MVP

### 1. Smoke test

- ouvrir la page;
- verifier que les sections hero, simulation, recommandations et observatoire s'affichent;
- verifier l'affichage desktop puis mobile.

### 2. Test import

- importer un PDF factice ou un vrai document non sensible;
- verifier que le resume de fichiers importes se met a jour;
- verifier qu'aucune action externe n'est declenchee.

### 3. Test sectoriel

- passer de `Electricite` a `Mobile`, `Box internet`, `Gaz`, `Assurance habitation`;
- verifier que contrat courant, retention, recommandations et observatoire changent ensemble;
- verifier que la recherche de verticale filtre correctement les onglets.

### 4. Test mandat

- activer et desactiver la case de mandat;
- verifier que l'etat visuel change entre `Analyse seule` et `Mandat active pour actions assistees`;
- verifier qu'aucun wording ne laisse penser qu'une action irreversible part sans validation.

### 5. Test de coherences produit

- energie: la recommandation principale doit pouvoir etre "Changer maintenant";
- mobile: une offre moins chere peut rester declassée si la qualite locale est inferieure;
- box: la recommandation doit mentionner l'eligibilite et la restitution materiel;
- assurance: une offre moins chere ne doit pas etre presentee comme equivalent parfait sans nuance.

## Gate avant backend

- le front explique bien les garde-fous;
- l'UX tient en un ecran comprenable;
- les trois sorties utilisateur sont claires:
  - garder et renegocier;
  - changer maintenant;
  - attendre.

## Suite recommandee

Quand le front est valide, construire ensuite:

1. ingestion PDF + OCR;
2. extraction JSON sous schema controle;
3. entrepot des offres + snapshots;
4. moteur d'equivalence;
5. centre d'action avec journal d'audit.
