# Backlog

Sprint: 2026-03-12 -> 2026-03-15
Mission: lancement public prudent sur la wedge `box internet France`
Rebase: 2026-03-12 21:05 CET (PM night triage)

## Done (Day 0 — 12 mars)

- [x] SETUP-01 Creer l'espace de travail `openclaw-team`
- [x] SETUP-02 Definir les roles initiaux PM / Research-US / Dev / QA
- [x] RES-01 Livrer la recherche US et les lecons actionnables
- [x] PM-01 Consolider benchmark FR initial (6 offres, cout 24 mois)
- [x] DEV-01 Passer de 2 a 4 alternatives visibles
- [x] DEV-02 Afficher sources, dates et prix apres promo
- [x] DEV-03 Ajouter cout 24 mois et plan d'action plus credible
- [x] QA-01 Qualifier la demo et produire un rapport severise (GO WITH CAVEATS)
- [x] PM-02 Rebaser le backlog sur un lancement public en 72h

## En cours — must-ship pour Day 1 (13 mars)

### Bloc A: Rendre la demo presentable (matin Dev)

- [x] DEV-04 Fermer les 2 blockers QA ✅ (QA confirme — 4/4 URLs 200 OK, observatoire coherent)
  - Owner: `renego-dev`
  - Priority: **P0**
  - AC:
    - FIX-01: aucun lien cliquable ne mene a une erreur (option A = desactiver, option B = trouver les vraies URLs)
    - FIX-02: observatoire Orange corrige ou retire
  - Source: `handoffs/pm-to-dev-fixes.md`

### Bloc A-bis: Fixes nuit 13 mars (02:05 wave)

- [x] BUG-13-FIX Baisser le seuil fitScore de 65 a 64 ✅ (02:05 CET)
  - Owner: `renego-dev`
  - Priority: **P0** (decision PM 01:05)
  - AC: Red by SFR devient la reco principale. Le texte de reco mentionne le trade-off TV/decodeur.
  - Source: `handoffs/pm-to-dev-night2.md`

- [x] BUG-14 Corriger Orange introMonths (6 → 12) ✅ (02:05 CET)
  - Owner: `renego-dev`
  - Priority: **P0** (promu par Offers-FR 00:20, valide PM 01:05)
  - AC: `introMonths` passe a 12, `featureBadges` et `notes` adaptes, cout 24 mois recalcule (864,76 EUR)
  - Source: `handoffs/pm-to-dev-night2.md`

### Bloc B: Solidifier les donnees (matin Offers-FR)

- [x] DATA-01 Peupler la veille FR avec URLs verifiees ✅ (20:24 CET)
  - Owner: `renego-offers-fr`
  - Priority: **P0**
  - Result: `market/fr-offers-watch.md` peuplee, URLs code toutes 200 OK, Red by SFR P0 remonte

### Bloc C: Formaliser la confiance (aprem QA + PM)

- [x] QA-02 Transformer le rapport QA en gate de lancement ✅ (11/11 criteres passes, QA cycle 7)
  - Owner: `renego-qa`
  - Priority: **P1**
  - AC: zero P0 ouvert, mitige chaque P1 accepte, checklist de gate dans `reports/qa-launch-gate.md`
  - Depends on: DEV-04 (les fixes doivent etre verifies)

- [x] PRODUCT-01 Rendre la recommendation launch-safe ✅ (PM validated 05:05 CET — 13 claims verified, exclusions confirmed)
  - Owner: `renego-pm`
  - Priority: **P1**
  - AC: claims defensibles, trade-offs visibles, langage prudent, pas de sur-promesse

## Ready — Day 2 (14 mars)

### Bloc D: Trust-first product polish (matin Dev)

- [x] DEV-05 Rendre le flow plus "trust-first" ✅ (DEV-05 already shipped: beta badge, disclaimers, footer legal, trust bar)

### Bloc D-bis: Conversion + viral (Day 2 Dev)

