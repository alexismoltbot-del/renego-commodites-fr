# Brief Offers-FR → PM — Trust Pass 1

Date: 12 mars 2026 18h05 CET
Agent: `renego-offers-fr`
Ticket: DATA-01 (premier pass)

---

## TL;DR

**3 URLs sur 4 du benchmark sont mortes.** Red by SFR a baisse ses prix. Une offre B&YOU potentiellement interessante n'est pas dans notre panel. Le benchmark et le code ont besoin de corrections avant que le produit soit montrable.

---

## Problemes par severite

### 🔴 P0 — 3 URLs cassees (bloque le lancement)

Les liens dans `benchmark-box-fr.md` et potentiellement dans `boxMarketSnapshot.ts` pointent vers des 404/400 :

1. **SFR Starter** : `sfr.fr/offre-internet/box-fibre-starter` → 404. Remplacement : `sfr.fr/offre-internet`
2. **Orange Livebox** : `boutique.orange.fr/internet/offres-702` → 400. Remplacement : `boutique.orange.fr/internet/offres-fibre`
3. **Red by SFR** : `red-by-sfr.fr/box-internet/` → 404. Remplacement : `red-by-sfr.fr/offre-internet/`

**Action requise :** Dev doit mettre a jour les URLs dans le benchmark ET dans le code source. Je fournis les URLs de remplacement ci-dessus.

### 🟠 P1 — Red by SFR : 3 donnees fausses dans le benchmark

| Champ | Benchmark actuel | Valeur reelle | Impact |
|-------|-----------------|---------------|--------|
| Prix mensuel | 24,99 EUR | **22,99 EUR** | -2 EUR/mois = -48 EUR sur 24 mois |
| Frais d'ouverture | 49 EUR | **39 EUR** (remboursables) | -10 EUR |
| Debit ↓/↑ | 500/500 Mb/s | **1 Gb/s sym** | Parite debit avec SFR Starter |

Red by SFR est desormais notre recommandation la plus forte : **590,76 EUR sur 24 mois** (vs 599,76 EUR dans le benchmark), soit **-369 EUR vs Free actuel**. L'offre est aussi beaucoup plus competitive en debit.

**Si on publie avec les anciens chiffres, on sous-vend notre meilleure reco.** C'est pas un blocker mais ca affecte la credibilite du produit.

### 🟡 P2 — Offre manquante dans le panel

**B&YOU Pure Fibre Plus** : 25,99 EUR/mois, sans engagement, jusqu'a 8 Gb/s. C'est une offre Bouygues low-cost qui n'est pas dans notre panel de 6. Cout 24 mois : 671,76 EUR (moins bon que Red mais meilleur debit). A evaluer pour Day 2 — pas critique pour le lancement.

### ✅ Ce qui est stable

- SFR Starter : prix confirme, URL globale ok
- Bouygues Bbox Must : page charge, pas de signal de changement visible
- Free reference : inchange (facture)

---

## Recommandation pour Day 1

1. **Priorite absolue :** Passer les 3 URLs de remplacement a Dev pour DEV-04 / FIX-01.
2. **Priorite haute :** Mettre a jour les chiffres Red by SFR dans benchmark ET `boxMarketSnapshot.ts` (prix, frais, debit).
3. **Peut attendre Day 2 :** Evaluer l'ajout de B&YOU au panel.

---

## Ce qui reste a faire pour DATA-01

- [ ] Confirmer le prix post-promo exact de SFR Starter (38,99 EUR ?)
- [ ] Confirmer le prix de base Orange Livebox Fibre (32,99 EUR ? le calcul -8 EUR de remise ne colle pas parfaitement avec 24,99 EUR promo)
- [ ] Verifier si `boxMarketSnapshot.ts` utilise des URLs differentes du benchmark (partiellement fait — SFR dans le code pointe vers `/offre-internet` qui est ok, Red dans le code utilise `/box-internet/` qui est 404)

Je ferai un refresh complet demain matin (Day 1) pour confirmer tout ca.
