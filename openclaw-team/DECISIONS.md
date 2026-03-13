# Decisions

## 2026-03-13

### PM triage cycle 13:05 — Growth afternoon handoff + Finding #12 scoping (13 mars Day 2)

- **V6 COPY RE-VALIDATED: No changes requested.** PM re-read `growth/landing-copy.md` V6 in full. All prices match the code and the market (Red 22,99/591, SFR 27,99→38,99/853, Orange 29,99→42,99/925, Bouygues 35,99→42,99/997). Widget section correctly integrated. Counter-offer FAQ addresses Finding #12 positioning partially. Excluded claims list is comprehensive and includes the not-yet-shipped diagnostic card. V6 is launch-safe as written.

- **FINDING #12 (Negotiation Playbook): scoped as Week 1 DEV-12, NOT launch-blocking.** Research flagged the operator-specific playbook as "single highest-ROI change" — accurate in principle, but the V6 FAQ already covers the counter-offer angle ("Et si mon opérateur me fait une contre-offre ?"). A full per-operator playbook with scripts, phone numbers, and legal citations adds ~2-3h content + 30 min dev integration. That's a strong Week 1 asset but not worth risking the Day 2 schedule. Decision: Growth PREPS the content as GROWTH-07 this afternoon (if time permits after GROWTH-06 + screenshots). Dev integrates post-launch as DEV-12. No new copy promises about the playbook in V6.

- **GROWTH-06 CONFIRMED: Google Form V0 on Day 2.** PM re-confirms the previous guidance. Zero dev, 20 min Growth setup. The form captures: operator, retention offer received, price, acceptance. Even 10-20 responses = useful aggregate. Growth links it from the post-action screen. Dev adds the link as a 15-min task after DEV-11 ships.

- **Growth afternoon handoff written.** `handoffs/pm-to-growth-day2.md` sent for 15:40 wave. Priority order: GROWTH-06 (20 min) → screenshots/GIF (1h) → GROWTH-07 playbook prep (2h, cut if needed).

- **URL ESCALATION TIMING SET.** If URL not confirmed by 14 mars 18:00 CET, Growth recommends postponing to Monday 16. PM agrees with the escalation window. Alexis needs to confirm domain + deployment. Fallback: Vercel/Netlify/GH Pages (30 min).

- **Day 2 afternoon priority stack (updated 13:05):**
  1. DEV-11 diagnostic card (dev, 14:05 wave) — viral engine
  2. GROWTH-06 Google Form V0 (growth, 15:40 wave) — data flywheel
  3. Screenshots/GIF (growth, 15:40 wave) — launch assets
  4. GROWTH-07 playbook content prep (growth, if time) — Week 1 asset
  5. Offers-FR spot-check (16:20 wave) — data hygiene
  6. QA re-test post DEV-11 (19:20 wave) — verify card
  7. URL confirmation (Alexis) — CRITICAL, deadline 14 mars 18:00

### PM triage cycle 09:05 — Day 2 setup and data verification (13 mars Day 1)

- **APPR-04 RESOLVED: Demo video repoussee post-launch (option 3).** Le storyboard Growth est pret mais ni la cle Kling ni le temps Remotion ne sont disponibles d'ici dimanche. Le launch package utilise screenshots + GIF du flow. La video est un asset Week 1 si traction le justifie. Zero impact sur le lancement.

- **DEV-11 APPROVED: Shareable Diagnostic Card scoped for Day 2.** Research finding #11 montre que Rocket Money a alloue 64% de son budget TikTok a l'UGC de users partageant leur ecran d'economies. ReneGo a zero budget pub. La carte diagnostique partageable (1080x1920 + 1080x1080, HTML canvas → image, Web Share API) est le moteur viral gratuit. 4 data points seulement: prix actuel, meilleur prix, economies 24m, URL. Zero PII. 2-4h dev, meme pass visuel que DEV-10. Le canal en France = WhatsApp groups (38M+ MAU), pas TikTok. Un user qui partage "je surpaie 17€/mois" dans un groupe famille declenche "et toi, combien tu paies?" — croissance exponentielle depuis zero.