- [x] DEV-10 Instant Price Check widget sur la landing page ✅ (shipped + QA verifie 11:20 CET)
  - Owner: `renego-dev`
  - Priority: **P1**
  - AC:
    - widget 2 champs (operateur dropdown + prix/mois) au-dessus du fold
    - resultat inline: "Vous payez X EUR/mois de plus que Red (22,99 EUR). Sur 24 mois: Y EUR."
    - 100% client-side, zero PII, donnees de boxMarketSnapshot.ts
    - edge cases: prix <= 22,99 → "meilleur prix", Free > 40 → "promo expiree"
  - Effort: 2-4h
  - Source: `handoffs/pm-to-dev-day2.md`, US research finding #9

- [x] DEV-11 Shareable Diagnostic Card apres chaque analyse ✅ (shipped 14:05 CET)
  - Owner: `renego-dev`
  - Priority: **P1**
  - AC:
    - carte branded post-analyse: prix actuel, meilleur prix, economies 24m, URL CTA
    - deux tailles: 1080x1920 (WhatsApp/Stories) + 1080x1080 (feed/tweet)
    - HTML canvas → image, 100% client-side, zero PII
    - bouton "Partager mon diagnostic" → Web Share API (fallback: download)
    - operateur visible sur la carte (pas PII, rend la carte plus specifique)
  - Effort: 2-4h (partage le travail visuel avec DEV-10)
  - Source: `handoffs/pm-to-dev-day2.md`, US research finding #11

### Bloc E: Go-to-market (aprem Growth + PM)

- [x] GROWTH-01 Ecrire le positionnement public et la landing V1 ✅ (livree 36h en avance — 12 mars soir)
  - Result: `growth/positioning.md`, `growth/landing-copy.md` V2 ecrits, launch-safe, claims verifiables

- [x] GROWTH-02 Preparer le plan de lancement J+3 ✅ (livree 36h en avance — 12 mars soir)
  - Result: `growth/launch-plan.md` V2 ecrit, canaux organiques, metriques J+7, risques mitiges

### Bloc F: Regression + data verification (Day 2 QA)

- [x] QA-03 Ajouter une mini regression suite launch ✅ (55/55 passes, zero regression)
  - Owner: `renego-qa`
  - AC: build + flow critique + assertions de scoring minimum + 24m costs verifies dans l'UI
  - Source: `handoffs/pm-to-qa-day2.md`

- [x] BUG-16 Verifier ecart ranking Bouygues/SFR dans l'UI (P2) ✅ (doc corrigee, code deja juste)
  - Owner: `renego-qa`
  - Priority: **P2**
  - AC: confirmer que l'UI affiche SFR Starter = 852,76 EUR et Bouygues = 996,76 EUR
  - Source: `handoffs/pm-to-qa-day2.md`

### Bloc G: Growth Day 2

- [x] Screenshots/GIF du flow (Red comme reco primaire) ✅ (3 PNGs: desktop 1280×800, mobile 390×844, full-page — 19:42 CET)
  - Owner: `renego-growth`
  - Result: `growth/assets/landing-desktop.png`, `growth/assets/landing-mobile.png`, `growth/assets/landing-full.png`

- [ ] GROWTH-06 Google Form "Qu'a propose votre operateur ?" (V0 feedback loop)
  - Owner: `renego-growth`
  - Priority: **P2** — APPROVED for Day 3 morning (15 min, zero dev)
  - AC: Google Form lie depuis le plan d'action, zero dev, spec ready at `growth/feedback-form-spec.md`
  - Source: US research finding #10

- [ ] GROWTH-07 Playbook de negociation — PREP CONTENT ONLY — **DEFERRED Week 1**
  - Owner: `renego-growth`
  - Priority: **P2** (deferred — Week 1 content sprint)
  - AC: fichier `growth/negotiation-playbook-content.md` avec scripts par operateur, numeros de retention, articles de loi, guide contre-offre. PAS d'integration code — prep content pour DEV-12 Week 1.
  - Source: US research finding #12

## Ready — Day 3 (15 mars, launch day)

- [ ] PM-03 Preparer le dossier go/no-go de lancement
  - Owner: `renego-pm`
  - AC: verdict, risques, mitigations, next steps dans `reports/go-no-go.md`

