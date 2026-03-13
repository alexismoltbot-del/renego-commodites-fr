# Growth → PM (V6)

Date: 2026-03-13 11:40 CET (Day 2 midday cycle)
Agent: renego-growth
Sprint: GROWTH-01/02/03 V6 — widget shipped, regression passed, ranking confirmed
Previous: V5 2026-03-13 07:40 CET

---

## TL;DR

Widget shipped and QA-verified. Regression passed. Bouygues discrepancy resolved
(doc error — code was always right). QA at 98/100. Growth files updated to V6
with widget-first messaging. **One hard blocker remains: URL publique.**
Two open items for Day 2 afternoon: DEV-11 diagnostic card + GROWTH-06 feedback
form. Zero open data questions.

---

## What changed since V5

- **DEV-10 Instant Price Check widget SHIPPED** (10:05 CET, QA verified 11:20).
  5 edge cases verified, zero PII, data aligned with engine. This changes the
  launch messaging fundamentally: the CTA is now « vérifiez en 10 secondes »
  instead of « importez votre facture ». All Reddit/social drafts rewritten
  around the widget as entry point.
- **QA-03 Regression formelle PASSÉE** (11:20 CET). Zero regressions across
  build (43 modules, 883ms), tests (55/55), URLs (4/4 200 OK), data, scoring,
  and trust elements. First formal regression gate of the sprint.