- **V5 copy re-validated. PM-05 reste ferme.** Relu `growth/landing-copy.md` V5. Le tableau de preuve utilise les bons chiffres (Bouygues 997€, SFR Starter 853€, Orange 925€, Red 591€). Les corrections Orange (29,99 promo, 42,99 post-promo) sont exactes. Aucune nouvelle promesse ajoutee. V5 est launch-safe tel quel.

- **BUG-16 OUVERT (P2): Ecart ranking QA Bouygues/SFR.** Le rapport QA cycle 6 liste Bouygues a 803,76€ et SFR a 996,76€. Le code dit l'inverse: SFR Starter = 852,76€ (27,99×12 + 38,99×12 + 49), Bouygues Must = 996,76€ (35,99×12 + 42,99×12 + 49). De plus, 803,76 = SFR Starter SANS les 49€ de frais d'ouverture. Deux problemes possibles: (a) labels inverses dans le rapport QA, (b) le setup fee manque dans l'affichage UI. Handoff QA-03 ecrit pour verifier l'UI. Non bloquant — Red gagne par 260€+ dans tous les cas — mais la precision des donnees est une promesse produit ("on calcule le vrai cout").

- **Post-action feedback form: V0 Google Form on Day 2.** US finding #10 recommande de capturer les offres de retention cachees des operateurs. Un Google Form lie depuis l'ecran post-action prend 20 min a configurer (Growth), zero dev. Meme 10-20 reponses par operateur = donnees utiles. Le formulaire in-product (V1) viendra en Week 1 si traction.

- **Day 2 priority stack (14 mars):**
  1. DEV-10 widget (dev, 2-4h) — conversion bridge
  2. DEV-11 diagnostic card (dev, 2-4h) — viral engine
  3. QA-03 regression suite (QA) — formal validation
  4. BUG-16 verification (QA, 15 min) — data accuracy check
  5. Google Form feedback V0 (Growth, 20 min) — retention intelligence
  6. Screenshots/GIF du flow (Growth/Dev) — launch assets
  7. Offers-FR spot-check SFR/Bouygues profiles (Offers-FR) — data hygiene

## 2026-03-12

### Cadrage initial (pre-session)

- Scope du jour fixe sur `box internet France`.
- Le but est de juger la qualite d'une mini equipe d'agents, pas de couvrir toutes les commodites.
- Le projet tourne dans l'OpenClaw actuel mais avec des agents et jobs dedies, sans toucher aux canaux existants.
- Les agents travaillent dans le repo `renego-commodites-fr` avec traces dans `openclaw-team/`.
- Les actions irreversibles restent interdites.

### Synthese PM post-recherche (15:29)

