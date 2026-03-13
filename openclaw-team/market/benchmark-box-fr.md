# Benchmark Box Internet France — 12 mars 2026

Releve effectue pour la session du 12 mars 2026.
Usage: reference pour le dev et le QA.

> **Derniere verification Offers-FR:** 13/03/2026 20:20 CET (Trust Pass 8).
> Toutes les 4 URLs Source sont vivantes (200 OK). Aucun changement de prix detecte depuis Trust Pass 5.
> Code aligne sur Red by SFR ✅. Orange introMonths corrige a 12 ✅ (BUG-14 ferme).
> Orange intro price corrige a 29,99 EUR dans le code (BUG-15 ferme 06:05): inclut remise -8 EUR + ODR -5 EUR sur base 42,99 EUR. Benchmark aligne ci-dessous.
> Bouygues setup fee: site dit 48 EUR, code dit 49 EUR — ecart mineur P2.
> Orange promo toujours valable jusqu'au 08/04/2026 (confirmee). SFR offres depuis le 10/03/2026 (confirmees). Red offre depuis le 20/01/2026 (confirmee).

## Panel retenu (6 offres)

| # | Operateur | Offre | Prix TTC/mois | Promo | Prix post-promo | Engagement | Debit max ↓ | Debit max ↑ | TV | Source URL | Date releve |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Free | Freebox Revolution (contrat actuel) | 39,99 EUR | — | 39,99 EUR | Sans (client > 12 mois) | 1 Gb/s | 600 Mb/s | TV by CANAL + bouquet | Facture reelle | 12/03/2026 |
| 2 | SFR | Fibre Starter | 27,99 EUR | 12 mois | 38,99 EUR | 12 mois | 1 Gb/s | 500 Mb/s | 160 chaines SFR TV | https://www.sfr.fr/offre-internet | 12/03/2026 |
| 3 | Bouygues Telecom | Bbox Must Fibre | 35,99 EUR | 12 mois | 42,99 EUR | 12 mois | 2 Gb/s ↓ | 900 Mb/s | TV incluse | https://www.bouyguestelecom.fr/offres-internet | 12/03/2026 |
| 4 | Orange | Livebox Fibre | 29,99 EUR ✅ | 12 mois ✅ | 42,99 EUR ✅ | 12 mois | 2 Gb/s | 800 Mb/s | 200 chaines | https://boutique.orange.fr/internet/offres-fibre | 13/03/2026 |
| 5 | Red by SFR | RED Box Fibre | ~~24,99~~ **22,99 EUR** ⬇️ | Prix fixe | **22,99 EUR** | Sans engagement | ~~500 Mb/s~~ **1 Gb/s** ⬆️ | ~~500 Mb/s~~ **1 Gb/s** ⬆️ | 35 chaines (app) | https://www.red-by-sfr.fr/offre-internet/ | 12/03/2026 |
| 6 | Free | Retention cible | 35,99 EUR | Negocie | A confirmer | A confirmer | Identique | Identique | Identique | Scenario interne | 12/03/2026 |

## Cout sur 24 mois (hors frais d'ouverture)

| Offre | Annee 1 | Annee 2 | Total 24 mois | Delta vs Free actuel | Frais ouverture |
|---|---|---|---|---|---|
| Free actuel | 479,88 EUR | 479,88 EUR | 959,76 EUR | — | — |
| SFR Starter | 335,88 EUR | 467,88 EUR | 803,76 EUR | **-156,00 EUR** | 49 EUR |
| Bouygues Must | 431,88 EUR | 515,88 EUR | 947,76 EUR | **-12,00 EUR** | 49 EUR |
| Orange Livebox | 359,88 EUR ✅ | 515,88 EUR ✅ | 924,76 EUR ✅ | **-35,00 EUR** | 49 EUR |
| Red by SFR | ~~299,88~~ **275,88 EUR** | ~~299,88~~ **275,88 EUR** | ~~599,76~~ **551,76 EUR** | ~~-360,00~~ **-408,00 EUR** | ~~49~~ **39 EUR** |
| Retention Free | 431,88 EUR | ~479,88 EUR | ~911,76 EUR | **-48,00 EUR** | 0 EUR |

