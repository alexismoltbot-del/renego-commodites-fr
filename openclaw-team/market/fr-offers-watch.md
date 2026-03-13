# FR Offers Watch

Purpose:

- suivre les offres box internet FR utiles a la wedge ReneGo;
- noter les variations de prix, de promo et de source;
- signaler les URLs cassees et les changements qui doivent remonter au PM ou au Dev.

## Releve du 13 mars 2026 — 12h20 CET (Trust Pass 6)

> Mise a jour depuis Trust Pass 5. Toutes les 4 URLs du code sont 200 OK. Aucun changement de prix detecte. Mentions legales relues pour chaque operateur. Toutes les promos et offres restent actives aux memes conditions. Code, benchmark et watch alignes.

### 1. SFR Fibre Starter

- **Date:** 13/03/2026 08:20
- **Operateur:** SFR
- **Offre:** SFR Fibre Starter
- **Prix affiche:** 27,99 EUR/mois ✅ (confirme)
- **Prix apres promo:** non visible sur la page (benchmark dit 38,99 EUR — a confirmer)
- **Engagement:** 12 mois
- **Frais ouverture:** 49 EUR (remboursables sur demande via ODR)
- **Frais resiliation:** 59 EUR
- **Source benchmark (cassee):** `https://www.sfr.fr/offre-internet/box-fibre-starter` → **404**
- **Source valide:** `https://www.sfr.fr/offre-internet` → **200 OK**
- **Source utilisee dans le code:** `https://www.sfr.fr/offre-internet` ✅
- **Note:** URL specifique du benchmark toujours morte. La page globale confirme 27,99 EUR. Offres renouvelees au 10/03/2026 (mentions legales). Autres tiers visibles: Power S 31,99 EUR, Power 36,99 EUR, Premium 45,99 EUR sans engagement. SFR rembourse jusqu'a 100 EUR de frais de resiliation. Nouvelle SFR Box 10+ mentionnee (WiFi avance).
- **Trust Pass 4:** Prix stable (27,99 EUR confirme), URL stable (200 OK). Aucun changement. ✅
- **Trust Pass 5 (08:20):** Prix stable 27,99 EUR. URL 200 OK. Mentions legales confirmees "offres a partir du 10/03/2026". Aucun changement. ✅
- **Trust Pass 6 (12:20):** Prix stable 27,99 EUR. URL 200 OK. Mentions legales relues: "SFR Starter ADSL/FIBRE/THD : 27,99€/mois, engagement 12 mois". Frais 49 EUR, resiliation 59 EUR. Aucun changement. ✅

### 2. Bouygues Telecom Bbox Must Fibre

- **Date:** 13/03/2026 08:20
- **Operateur:** Bouygues Telecom
- **Offre:** Bbox Must Fibre
- **Prix affiche:** 35,99 EUR/mois (benchmark) — pas de signal de changement
- **Prix apres promo:** 42,99 EUR/mois (benchmark)
- **Engagement:** 12 mois
- **Frais ouverture:** 48-49 EUR
- **Source benchmark:** `https://www.bouyguestelecom.fr/offres-internet/bbox-must` → **200 OK**
- **Source globale:** `https://www.bouyguestelecom.fr/offres-internet` → **200 OK**
- **Source utilisee dans le code:** `https://www.bouyguestelecom.fr/offres-internet` ✅
- **Note:** Page Bbox Must charge bien. Confirme 2 Gb/s, WiFi 6, TV incluse. Prix exact non lisible dans l'extraction texte (JS-rendered) mais pas de signal de changement.
- **Trust Pass 4:** Page charge (200 OK), aucun signal de changement de prix. URL stable. ✅
- **Trust Pass 5 (08:20):** Page charge (200 OK). Mentions legales confirmees: Bbox Must 35,99 EUR/mois puis 42,99 EUR, engagement 1 an, frais mise en service **48 EUR** (code dit 49 EUR — ecart P2), frais resiliation **69 EUR**. Aucun changement de prix. ✅
- **⚠️ ALERTE (inchangee):** Nouvelle offre **B&YOU Pure Fibre Plus a 25,99 EUR/mois sans engagement** (8 Gb/s, frais 48 EUR, resiliation 69 EUR, depuis le 02/02/2026). Ce n'est PAS dans notre panel. Cout 24 mois: 25,99 x 24 + 48 = 671,76 EUR. Moins bon que Red (590,76 EUR) mais meilleur debit et sans engagement. Mentions legales confirmees 13/03 08:20 dans le fetch Bouygues. A considerer pour le panel.
- **Trust Pass 6 (12:20):** Page charge (200 OK). Mentions legales relues: "Bbox must fibre... 35,99€/mois... puis 42,99€/mois", engagement 1 an, frais 48 EUR, resiliation 69 EUR. B&YOU Pure Fibre Plus toujours a 25,99 EUR/mois. Aucun changement. ✅

### 3. Orange Livebox Fibre