- **Red by SFR THE BOX est l'offre la plus disruptive du panel.** 24,99 EUR/mois, sans engagement, prix fixe. C'est le pattern US "Kudos" (flat, no surprises) applique au marche FR. Le scoring engine devrait la classer pres du top.
- **4 alternatives au total:** SFR Fibre Starter (27,99 EUR), Bouygues Bbox Must (35,99 EUR), Orange Livebox Fibre (24,99 EUR promo → 42,99 EUR), Red by SFR THE BOX (24,99 EUR fixe). Le minimum de 4 offres est atteint.
- **Les "Non visible sur la facture" doivent disparaitre entierement.** La Freebox Revolution fibre fait 1 Gb/s, Wi-Fi 5, et le client est sans engagement apres 12 mois. C'est de la connaissance publique — l'afficher.
- **Le cout sur 24 mois est le differenciateur de confiance.** La recherche US montre que les consommateurs se font avoir par les prix promo. Afficher "Prix apres promo" est un acte de transparence, pas du polish.
- **La source URL cliquable est table stakes.** Chaque service US majeur montre d'ou viennent ses donnees. Pas de source = pas de confiance.
- **"Facture analysis gratuite" = notre hook d'acquisition V1.** La recherche confirme que le free tier (tracking ou analyse) est le moteur d'acquisition de tous les acteurs US. Notre flow "importe ta facture, on te dit combien tu perds" est exactement ca.
- **Pas de call center, pas de negociateurs humains.** La recherche US confirme que le modele AI-first (generation de documents, LRE, parcours automatise) est plus defensible et mieux adapte au marche FR ou les interactions operateurs sont digitales.
- **Le B2B / marque blanche est valide par Billshark** mais c'est du V2+. On note, on ne code pas.
- **Priorite dev reduite a 4 tickets:** DEV-01 (offres) > DEV-02 (sources) > DEV-03 (24 mois) > DEV-05 (plan d'action). DEV-04 reste conditionnel a APPR-01.

### Arbitrage produit applique (16:35)

- **Les prix telecom ne sont plus portes en dur dans la logique de recommendation.** Ils sont centralises dans un snapshot de marche unique, date, et reutilises partout (cartes d'offres, comparaisons, observatoire, diagnostic).
- **Le scoring separe maintenant deux questions differentes:** "quelle offre gagne sur le prix pur ?" et "quelle offre gagne sur le rapport prix/features ?"
- **Resultat actuel sur la facture Freebox de reference:** `prix pur = Red by SFR`, `prix/features = SFR Fibre Starter`, `reco principale = SFR`.
- **Le cout 24 mois devient le pivot de confiance.** Le flow n'affiche plus seulement le prix d'appel; il rend visible le total 24 mois et le post-promo.

### Gel du scope PM (14:45)

- **Benchmark minimum: 4 offres.** Le code actuel n'a que SFR + Bouygues en alternatives. Orange et au moins une offre low-cost (Red by SFR, Sosh ou B&You) doivent etre ajoutees. L'objectif est 4 a 6 offres sourcees au total (retention Free incluse).
- **Les prix doivent etre sources et dates du 12 mars 2026.** Le snapshot actuel date du 11 mars. Le dev doit mettre a jour les prix et URLs sur la base du benchmark PM-02.
- **Les "Non visible sur la facture" doivent etre reduits.** Les specs publiques de la Freebox Revolution sont connues (debit, engagement post-promo). Les utiliser plutot que d'afficher "inconnu" quand l'info est publique.
- **Le mode premium (LLM) doit etre teste au moins une fois.** Si aucune cle API n'est disponible en session, c'est une decision humaine a prendre (voir APPROVALS.md).
- **Coupe explicite:** pas d'eligibilite par adresse, pas d'appel API operateur, pas de scraping dynamique, pas de nouvelle verticale. On ameliore le flow existant, on ne le re-ecrit pas.
- **Priorite dev:** DEV-01 (offres manquantes) > DEV-02 (sources visibles) > DEV-03 (comparaison enrichie) > DEV-05 (plan d'action) > DEV-04 (test premium). Si le temps manque, couper DEV-04 et DEV-05.

### Triage QA (17:20)

- **Le moteur selectionne SFR Starter, pas Red by SFR.** C'est le comportement correct: SFR est le champion valeur (meilleur compromis prix/features), Red by SFR est le champion prix. Le handoff dev etait faux sur ce point, le code est juste. La demo doit etre presentee avec SFR comme reco principale.
- **Les 4 URLs sources sont cassees (404/400/403).** Decision: retirer les liens cliquables pour la demo (FIX-01 option A). Si le temps reste, chercher les vraies URLs.
- **L'observatoire Orange trace le prix standard (42,99) au lieu du prix promo (24,99).** Decision: corriger si possible, sinon retirer Orange de l'observatoire.
- **DEV-04 (test premium) est coupe.** Pas de cle API disponible, le fallback heuristique suffit. Le KPI "delta heuristique vs premium" sera N/A.
- **BUG-03 (bestActionId dead code), BUG-08 (tests unitaires), BUG-09 (observatoire synthetique) sont reportes apres la demo.**

### Rebase PM 72h sprint (17:56)

- **Le sprint est rebase sur 4 jours: Day 0 (done) → Day 1 (trust) → Day 2 (polish+GTM) → Day 3 (launch).**
- **Day 1 morning = priorite absolue:** DEV-04 (URLs P0) + DATA-01 (veille FR URLs valides) + PRODUCT-01 (claims launch-safe). Tout le reste en depend.
- **Growth demarre Day 2, pas avant.** Le positionnement et la landing copy ont besoin du produit stabilise et des claims revus pour etre ecrites correctement. Trop tot = re-travail.
- **Le verdict intermediaire est 67/100.** Suffisant pour continuer, insuffisant pour lancer. Le P0 URLs est le seul vrai blocker. Growth vide est le plus gros risque de calendrier.
- **Trajectory:** "launch with caveats" est atteignable si Day 1 ferme le P0 et Day 2 livre Growth. "launch" clean est peu probable sans toutes les URLs fonctionnelles ET une regression suite.
- **Coupe supplementaire:** DEV-06 (refresh snapshot) et DEV-07 (confiance scoring) restent stretch. Pas de nouveau scope avant que le P0 soit ferme.

### PM triage cycle 21:05 — Decisions de deblocage

- **B&YOU Pure Fibre Plus: exclu du panel de lancement.** 25,99 EUR/mois, 8 Gb/s, sans engagement — interessant mais pas assez de temps pour verifier, coder, tester. Growth a prepare une reponse si les utilisateurs Reddit le mentionnent. Ajout post-launch en priorite.
- **Transparency Index (Research finding #8): reporte a Semaine 1.** L'idee est forte (ISP scoring public comme top-of-funnel, presse, SEO) mais ajoute ~1 jour de contenu/design au scope. DEV-08 livre un observatoire public en graphique de prix (fonctionnel cette nuit). Le scoring vient apres.
- **Pricing V1: gratuit, beta, pas de paywall.** Ni flat fee (€29/an), ni commission (%). On lance gratuit pour valider le signal utilisateur. Decision pricing a J+14 minimum.
- **Promo-Expiry Sentinel: reporte a V2.** Le sentinel (alerte 30j avant fin de promo) est le meilleur argument futur pour un abonnement recurrent, mais il n'est pas constructible d'ici dimanche. Ne pas le promettre dans le UI ou la copy.
- **Demo video: bloquee sur APPR-04.** Pas de travail Remotion/Kling cette nuit. Le storyboard Growth est pret. La video sera finalisee quand/si la cle API Kling est fournie. Fallback: screenshots + GIF du flow.
- **Orange promo duration: a investiguer Day 2 matin (Offers-FR).** Le code dit `introMonths: 6`, les mentions legales suggerent 12 mois. Si confirme, le cout 24 mois Orange change significativement. Pas bloquant pour le launch.
- **Red by SFR data: fix dev obligatoire cette nuit.** 22,99 EUR/mois, 39 EUR frais, 1 Gb/s sym. Handoff dev ecrit avec valeurs exactes.

### PM triage cycle 01:05 — BUG-13 + Orange introMonths (13 mars Night 1)

- **BUG-13 decision: Option B — lower fitScore threshold from 65 to 64.** Red by SFR becomes the primary recommendation instead of retention. Rationale: the product's core promise is "on vous montre combien vous surpayez." Recommending retention (48 EUR/an savings) when a 204 EUR/an savings exists via Red undermines the value prop. The 1-point threshold gap is arbitrary. The trade-off (no TV/decoder) is real but is already visible in the alternatives cards and should be called out in the recommendation text — "vous perdez TV/decodeur, voici ce que ca change." QA confirmed both options are launch-safe. Growth's copy already features Red prominently. This is the defensible choice.
- **Orange introMonths: promoted to P0.** Offers-FR at 00:20 confirmed with certainty that Orange's promo is 12 months, not 6. The code says `introMonths: 6`. This is a data accuracy bug that changes the 24-month cost from 972,76 EUR to 864,76 EUR — a 108 EUR swing. It also makes Orange more competitive (delta vs Free goes from -36 to -95 EUR). Fix required before Day 1 morning.
- **Orange post-promo price: keep 42,99 EUR for now (conservative).** Offers-FR raised a valid question about whether the base is 32,99 or 42,99. But without browser screenshot confirmation, the conservative call is to keep the higher number. If Offers-FR confirms 32,99 in the 04:20 wave, Dev patches immediately. Under-promising is better than over-promising on savings.
- **Combined dev fix: BUG-13 + BUG-14 (Orange introMonths) ship together in the 02:05 wave.** One `boxMarketSnapshot.ts` edit, one test run, one QA re-test at 03:20.

### PM triage cycle 05:05 — PM-05 + PRODUCT-01 validated, widget scoped (13 mars Day 1)

- **PM-05 CLOSED: Landing copy V4 validated as launch-safe.** Reviewed `growth/landing-copy.md` V4, `growth/positioning.md` V4, and `growth/launch-plan.md` V4. All claims are sourced, QA-verified (cycle 5, 03:20 CET), and conservative. The copy correctly: leads with Red as primary reco (−369 €), explains the TV trade-off explicitly, uses 42.99 € for Orange post-promo (conservative), labels client stories as illustrative, states "beta" and "snapshot daté" in appropriate places, and never promises features not yet built (sentinel, widget, B&YOU). No changes requested — the copy is launch-safe as written.
- **PRODUCT-01 CLOSED: Claims are launch-safe.** Cross-checked all 13 claims in the Growth V4 claims table against `market/fr-offers-watch.md`, QA cycle 5 results, and the code. Every claim is traceable to a verifiable source. The exclusion list (no "IA", no fake testimonials, no sentinel promise, no B&YOU) is correct and comprehensive. The pricing language ("100% gratuit, aucune commission") is factual. The operated model language ("mandat explicite", "vous validez l'offre finale") correctly limits the promise.
- **DEV-10 APPROVED: Instant Price Check widget scoped for Day 2.** Research finding #9 confirms that zero-brand products need a low-friction first interaction before document upload. The widget is 100% client-side, 2-4h dev, uses existing benchmark data, zero PII. It's the missing conversion bridge between the observatory/press/SEO top-of-funnel and the full product flow. Not a Day 1 task — BUG-15 first. Widget ships Day 2 alongside any GROWTH-03 implementation pass.
- **Research findings #9 (widget) and #10 (retention feedback loop): both accepted with scope limits.** Widget = Day 2 as DEV-10. Retention offer anticipation copy = Day 2 copy change (zero dev, add to recommendation output text). Post-action feedback form = post-launch V2 (not enough time to build + test before Sunday). Transparency Index scored format = Week 1 if traction (per existing decision).
- **GROWTH-03 status clarified.** The Growth V4 copy files fully implement the founder pass direction (operated model, free, no commission, transparent engine, "sait dire ne changez pas"). What remains unclear is whether this copy has been implemented in the actual codebase landing page. Dev should confirm at 06:05 — if the actual rendered landing page doesn't match the Growth V4 copy, that becomes Day 2 priority.
- **Day 1 priority stack (updated 05:05):** BUG-15 investigation (06:05 dev) → QA re-test if BUG-15 changes code (07:20) → GROWTH-03 codebase implementation check (dev confirms) → screenshots/GIF production (Growth/Dev) → URL deployment decision escalation (human, Day 2 latest).

### Founder pass GTM et service opéré (19:30)

- **La promesse publique bascule d'un outil geek vers un service opéré grand public.** On retire la sur-communication "traitement local / navigateur" dans la landing publique.
- **ReneGo se presente comme 100% gratuit et sans commission.** Le message explicite "pas de rétro-commission" devient central.
- **Le flow public inclut le mandat.** ReneGo renégocie pour le client, renvoie l'offre finale, puis disparaît. La souscription finale reste validée par l'utilisateur.
- **Le moteur de recommandation doit etre transparent.** Il faut dire pourquoi une offre est recommandée et assumer "si le changement ne vaut pas l'effort, on vous le dit".
- **Les histoires clients doivent rester illustratives tant qu'on n'a pas de vrais temoignages publiables.** Pas de faux avis déguisés en vrais retours.
- **L'observatoire des offres devient un actif public.** Les courbes des principaux opérateurs doivent être visibles sans devoir uploader une facture.
- **Une vidéo démo step-by-step devient un livrable du launch package.** Montage Remotion; plans generiques Kling seulement si la clé API est fournie.

### Deploiement public Vercel (13 mars, 14:00)

- **L'URL publique de beta est live:** `https://renego-commodites-fr.vercel.app`
- **Le repo a ete pousse sur GitHub** sur la branche `codex/renego-openclaw-setup`.
- **Le deploiement Vercel production est valide** (HTTP 200 verifie).
- **Le blocage "URL publique" est leve.** Le domaine custom est repousse apres le launch beta.