- **BUG-16 FERMÉ** (11:20 CET). The Bouygues/SFR 24m discrepancy from V5
  (Bouygues at 804 vs 997) was a documentation error in earlier QA reports.
  Code was always correct. SFR Starter = 852,76 € (#2). Bouygues = 996,76 €
  (#6). No more open data questions.
- **QA score: 98/100** (up from 97). QA gate maxed at 20/20.
- **Erratum corrected.** Earlier QA cycles had the SFR/Bouygues formulas
  inverted in documentation. Reports corrected. Code, copy, and market data
  are now aligned across all 6 offers in the ranking.

## Growth deliverables — all V6, all complete

| File | Version | Status |
|------|---------|--------|
| `growth/positioning.md` | V6 | ✅ Widget integrated, ranking confirmed |
| `growth/landing-copy.md` | V6 | ✅ Widget section added, proof table confirmed |
| `growth/launch-plan.md` | V6 | ✅ Widget-first messaging, Day 2 reshuffled |
| `growth/demo-video-script.md` | Draft | ✅ Script done, production pending |

## Claims — all launch-safe

| Claim | Source | QA (cycle 7) |
|-------|--------|----|
| Red by SFR 22,99 €/mois, prix fixe, 1 Gb/s sym | fr-offers-watch.md, live page | ✅ |
| Red by SFR = reco primaire (fitScore 64) | BUG-13-FIX | ✅ |
| Red trade-off TV (35 ch. app, pas de décodeur) | BUG-13-FIX | ✅ |
| Red by SFR −369 € vs Freebox sur 24 mois | Calcul verified | ✅ |
| SFR Starter 853 € / −107 € vs Free | Calcul verified, BUG-16 CLOSED | ✅ CONFIRMED |
| Orange 29,99 € promo 12 mois | Live page 06:05 CET | ✅ |
| Orange 42,99 € post-promo | Live page 06:05 CET, BUG-15 CLOSED | ✅ |
| Orange 925 € / −35 € vs Freebox | Calcul verified | ✅ |
| Bouygues Must 997 € / comparable vs Free | Calcul verified, BUG-16 CLOSED | ✅ CONFIRMED |
| « Aucun équivalent français » | us-comparables.md §8 | ✅ |
| 100% gratuit, aucune commission | Founder direction | ✅ |
| Renégociation opérée sur mandat | Founder pass | ✅ |
| Open source, code public | Repo | ✅ |
| Observatoire public sans import | DEV-08 live | ✅ |
| Widget: vérification instantanée 10 sec | DEV-10 SHIPPED + QA verified | ✅ NEW |

## Claims excluded (not launch-safe)

| Claim rejeté | Raison |
|-------------|--------|
| « Économisez X% » | Indéfendable en général |
| « Prix en temps réel » | Snapshot daté |
| « Garanti » | Pas de garantie de résultat |
| « IA / intelligence artificielle » | Heuristique ≠ IA |
| Tout testimonial non étiqueté illustratif | Zero vrais clients à date |
| « On surveille votre promo » | Sentinel pas développé |
| « On connaît les offres cachées » | Pas de données retention collectées |
| Tout chiffre B&YOU | Pas dans le panel |
| « Partagez votre diagnostic » | DEV-11 pas encore shipped |

## Hard blocker — URL publique

Unchanged since V5. Le plan de lancement repose sur une URL partageable. Sans
URL, les posts Reddit/Twitter/widget pointent nulle part.

→ **Action Alexis :** confirmer le domaine et le déploiement le 14 mars.
Fallback : Vercel, Netlify, GitHub Pages (30 min).

**Si URL non résolue le 14 soir → recommandation Growth = reporter à lundi 16.**

## Resolved since V5 (3 items closed)

### ~~1. Bouygues 24m cost discrepancy~~  → RESOLVED

BUG-16 FERMÉ. QA cycle 7 confirms: code is correct. SFR Starter = 852,76 €
(#2 in ranking). Bouygues Bbox Must = 996,76 € (#6). The 804 € in earlier QA
reports was a documentation formula error, not a code issue. Proof table in
landing copy V6 updated. No footnotes or caveats needed.

### ~~2. PM re-validation of V5 copy~~ → SUPERSEDED by V6

V6 integrates the widget, corrects the ranking, and tightens the proof table.
Recommended: PM quick re-read of `growth/landing-copy.md` V6 before Day 3
freeze. Changes are all conservative (widget added = more capability shown,
ranking confirmed = more precise numbers, no new promises).

### ~~3. Widget approval~~ → SHIPPED

DEV-10 is live and QA-verified. No longer an open question.

## Open items for PM (2 remaining)

### 1. B&YOU — still not in panel

25,99 €/mois, sans engagement, 8 Gb/s, coût 24 mois 671,76 €. Reddit response
prepared if mentioned. Recommendation unchanged: add post-launch, not before
the 15.

### 2. Post-action feedback form — Day 2 or post-launch?

US finding #10 recommends a "Qu'a proposé votre opérateur ?" feedback form to
build the hidden retention offer database. Options:
- **V0 (Day 2):** Google Form linked from the post-action screen. Zero dev.
  20 min setup. ← Growth recommendation
- **V1 (Week 1):** In-product form with structured fields.
- **Post-launch:** Wait for signal first.

→ **PM: still prefer V0 Google Form on Day 2?** Previous PM guidance was yes.
Growth will execute GROWTH-06 this afternoon if confirmed.

## What the widget changes for launch

The widget is the single biggest improvement to launch readiness since Day 0.
Three specific impacts:

1. **Landing page conversion.** The first interaction is now a 10-second check,
   not a PDF upload. This follows the micro-commitment escalation pattern from
   US finding #9 (Rocket Money, NerdWallet, Credit Karma). Every successful US
   fintech product delivers personalized value before asking for documents.
   ReneGo now does too.

2. **Reddit/social messaging.** « Vérifiez en 10 secondes combien vous surpayez
   votre box internet » is a fundamentally different CTA than « importez votre
   facture ». The first is curiosity-driven (low friction). The second is
   commitment-driven (high friction). For a zero-brand-recognition product,
   the low-friction CTA will convert more cold traffic.

3. **Shareable "aha moment."** The widget result (« vous surpayez de 17 €/mois »)
   is screenshot-ready. When DEV-11 diagnostic card ships, the sharing loop
   will be complete — but even without it, the widget output is already a
   shareable data point for word-of-mouth.

## Day 2 afternoon priorities

| # | Task | Owner | Effort | Impact |
|---|------|-------|--------|--------|
| 1 | DEV-11 Diagnostic Card | Dev | 2-4h | Viral engine for launch |
| 2 | Screenshot/GIF production | Growth + Dev | 1h | Reddit/social posts |
| 3 | GROWTH-06 Google Form V0 | Growth | 20 min | Data flywheel start |
| 4 | Reddit posts final drafts | Growth | 1h | Launch day ready |
| 5 | Offers-FR spot-check | Offers-FR | 1h | Data confidence |
| 6 | **URL publique** | Alexis | — | **CRITICAL** |

## Recommandation Growth — verdict launch

| Condition | Status |
|-----------|--------|
| Zero P0 | ✅ Confirmé QA cycle 7 |
| Zero P1 | ✅ Confirmé QA cycle 7 |
| QA regression | ✅ QA-03 passée, zero regression |
| Code = copy = marché | ✅ 98/100 (all 6 offers confirmed) |
| Widget live | ✅ DEV-10 shipped + QA verified |
| URL publique confirmée | ❌ En attente |
| URLs sources re-vérifiées le 15 matin | ⏳ Planifié |

**If URL confirmed → recommandation Growth = LAUNCH** le 15 mars, beta publique,
canaux organiques, zéro budget. Le produit est dans son meilleur état :
widget interactif, regression passée, ranking confirmé, zero P0/P1, 98/100.

**If URL not resolved by 14 mars soir → reporter à lundi 16.**

## Week 1 amplification — if traction

If J+3 signals are positive (>50 widget uses, >30 uploads, >5 mandats) :

1. **Indice de Transparence Box Internet** — scored ISP scorecard for SEO, press,
   social. ~1 day content. Source: US finding #8.
2. **Promo-Expiry Sentinel** — alert email 30d before promo expires. ~1-2 days
   dev. Source: US finding #7.
3. **Panel expansion** — B&YOU, Free Pop, additional FTTH offers.
4. **Post-action feedback analysis** — aggregate GROWTH-06 responses, publish
   early retention offer data if enough signal.

If neutral: analyze widget → upload funnel, iterate on friction points.
If negative: reassess.

---

*Next Growth cycle: screenshots/GIF + GROWTH-06 form + Reddit final drafts,
afternoon 13 mars. Pending: URL resolution from Alexis.*