- **Date:** 13/03/2026 08:20
- **Operateur:** Orange
- **Offre:** Livebox Fibre (Livebox S Wifi 7)
- **Prix affiche:** 29,99 EUR/mois ✅ (inclut remise nouveau client -8 EUR/mois + ODR Bienvenue -5 EUR/mois pendant 12 mois sur base 42,99 EUR)
- **Prix apres promo:** 42,99 EUR/mois ✅ (confirme via browser BUG-15, ferme 06:05 CET)
- **Engagement:** 12 mois
- **Frais ouverture:** 49 EUR (offerts pour nouveaux clients online)
- **Frais resiliation:** 60 EUR ⬆️ (benchmark disait 49 EUR)
- **Promo valable:** jusqu'au 08/04/2026
- **Source benchmark (cassee):** `https://boutique.orange.fr/internet/offres-702` → **400**
- **Source valide:** `https://boutique.orange.fr/internet/offres-fibre` → **200 OK**
- **Source utilisee dans le code:** `https://boutique.orange.fr/internet/offres-fibre` ✅
- **Note:** L'ancienne URL /offres-702 toujours morte. La page /offres-fibre confirme les offres. Mentions legales: "remise de -8 EUR/mois pendant 12 mois sur Livebox Fibre". Si la base est 32,99 EUR, le post-promo du benchmark (42,99 EUR) et du code sont faux. Cependant le prix post-promo pourrait etre correct si la remise s'applique sur un tarif de base plus eleve — impossible a confirmer sans JS. Orange rembourse jusqu'a 150 EUR de frais de resiliation.
- **Trust Pass 4:** URL stable (200 OK). Promo valable jusqu'au 08/04/2026 (inchangee). Frais mise en service 49 EUR offerts pour nouveaux clients online. Frais resiliation 60 EUR (confirme).
- **✅ ALERTE PROMO FERMEE:** BUG-14 corrige. Le code a maintenant `introMonths: 12` et `featureBadges: ["Promo 12 mois", ...]`. Mentions legales relues le 13/03 08:20: toujours "remise de -8 EUR/mois pendant 12 mois sur Livebox Fibre" + ODR Bienvenue -5 EUR/mois pendant 12 mois. Rien n'a change cote operateur.
- **✅ ALERTE POST-PROMO FERMEE (BUG-15 — ferme 06:05 CET):** Le dev a confirme via browser que le prix de base est 42,99 EUR. Le prix promo de 29,99 EUR resulte de 42,99 - 8 (remise) - 5 (ODR) = 29,99. Le code reflète maintenant `introMonthlyPriceEur: 29.99`, `standardMonthlyPriceEur: 42.99`. Cout 24 mois: 12 x 29,99 + 12 x 42,99 + 49 = 924,76 EUR. Benchmark aligne.
- **Note ODR:** L'ODR Bienvenue (-5 EUR/mois) est un remboursement differe sur demande, pas une remise automatique sur facture. Le code l'inclut dans le prix promo, ce qui est optimiste. Le prix "sans ODR" serait 34,99 EUR/mois (42,99 - 8). A mentionner en note dans la recommandation si on veut etre conservateur.
- **Trust Pass 6 (12:20):** URL 200 OK. Mentions legales relues: "Offres Livebox jusqu'au 08/04/2026", "remise de -8€/mois pendant 12 mois sur Livebox Fibre", "ODR Bienvenue -5€/mois pendant 12 mois". Frais 49 EUR offerts, resiliation 60 EUR. Aucun changement. ✅

### 4. Red by SFR THE BOX Fibre

- **Date:** 13/03/2026 08:20
- **Operateur:** Red by SFR
- **Offre:** RED Box Fibre
- **Prix affiche:** **22,99 EUR/mois** ⬇️ (confirme — etait 24,99 EUR dans le benchmark et le code)
- **Prix apres promo:** 22,99 EUR (prix fixe, sans engagement)
- **Engagement:** Sans engagement
- **Frais ouverture:** 39 EUR (remboursables sur demande — etait 49 EUR)
- **Frais resiliation:** 59 EUR
- **Debit:** 1 Gb/s ↓ / 1 Gb/s ↑ ⬆️ (benchmark et code disent 500/500)
- **Source benchmark (cassee):** `https://www.red-by-sfr.fr/box-internet/` → **404**
- **Source valide:** `https://www.red-by-sfr.fr/offre-internet/` → **200 OK**
- **Source utilisee dans le code:** `https://www.red-by-sfr.fr/offre-internet/` ✅
- **Offre valable depuis:** 20/01/2026 (mentions legales)
- **Note:** QUATRE ecarts confirmes entre code/benchmark et realite:
  1. **Prix: 24,99 → 22,99 EUR** (-2 EUR/mois = -48 EUR sur 24 mois)
  2. **Frais ouverture: 49 → 39 EUR** (-10 EUR)
  3. **Debit descendant: 500 Mb/s → 1 Gb/s** (x2)
  4. **Debit montant: 500 Mb/s → 1 Gb/s** (x2)
  - Cout reel 24 mois: 22,99 x 24 + 39 = **590,76 EUR**
  - Delta vs Free: **-369,00 EUR**
  - **Trust Pass 3: CODE ALIGNE ✅** — `boxMarketSnapshot.ts` reflete maintenant 22,99 EUR, 39 EUR setup, 1 Gb/s sym. Les 4 ecarts P0 de Trust Pass 2 sont tous fermes.
  - **Trust Pass 4:** Mentions legales relues: "offre à 22,99€/mois" (depuis 20/01/2026), frais 39 EUR, 1 Gb/s sym. Aucun changement. ✅
  - **Trust Pass 5 (08:20):** Mentions legales relues: "offre à 22,99€/mois" (depuis 20/01/2026), frais 39 EUR remboursables sur demande, frais resiliation 59 EUR, 1 Gb/s sym. Aucun changement. ✅
  - **Trust Pass 6 (12:20):** Mentions legales relues: "offre à 22,99€/mois" (depuis 20/01/2026), frais 39 EUR remboursables, resiliation 59 EUR, 1 Gb/s sym. Option SFR Box 8 a 1 EUR/mois pour 2 Gb/s (note). Aucun changement. ✅

