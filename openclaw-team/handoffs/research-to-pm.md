# Handoff: Research-US → PM

Date: 2026-03-13 (updated — finding #12 added, 12:35 CET)
Source: `openclaw-team/market/us-comparables.md` (full sourced research)
Status: complete (12 findings)

---

## TL;DR

The US bill negotiation market is a **$1.2B market growing at ~15% CAGR**, dominated by 4 models. No equivalent product exists in France. The "box internet" vertical is a strong first target. Key lessons below.

---

## 12 Actionable Findings (updated 2026-03-13 12:35 CET — finding #12 added)

### 1. Performance-based pricing is the trust anchor — adopt it

Every successful US player charges only on success: Rocket Money (35–60% of 1st year savings), Billshark (40%), Trim (was 15%, now free inside OneMain). **"No savings, no fee" eliminates user risk and is the single most important pricing signal.**

→ **PM decision needed:** what fee percentage is acceptable for French consumers? US rates (35–60%) feel high. Trim's old 15% or a flat €-per-saving tier might land better.

### 2. Subscription tracking is the free acquisition hook — build it

Rocket Money's funnel: free subscription tracking → premium upsell → bill negotiation revenue. 10M+ total users, 4.1M premium. The free tier is essential for top-of-funnel.

→ **PM decision needed:** does Renego V1/V2 include a free subscription tracker? If not, what's the free hook that gets users to upload their first facture?

### 3. Human negotiators dominate today, but AI is the next wave — go AI-first

Rocket Money and Billshark use human call centers. This is expensive and doesn't scale internationally. **Kudos ($40/yr, AI voice agent, no commission) is the emerging model.** Cushion (AI-first) was acquired by LendingClub for its tech.

→ **Recommendation [INFERENCE]:** Renego should skip the human-negotiator phase entirely. French ISP interactions are increasingly digital (espace client, LRE, formulaires de résiliation). An AI-driven flow that generates the right documents and automates the parcours is more defensible than a call center.

### 4. B2B white-label is a real second revenue stream

Billshark's biggest strategic bet is its "Shark Connect" API: banks, credit unions, and fintechs embed bill negotiation as a customer-retention feature. Partners include Payrailz, Narmi, Jack Henry. Trim's absorption into OneMain confirms the same pattern.

→ **PM decision needed:** is B2B/marque blanche in scope for V2+? The architecture already mentions it (`docs/product-plan.md` → "courtiers en marque blanche"). Billshark's model validates this is viable, but requires API-first architecture from day one.

### 5. Standalone bill-negotiation startups get acquired — plan accordingly

Every meaningful US player has been absorbed: Truebill→Rocket ($1.275B), Trim→OneMain, Cushion→LendingClub, BillFixers→Experian. The standalone business is a stepping stone, not a destination.

→ **Observation [INFERENCE]:** open-source + community model (per product-plan.md) may be more sustainable than VC-funded exit-seeking. But the acquisition pattern suggests a strong product in this space attracts buyers.

---

## What Doesn't Transfer to France (blockers & adaptations)

| US Reality | French Constraint | Impact |
|---|---|---|
| Plaid links 12 000+ banks seamlessly | DSP2 aggregators (Bridge, Powens) are smaller, more regulated | Account linking harder; PDF import may be the primary V1 intake |
| Human negotiators call retention desks | French ISP retention is often via espace client, courrier, LRE | Negotiation flow must be digital/document-based, not phone-based |
| Success fees of 35–60% are accepted | French digital consumers expect lower fees | Fee sensitivity probably higher; test 15–25% or flat rate |
| Focus on cable/internet/phone/security | French verticals: box internet, mobile, énergie, assurance | Similar categories but different regulatory and market structure |
| Insurance negotiation possible (Billshark) | Requires courtage d'assurance license (ACPR) | Out of scope without regulatory clearance |
| No single federal regulation | DGCCRF, loi Hamon, loi Chatel, RGPD, DSP2 | Stronger consumer framework — both an advantage (clear rules) and a constraint (compliance cost) |

---

### 6. Adopt the full "savings-first, fee-second" trust ladder — and use a flat fee, not commission (NEW, 2026-03-12 evening)

Rocket Money's help center reveals a 6-step trust architecture that goes beyond "no savings, no fee": free value first → zero-credentials intake (photo upload accepted) → 48-hour post-negotiation review window before charging → user-controlled fee percentage (35–60%) → flexible payment plans (up to 12 months) → explicit no-downgrade guarantee.

**But Kudos proves you can skip the commission model entirely.** $40/year flat fee, AI voice agent, user keeps 100% of savings. No commission means perfect incentive alignment: the service doesn't profit more from bigger bills.

**This should change Renego's V1 launch in three ways:**

1. **Pricing (launch scope change):** V1 should launch with a flat annual fee (€29–39/year), NOT a % commission. French consumers in a brand-new category will not trust or understand "35–60% des économies annualisées." A flat fee is transparent, simple, and below the Netflix mental benchmark. "Gardez 100% de vos économies" is a far stronger trust signal than explaining commission math.

2. **Trust layer (product change):** Build the full trust ladder into the V1 flow:
   - Free facture analysis (no account required) → estimated savings shown before any commitment
   - PDF/photo upload only (no credentials, no open banking)
   - Explicit guarantee: "Jamais de changement de forfait sans votre accord"
   - Money-back if no savings found
   - Status transparency with step-by-step updates

3. **GTM (copy change):** Lead headline should be **"Gardez 100% de vos économies. €29/an."** — not a savings percentage or commission explanation. This is the Kudos positioning adapted for France: advisor, not tax collector.

→ **PM decision needed:** validate flat-fee vs. commission for V1. If flat fee is adopted, simplifies billing infrastructure significantly (no need to track/calculate % of realized savings over time). Full analysis in `market/us-comparables.md` section 11.

### 7. Build the "Promo-Expiry Sentinel" loop — it's what makes the annual subscription defensible (NEW, 2026-03-12 evening pass 2)

Rocket Money's help center reveals that US leaders don't sell one-time bill negotiation — they sell a **monitoring cycle** around the telecom promotion calendar. The full loop: detect existing promo → track expiry date → delay negotiation until promo ends → alert user on price spike → re-negotiate → new promo → loop. Billshark makes this explicit: "Billshark re-negotiates when contracts near expiry to maintain savings."

**This is the retention engine that justifies recurring revenue.** Without it, a bill negotiation service is a one-time transaction. With it, users feel "covered" permanently — every 12 months, the service proactively saves them again.

**This should change Renego's V1 in one critical way:**

1. **Product change (launch scope addition):** The V1 flow should NOT end at "here's your recommendation." It should **capture the user's promo expiry date** (extractable from the uploaded facture) and **offer a proactive alert 30 days before the price jump.** This transforms the value prop from "on vous dit quoi faire" (one-time advice, hard to justify €29/year) to **"on surveille votre box et on vous alerte avant chaque hausse"** (ongoing protection, easy to justify €29/year).

2. **GTM impact (copy change):** The positioning should lead with ongoing protection, not one-time analysis. Proposed shift:
   - **Old framing:** "Analysez votre facture box internet et découvrez combien vous pourriez économiser"
   - **New framing:** "Votre promo box internet va expirer. On surveille, on vous prévient, on vous aide à agir — avant la hausse."
   The second framing creates urgency (the promo IS going to expire), positions ReneGo as an ongoing guardian (not a one-shot calculator), and gives users a concrete reason to pay annually.

3. **Infrastructure (minimal):** The sentinel only needs: email + ISP + promo expiry date (from facture) + a cron-based email alert 30 days before expiry. No Plaid, no open banking, no ongoing data feed. Estimated 1–2 dev days for V1 basic version. [HYPOTHESIS — must validate with renego-dev]

→ **PM decision needed:** Should the V1 flow capture promo expiry date + email for proactive alerting? If yes, this is a Day 2 or Day 3 addition that fundamentally changes the product's retention story and landing page copy. If no, the flat-fee annual subscription model from Finding #6 has a weaker justification — users get one recommendation and have no reason to stay subscribed. Full analysis in `market/us-comparables.md` section 12.

---

### 8. Publish a scored "Indice de Transparence Box Internet" as your cold-start acquisition engine (NEW, 2026-03-12 night pass)

US fintech leaders (Rocket Money, NerdWallet, BillFixers/Experian, Consumer Reports) all use **published market transparency data as a standalone acquisition asset** — creating authority, SEO traffic, and press coverage independently of user scale. Rocket Money's /learn content hub targets "how to lower [provider] bill" keywords for organic acquisition. NerdWallet built a ~$5B company on structured provider scorecards. BillFixers used provider difficulty data as a brand trust signal.

**ReneGo's cold-start problem:** You can't claim "$2.5B saved" with zero users. But you CAN publish an ISP transparency scorecard using the market data you already have (fr-offers-watch.md, benchmark). Authority from analysis, not from scale.

**This should change what ReneGo builds AND says before Sunday:**

1. **Product change (DEV-08 scope upgrade):** Transform the public observatoire from a static price chart into a **scored "Indice de Transparence Box Internet"** — ranking each French ISP on post-promo markup (Orange: +€10-18/mois vs Red: €0), price page clarity, URL stability, engagement traps, and hidden costs. Using existing data, the scorecard already tells a story: Red by SFR gets an **A** (prix fixe, sans engagement, transparent), Orange gets a **C** (confusing promo structure, high post-promo jump, inconsistent page data). This ranked format is shareable, debatable, and press-worthy — a price chart is not.

2. **GTM change (launch PR hook):** Lead the launch with **"ReneGo publie le premier Indice de Transparence Box Internet en France"** — not "comparez votre facture." This framing creates a ready-made press story for 60M de Consommateurs, UFC-Que Choisir, Les Numériques. Journalists love ISP pricing exposés; a structured ranking hands them the story on a plate.

3. **SEO change (per-operator pages):** Create one landing page per operator with the detailed transparency score breakdown — "Orange Livebox Fibre : Indice de Transparence ReneGo." Each page targets "[opérateur] prix réel" / "[opérateur] coût total" long-tail keywords. Zero ad spend, organic traffic from day one.

4. **Social proof inversion:** Instead of "nous avons fait économiser X€" (impossible with zero users), position as "nous avons analysé les offres et voici ce que les opérateurs ne vous montrent pas." Authority from transparency analysis replaces authority from user volume.

**Why this is the single most impactful launch addition:** Without it, ReneGo is a facture analysis tool no one has heard of. With it, ReneGo is the entity that publicly rates ISPs on pricing honesty — which gives press, SEO, and social sharing a reason to drive traffic to the product. The scorecard IS the top-of-funnel that the trust ladder (Finding #6) and sentinel loop (Finding #7) then convert and retain.

→ **PM decisions needed:**
- Should DEV-08 observatoire be upgraded to scored format? (Adds ~1 day content/design work to existing scope)
- Should the launch PR angle lead with the Transparency Index? (Requires Growth to draft press-ready scorecard before Sunday)
- Should per-operator SEO pages be V1 scope or fast-follow? (Per-operator pages are optional for Sunday but high ROI for week 1)

Full analysis in `market/us-comparables.md` section 13.

---

### 9. Add an "Instant Price Check" widget to the landing page — the 10-second conversion engine the launch is missing (NEW, 2026-03-13 night pass)

Every best-in-class US fintech product (Rocket Money, NerdWallet, Credit Karma, Billshark) delivers **personalized value in under 10 seconds, before asking for any personal data.** Rocket Money shows "average member saves $720/year" on its homepage and runs 100+ conversion experiments/year to optimize the first-value-moment. NerdWallet embeds interactive savings calculators on every comparison page — these tools built a ~$5B company. Credit Karma lets users check their score in 2 minutes with minimal input, acquiring 100M+ users this way.

**ReneGo's current gap:** the landing page's first interactive step is "upload your PDF facture." For a zero-brand-recognition product in a new category, this is too much friction. The visitor goes from "reading about the product" to "uploading a personal financial document" with nothing in between. US data says this kills conversion.

**This should change what ReneGo builds AND says before Sunday in one critical way:**

1. **Product change (landing page widget, 2-4h dev):** Add a 2-field "Vérifiez en 10 secondes" widget above the fold on the landing page:
   - **Field 1:** "Quel est votre opérateur ?" (dropdown: Orange, Free, SFR, Bouygues)
   - **Field 2:** "Combien payez-vous par mois ?" (number input, €)
   - **Instant result:** "Vous payez **X €/mois de plus** que la meilleure offre fibre équivalente (Red by SFR à 22,99 €). Sur 24 mois : **Y €.**"
   - **CTA:** "Importez votre facture pour le diagnostic complet — gratuit, 2 minutes."

   The widget requires zero PII, zero documents, zero account creation. It uses the benchmark prices ReneGo already has (`fr-offers-watch.md`). The calculation is a subtraction. It can be 100% client-side, no backend required.

2. **GTM change (copy + social angle):** Lead the landing page with **"Payez-vous trop cher votre box internet ? Vérifiez en 10 secondes."** — not "Importez votre facture." The upload becomes step 2, after the user has already seen a personalized savings estimate. For social/PR: **"En moyenne, les Français paient ~12 €/mois de trop pour leur box internet. Vérifiez sur ReneGo.fr."** — a shareable stat + low-friction CTA.

3. **Growth impact (sharing + data):** The widget creates the "aha moment" that Rocket Money's UGC influencer strategy exploits — users see "Vous surpayez de 17€/mois" and screenshot it to share. "Tu devrais checker ça" is a natural word-of-mouth message. Simultaneously, every widget interaction generates anonymous analytics (which ISP, what price, how much overpayment) that feeds aggregate social proof for week 1+.

**Why this is the missing piece for Sunday:** Findings #6-8 cover trust (ladder), retention (sentinel), and acquisition (scorecard). But none of them solve the **landing page conversion** problem: a visitor who arrives via the scorecard (Finding #8) or press coverage still needs to be converted from "reading" to "acting." The widget is the conversion bridge between top-of-funnel (scorecard/press/SEO) and the full product (facture analysis + renegotiation). Without it, the funnel leaks at the most critical point — the first interaction.

**Interaction with other findings:**
- Finding #8 (Scorecard) drives traffic TO the landing page. The widget converts that traffic.
- Finding #6 (Trust Ladder) starts at "free facture analysis." The widget adds a lower-friction Step 0 before it.
- Finding #7 (Sentinel) provides urgency messaging: "Votre promo va expirer → votre prix va augmenter."

→ **PM decisions needed:**
- Should the landing page lead with the instant price check widget? (2-4h dev work using existing benchmark data, 100% client-side)
- Should the social/PR angle include the aggregate overpayment stat? ("Les Français surpaient ~12€/mois leur box")
- Priority: should this be a Day 2 or Day 3 addition? (Recommendation: Day 2 if GROWTH-03 rewrite is scheduled — integrate into the same pass)

Full analysis in `market/us-comparables.md` section 14.

---

### 10. Build a "Hidden Retention Offer" feedback loop — the data moat that makes ReneGo irreplaceable (NEW, 2026-03-13 04:35 CET)

A hands-on Rocket Money review (thewaystowealth.com, March 2026) reveals a critical pattern none of findings #1-9 capture: **the negotiation resulted in a plan the reviewer "wasn't aware of" — an unadvertised retention plan not listed on the provider's website.** The reviewer states: "It may have been an unadvertised plan used for customer retention, or a legacy plan that's just no longer promoted." Rocket Money's detailed success email broke down the trade-offs (save $20/month but lose HBO), and the reviewer called the level of detail "far more than just a bot asking for a lower rate."

**The strategic risk for ReneGo:** V1 recommends only PUBLIC offers (from fr-offers-watch.md). But French ISPs (Orange, SFR, Bouygues) all have unpublished retention offers that surface only when a customer calls to cancel or invokes loi Chatel. If a user follows ReneGo's recommendation, calls their ISP, and the ISP counter-offers with a hidden deal ReneGo didn't predict — ReneGo looks incomplete. The ISP looks generous. ReneGo's credibility takes a hit.

**This should change what ReneGo builds AND says in three ways:**

1. **Product change (Day 2-3, minimal dev): Add a "Qu'a proposé votre opérateur ?" post-action feedback form.** After a user acts on a recommendation, prompt them: which operator, what offer was proposed, did they accept, what's the new price? Each response feeds a crowdsourced database of hidden retention offers per operator. Rocket Money built this intelligence from millions of negotiations over years. ReneGo can start building it from Day 1 with a Google Form. **10-20 responses per operator = useful aggregate. 100 = authoritative.** This is the data flywheel that transforms ReneGo from "a calculator with public data" to "the only French service that knows what ISPs really charge."

2. **Copy change (immediate, positioning V5): Add retention offer anticipation to the recommendation and landing page.**
   - **Recommendation output:** Add a section: "Et si votre opérateur vous fait une contre-offre ? Quand vous contacterez [opérateur], ils vous proposeront probablement une offre de rétention. Voici comment la comparer à notre recommandation." This pre-empts the credibility trap — the user sees ReneGo ANTICIPATED the counter-offer.
   - **Landing page:** "Les opérateurs ont des offres de rétention qu'ils ne publient jamais sur leur site. ReneGo vous prépare à cette conversation." This creates intrigue, positions ReneGo as insider knowledge (not just a comparator), and addresses the #1 objection to switching.

3. **Transparency Index enhancement (Finding #8 upgrade): Add a "Propension à la rétention" scoring dimension.** How likely is each operator to make a counter-offer when you try to leave? Operators with generous hidden offers but terrible public prices (hello, Orange) get penalized for lack of transparency. Initially based on consumer forum data (quechoisir.org, dealabs.com threads), enriched over time by crowdsourced user feedback. This is data NO other French service publishes.

**Why this is the long-term moat:** Public ISP pricing is, by definition, public — any comparator can scrape it. The 24-month cost formula is replicable. The URLs are public. **The defensible moat is negotiation intelligence — what operators actually offer behind closed doors.** Rocket Money built this moat over 10M users. ReneGo starts building it with a feedback form on Day 2.

→ **PM decisions needed:**
- Should a post-action feedback form ("Qu'a proposé votre opérateur ?") ship as part of V1 Day 2-3? (1 form + 1 storage endpoint, or a Google Form for V0. 2-4h dev.)
- Should the recommendation output include retention offer anticipation text? (Copy-only change, 0 dev.)
- Should the landing page mention hidden retention offers? (Copy change in GROWTH-03/V5.)
- Should "Propension à la rétention" be added to the Transparency Index scoring? (Content/research work, compatible with Finding #8 scope.)

Full analysis in `market/us-comparables.md` section 15.

---

### 11. Ship a "Shareable Diagnostic Card" — the zero-budget viral engine the funnel is missing (NEW, 2026-03-13 08:35 CET)

Rightmetric's analysis of Rocket Money's growth strategy reveals that **64% of its TikTok ad budget was allocated to UGC** — user-generated videos where creators show their app's savings screen and react with surprise. $1.7M was spent on professional content; UGC was the majority. These creator posts generated **21 million views** in 12 months (Aug 2022–Jul 2023). The content format is always the same: open app → see savings number → react → "download it." This is the **Spotify Wrapped pattern** applied to bill negotiation: the product output IS the shareable artifact that drives organic growth.

**ReneGo's current gap:** Findings #8-10 cover discovery (Scorecard), conversion (Widget), and data moat (Retention Offer loop). But NONE of them solve **organic amplification** — what happens after a user completes their analysis? Right now: nothing. The analysis dies on-screen. There's no shareable artifact, no share button, no branded output the user can send to friends. The growth funnel is a bucket with no overflow.

**This should change what ReneGo builds before Sunday in one critical way:**

1. **Product change (2-4h dev): Generate a "Diagnostic Box Internet" shareable card after every facture analysis.** A visually clean, branded, screenshot-ready card with only 4 data points:
   - "Vous payez: 39,99 €/mois"
   - "Vous devriez payer: 22,99 €/mois"
   - "Économie potentielle: 369 € sur 24 mois"
   - "Faites le test → renego.fr"

   Two sizes: 1080×1920 (WhatsApp Status/Instagram Stories) + 1080×1080 (feed/tweet). Generated client-side (HTML canvas → image). No PII on the card. No backend changes. One-tap "Partager mon diagnostic" button triggers the native Web Share API.

2. **Why WhatsApp is the French growth channel, not TikTok.** Rocket Money spent millions on TikTok UGC because that's where US millennials share financial wins. In France, consumer sharing happens on **WhatsApp groups** (38M+ monthly active users, Médiamétrie 2024). A diagnostic card sent to a family/friends WhatsApp group with "j'ai fait le test, on surpaie de 17€/mois, essayez ça" reaches the exact audience most likely to act — people with similar ISP contracts in the same region.

3. **The card triggers the "et toi, combien tu paies?" viral loop.** When someone shares "je surpaie de 17€/mois," friends respond "combien tu paies toi?" → "je vais essayer." One diagnostic triggers multiple diagnostics in the same social circle. This is exponential growth from zero — even 50 users sharing to 5 friends each means 250 potential new users in week 1.

4. **The card IS the social proof ReneGo doesn't have.** Can't claim "$2.5B saved" with zero users. But if 50 users share diagnostic cards, each card is a micro-testimonial with real numbers shared to real friends. "39,99 → 22,99, 369€ d'économies" is more convincing than any marketing copy.

5. **Funnel completion.** This finding closes the only remaining gap in the acquisition-to-amplification funnel:
   - Finding #8 (Scorecard) → drives traffic to site
   - Finding #9 (Widget) → converts traffic to analysis
   - Finding #6 (Trust Ladder) → builds confidence
   - **Finding #11 (Diagnostic Card) → turns each user into a distribution channel**
   - Finding #7 (Sentinel) → retains the user
   - Finding #10 (Retention Offer loop) → builds the data moat

→ **PM decisions needed:**
- Should the V1 analysis result include a shareable diagnostic card? (2-4h dev using existing analysis data, 100% client-side, zero PII)
- Should the card be a Day 2 or Day 3 addition? (Recommendation: Day 2 alongside DEV-10 widget — they share the same visual/branding work)
- Should the week-1 social launch include a "challenge" format? ("Combien surpayez-vous votre box ? Faites le diagnostic et partagez votre résultat.")
- Should the card include the operator name ("Freebox → Red by SFR") or keep it generic ("39,99 → 22,99") for privacy? (Recommendation: include operator — it makes the card more specific and shareable, and operator names are not PII)

Full analysis in `market/us-comparables.md` section 16.

---

### 12. Turn the "Plan d'action" into an operator-specific "Playbook de négociation" — the zero-dev, highest-ROI product change before Sunday (NEW, 2026-03-13 12:35 CET)

US telecom comparison sites (HighSpeedInternet.com: 2.68M monthly visits; AllConnect.com: 601K; CompareInternet, BroadbandNow) have built their audiences on a single content pattern: **provider-specific negotiation playbooks** — word-for-word scripts that tell users exactly what to say when they call their ISP's retention desk, which phone number to call, which department to ask for, which competing offer to cite, and what legal language to invoke.

CompareInternet.com's negotiation script guide explicitly arms users with the ISP's own customer acquisition cost (>$300/subscriber) as leverage: "you are worth $300+ to retain." HighSpeedInternet.com's provider-specific pages capture the highest-intent search traffic in telecom — users who have **already decided to act** and need the tactical playbook to execute.

**The French structural gap that makes this even more valuable:** The US FCC mandated standardized "broadband nutrition labels" in April 2024, forcing ISPs to disclose full post-promo pricing, fees, and speeds in a comparable format. US negotiation scripts explicitly reference these labels as leverage ("Your FCC label shows a new-customer price $15 lower"). **France (ARCEP) has NO equivalent standardized disclosure.** French ISPs are free to present pricing however they want — which is why Orange can display "29,99 €/mois" while burying 42,99 € post-promo in footnotes. This means ReneGo's analysis becomes the de facto "nutrition label" that the consumer brings to the negotiation call.

**What exists in France today is inadequate:**
- "Lettres types" on resilier.com / laposte.fr — generic legal templates, not tactical scripts
- Generic advice on choisir.com / echosdunet.net — "soyez poli mais ferme" — with no operator-specific data, no competing offers to cite
- Reddit/forum anecdotes — unstructured, undated, unreliable

**What NO French resource provides:** an operator-specific, data-connected playbook combining the user's actual price, the exact competing offer to cite, the retention phone number, a word-for-word script, loi Chatel/Hamon language, and tactical timing advice. ReneGo can be the first.

**This changes what ReneGo builds in three ways:**

1. **Product change (ZERO DEV — content/template change only):** Replace the generic "Plan d'action" (step 1: "appeler le 3900") with an **operator-specific negotiation playbook** that includes:
   - The exact competing offer to cite with price, source, date ("Red by SFR à 22,99 €/mois, prix fixe, sans engagement — vérifié le 13/03/2026")
   - The user's calculated overpayment ("Vous payez 17 €/mois de plus que le marché")
   - A word-for-word script adapted to the user's operator
   - The retention phone number and recommended call times
   - The specific legal articles to invoke (article L. 224-39 du Code de la consommation, loi Chatel)
   - Counter-offer evaluation guidance: "L'agent proposera probablement une offre de rétention. Voici comment la comparer à notre recommandation"
   
   **Estimated effort: 2-3 hours of content work.** The action plan template already renders dynamic data. This is template expansion, not code.

2. **Copy/positioning change (immediate):** Add to the landing page or recommendation:
   - **"On ne vous dit pas juste quoi faire. On vous dit quoi DIRE."**
   - **"Quand vous appellerez votre opérateur, leur agent aura un script. Maintenant, vous aussi."**
   
   This names the core asymmetry: ISP retention agents are trained negotiators with scripts and CRM data. The consumer walks in blind. ReneGo levels the playing field.

3. **SEO change (Week 1 fast-follow):** Publish 4 standalone pages: "Comment négocier avec [Orange/SFR/Free/Bouygues] — Playbook ReneGo." Each combines Transparency Index data + negotiation script + loi Chatel template + CTA to run a full diagnostic. This pillar-cluster SEO architecture captures "négocier [opérateur] box" search intent — a niche completely unoccupied in France.

**Why this is the single highest-ROI change for the remaining hours before launch:** It requires ZERO development work (content/copy only), it closes the "last mile" gap between recommendation and user action (the hardest step), it creates a differentiation no French competitor can claim, and it generates an SEO asset that drives high-intent organic traffic from day one.

**The fundamental insight:** ReneGo's analysis engine is strong. But the user's journey doesn't end at "here's your recommendation." It ends at "I just called and got my bill reduced." The negotiation playbook closes the gap between knowing and doing — it transforms ReneGo from "an analysis tool" into "a negotiation coach."

→ **PM decisions needed:**
- Should the V1 "Plan d'action" be upgraded to an operator-specific negotiation playbook with word-for-word scripts? (Zero dev — content/template change, 2-3h)
- Should the landing page include "On vous dit quoi DIRE" positioning? (Copy change for GROWTH-03/V6+)
- Should operator-specific SEO playbook pages be a Week 1 fast-follow? (Content + design, high SEO ROI)
- Should the playbook include counter-offer evaluation guidance? (Connects to Finding #10 retention offer intelligence)

Full analysis in `market/us-comparables.md` section 17.

---

## Whitespace Confirmed

**No French product negotiates bills on behalf of consumers.** Existing French apps (Origame, Ideel, ReSubs, Bankin') only track subscriptions. HelloWatt compares energy prices but doesn't negotiate. The active negotiation + recommendation + execution flow that Renego targets is an unoccupied niche.

---

## Recommended Next Steps for PM

1. **🔴 HIGHEST PRIORITY: Upgrade the "Plan d'action" to an operator-specific "Playbook de négociation"** — Finding #12. This is the single highest-ROI change before Sunday: **ZERO dev work** (content/template change only, 2-3h), closes the "last mile" between recommendation and user action, and creates the differentiation line NO French competitor can claim: "On ne vous dit pas juste quoi faire. On vous dit quoi DIRE." US telecom sites generate millions of visits/month from this exact content pattern. France has no equivalent — no FCC broadband labels, no operator-specific scripts, no data-connected playbooks. ReneGo can be the first.
2. **PRIORITY: Ship the "Shareable Diagnostic Card" as the zero-budget viral engine** — Finding #11. ReneGo has zero ad budget. Rocket Money spent $1.7M+ on professional content alone and allocated 64% of its TikTok budget to UGC of users showing their savings screens. ReneGo can replicate the same organic sharing mechanic for 2-4h of dev time by generating a branded, screenshot-ready diagnostic card after each analysis. This is the ONLY finding that solves organic amplification — every other finding brings users in or retains them, but none turns users into distributors. In France, the channel is WhatsApp groups, not TikTok. One card shared to a family group triggers "et toi, combien tu paies?" — exponential growth from zero. **Target: Day 2 alongside DEV-10 widget (shared visual/branding work).**
2. **PRIORITY: Add the "Instant Price Check" widget to the landing page** — Finding #9. This is the missing conversion bridge. The landing page currently asks visitors to upload a PDF as the first action — too much friction for a zero-brand product. A 2-field widget ("opérateur + prix/mois") gives a personalized savings estimate in 10 seconds, using existing benchmark data. Zero PII, zero documents, 2-4h dev, 100% client-side. This is how Rocket Money, NerdWallet, and Credit Karma convert cold traffic. Without it, Findings #8's traffic and GROWTH-03's copy have nowhere to convert. **Target: Day 2 alongside GROWTH-03 rewrite.**
2. **PRIORITY: Publish a scored "Indice de Transparence" as the launch's top-of-funnel** — Finding #8. Without it, ReneGo is a tool nobody knows about. With it, ReneGo is the entity that publicly rates French ISPs on pricing honesty — a press-ready, SEO-rich, shareable asset that drives discovery. Upgrade DEV-08 from price chart to scored scorecard. Lead launch comms with "le premier Indice de Transparence Box Internet en France." This is the cold-start acquisition engine that feeds everything else.
3. **PRIORITY: Decide flat fee vs. commission for V1 launch** — Finding #6 recommends flat annual fee (€29–39/year) over % commission. This is the single highest-impact pricing decision before Sunday. Simplifies billing, improves trust signal, and gives a killer GTM headline ("Gardez 100% de vos économies").
4. **PRIORITY: Add the Promo-Expiry Sentinel to V1 scope** — Finding #7. Without it, the flat-fee annual subscription has no recurring justification — the user gets one recommendation and leaves. With it, ReneGo proactively alerts users 30 days before their promo expires, creating a retention loop. Minimal infra: email + expiry date + cron alert. Target Day 2–3 delivery. This is the single most important retention feature.
5. **PRIORITY: Build the "Hidden Retention Offer" feedback loop** — Finding #10. ReneGo currently recommends only public offers. But ISPs counter with unpublished retention deals. Without anticipating this, ReneGo looks naive. Two immediate actions: (a) add "Et si votre opérateur vous fait une contre-offre ?" to the recommendation copy (zero dev, Day 2), and (b) ship a "Qu'a proposé votre opérateur ?" post-action feedback form (2-4h dev or a Google Form, Day 2-3). This starts the data flywheel that becomes ReneGo's long-term moat.
6. **Build the trust ladder into Day 2 flow polish** — Free facture analysis → savings estimate → flat fee → explicit guarantees → status updates. See `us-comparables.md` section 11 for the full 6-step ladder.
7. **Confirm "box internet" as beachhead** — US data supports telecom/internet as the highest-savings category. French ISP post-promo pricing dynamics make this the right first vertical.
8. **Design the acquisition hook** — free "facture analysis" (no account required) as V1 free tier. This adapts Rocket Money's free-value-first approach without requiring open banking.
9. **Architect for B2B from day one** — even if V1 is pure D2C, the API should support future white-label embedding (neobanques, courtiers). Billshark's Shark Connect API validates this path.
10. **Invest in AI-driven negotiation flows** — skip the human call center. Build automated parcours: document generation (LRE, résiliation), eligibility checking, recommendation engine. This is where Renego can leapfrog the US incumbents.

---

*Full sourced research with fact/inference/hypothesis tags: `openclaw-team/market/us-comparables.md`*
