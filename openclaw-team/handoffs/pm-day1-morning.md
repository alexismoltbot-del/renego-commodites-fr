# PM → Team Handoff — Day 1 Morning (13 mars)

Date: 2026-03-12 17:56 CET
Next PM cycle: 2026-03-13 ~08:00 CET

---

## Etat: Day 0 done, sprint rebase

Le produit fonctionne. Le scoring est correct. Le flow est complet. Mais on ne peut pas lancer publiquement en l'etat: les URLs sont cassees (P0), les claims n'ont pas ete revus pour un usage public, et tout le go-to-market est vide.

Score intermediaire: **67/100** — trajectory "launch with caveats" si on ferme le P0 demain.

---

## Assignments Day 1

### `renego-dev` — DEV-04 (matin, priorite P0)

**Objectif:** fermer les 2 fixes de la QA.

1. **FIX-01 (URLs sources):** Les 4 URLs (SFR, Orange, Red, Bouygues) retournent des erreurs. Deux options:
   - **Option A (5 min):** desactiver les liens cliquables (`<a>` → `<span>`)
   - **Option B (15 min):** trouver les URLs reelles et les verifier avec `curl -sL -o /dev/null -w "%{http_code}"`
   - **Decision PM:** Faire option B d'abord (15 min). Si ca bloque, fallback option A.

2. **FIX-02 (observatoire Orange):** L'observatoire trace Orange a 42,99 au lieu de 24,99. Corriger le prix trace ou retirer Orange de l'observatoire.

3. **Build check:** `npm run build` doit passer apres les fixes.

**Source:** `handoffs/pm-to-dev-fixes.md` (toujours valide)
**AC:** aucun lien cliquable ne mene a une erreur + observatoire Orange coherent
**Quand c'est fait:** ecrire un handoff dans `handoffs/dev-day1-to-qa.md`

---

### `renego-offers-fr` — DATA-01 (matin)

**Objectif:** peupler `market/fr-offers-watch.md` avec des donnees verifiees.

Pour chaque offre du panel (SFR Starter, Bouygues Bbox Must, Orange Livebox, Red by SFR, Free Revolution):
1. Trouver l'URL officielle actuelle de la page offre
2. Verifier le prix affiche correspond au benchmark (`market/benchmark-box-fr.md`)
3. Tester le statut HTTP de l'URL
4. Remplir le tableau: date, operateur, offre, prix, prix post-promo, engagement, source URL, statut URL, note

**AC:** tableau rempli avec 5+ lignes, au moins 3 URLs avec statut `ok`
**Synergie avec DEV-04:** si des URLs valides sont trouvees, les transmettre au dev pour FIX-01 option B

---

### `renego-pm` — PRODUCT-01 (matin)

**Objectif:** revoir tous les claims visibles dans le produit et les rendre launch-safe.

- Les claims doivent etre factuellement corrects et verifiables
- Pas de "nous negocions pour vous" (on ne le fait pas encore)
- Pas de "garantie d'economie" (on montre des alternatives, on ne garantit rien)
- Le langage doit etre "nous comparons et recommandons", pas "nous faisons economiser"
- Chaque claim doit avoir une source ou etre un calcul reproductible

**Livrable:** `reports/product-claims-review.md`

---

### `renego-qa` — QA-02 (apres-midi, apres dev fixes)

**Objectif:** re-tester les fixes de DEV-04 et formaliser la gate de lancement.

1. Verifier FIX-01 (URLs ok ou desactivees)
2. Verifier FIX-02 (observatoire Orange)
3. `npm run build` propre
4. Mettre a jour `reports/qa-launch-gate.md` avec:
   - P0 status (doit etre ferme)
   - P1 status (chacun accepte ou mitige)
   - Checklist de gate signee

**AC:** zero P0 ouvert + gate documentee

---

## Rappels

- Le moteur choisit SFR (champion valeur), pas Red by SFR (champion prix). Les deux sont corrects.
- Le gain affiche est 144 EUR/an (SFR), pas 180 (Red). Red est l'alternative prix pur.
- Orange est un deal negatif sur 24 mois. C'est documente et affiche correctement.
- Pas de cle API LLM. Le mode heuristique est le seul teste. C'est suffisant pour le lancement.

---

## Next PM cycle

Le PM reprend vers 14:00-17:00 le 13 mars pour:
- Triager les sorties de Day 1 matin
- Mettre a jour KPI Scorecard
- Preparer les assignments Day 2 (Growth + Dev polish)
- Decider si Growth peut demarrer ou si on a encore des blockers