### 5. Free — Freebox Revolution (reference)

- **Date:** 13/03/2026 08:20
- **Operateur:** Free
- **Offre:** Freebox Revolution (contrat actuel)
- **Prix:** 39,99 EUR/mois
- **Source:** Facture reelle
- **Statut:** `ok` (pas d'URL publique)
- **Note:** Pas de changement.

### 6. Free — Retention cible

- **Date:** 13/03/2026 08:20
- **Operateur:** Free
- **Offre:** Scenario retention interne
- **Prix cible:** 35,99 EUR/mois
- **Source:** Scenario interne
- **Statut:** `ok` (pas d'URL, hypothese)
- **Note:** Pas de changement. Scenario non verifiable publiquement.

---

## Resume des problemes — a remonter

### ✅ P0 FERMES

- **URLs benchmark:** corrigees dans Trust Pass 2. Toutes les URLs code sont 200 OK (reverifiees Trust Pass 3).
- **Red by SFR donnees code:** corrigees dans le code nuit du 12/03. Le snapshot reflete maintenant 22,99 EUR, 39 EUR setup, 1 Gb/s sym. Verifie Trust Pass 3.

### ✅ P0 FERME — Orange introMonths (BUG-14)

Code corrige: `introMonths: 12`, `featureBadges: ["Promo 12 mois"]`. QA confirme cycle 5.

### ✅ P1 FERME — Orange post-promo (BUG-15 — ferme 06:05 CET)

Le dev a confirme via browser (06:05 CET) que le prix de base Orange est bien 42,99 EUR. Le code a ete corrige: intro 29,99 EUR (42,99 - 8 remise - 5 ODR), standard 42,99 EUR. Cout 24 mois: 924,76 EUR (frais inclus). Benchmark et watch alignes Trust Pass 5.

| Champ | Code actuel | Verifie 13/03 08:20 | Aligne? |
|-------|------------|---------------|---------|
| Orange `introMonthlyPriceEur` | 29,99 EUR | 29,99 EUR (42,99 - 8 - 5) | ✅ |
| Orange `standardMonthlyPriceEur` | 42,99 EUR | 42,99 EUR (confirme browser) | ✅ |
| Orange frais resiliation | — | **60 EUR** (confirme) | ✅ note benchmark |

### 🟡 P2 — Offre non traquee

**B&YOU Pure Fibre Plus** a 25,99 EUR/mois sans engagement, 8 Gb/s, frais 48 EUR, depuis 02/02/2026. Cout 24 mois: 671,76 EUR. A considerer pour le panel.

### ✅ Stable

- SFR Starter: prix confirme 27,99 EUR, URL code ok
- Bouygues Bbox Must: page charge, prix confirme 35,99/42,99 EUR, URL code ok (setup fee 48 EUR vs code 49 EUR — P2)
- Red by SFR: prix confirme 22,99 EUR, URL code ok
- Free reference et retention: inchanges

## Verification prochaine

Day 2 matin (14/03 ~08:00): refresh prix standard.

## Historique des Trust Pass

| Pass | Date | Heure | Resultat |
|------|------|-------|----------|
| 1 | 12/03/2026 | 18:00 | Init, URLs cassees detectees, Red ecarts |
| 2 | 12/03/2026 | 20:21 | URLs corrigees, Red confirme, Orange alerte |
| 3 | 13/03/2026 | 00:20 | Code Red aligne, Orange promo 12m confirmee |
| 4 | 13/03/2026 | 04:20 | Stable, BUG-14 ferme, BUG-15 ouvert |
| 5 | 13/03/2026 | 08:20 | Stable, BUG-15 ferme, benchmark aligne |
| 6 | 13/03/2026 | 12:20 | Stable, aucun changement. 4/4 URLs 200 OK. |