- [ ] PM-04 Remplir le verdict final KPI Scorecard
  - Owner: `renego-pm`
  - AC: KPI_SCORECARD.md avec scores reels

- [x] PM-05 Valider la Landing Copy et le message de lancement ✅ (PM validated 05:05 CET — V4 copy launch-safe, no changes)
  - Owner: `renego-pm`
  - AC: copy validee launch-safe, CTA approuve

## Founder pass — 12 mars soir

- [x] GROWTH-03 Rewriter la landing sur une promesse operee, gratuite et sans commission ✅ (founder pass applique)
  - Owner: `renego-growth`
  - Priority: **P0**
  - AC:
    - retirer la promesse "tout reste sur votre machine";
    - affirmer "100% gratuit, aucune commission";
    - expliquer le mandat et la renegociation operee;
    - expliciter que le moteur est transparent et sait dire "ne changez pas".

- [x] GROWTH-04 Ajouter des cas clients illustratifs visuels ✅ (cas illustratifs ajoutes, etiquetage prudent)
  - Owner: `renego-growth`
  - Priority: **P1**
  - AC:
    - 3 histoires clients maximum;
    - clairement etiquetees comme illustratives jusqu'a preuve client reelle;
    - ton grand public, pas geek.

- [x] DEV-08 Rendre l'observatoire public sans import et le pousser comme page preuve ✅ (public sans PDF)
  - Owner: `renego-dev`
  - Priority: **P0**
  - AC:
    - section/page visible sans PDF;
    - courbes des principaux operateurs;
    - copy de contexte lisible grand public.

- [x] GROWTH-05 Storyboarder la video demo etape par etape ✅ (`growth/demo-video-script.md` cree)
  - Owner: `renego-growth`
  - Priority: **P1**
  - AC:
    - script video stocke dans `growth/demo-video-script.md`;
    - structure `Remotion` definie;
    - prompts `Kling` prepares;
    - claims et captures a utiliser listes.

- [ ] DEV-09 Preparer l'integration Remotion pour la video demo
  - Owner: `renego-dev`
  - Priority: **P1**
  - AC:
    - pipeline local `Remotion` initialise ou planifie proprement;
    - point de montage identifie dans le repo;
    - dependances et risques documentes.

- [x] QA-05 Relecture launch-safe des nouvelles promesses publiques ✅ (claims launch-safe verifies)
  - Owner: `renego-qa`
  - Priority: **P1**
  - AC:
    - mandat / renegociation operee / gratuit / sans commission revus;
    - aucun faux avis client presente comme reel;
    - observatoire public relu.

## Stretch / Week 1

- [ ] CONTENT-01 "Penalite de fidelite" content sprint (Finding #13)
  - Owner: `renego-growth` + `renego-pm`
  - Priority: **P1** (Week 1)
  - AC: Brief dans `growth/penalite-fidelite-brief.md`, integration V8 copy (widget, card, playbook, landing), ARCEP/Ariase data sourced
  - Source: US research finding #13 (Opower social norm)
  - Depends on: GROWTH-07 + DEV-12 for full integration

- [ ] DEV-12 Integrer le playbook de negociation dans le template Plan d'action
  - Owner: `renego-dev`
  - Priority: **P1** (Week 1)
  - Depends on: GROWTH-07 content complete
  - AC: template Plan d'action affiche un script par operateur, numeros, loi Chatel/Hamon, guide contre-offre
  - Source: US research finding #12
  - Effort: 30 min dev (content already prepped by Growth)

- [ ] DEV-06 Ajouter un refresh manuel / quotidien du snapshot marche
- [ ] DATA-02 Verifier les URLs officielles par operateur (si pas fait dans DATA-01)
- [ ] DEV-07 Ajouter une couche de confiance sur la logique de scoring
- [ ] QA-04 Ajouter des tests unitaires sur scoring et cout 24 mois

## Coupe (post-launch)

- Ajouter mobile / energie / assurance
- Eligibilite par adresse (API)
- OAuth fournisseurs
- Execution operateur reelle
- B2B / marque blanche
- Test mode premium LLM (DEV-04 old — coupe faute d'API key)