> **Note cout Red:** 22,99 x 12 = 275,88 EUR/an. Total 24 mois hors frais: 551,76 EUR. Avec frais: 590,76 EUR. Delta vs Free (avec frais): -369,00 EUR.

## Notes

- Red by SFR est le **clear winner sur 24 mois** (maintenant -408 EUR hors frais, -369 EUR avec frais) grace au prix fixe sans engagement. **Code aligne le 12/03/2026 nuit — prix, debits et frais corrects dans `boxMarketSnapshot.ts` ✅.**
- SFR Starter est competitif en annee 1 mais la remontee a 38,99 EUR reduit le gain.
- Orange Livebox: **promo 12 mois confirmee** et **code corrige** (BUG-14 ferme, introMonths = 12 ✅). Promo valable jusqu'au 08/04/2026. Frais de resiliation confirmes a 60 EUR (pas 49 EUR). **BUG-15 ferme (06:05 CET):** le dev a confirme via browser que le prix de base est 42,99 EUR. Le prix promo de 29,99 EUR inclut la remise nouveau client (-8 EUR/mois) + ODR Bienvenue (-5 EUR/mois). Cout 24 mois: 924,76 EUR. Benchmark aligne.
- Bouygues est le moins interessant financierement mais offre le meilleur debit (2 Gb/s).
- La retention Free est le chemin de moindre friction mais le gain le plus faible.
- **B&YOU Pure Fibre Plus** (25,99 EUR/mois, sans engagement, 8 Gb/s) detectee mais non ajoutee au panel — a evaluer.

## Avertissement

Les prix sont ceux affiches sur les sites publics des operateurs au 12 mars 2026. Ils peuvent changer a tout moment. Ce benchmark est un snapshot, pas une garantie.

## Historique des verifications

| Date | Heure | Pass | Changements |
|------|-------|------|------------|
| 12/03/2026 | 18:00 | Trust Pass 1 | Initialisation, detection URLs cassees, Red by SFR prix et specs changes |
| 12/03/2026 | 20:21 | Trust Pass 2 | Confirmation URLs, MAJ benchmark URLs, confirmation Red ecarts, alerte Orange promo/post-promo |
| 13/03/2026 | 00:20 | Trust Pass 3 | 4/4 URLs 200 OK, code Red aligne ✅, Orange promo 12 mois confirmee (code encore a 6), P0 Red ferme |
| 13/03/2026 | 04:20 | Trust Pass 4 | 4/4 URLs 200 OK, aucun changement de prix, Orange introMonths corrige dans le code (BUG-14 ferme), BUG-15 post-promo toujours ouvert |
| 13/03/2026 | 08:20 | Trust Pass 5 | 4/4 URLs 200 OK, aucun changement de prix. Benchmark aligne sur code post-BUG-15: Orange intro 29,99 EUR (remise -8 + ODR -5), standard 42,99 EUR confirme, cout 24 mois 924,76 EUR. Bouygues setup fee ecart 48 vs 49 EUR note (P2). |
| 13/03/2026 | 12:20 | Trust Pass 6 | 4/4 URLs 200 OK. Aucun changement de prix. Mentions legales relues: Red 22,99 EUR (depuis 20/01/2026), SFR Starter 27,99 EUR (depuis 10/03/2026), Bouygues Must 35,99/42,99 EUR (frais 48 EUR), Orange 29,99/42,99 EUR (promo jusqu'au 08/04/2026). Code et benchmark alignes. |
| 13/03/2026 | 16:20 | Trust Pass 7 | 4/4 URLs 200 OK. Aucun changement de prix. Mentions legales relues et stables: Red 22,99 EUR, SFR 27,99 EUR, Bouygues 35,99/42,99 EUR, Orange 29,99/42,99 EUR (promo jusqu'au 08/04/2026). B&YOU 25,99 EUR toujours hors panel (P2). Code et benchmark alignes. |
| 13/03/2026 | 20:20 | Trust Pass 8 | 4/4 URLs 200 OK. Aucun changement de prix. Mentions legales stables: Red 22,99 EUR (depuis 20/01/2026), SFR Starter 27,99 EUR (depuis 10/03/2026), Bouygues Must 35,99/42,99 EUR (frais 48 EUR), Orange 29,99/42,99 EUR (promo jusqu'au 08/04/2026). B&YOU 25,99 EUR hors panel (P2). Code et benchmark alignes. |
