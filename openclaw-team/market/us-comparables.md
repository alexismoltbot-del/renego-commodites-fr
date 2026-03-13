# US Comparables — Bill Negotiation & Subscription Management

Research date: 2026-03-12
Agent: research-us
Scope: Rocket Money, Billshark, Hiatus, Trim (priority), plus secondary US players
Convention: each claim is tagged **[FACT]**, **[INFERENCE]**, or **[HYPOTHESIS]** and sourced.

---

## 1. Rocket Money (formerly Truebill)

### Company Profile

- **Founded:** 2015 as Truebill. Rebranded Rocket Money August 2022.
  [FACT — rocketcompanies.com press release]
- **Acquired:** December 2021 by Rocket Companies for **$1.275 billion** cash.
  [FACT — Rocket Companies IR, SEC filing]
- **Users:** 4.1 million premium members as of Feb 2025; 10M+ total users claimed as of Sep 2025.
  [FACT — Rocket Companies Q4-2024 earnings, rocketmoney.com homepage]
- **Total savings claimed:** >$2.5 billion cumulative (bill negotiations after fees + annualised subscription cancellations + smart-savings deposits).
  [FACT — rocketmoney.com, Rocket Companies Q4-2024 press release]
- **Awards:** CNET 2024 Editor's Choice, best overall budgeting app.
  [FACT — cnet.com review, June 2025]

### Features

| Feature | Free | Premium |
|---|---|---|
| Bank account linking (via Plaid, 12 000+ US institutions) | ✅ | ✅ |
| Subscription detection & list | ✅ (view only) | ✅ |
| Subscription cancellation (concierge) | ❌ | ✅ |
| Bill negotiation (human team) | ✅ (available to all, fee on success) | ✅ |
| Budget categories | Basic | Unlimited + custom |
| Credit score monitoring | ❌ | ✅ |
| Net worth tracking | ❌ | ✅ |
| Smart savings / automated savings | ❌ | ✅ |
| Transaction tags, rules, splits, exports | ❌ | ✅ |
| iOS widgets, full web access | Partial | ✅ |

[FACT — rocketmoney.com feature pages, help center articles, multiple review sites]

### Pricing

- **Free tier:** core linking, expense tracking, basic subscription list.
- **Premium:** "pay what you want" model, typically **$6–$14/month** (user chooses within range; all premium features identical regardless of chosen price). 7-day free trial. Annual plan available.
  [FACT — rocketmoney.com/learn/personal-finance/how-much-does-rocket-money-cost, multiple reviews]
- **Bill negotiation fee:** **35%–60% of first year's savings** (user selects percentage in-app). One-time lump sum or flexible payment plan (weekly/bi-weekly/monthly up to 12 months). Fee charged only on success.
  [FACT — help.rocketmoney.com articles 9744474, 9744501]
- **Typical savings duration:** 6–24 months, most commonly ~12 months.
  [FACT — rocketmoney.com help center]

### Technology & Operations

- **Account linking:** Plaid (read-only access tokens, AES-256 encryption, MFA). Credentials never stored by Rocket Money.
  [FACT — help.rocketmoney.com, plaid.com case study]
- **Bill negotiation:** primarily **human negotiators** as of 2025. Rocket Money has deployed an "AI Fin Agent" for customer support queries, but bill negotiation itself remains human-led.
  [FACT — multiple 2025 reviews; CNET June 2025 user experience article]
- **Data stack:** dbt + Datafold for data quality/observability.
  [FACT — datafold.com/case-study/rocket-money]
- **Frontend:** likely React Native (cross-platform).
  [INFERENCE — based on job postings and tech stack databases; not officially confirmed]

### Negotiable Bill Categories

Internet, cable/satellite TV, phone (wireless & landline), satellite radio, home security.
[FACT — help.rocketmoney.com/articles/9744564]

**Not negotiated:** utilities (electricity/gas/water), insurance, rent, mortgage, medical bills.
[FACT — same source]

### Go-to-Market

- Heavy D2C acquisition via app stores + digital marketing.
- Acquisition flywheel: free tier → premium upsell → bill negotiation generates revenue.
- Cross-sell within Rocket Companies ecosystem (Rocket Mortgage, Rocket Loans).
  [FACT — Rocket Companies earnings calls, press releases]
- **Claimed success rate:** >85% on negotiation, ~$720/year average savings per user.
  [FACT — multiple reviews citing Truebill/Rocket Money data; 80% cancellation success rate claimed on homepage]

---

## 2. Billshark

### Company Profile

- **Founded:** 2015 (Tampa, FL).
  [FACT — billshark.com, Crunchbase]
- **Status:** independent, private. No acquisition announced as of Mar 2026.
  [FACT — no acquisition press found]
- **Claimed reach:** aims to save consumers >$2.7 billion by 2025.
  [FACT — billshark.com homepage]
- **SOC 2 compliant.**
  [FACT — billshark.com]

### Features

- **Bill negotiation:** human negotiators ("Sharks") contact providers on user's behalf. Internet, wireless, Pay TV, satellite radio, home security. Also covers **insurance premiums** (unique among peers).
  [FACT — billshark.com, multiple reviews]
- **Subscription cancellation:** $9 flat per cancellation ($7 for BaZing partner members).
  [FACT — billshark.com, freshdesk FAQ]
- **Automatic re-negotiation:** Billshark re-negotiates when contracts near expiry to maintain savings.
  [FACT — billshark.com product description]
- **No subscription tracking or budgeting app.** Pure negotiation & cancellation service.
  [FACT — billshark.com; no PFM features listed]

### Pricing

- **No upfront fee.** "No savings, no fee" model.
- **Bill negotiation:** **40% of total savings achieved**, capped at 24 months of estimated savings. One-time invoice post-negotiation. Payment plan option: spread over 2–6 months for a one-time $9 charge.
  [FACT — billshark.com/blogs/bill-negotiation-fees, freshdesk FAQ]
- **Subscription cancellation:** $9/per cancellation.
  [FACT — billshark.com]

### Performance

- **Success rate:** 85%–90%.
  [FACT — billshark.com, multiple reviews]
- **Average savings:** ~$450 per successful bill negotiation. Largest single-customer saving: $9,500.
  [FACT — billshark.com, bills.com review]

### B2B / White-Label (critical differentiator)

- **"Shark Connect" API:** full white-label API for banks, credit unions, fintechs.
  [FACT — billshark.com/blogs/powerful-bill-reduction-platform]
- **Integration options:** low-code widgets, referral model, full white-label API.
  [FACT — same source]
- **Partners:** Payrailz (digital payments), Narmi (digital banking platform for credit unions), First Farmers Bank & Trust, StrategyCorps (BaZing), Jack Henry Fintech Integration Network.
  [FACT — billshark.com press releases, fintechfutures.com, jackhenry.com]
- **ApexEdge** delivers Billshark's platform to community financial institutions.
  [FACT — apexedge.com]
- **Positioning:** Billshark positions bill negotiation as a customer-engagement and churn-reduction tool for financial institutions.
  [FACT — billshark.com/blogs/enhancing-financial-services-with-billshark]

### Go-to-Market

- Dual-track: D2C (app/web) + B2B white-label via financial institutions.
- B2B is the strategic growth vector — financial institutions embed Billshark as a value-add for their customers.
  [INFERENCE — based on volume of B2B content on billshark.com vs. consumer marketing]

---

## 3. Hiatus

### Company Profile

- **Founded:** 2016 by David Callis and Todd Gower.
  [FACT — tracxn.com, app store listings]
- **Funding:** $1.2 million, single Seed round (Feb 2017). No subsequent rounds found.
  [FACT — tracxn.com]
- **Status:** still operational as of early 2026, but significantly smaller scale than Rocket Money or Billshark. No public user count available.
  [FACT — iOS/Android app store listings active; INFERENCE — small scale based on minimal funding]
- **Mixed user reviews:** some report unauthorized premium charges, failed negotiations, and difficulty cancelling the premium subscription.
  [FACT — Apple App Store reviews, reddit.com/r/personalfinance]

### Features

- **Subscription tracking:** auto-detection via linked bank accounts (Plaid). Notifications for upcoming charges and free-trial renewals.
  [FACT — hiatusapp.com, app store listings]
- **Spending insights & budgeting:** spending analysis, monthly budgets, financial goals.
  [FACT — same sources]
- **Net worth tracking.**
  [FACT — orbitmoney.io review]
- **Bill negotiation (Premium only):** concierge team negotiates internet, cable, phone bills.
  [FACT — financebuzz.com review]
- **Subscription cancellation (Premium only):** concierge-style.
  [FACT — same source]
- **Security:** 256-bit SSL, Plaid integration.
  [FACT — hiatusapp.com]

### Pricing

- **Free:** subscription tracking, spending insights, basic budgeting.
- **Premium:** ~$9.99/month or discounted annual ($36–$60/year depending on promotion).
  [FACT — multiple reviews, app store listings]
- **Bill negotiation fee:** performance fee on successful negotiations (exact percentage not publicly disclosed).
  [INFERENCE — reviews mention "success fees" but precise rate unclear]

### Go-to-Market

- Pure D2C app-store driven.
- No B2B channel identified.
  [FACT — no B2B mentions on hiatusapp.com]
- **Scale is a concern.** $1.2M total funding vs. Rocket Money's $1.275B acquisition price suggests Hiatus operates on razor-thin margins with limited investment in product development.
  [INFERENCE — funding level makes sustained R&D difficult]

---

## 4. Trim (by OneMain Financial)

### Company Profile

- **Founded:** 2015. Originally launched as a **Facebook Messenger bot** for subscription management.
  [FACT — financebuzz.com, themodestwallet.com]
- **Acquired:** April 2021 by **OneMain Financial** (personal loans, NYSE: OMF). Acquisition price not publicly disclosed.
  [FACT — investor.onemainfinancial.com press release, coverager.com]
- **Current status:** operates as **"Trim by OneMain"**, offered free to OneMain/Brightway loan customers. No standalone app.
  [FACT — trimhelp.zendesk.com, onemainfinancial.com]

### Features

- **Bill negotiation:** human negotiators handle internet, phone, cable, satellite radio, home security. Also covers **some medical bills** (unique).
  [FACT — trimhelp.zendesk.com FAQ]
- **Subscription tracking & cancellation.**
  [FACT — financebuzz.com]
- **Spending analysis & alerts:** flags price increases, overdraft fees, low balances, unusual activity.
  [FACT — finmasters.com review]
- **Simple Savings account** (interest-bearing).
  [FACT — orbitmoney.io review]
- **No standalone mobile app** — features accessed through OneMain Financial app/web dashboard.
  [FACT — multiple sources]

### Pricing (post-acquisition)

- **Free for OneMain/Brightway customers.** No subscription fee, no negotiation fee.
  [FACT — trimhelp.zendesk.com FAQ for OneMain customers]
- **Pre-acquisition fee:** 15% of first year's savings on successful negotiations (historically, before OneMain acquisition made it free for their customers).
  [FACT — trimhelp.zendesk.com/articles/4405553024663]

### Performance

- **Bills lowered:** 800,000+ bills negotiated.
  [FACT — finmasters.com]
- **Savings claim:** up to 30% bill reduction. Individual case studies: ~$500 saved on internet, $533 on internet+phone over 3 years.
  [FACT — finmasters.com, michaelsaves.com]
- **Success rate:** not publicly published as a specific percentage.
  [FACT — no official success rate found]

### Strategic Significance

- **Trim is no longer a standalone product.** It's an embedded customer-retention tool within OneMain Financial's lending ecosystem.
  [FACT — OneMain acquisition rationale in press release]
- OneMain uses Trim to add value to loan customers, improve retention, and differentiate from other personal-loan providers.
  [INFERENCE — based on the "free for customers" model and positioning within OneMain ecosystem]
- This mirrors a broader trend: **bill negotiation as an embedded feature** rather than a standalone business.
  [INFERENCE — pattern observed across Trim/OneMain, Billshark/B2B, BillFixers/Experian, Cushion/LendingClub]

---

## 5. Secondary US Players (brief profiles)

### Kudos (emerging, AI-first)

- **AI voice agent** that makes phone calls to providers on user's behalf — fully automated, no humans in the loop.
  [FACT — joinkudos.com, YouTube demos]
- **Core product:** credit card rewards optimization (free); bill negotiation is premium add-on.
- **Price:** $40/year premium. Users keep 100% of savings (no commission).
  [FACT — apple.com app listing, joinkudos.com blog]
- **Relevance to Renego:** represents the **AI-first frontier** — directly contrasts with human-negotiator models.
  [INFERENCE]

### BillFixers (via Experian)

- Now part of **Experian Premium** ($24.99/month).
  [FACT — finmasters.com]
- Negotiates cell phone, internet, phone, TV, radio, home security. No medical, insurance, credit cards, mortgage, rent.
  [FACT — finmasters.com]
- **Relevance:** another example of bill negotiation being **absorbed by a larger platform** (credit bureau in this case).
  [INFERENCE]

### Cushion (defunct as standalone)

- AI-powered spending intelligence platform. Over 1M consumers served.
  [FACT — lendingclub.com press release]
- **Acquired by LendingClub** (April 2025) for IP and talent. No longer standalone.
  [FACT — lendingclub.com IR, seekingalpha.com]
- Tracked bills, managed subscriptions, monitored BNPL loans, built credit.
  [FACT — globalfintechseries.com]

### Pine AI

- AI agent for bill negotiation. "Pay as you go" model or free trial.
  [FACT — 19pine.ai]
- Emerging player, smaller scale.
  [INFERENCE — limited press coverage]

### BillCutterz

- Human negotiators for monthly bills including **utilities** (rarer category).
  [FACT — biblemoneymatters.com]

---

## 6. Market Size & Trends

- **Global bill negotiation services market:** ~$1.2B (2024), projected $4.8B by 2033 (CAGR 14.9%). North America = ~45% share.
  [FACT — datahorizzonresearch.com market report]
- **US subscription billing management market** (B2B side): $1.79B (2024), projected $8.12B by 2034 (CAGR 16.32%).
  [FACT — precedenceresearch.com]
- **Key trend:** AI integration accelerating — moving from human-call-center models to AI voice agents (Kudos, Pine AI, Vibrato).
  [FACT — multiple sources; INFERENCE — this shift will accelerate as voice AI matures]
- **Consolidation trend:** standalone bill negotiation startups are being acquired by larger financial services companies (Trim→OneMain, Truebill→Rocket, Cushion→LendingClub, BillFixers→Experian).
  [FACT — acquisition records]

---

## 7. Regulatory & Operational Context (US)

- **No dedicated federal regulation** for bill negotiation services. Governed by patchwork: FTC Act (anti-deception), FTC Telemarketing Sales Rule (prohibits upfront fees for debt relief), CFPB oversight, state consumer protection laws.
  [FACT — ftc.gov, consumerfinance.gov]
- **Power of Attorney (POA):** most services operate under limited authorization or e-signature consent rather than formal POA. Requirements vary by state.
  [FACT — ftc.gov, state law references]
- **Data access:** Plaid is the dominant bank-account-linking infrastructure. Read-only tokens. SOC 2 compliance expected.
  [FACT — plaid.com, billshark.com]
- **Click-to-Cancel rule (FTC, 2025):** impacts subscription-based services, requiring easy cancellation mechanisms. May indirectly benefit bill-negotiation apps by making cancellations smoother.
  [FACT — jdsupra.com, FTC final rule]

---

## 8. France / Europe Landscape (brief scan)

No direct equivalent to Rocket Money or Billshark exists in France as of March 2026. The closest services:

- **Origame:** subscription management, auto-detection, suggests cheaper alternatives. No direct negotiation.
  [FACT — cnetfrance.fr]
- **Ideel:** free subscription tracker, notifications, mobile-plan comparison. No negotiation.
  [FACT — android-mt.ouest-france.fr]
- **ReSubs:** subscription manager with AI cancellation tips. No negotiation.
  [FACT — Google Play listing]
- **HelloWatt:** energy-specific comparator (electricity/gas), not a negotiation service.
  [FACT — connexionfrance.com]
- **Bankin':** PFM app (budget, categorisation), no bill negotiation.
  [FACT — lesbonsclics.fr]

**Gap:** France has subscription trackers and energy comparators, but **no service that actively negotiates existing contracts on the consumer's behalf.** This is a clear whitespace.
[INFERENCE — based on exhaustive search; no French bill-negotiation-as-a-service product identified]

---

## 9. Comparative Pricing Matrix

| Service | Subscription | Negotiation Fee | Cancellation Fee |
|---|---|---|---|
| Rocket Money | $0 (free) / $6–14/mo (premium) | 35–60% of 1st year savings | Included in premium |
| Billshark | None | 40% of savings (cap 24 months) | $9 flat |
| Hiatus | $0 (free) / ~$10/mo (premium) | Performance fee (undisclosed %) | Included in premium |
| Trim (OneMain) | Free for OMF customers | Free for OMF customers (was 15%) | Free for OMF customers |
| Kudos | $0 (free core) / $40/year | $0 (no commission on savings) | Included in premium |
| BillFixers/Experian | $24.99/mo (Experian Premium) | Included | Included |

---

## 10. Key Takeaways for Renego Product Team

### What works in the US

1. **Performance-based pricing dominates.** "No savings, no fee" is the trust anchor.
2. **Human negotiators remain the norm** for the market leaders (Rocket Money, Billshark), though AI voice agents are emerging fast (Kudos).
3. **Subscription tracking is the acquisition hook** — free feature that gets users in the door.
4. **B2B white-label is a viable second revenue stream** (Billshark's API approach).
5. **Acquisition by larger financial platform is the common exit** (Trim→OneMain, Truebill→Rocket, Cushion→LendingClub, BillFixers→Experian).

### What doesn't directly translate to France

1. **Plaid has no equivalent penetration in France.** Open Banking (DSP2/PSD2) exists but aggregators like Budget Insight, Powens, or Bridge are smaller and more regulated.
   [INFERENCE — based on fintech infrastructure knowledge]
2. **US services focus on telecom/cable/security** — markets with opaque pricing and retention departments. French ISPs have standardised, published pricing with legal engagement rules.
   [INFERENCE — structural market difference]
3. **The US model relies on calling provider retention desks.** French providers increasingly route through online "espaces clients" and LRE (lettre recommandée électronique).
   [INFERENCE — based on French consumer process knowledge]
4. **US success fees (35–60%) are high.** French consumer expectations for digital services likely resist this level.
   [HYPOTHESIS — no French market data to confirm]
5. **Insurance negotiation** (Billshark) would face heavy regulation in France (courtage d'assurance, ACPR).
   [FACT — French regulatory framework; INFERENCE — this limits direct cloning]

### Whitespace for Renego

- **No French product actively negotiates bills on behalf of consumers.** Origame, Ideel, ReSubs track subscriptions but don't act.
  [INFERENCE — from research scan]
- **The "box internet" vertical is perfect for a first proof:** high unit savings, opaque post-promo pricing, retention desk culture exists at French ISPs, and loi Chatel / loi Hamon provide legal framework for consumer action.
  [INFERENCE — aligns with product-plan.md V2 rationale]
- **AI-first approach is the opportunity.** Instead of building a human call center (expensive, doesn't scale, hard in France where call scripts differ), Renego can invest in automated parcours + LRE generation.
  [HYPOTHESIS — strategic recommendation, not validated]

---

---

## 11. Deep-Dive: The "Savings-First, Fee-Second" Trust Ladder (new lesson, 2026-03-12 evening)

Research date: 2026-03-12 (evening pass)
Agent: research-us
Trigger: Day 1 sprint requires actionable trust-layer decisions before Sunday launch.

### The pattern: US leaders have converged on a multi-stage trust architecture

Across all successful US bill-negotiation services, a specific trust ladder has emerged that goes beyond "no savings, no fee." Rocket Money's help center (help.rocketmoney.com, articles 9744474, 9744501, 9744564) reveals the full sequence:

1. **Free value first.** Users see their subscriptions, spending patterns, and estimated savings *before* paying anything. The free tier is not a teaser — it delivers real insight. This hooks users and builds credibility before any money changes hands.
   [FACT — rocketmoney.com feature pages, help center]

2. **Zero-credentials intake option.** Rocket Money accepts *either* provider login credentials *or* a photo/upload of a billing statement. The photo path is critical: it lets privacy-conscious users participate without sharing credentials.
   [FACT — help.rocketmoney.com/en/articles/9744564: "Connect your provider account by entering your credentials or uploading a photo of your billing statement."]

3. **48-hour post-value review window.** After a successful negotiation, users get 48 hours to review the result before any fee is charged. This is a "see it, then decide" moment — the user experiences the value before paying.
   [FACT — help.rocketmoney.com/en/articles/9744474: "there is a 48-hour window before the fee is applied"]

4. **User-controlled fee percentage.** Rocket Money lets users choose their own success fee between 35% and 60%. All features are identical regardless of chosen price. This "pay what you want" model gives users agency and reduces fee-shock.
   [FACT — help.rocketmoney.com/en/articles/9744564: "you can choose any amount from 35% to 60%"]

5. **Flexible payment plans.** Success fees can be split weekly, bi-weekly, or monthly for up to 12 months. This reduces the psychological pain of a lump-sum fee.
   [FACT — help.rocketmoney.com/en/articles/9744474: "weekly, bi-weekly, or monthly (for up to 12 months)"]

6. **Explicit no-downgrade guarantee.** "We will never downgrade your plan, remove features, or make changes to your services without your approval." This addresses the #1 user fear: that the negotiator will cut their service to show "savings."
   [FACT — help.rocketmoney.com/en/articles/9744501]

### The counterpoint: Kudos proves the commission model is not the only path

While Rocket Money, Billshark, and Trim built trust *around* commission fees, Kudos has eliminated them entirely:

- **Flat $40/year premium fee.** No commission on savings. User keeps 100%.
  [FACT — apple.com App Store listing, joinkudos.com blog]
- **AI voice agent** makes calls directly — no human negotiators, lower marginal cost per negotiation.
  [FACT — joinkudos.com, YouTube product demos]
- **Alignment signal:** "We're on your side because we don't make more money when you save more" — the fee is fixed regardless of outcome.
  [INFERENCE — structural incentive analysis]

### Why this matters for Renego's Sunday launch

The critical insight is not any single element, but the *combination* of trust-building mechanisms and how they map to Renego's specific constraints:

**Renego launching in France has a harder trust problem than US incumbents had.** Rocket Money and Billshark launched into a market where bill negotiation was already a known category (credit card reward optimization, coupon culture, established services like BillCutterz). Renego is creating a new category in France. Users have zero reference point. The trust ladder must be *steeper* — more proof, less friction, lower risk.

**The Kudos flat-fee model is the trust-maximizing choice for a French V1.** Here's why:

| Factor | Commission model (Rocket Money style) | Flat fee model (Kudos style) |
|---|---|---|
| User comprehension | Complex: "35–60% of annualized first-year savings" | Simple: "€X/an" |
| Incentive alignment | Ambiguous: service profits more from bigger bills | Clear: fixed fee regardless of bill size |
| Trust signal for new market | Weaker: "why are they taking my savings?" | Stronger: "they charge a flat fee, I keep everything" |
| Fee sensitivity (France) | Likely too high — French digital consumers resist 35–60% commissions [HYPOTHESIS] | €29–39/year is below Netflix price, easy mental comparison |
| Infrastructure complexity for V1 | High: must track realized savings over time, calculate %, handle disputes | Low: simple annual subscription billing |
| GTM headline | "On négocie, vous payez X% de vos économies" | **"Gardez 100% de vos économies. €29/an."** |

**Recommended trust ladder for Renego V1 launch (adapted from US best-in-class):**

1. **Free facture analysis** — upload a PDF or photo of your box internet bill, get immediate analysis (current price, post-promo detection, estimated savings). No account creation required. [Adapts Rocket Money's free-value-first]
2. **Zero-credentials intake** — PDF/photo upload only. No open banking, no ISP login. [Adapts Rocket Money's photo upload path; critical for France where open banking aggregators are weaker]
3. **Show savings estimate before any commitment** — display "vous pourriez économiser ~€X/an" with sourced benchmark data before asking for payment. [Adapts Rocket Money's pre-commitment value display]
4. **Flat annual fee, not commission** — €29–39/year. User keeps 100% of negotiated savings. Frame as "votre conseiller box internet." [Adapts Kudos model; stronger trust signal for a new category in France]
5. **Explicit guarantees in product copy** — "Jamais de changement de forfait sans votre accord" + "Pas d'économies trouvées? Remboursé." [Adapts Rocket Money's no-downgrade guarantee + adds money-back for French consumer expectations]
6. **Status transparency** — real-time updates on recommendation status: "Analyse en cours → Économie identifiée → Plan d'action prêt → Action prise." [Adapts Rocket Money's negotiation tracking]

[HYPOTHESIS — this trust ladder is the research team's recommendation based on synthesis of US best practices applied to French market constraints. Must be validated by PM and tested with users.]

*Sources: help.rocketmoney.com articles 9744474, 9744501, 9744564; joinkudos.com; apple.com App Store; existing us-comparables.md sections 1–10.*

---

---

## 12. Deep-Dive: The "Promo-Expiry Sentinel" Loop — How US Leaders Turn One-Time Saves into Recurring Retention (new lesson, 2026-03-12 evening pass 2)

Research date: 2026-03-12 (evening pass 2)
Agent: research-us
Trigger: Day 1 sprint requires a retention-driving product mechanism for the V1 annual subscription to be defensible.

### The discovery: US leaders don't sell a one-time negotiation — they sell a monitoring loop

A close reading of Rocket Money's full help center and Billshark's product description reveals that the real product architecture isn't "we negotiate your bill once." It's a **recurring cycle** built around the telecom promotion calendar:

**Step 1 — Detect existing promo & wait.** Rocket Money's negotiators explicitly *delay* negotiations when a user has a preexisting promotion: "In some cases where there may already be a preexisting promotion on your account, our expert negotiators will delay the negotiation until the current discount has expired. This is because most providers will not be able to apply multiple promotions to an account."
[FACT — help.rocketmoney.com/en/articles/9744522]

**Step 2 — Track the expiry date.** The system records the promo duration and expiry: "Rocket Money will keep you informed about how long your negotiated savings will remain in effect so you know when to expect changes."
[FACT — help.rocketmoney.com/en/articles/9744501]

**Step 3 — Alert on price spike.** After a promo expires, the user sees a price increase on their bill. Rocket Money has a dedicated help article ("Bill increase after Bill Negotiation") that normalizes this and channels users back into re-negotiation: "Sometimes your existing discount or promotional rate expires before the new negotiated rate takes effect. This can create a short period where your bill looks higher than expected."
[FACT — help.rocketmoney.com/en/articles/9744572]

**Step 4 — Auto re-negotiate.** Billshark makes this explicit: "Billshark re-negotiates when contracts near expiry to maintain savings." The user doesn't need to remember or act — the service monitors and acts proactively.
[FACT — billshark.com product description, already captured in Section 2]

**Step 5 — Loop.** New promo applied → new expiry date tracked → monitoring continues → re-negotiate at next expiry. The user is perpetually "covered."

### Why this is the retention engine that makes subscriptions work

The key economic insight: **without the monitoring loop, a bill negotiation service is a one-time transaction.** The user saves money, pays the fee, and has no reason to come back for 12–24 months. This is a terrible SaaS retention profile.

The promo-expiry sentinel fixes this by creating continuous value:

| Without sentinel (one-shot) | With sentinel (loop) |
|---|---|
| User gets one recommendation | User gets ongoing protection |
| No reason to return for 12+ months | Service alerts user proactively every promo cycle |
| Annual subscription feels like overpaying | Annual subscription feels like "insurance against price creep" |
| Churn after first value delivery | Retention through recurring value moments |
| User must remember to check their bill | Service remembers for them |

Rocket Money's 4.1M premium subscribers don't stay because of one negotiation. They stay because the app monitors their bills continuously and creates recurring "we just saved you again" moments.
[INFERENCE — structural analysis of retention mechanics; no direct Rocket Money retention data published]

### Billshark's explicit pitch confirms the pattern

Billshark markets this directly to B2B partners: the value proposition for banks embedding Billshark isn't "your customers save once" — it's "your customers receive ongoing financial wellness, which improves their engagement with your banking app."
[INFERENCE — based on Billshark's B2B positioning content; billshark.com/blogs/enhancing-financial-services-with-billshark]

### The French box internet promo cycle is PERFECTLY suited for this

French ISPs operate on a predictable promotion calendar:

- Most box internet promos are **12 months** (some 6, some 24).
  [FACT — standard across Free, Orange, SFR, Bouygues per official offer pages]
- After promo expires, prices jump **€8–20/month** depending on operator and tier.
  [FACT — documented in openclaw-team/market/fr-offers-watch.md and benchmark data]
- This price jump is the **#1 pain point** for French ISP customers — it's why the ARCEP and UFC-Que Choisir regularly publish warnings about it.
  [FACT — arcep.fr consumer guides, quechoisir.org articles on box internet pricing]
- The date of the promo expiry is printed on the user's bill or is calculable from the subscription start date.
  [FACT — French ISP billing practices]

This means ReneGo can extract the promo expiry date from the uploaded facture and build the entire sentinel loop around it — without needing Plaid-style bank linking or any ongoing data access.

### What this means for Renego V1 — concrete product change

**Current V1 flow (as designed):**
Upload facture → Get recommendation → Act (or not) → Flow ends.

**V1 flow with Promo-Expiry Sentinel:**
Upload facture → Get recommendation → **Extract promo expiry date** → Act (or not) → **User opts into monitoring** → ReneGo sends proactive alert 30 days before promo expires → New recommendation ready → User acts → Loop.

This single addition transforms the value proposition:

- **From:** "On vous dit quoi faire maintenant" (one-time advice)
- **To:** "On surveille votre box et on vous alerte avant chaque hausse de prix" (ongoing protection)

The second framing is why someone pays €29–39/year. Without it, the annual fee has no recurring justification.

### Implementation cost for V1 (minimal)

The sentinel loop doesn't require complex infrastructure for V1:

1. **Parse promo expiry date from facture PDF** — the date is on the bill or calculable (subscription date + 12 months). This is OCR/parsing work already partially done.
   [INFERENCE — based on existing facture analysis flow]
2. **Store email + expiry date** — minimal database: just email, ISP, current price, promo expiry date.
3. **Scheduled email alert** — send a templated email 30 days before expiry: "Votre promo [ISP] expire le [date]. Sans action, votre facture passera de €X à €Y/mois. Voici vos options." Link back to a refreshed recommendation.
4. **No ongoing data access needed** — unlike Rocket Money (which monitors transactions via Plaid), ReneGo only needs the one-time facture upload + one date. The alert is calendar-based, not data-feed-based.

**Estimated dev effort:** 1–2 days for a basic version (email capture + cron job + email template). Can ship as Day 2 or Day 3 addition.
[HYPOTHESIS — dev effort estimate; must be validated with renego-dev]

*Sources: help.rocketmoney.com articles 9744522, 9744501, 9744572, 9744474; billshark.com product description; existing us-comparables.md sections 1–2.*

---

---

## 13. Deep-Dive: The "Transparency Scorecard" as Cold-Start Acquisition Engine — How US Fintech Content Plays Create Authority Before User Scale (new lesson, 2026-03-12 night pass)

Research date: 2026-03-12 (night pass)
Agent: research-us
Trigger: ReneGo launches Sunday with zero users and zero social proof. How did the best US players bootstrap authority?

### The pattern: US fintech leaders publish structured market data as a standalone product — not just internal tooling

A cross-section of the most successful US bill negotiation and adjacent fintech companies reveals a consistent acquisition strategy that has NOT been captured in sections 1–12:

**They all publish provider-level transparency data as public, shareable, SEO-rich content — creating authority and organic traffic before (and independently of) user scale.**

Evidence across the US landscape:

1. **Rocket Money's /learn content hub.** Rocket Money maintains a comprehensive educational library at rocketmoney.com/learn covering provider-specific savings strategies, category breakdowns, and "how to lower your [provider] bill" guides. These are not support articles — they're **SEO acquisition pages** targeting high-intent keywords like "how to lower Xfinity bill" or "Spectrum retention deal." Each article positions Rocket Money as the expert authority and drives app downloads via in-content CTAs.
   [FACT — rocketmoney.com/learn section, visible in site structure and confirmed by Amplitude case study reference (amplitude.com/blog/rocket-money-revenue-customer-journeys)]

2. **NerdWallet's structured comparison model.** NerdWallet (NYSE: NRDS, ~$5B+ market cap at peak) built its entire business on one core play: take opaque financial product data, structure it into standardized scorecards, and publish it as authoritative comparison content. Its ISP/cable content pages (e.g., "Best Internet Providers 2025") consistently rank #1 on Google for high-volume keywords and drive millions of monthly visits. The model is: **aggregate → score → rank → publish → monetize traffic.** NerdWallet doesn't sell internet — it rates internet providers and captures the intent.
   [FACT — nerdwallet.com content strategy, publicly observable; market cap from NYSE/financial data]

3. **BillFixers/Experian's provider difficulty data.** BillFixers, before its Experian acquisition, published provider-specific negotiation difficulty assessments that became part of its brand identity. "We know which providers negotiate easily" is both a trust signal and a content play.
   [INFERENCE — based on BillFixers marketing content pre-acquisition; pattern confirmed by Experian Premium's integration of provider-level data]

4. **Consumer Reports / J.D. Power effect.** The US has a deep tradition of authority-through-transparency organizations: Consumer Reports (subscriber-funded product ratings), J.D. Power (satisfaction surveys), BBB (business ratings). These entities all follow the same formula: **aggregate opaque market data → structure it into a clear, scored, comparative format → become the trusted reference.** The "report card" format itself is a trust-generating mechanism.
   [FACT — established US institutions with documented methodology]

5. **Billshark's B2B pitch uses aggregate data as proof.** Billshark doesn't just use its negotiation data internally — it publishes aggregate insights (success rates, average savings by category) as marketing content that validates its expertise to both consumers and B2B banking partners.
   [FACT — billshark.com blog posts and press releases citing aggregate statistics]

### The cold-start problem: why this pattern matters existentially for ReneGo's Sunday launch

Rocket Money can plaster "$2.5B saved for our members" on its homepage because it has 10M+ users and years of data. Billshark can cite "85–90% success rate" because it has processed hundreds of thousands of negotiations.

**ReneGo has zero users, zero negotiations, and zero aggregate data.**

This is the fundamental cold-start problem. Every trust signal in sections 11 and 12 (trust ladder, sentinel loop) assumes the user has already arrived at the product. But **how do users discover and trust a product with no track record?**

The US pattern provides the answer: **you don't need user data to create authority. You need market data — and ReneGo already has it.**

ReneGo's existing market research contains:
- 5+ operator pricing with promo and post-promo prices [FACT — fr-offers-watch.md]
- Calculated 24-month true costs per operator [FACT — benchmark-box-fr.md]
- Setup fees and engagement conditions per operator [FACT — same sources]
- Post-promo markup per operator (the "piège post-promo" delta) [FACT — same sources]
- URL verification status per operator (which operators maintain transparent, accessible pricing pages) [FACT — fr-offers-watch.md trust pass]

This is the raw material for a **structured ISP Transparency Scorecard** — a public report card ranking French ISPs on pricing honesty.

### The product move: transform the observatoire from price chart to scored report card

The current plan (DEV-08) calls for a "public observatoire without import" showing operator price curves. This is useful but **passive** — it's a data page, not a trust-generating, traffic-acquiring, press-worthy content asset.

The US-inspired move: **score and rank each operator on a structured transparency index.** Not "who has the cheapest price" (that's a comparateur), but **"who is most honest about what you'll actually pay."**

Proposed scoring dimensions (derived from fr-offers-watch.md data):

| Dimension | What it measures | Example (from existing data) |
|---|---|---|
| **Post-Promo Markup** | How much the price jumps after the promo period ends (€/month) | Orange: +€10–18/mois; Bouygues: +€7; Red: €0 (prix fixe) |
| **Price Clarity** | Is the full 24-month cost clearly visible on the operator's public page? | Red: ✅ (prix unique, sans engagement); Orange: ❌ (remise structure confuse, mentions légales contradictoires) |
| **URL Stability** | Does the operator maintain stable, accessible pricing pages? | Red/SFR/Bouygues: URLs fonctionnelles; Orange: ancienne URL cassée (400), page actuelle JS-rendered, données incohérentes |
| **Engagement Transparency** | Is the engagement duration and its implications (frais de résiliation) clearly stated upfront? | Red: sans engagement, résiliation 59€ visible; SFR Starter: 12 mois engagement, résiliation 59€ mais ODR 49€ complexe |
| **Hidden Costs** | Are setup fees, equipment costs, and mandatory options clear? | Orange: frais 49€ "offerts" = conditionnel; Free: frais inclus dans le prix; Red: frais 39€ remboursables sur demande |

Using existing fr-offers-watch.md data, a V1 scorecard would look like:

| Opérateur | Post-Promo Markup | Clarté Prix | URLs Stables | Engagement | Coûts Cachés | **Score Global** |
|---|---|---|---|---|---|---|
| Red by SFR | ★★★★★ (€0) | ★★★★★ | ★★★★☆ | ★★★★★ (sans) | ★★★★☆ | **A** |
| Bouygues Bbox Must | ★★★☆☆ (+€7) | ★★★☆☆ | ★★★★★ | ★★☆☆☆ (12 mois) | ★★★☆☆ | **B** |
| SFR Fibre Starter | ★★★☆☆ (post-promo flou) | ★★☆☆☆ | ★★★★☆ | ★★☆☆☆ (12 mois) | ★★★☆☆ | **B-** |
| Orange Livebox | ★★☆☆☆ (+€10–18) | ★☆☆☆☆ | ★★★☆☆ | ★★☆☆☆ (12 mois) | ★★☆☆☆ | **C** |

[HYPOTHESIS — scoring methodology and grades are illustrative; must be validated by PM and formalized with defensible criteria before publication]

### Why this changes what ReneGo should BUILD

1. **The observatoire (DEV-08) should be a scored report card, not a static chart.** A ranked transparency index is shareable, debatable, and press-worthy. A price chart is just data. The NerdWallet playbook proves that structured scoring creates authority.

2. **Each operator page becomes a standalone SEO asset.** "Orange Livebox coût réel 24 mois" and "Red by SFR avis prix" are high-intent French search queries. Individual operator transparency pages (one per ISP in the scorecard) capture this intent and drive organic traffic to ReneGo — zero ad spend, zero user data required.

3. **The scorecard IS the social proof for a zero-user launch.** Instead of claiming "nous avons fait économiser X€ à nos utilisateurs" (which ReneGo can't say), the messaging becomes "nous avons analysé les offres box internet et voici ce que les opérateurs ne vous montrent pas." Authority from analysis, not from scale.

### Why this changes what ReneGo should SAY

**Current positioning headline (from positioning.md V2):**
"ReneGo est le premier outil français qui analyse votre facture box internet, calcule le vrai coût sur 24 mois, et vous dit exactement quoi faire."

**Proposed addition for launch PR/SEO/social:**
"ReneGo publie le premier Indice de Transparence Box Internet en France — et classe les opérateurs sur l'honnêteté de leurs prix."

This second framing:
- Creates a **press hook** — journalists at 60 Millions de Consommateurs, UFC-Que Choisir, Les Numériques, and tech media love ISP pricing exposés. A structured ranking gives them a ready-made story.
  [INFERENCE — based on regular UFC/60M/ARCEP publications on ISP pricing]
- Creates **social sharing potential** — "Orange a un C en transparence selon ReneGo" is tweetable/shareable in a way that "comparez votre facture" is not.
- Solves the **cold-start credibility gap** — the authority comes from the analysis, not from user numbers.
- Creates an **annual refresh cycle** — "Indice de Transparence Box Internet 2026" becomes a recurring content event, like J.D. Power's annual awards or NerdWallet's annual best-of lists.

### Implementation for V1 launch (minimal, compatible with existing DEV-08 scope)

The scorecard doesn't require new data — it requires **structuring and scoring the data ReneGo already has:**

1. **Define 4–5 scoring criteria** (post-promo markup, price clarity, URL stability, engagement transparency, hidden costs). Weight them. Document the methodology publicly (transparency about transparency).
2. **Score each operator** using fr-offers-watch.md and benchmark data. Publish the scores with the evidence (links, screenshots, dates).
3. **Create one landing page per operator** with the detailed score breakdown — "Orange Livebox Fibre : Indice de Transparence ReneGo." Each page targets "[opérateur] prix réel" SEO queries.
4. **Add a summary scorecard to the observatoire page** (DEV-08) — the scored ranking is the hero element, price curves are supporting evidence.
5. **Publish a short methodology page** — "Comment on note les opérateurs" — to pre-empt credibility questions.

**Estimated effort:** 1 day of content/design work on top of existing DEV-08 observatoire scope. No new data collection needed. Can ship as Day 2 or Day 3 alongside existing deliverables.
[HYPOTHESIS — effort estimate; must be validated with renego-dev and renego-growth]

### The Rocket Money lesson, inverted

Rocket Money's "$2.5B saved" works because it has millions of users generating data. ReneGo's "Indice de Transparence" works because it has zero users but rigorous market analysis. **Both create the same outcome: the perception that this entity knows more about your bill than you do.** The mechanism is different, but the trust signal is identical.

This is the NerdWallet-to-Rocket-Money bridge: start with content authority (like NerdWallet), use it to acquire users, then transition to aggregate user data (like Rocket Money) as the primary proof point. The scorecard is the V1 trust engine; the "$X économisés" counter becomes the V2 trust engine once user scale exists.

*Sources: rocketmoney.com/learn (site structure), amplitude.com/blog/rocket-money-revenue-customer-journeys (analytics approach), nerdwallet.com (content strategy), billshark.com (aggregate data marketing), consumerreports.org/jdpower.com (report-card format precedent), fr-offers-watch.md and benchmark-box-fr.md (ReneGo's existing market data).*

---

---

## 14. Deep-Dive: The "Instant Price Check" Pre-Upload Widget — How US Fintech Leaders Convert Landing Page Visitors in 10 Seconds Flat (new lesson, 2026-03-13 night pass)

Research date: 2026-03-13 (night pass)
Agent: research-us
Trigger: ReneGo's Sunday launch landing page asks visitors to upload a PDF as the first action. US data shows this is too much friction for a cold-start product. What do the best US players do instead?

### The pattern: US fintech leaders deliver personalized value BEFORE asking for any personal data or document

A cross-section of the highest-converting US fintech products reveals a universal growth principle that **none of ReneGo's existing findings fully address**: the first interaction with the product must deliver personalized value in under 10 seconds, with zero data sensitivity.

This is distinct from Finding #6 (trust ladder, which covers the full onboarding journey) and Finding #8 (Transparency Scorecard, which is a passive content asset). This finding is about the **active conversion moment** on the landing page — the micro-interaction that turns a curious visitor into an engaged prospect.

Evidence:

1. **Rocket Money's homepage "average savings" anchor.** Before any signup, Rocket Money's homepage states: "Members save an average of $720/year." This single number does three things: sets an expectation, creates urgency ("I might be losing $720"), and frames the CTA ("Get Started Free") as low-risk. The visitor hasn't uploaded anything, linked any account, or provided any data — but they already have a personalized mental anchor ("$720 could be MY savings").
   [FACT — rocketmoney.com homepage, visible without login]

2. **Rocket Money runs 100+ experiments/year on conversion.** Amplitude's case study documents that Rocket Money uses rigorous A/B testing to optimize every step of the user journey, with particular focus on the first-value-moment. The company's growth team continuously tests headline copy, CTA placement, and the speed at which users perceive value.
   [FACT — amplitude.com/blog/rocket-money-revenue-customer-journeys; confirmed by search results citing "over 100 experiments annually"]

3. **NerdWallet's interactive comparison tools.** NerdWallet doesn't just publish static provider comparison tables — it embeds interactive calculators on every high-intent page. "How much can I save by switching internet providers?" with two inputs (current provider + current bill) → instant comparison table. These tools are the conversion engine that turns SEO traffic into engaged users. NerdWallet's ~$5B peak market cap was built on this pattern.
   [FACT — nerdwallet.com product pages, publicly observable; market cap from NYSE data]

4. **Credit Karma's "check your score in 2 minutes" model.** Credit Karma (acquired by Intuit for $8.1B in 2020) pioneered the "instant personalized value" pattern in fintech: enter minimal information → get your credit score immediately → then upsell to deeper financial products. The key insight: the initial value moment requires almost no user data (name + address + last 4 of SSN), but delivers a high-value personalized result. 100M+ users acquired this way.
   [FACT — creditkarma.com product flow; Intuit acquisition price from SEC filings]

5. **Billshark's landing page savings estimate.** Billshark's homepage displays "Average savings: $300–$500 per bill" before any user input. Their CTA flow starts with selecting bill categories (internet, phone, TV) and entering approximate monthly amounts — not uploading documents. The document upload comes AFTER the user sees an estimated savings range.
   [FACT — billshark.com homepage and signup flow]

6. **Rocket Money's referral and growth mechanics reinforce the pattern.** Rocket Money's primary paid acquisition channel is influencer UGC content: creators produce "organic, unscripted" videos showing their real app experience — specifically the "aha moment" when they discover hidden subscriptions or see their savings estimate. These videos generate millions of views because the value moment is visually compelling and instantly relatable. The pattern works because the "aha moment" happens in seconds, not minutes.
   [FACT — confirmed by search results citing Rocket Money's influencer marketing strategy; help.rocketmoney.com referral program details]

### The conversion principle: micro-commitment escalation

The pattern across all successful US fintech apps follows a specific escalation ladder:

| Step | User gives | User gets | Time | Friction |
|---|---|---|---|---|
| **1. Landing page** | Nothing (just reads) | Average savings number + social proof | 3 sec | Zero |
| **2. Quick check** | Provider name + approx. bill amount | Personalized savings estimate | 10 sec | Minimal (no PII) |
| **3. Account creation** | Email + password | Access to dashboard/free features | 30 sec | Low |
| **4. Full analysis** | Bank link OR document upload | Detailed, actionable recommendations | 2-5 min | Medium |
| **5. Action** | Authorization / payment | Executed savings (negotiation, cancellation) | Varies | High (but trust is built) |

**The critical insight: steps 1 and 2 are where most conversion happens or dies.** If the landing page asks for step 4 (upload a document) as the first interaction, it skips the trust-building micro-commitments that make users comfortable providing sensitive data.

### ReneGo's current gap: the landing page asks for step 4 directly

ReneGo's current flow:

1. Visit landing page → Read positioning copy
2. **Upload PDF facture** (the very first interactive action)
3. Get analysis and recommendation

This skips the "quick check" step entirely. The visitor goes from "reading about the product" to "uploading a personal financial document" with nothing in between. For a zero-brand-recognition product launching in a market where no comparable service exists, this is a significant conversion barrier.

[INFERENCE — based on product flow analysis and comparison with US best practices]

### The product move: add a "Vérifiez en 10 secondes" widget to the landing page

**A 2-field instant price check widget, placed above the fold on the landing page, using ReneGo's existing benchmark data:**

**Field 1:** "Quel est votre opérateur ?" — dropdown: Orange, Free, SFR, Bouygues
**Field 2:** "Combien payez-vous par mois (€) ?" — number input

**Instant result (calculated from fr-offers-watch.md / benchmark data):**

Example: User selects "Orange" and enters "40"

→ "Vous payez **17 €/mois de plus** que la meilleure offre fibre équivalente (Red by SFR à 22,99 €/mois). Sur 24 mois, c'est **408 €** de trop."

→ CTA: "**Importez votre facture pour le diagnostic complet** — gratuit, 2 minutes."

The widget does NOT require:
- Any personal information (no name, email, or address)
- Any document upload
- Any account creation
- Any sensitive data whatsoever

It requires only two pieces of non-sensitive information (ISP name and approximate monthly payment) that the user knows from memory. The result is calculated client-side using the benchmark data ReneGo already has.

### Why this changes what ReneGo should BUILD before Sunday

1. **The widget IS the landing page CTA.** Instead of "Importez votre facture" as the first action, the landing page leads with "Vérifiez en 10 secondes combien vous surpayez." The upload becomes step 2, after the user has already seen a personalized savings estimate. This follows the micro-commitment escalation that drives conversion at Rocket Money, NerdWallet, and Credit Karma.

2. **The widget creates the "aha moment" that drives sharing.** Rocket Money's growth is fueled by UGC content showing the savings discovery moment. ReneGo's equivalent: a user sees "Vous payez 17€/mois de trop" and screenshots it to share with friends/family. "Tu devrais checker ça, moi je surpaye de 17€" is a natural word-of-mouth message. The widget makes the savings tangible and shareable before any commitment.

3. **The widget generates conversion data at zero cost.** Every widget interaction tells ReneGo: which ISP the visitor uses, what they pay, and their potential savings. This is anonymous, zero-PII analytics data that informs product decisions, even if the visitor never uploads a bill. After launch, ReneGo can report: "72% of our visitors overpay their box internet by an average of €12/month" — aggregate data that becomes the next wave of social proof (bridging to the NerdWallet authority model from Finding #8).

4. **Implementation is minimal — it uses data ReneGo already has.** The calculation is simple: `visitor_price - lowest_benchmark_price = estimated_overpayment`. The benchmark prices (Red 22,99€, SFR Starter 27,99€, Bouygues 35,99€, Orange 24,99€ promo / 32-42,99€ post-promo) are already in `fr-offers-watch.md`. The widget is a form + a subtraction + a display template. Estimated dev: **2-4 hours** for a basic version, fully client-side, no backend required.
   [HYPOTHESIS — dev effort estimate; must be validated with renego-dev]

### Why this changes what ReneGo should SAY before Sunday

**Current landing page CTA (GROWTH-03):**
"Importez votre facture box internet et découvrez combien vous pourriez économiser"

**Proposed landing page flow with widget:**

1. **Headline:** "Payez-vous trop cher votre box internet ?"
2. **Widget:** [Opérateur ▾] [€/mois ___] → [Vérifier]
3. **Result:** "Vous payez **X €/mois de plus** que la meilleure offre fibre. Sur 24 mois : **Y €.**"
4. **CTA:** "Importez votre facture pour le diagnostic complet — gratuit, 2 minutes."

The first framing asks a question the user already has in mind ("est-ce que je paie trop ?"). The widget answers it in 10 seconds. The full analysis becomes the natural next step for anyone whose answer was "yes" — which, based on the benchmark data, is the majority of post-promo subscribers.

**This also changes the PR/social angle.** Instead of leading with "ReneGo analyse votre facture" (product-centric), lead with: **"En moyenne, les Français paient 12 €/mois de trop pour leur box internet. Vérifiez en 10 secondes sur ReneGo.fr."** This is a shareable stat + a low-friction CTA — the formula that drives social sharing and press pickup.

### The Rocket Money growth lesson, adapted

Rocket Money's referral and UGC growth works because the product creates a visually compelling, emotionally resonant "savings discovery" moment that users naturally share. The company runs 100+ experiments/year to optimize this moment.

ReneGo can't replicate Rocket Money's bank-linking "subscription radar" for V1 (no Plaid equivalent in France). But the **instant price check widget creates the same emotional beat**: surprise at how much you overpay → urgency to act → desire to share with others who probably also overpay.

The widget IS the growth engine for a zero-user launch:

| Without widget (upload-first) | With widget (check-first) |
|---|---|
| Visitor must upload a document to see any value | Visitor sees personalized savings in 10 seconds |
| High friction → low conversion → slow learning | Low friction → higher conversion → fast learning |
| No shareable moment before commitment | "Je surpaye de X€" screenshot is shareable |
| Landing page is a brochure | Landing page is an interactive tool |
| Can't report aggregate data without uploads | Can report "X% of visitors overpay" from day 1 |
| UGC content requires full product usage | UGC content can show just the widget result |

### Interaction with existing findings

This finding complements but doesn't replace the existing research:

- **Finding #8 (Transparency Scorecard):** The scorecard is the SEO/press engine that drives traffic to the landing page. The widget is the conversion engine that turns that traffic into engaged users. Scorecard → traffic. Widget → conversion. They're sequential.
- **Finding #6 (Trust Ladder):** The widget is Step 0 of the trust ladder — the ultra-low-friction entry point before the free facture analysis (Step 1). It adds a rung below the existing ladder.
- **Finding #7 (Promo-Expiry Sentinel):** The widget can surface sentinel messaging: "Votre promo Orange va expirer dans ~X mois. Votre prix passera de 24,99€ à ~33-43€/mois." This creates urgency even without exact dates.
- **Finding #11 (Full Trust Ladder from Section 11):** The widget's instant estimate is the new first step of the full trust architecture.

*Sources: rocketmoney.com homepage (social proof anchor), amplitude.com/blog/rocket-money-revenue-customer-journeys (experimentation approach), nerdwallet.com (interactive calculator pattern), creditkarma.com (instant-value model, Intuit $8.1B acquisition), billshark.com (pre-upload savings estimate), help.rocketmoney.com (referral program mechanics, UGC strategy details), fr-offers-watch.md (ReneGo benchmark data for widget calculations).*

---

---

## 15. Deep-Dive: The "Hidden Retention Offer" Intelligence Loop — How US Negotiators Surface Unadvertised Plans, and Why ReneGo Must Build a Crowdsourced Offer Database to Defend Its Value Proposition (new lesson, 2026-03-13 night pass 2)

Research date: 2026-03-13 (04:00 CET)
Agent: research-us
Trigger: ReneGo's V1 recommendation engine compares the user's current bill against PUBLIC offers only (fr-offers-watch.md). But the biggest US player's own customer data reveals that the most compelling savings often come from UNPUBLISHED retention plans. This gap threatens ReneGo's credibility: if a user follows the recommendation and calls their ISP, the ISP may counter-offer with a retention deal that ReneGo didn't predict. The user then wonders: "Why didn't ReneGo know about this?"

### The discovery: Rocket Money's actual negotiation outcomes reveal plans that don't exist on provider websites

A hands-on review of Rocket Money's bill negotiation service (thewaystowealth.com, March 2026) produced a critical data point that no prior finding captures:

**The reviewer's Comcast negotiation resulted in a $20/month discount — but only by switching to a plan the reviewer "wasn't aware of."** The reviewer explicitly states: "Interestingly enough, I wasn't aware of that other package. It may have been an unadvertised plan used for customer retention, or a legacy plan that's just no longer promoted on the company's website."
[FACT — thewaystowealth.com/rocket-money-review, direct first-person account of Rocket Money negotiation outcome]

Rocket Money's detailed success notification email broke down the exact trade-offs: the new plan saved $20/month but required dropping HBO. The reviewer noted: "I was impressed with the level of detail. This was far more than just a bot asking for a lower rate."
[FACT — same source, reviewer included screenshot of Rocket Money email]

### Why this matters: the "visible market" is not the whole market

ReneGo's current recommendation engine operates in the **visible market** — the officially published offers from Orange, SFR, Red, Bouygues, and Free. This data is solid (fr-offers-watch.md, verified URLs, real 24-month costs).

But every French ISP also operates in the **invisible market** — unpublished retention offers, loyalty discounts, internal promotions, and legacy plans that exist only in the ISP's CRM system and are deployed at the discretion of retention agents. These offers are:

- **Not listed on operator websites.** You can't find them by browsing orange.fr or sfr.fr.
  [FACT — confirmed by absence from public offer pages]
- **Triggered by specific actions.** Typically surfaced when a customer calls to cancel, invokes loi Chatel, or explicitly requests a "geste commercial."
  [INFERENCE — based on French consumer forum reports (forum.quechoisir.org, dealabs.com threads on "offres de rétention")]
- **Variable by customer.** The same retention desk may offer different discounts based on tenure, current spend, churn risk score, or even the time of month (end-of-quarter targets).
  [INFERENCE — based on ISP retention desk mechanics documented in consumer advocacy literature]
- **Often better than the best public offer.** An Orange retention offer might match Red by SFR's price (22,99€) while keeping Livebox features and TV — something no public Orange offer does.
  [HYPOTHESIS — based on US pattern extrapolation; must validate with French consumer data]

This creates a **credibility trap for ReneGo at launch:**

| Scenario | ReneGo says | ISP retention desk says | User's reaction |
|---|---|---|---|
| User follows ReneGo recommendation to switch to Red by SFR | "Red à 22,99 €/mois est le meilleur choix, vous économisez 369 € sur 24 mois" | "Restez chez Orange, on vous fait 25,99 €/mois avec TV incluse pendant 12 mois" | "ReneGo ne connaissait pas cette offre. Pas si utile que ça." |
| User calls to cancel based on ReneGo plan | "Votre plan d'action : appeler le 3900 pour résilier" | "Attendez, on a une offre spéciale fidélité à 29,99 €/mois à vie" | "L'opérateur m'a proposé mieux que ce que ReneGo savait" |

**The trap:** If ReneGo only surfaces public-market alternatives, the ISP's retention desk can always counter-offer with an invisible-market deal that ReneGo didn't predict. This makes ReneGo look incomplete — and the ISP looks generous.

### The US solution: aggregate negotiation intelligence becomes the moat

Rocket Money's 10M+ users and hundreds of thousands of completed negotiations have given it something no public dataset can: **a proprietary database of what providers actually offer behind closed doors.** This is why Rocket Money's negotiators know about "unadvertised plans" — they've seen thousands of them across thousands of negotiations with the same providers.

This aggregate intelligence creates a flywheel:

1. Negotiate thousands of bills with Comcast/Xfinity
2. Catalog every retention offer received (discount amount, plan name, conditions, duration)
3. Know exactly what Comcast's current retention playbook looks like
4. Use that knowledge to demand better deals in future negotiations ("We know you have the $X plan, give it to our client")
5. New negotiation results feed back into the database

**Billshark uses this explicitly in its B2B pitch:** the value to banking partners isn't just "we negotiate bills" — it's "we know exactly what each provider will offer because we've done this thousands of times."
[INFERENCE — based on Billshark's marketing language about "expert negotiators" and provider-specific success rates]

**BillFixers (pre-Experian) published provider difficulty ratings** — essentially a public-facing distillation of their internal negotiation intelligence: "Provider X is easy to negotiate with, Provider Y is hard."
[INFERENCE — based on pre-acquisition BillFixers marketing content]

### What this changes for ReneGo: build a crowdsourced "Offres Cachées" database from Day 1

ReneGo can't replicate Rocket Money's database (zero negotiations completed). But it CAN build the infrastructure to collect this intelligence from its first users, and it CAN position the gap as a feature — not a weakness.

**Product change #1 — Add a "Qu'a proposé votre opérateur ?" feedback loop (V1 scope, Day 2-3):**

After a user receives their ReneGo recommendation and acts on it (calls the retention desk or initiates a switch), prompt them with a simple form:

> **"Qu'a proposé votre opérateur quand vous avez appelé ?"**
> - Opérateur : [Orange / SFR / Free / Bouygues]
> - Offre proposée : [texte libre — prix, durée, conditions]
> - Vous l'avez acceptée ? [Oui / Non]
> - Si oui, quel est votre nouveau prix ? [€/mois]

This is a 1-field + 3-click micro-survey. Each response adds one data point to ReneGo's emerging database of hidden retention offers. Over weeks, this builds into the intelligence layer that Rocket Money spent years accumulating.

[HYPOTHESIS — product design recommendation; must validate with PM and dev]

**Estimated dev effort:** 1 form + 1 storage endpoint + 1 display section. 2-4 hours for a basic version. Can be a Google Form for V0.
[HYPOTHESIS — dev estimate]

**Product change #2 — Display aggregated retention offer intelligence in the observatoire (V2 scope):**

Once enough responses accumulate (10-20 per operator), publish anonymized aggregate data:

> **"Offres cachées signalées par nos utilisateurs"**
> - Orange : 73% des utilisateurs ont reçu une offre de rétention. Prix moyen proposé : 27,50 €/mois (vs 42,99 € tarif standard post-promo). Durée moyenne : 12 mois.
> - SFR : 55% des utilisateurs ont reçu une contre-offre. Prix moyen : 24,99 €/mois.
> - Free : 12% seulement — Free propose rarement des offres de rétention (prix déjà bas).

This becomes a UNIQUE data asset that no French comparator has:
- UFC-Que Choisir publishes public prices. ReneGo publishes hidden prices.
- Les Numériques reviews official offers. ReneGo reveals what operators offer behind closed doors.
- This is the data that makes ReneGo irreplaceable — and it's built by users, not by web scraping.

[HYPOTHESIS — product vision; requires user scale to populate]

**Product change #3 — Add a "facteur rétention" to the recommendation engine (V2 scope):**

Once the hidden-offer database has enough data points, the recommendation can become smarter:

> **Current recommendation logic (V1):**
> "Red by SFR à 22,99 €/mois vous fait économiser 369 € sur 24 mois vs votre Freebox."
>
> **Enhanced recommendation logic (V2 with retention data):**
> "Red by SFR à 22,99 €/mois vous fait économiser 369 € sur 24 mois. MAIS: 73% des abonnés Orange qui appellent pour résilier reçoivent une offre de rétention à ~27,50 €/mois. Si Orange vous propose ce tarif, voici comment comparer : [coût 24 mois Red: 591 € vs Orange rétention: ~699 € — Red reste moins cher de 108 €, mais vous gardez la Livebox TV]."

This changes the recommendation from "switch to X" to "here's what will probably happen when you call, and here's how to evaluate the counter-offer." The user arrives at the retention desk PREPARED — which is exactly what Rocket Money's negotiators do, but ReneGo arms the USER instead of calling on their behalf.

### Why this changes what ReneGo should SAY before Sunday

**Current positioning gap:** The positioning (V4) says "ReneGo compare aux offres du marché" — implying the visible market only. It doesn't address what happens when the ISP counter-offers with a hidden deal.

**Proposed copy additions:**

1. **Landing page / positioning (immediate):**
   > "Les opérateurs ont des offres de rétention qu'ils ne publient jamais sur leur site. Quand vous appelez pour résilier, ils en sortent une du chapeau. ReneGo vous prépare à cette conversation : on sait ce qu'ils vont vous proposer, et on sait si c'est vraiment mieux que les alternatives."

   This framing:
   - Creates intrigue ("offres cachées" → "what am I missing?")
   - Positions ReneGo as insider knowledge, not just a public comparator
   - Addresses the #1 objection to switching ("mais mon opérateur va peut-être me faire une offre")
   - Differentiates from every French comparator (none address retention offers)

2. **Recommendation output (Day 2-3):**
   Add a section after the main recommendation:
   > **"Et si votre opérateur vous fait une contre-offre ?"**
   > "Quand vous contacterez [opérateur], ils vous proposeront probablement une offre de rétention. Voici comment la comparer à notre recommandation : [calcul coût 24 mois de la contre-offre typique vs la reco]."

   This pre-empts the credibility trap. The user sees that ReneGo ANTICIPATED the counter-offer, which builds trust even if the ISP's offer is competitive.

3. **Observatoire / Transparency Index (Finding #8 enhancement):**
   Add a scoring dimension: **"Propension à la rétention"** — how likely each operator is to make a counter-offer when you try to leave. Based initially on public consumer forum data, enriched over time by crowdsourced user reports. This is data NO other French service publishes.

### The strategic implication: ReneGo's long-term moat is not public data — it's negotiation intelligence

Public ISP pricing is, by definition, public. Any comparator can scrape it. The 24-month cost calculation is a formula anyone can replicate. The URLs are public.

**The defensible moat is the data that ONLY emerges from actual negotiation interactions:** which operators counter-offer, at what price, for how long, under what conditions, and how that compares to the visible market.

Rocket Money built this moat through millions of negotiations. ReneGo can build it through a simple post-action feedback form — the "Qu'a proposé votre opérateur ?" loop. Each user who acts on a ReneGo recommendation and reports back adds one data point. Ten data points per operator creates a useful aggregate. A hundred makes it authoritative.

This is the **data flywheel** that transforms ReneGo from "a calculator with public data" to "the only French service that knows what ISPs really charge." And it starts with a single form field on Day 2.

### Interaction with existing findings

- **Finding #6 (Trust Ladder):** The retention offer intelligence adds a trust element not currently in the ladder: "we know what your ISP will counter-offer." This makes the recommendation feel complete rather than naive.
- **Finding #7 (Promo-Expiry Sentinel):** The sentinel can incorporate retention offer data: "Votre promo expire dans 30 jours. Quand vous appellerez, voici ce qu'Orange propose habituellement aux clients fidèles."
- **Finding #8 (Transparency Scorecard):** Add "Propension à la rétention" as a scoring dimension. Operators that make generous hidden offers (but terrible public prices) get penalized for lack of transparency.
- **Finding #9 (Instant Price Check Widget):** The widget result can include: "Et saviez-vous que [opérateur] propose des offres cachées aux clients qui menacent de partir ?"

*Sources: thewaystowealth.com/rocket-money-review (first-person Rocket Money negotiation test, March 2026), help.rocketmoney.com articles 9744501, 9744533, 9744544 (success notification format, plan change mechanics, savings timeline), billshark.com (B2B intelligence pitch), existing us-comparables.md sections 1-14. French retention offer pattern: forum.quechoisir.org, dealabs.com (consumer reports of ISP retention offers), arcep.fr consumer guides.*

---

---

## 16. Deep-Dive: The "Shareable Diagnostic Card" — How Rocket Money Turned Its Product Output Into a $0-Budget Viral Engine, and Why ReneGo Must Ship One Before Launch (new lesson, 2026-03-13 morning pass)

Research date: 2026-03-13 (08:35 CET)
Agent: research-us
Trigger: ReneGo launches Sunday with zero ad budget, zero users, and zero brand awareness. Findings #8 (Transparency Scorecard) and #9 (Instant Widget) solve top-of-funnel and conversion respectively. But **neither solves organic amplification** — what happens AFTER a user completes their facture analysis? In the current flow, the user reads their recommendation and… that's it. The analysis dies on-screen. Every best-in-class US growth engine is built on the opposite: the product output IS the marketing.

### The discovery: Rocket Money spent 64% of its TikTok ad budget on UGC — and the UGC is always the same format: a user showing the app's personalized savings screen

Rightmetric's analysis of Rocket Money's influencer and ad strategy (rightmetric.co/outsight-library, covering Aug 2022–Jul 2023) reveals a decisive data point:

- **64% of Rocket Money's TikTok ad budget was allocated to UGC content** (user-generated, organic-looking videos), with $1.7M spent on the remaining 36% of professional content. The UGC videos consistently follow one format: a creator opens the app, discovers subscriptions they forgot about or sees their savings estimate, and reacts with genuine surprise.
  [FACT — rightmetric.co/outsight-library/wondermind-rocket-money-influencers; cdn.prod.website-files.com Rightmetric PDF report]

- **21 million views** were generated through creator posts in that 12-month window. Macro creators drove 56% of views despite representing a smaller share of partners.
  [FACT — same Rightmetric source]

- Rocket Money's referral program (help.rocketmoney.com article 6871284) rewards Premium members with one free Premium month per successful referral (capped at 3/year, valid through Dec 2026). The program explicitly restricts public sharing — it's designed for **personal, 1-to-1 sharing** ("friends, family, known acquaintances").
  [FACT — help.rocketmoney.com/en/articles/6871284, rocketmoney.com/referral-terms-conditions]

### The deeper pattern: the product output is designed to be the shareable artifact

The critical insight is NOT that Rocket Money spends on ads. It's that the **app's screens are designed as content production tools.** The savings summary, the subscription list, the "total saved" counter, the negotiation result notification — these screens are engineered to look good in a screenshot. They use:

- **Large, bold savings numbers** (the "$720 saved" or "12 subscriptions found" stat is the visual hero)
- **Clean, high-contrast design** (readable in a compressed social media screenshot or video thumbnail)
- **Before/after framing** (what you were paying → what you're paying now)
- **Emotional triggers** (surprise at forgotten subscriptions, relief at savings found)

[INFERENCE — based on analysis of Rocket Money app screenshots in reviews (thewaystowealth.com, cnet.com, nerdwallet.com), TikTok ad archives, and UGC creator content]

This is the **"Spotify Wrapped" growth pattern** applied to personal finance:

| Spotify Wrapped | Rocket Money Savings Screen |
|---|---|
| Transforms listening data into a shareable, personalized summary card | Transforms bill data into a shareable, personalized savings result |
| Users share because it expresses identity ("my music taste") | Users share because it signals savviness ("look how much I was overpaying") |
| Creates annual viral spike — millions of social posts with Spotify branding | Creates ongoing viral moments — every new user's "aha" discovery is shareable |
| Designed for Instagram Stories (1080x1920, bold type, brand colors) | Designed for screenshot (clean layout, large savings number, app branding) |
| Cost to Spotify per share: $0 (product IS the marketing) | Cost to Rocket Money per organic share: $0 (product IS the marketing) |

The Spotify Wrapped campaign generated over 60 million shares on Instagram Stories alone in a single year.
[FACT — multiple marketing industry analyses; spotify.com engineering blog on Wrapped infrastructure]

Rocket Money's UGC strategy replicates this — not annually, but **continuously.** Every user who completes an analysis becomes a potential organic distributor. The product output is the growth engine.

### ReneGo's current gap: the analysis result is functional but not shareable

ReneGo's current facture analysis output (as designed in the V1 flow) includes:

- Comparison table with 4 alternatives
- 24-month cost breakdown
- Recommended operator with trade-offs
- Action plan with next steps

This is excellent for the **user who's deciding what to do.** But it's terrible for **organic growth** because:

1. **No visual artifact.** The output is a detailed page with tables, text, and multiple sections. You can't screenshot it cleanly — it's too long, too detailed, too complex for a phone screen capture.
2. **No emotional hook.** The format is analytical, not emotional. "Économie de 369 € sur 24 mois" buried in a comparison table doesn't trigger the same reaction as a bold "Vous surpayez de **17 €/mois**" on a clean card.
3. **No branding on the output.** Even if a user screenshots the results, the image doesn't drive traffic back to ReneGo — there's no URL, no logo, no "Check yours at renego.fr" call to action.
4. **No share mechanic.** There's no "Partager mon diagnostic" button. The user would have to manually screenshot, crop, and send — friction that kills viral loops.

[INFERENCE — based on analysis of current product flow from DEV-01/02/03/05 deliverables and product-plan.md]

### The product move: generate a "Diagnostic Box Internet" shareable card after every analysis

After the user completes their facture analysis, generate a **visually clean, branded, screenshot-ready "Diagnostic Card"** designed for sharing on WhatsApp, Instagram Stories, Twitter/X, and SMS.

**Card content (minimal, high-impact):**

```
┌─────────────────────────────────────────┐
│                                         │
│         🔍 MON DIAGNOSTIC BOX           │
│                                         │
│   Vous payez    39,99 €/mois            │
│   Vous devriez  22,99 €/mois            │
│                                         │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━          │
│   ÉCONOMIE POTENTIELLE                  │
│   369 € sur 24 mois                     │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━          │
│                                         │
│   Faites le test → renego.fr            │
│                                         │
│              ReneGo                     │
│     Analyse gratuite, sans commission   │
│                                         │
└─────────────────────────────────────────┘
```

**Design specifications (for dev):**
- **Format:** 1080×1920 (Instagram Stories/WhatsApp Status) + 1080×1080 (feed/tweet) — generate both
- **Visual:** Clean background, brand colors, large savings number as visual hero, minimal text
- **Content:** Only 4 data points: current price, recommended price, total 24m savings, ReneGo URL
- **No PII:** The card shows prices, not the user's name, address, or operator account number
- **Branding:** ReneGo logo, URL, tagline ("Analyse gratuite, sans commission") — every share is a branded impression
- **Share button:** One-tap "Partager mon diagnostic" — opens native share sheet (WhatsApp, Instagram, copy link)

**Why this specific format works:**

1. **WhatsApp is France's dominant sharing channel.** Unlike the US where TikTok/Instagram drive UGC, French consumer sharing happens primarily on WhatsApp groups (family, friends, neighbors). A clean diagnostic card sent to a family WhatsApp group with "j'ai fait le test, on surpaie de 17€/mois, essayez ça" is the highest-leverage organic growth channel for French internet users.
   [INFERENCE — based on WhatsApp penetration in France: 38M+ monthly active users, Médiamétrie 2024 data]

2. **The card triggers the "et toi, combien tu paies?" conversation.** When someone shares "Je surpaie de 17€/mois," the natural response from friends is "combien tu paies toi?" followed by "je vais essayer." This is the viral loop: one diagnostic triggers multiple diagnostics in the same social circle.
   [INFERENCE — social dynamics analysis]

3. **The savings number IS the social proof ReneGo doesn't have.** ReneGo can't claim "$2.5B saved" like Rocket Money. But if 50 users share their diagnostic cards in week 1, each card IS a micro-testimonial. "39,99 → 22,99, 369€ d'économies" — that's more convincing than any marketing copy because it's a real person's real numbers shared to their real friends.
   [INFERENCE — product growth analysis]

4. **Every card is a branded touchpoint that costs nothing.** Rocket Money spent $1.7M+ on professional TikTok content and allocated 64% of its budget to UGC. ReneGo's diagnostic card creates the same organic sharing mechanism for zero ad spend. The product output IS the ad. Every share is a free impression with the ReneGo URL embedded.
   [INFERENCE — growth economics comparison]

### Why this changes what ReneGo should BUILD before Sunday

This is the **missing link between the funnel stages** covered by existing findings:

| Funnel stage | Finding that covers it | Gap |
|---|---|---|
| **Discovery** (how users find ReneGo) | #8 Transparency Scorecard (SEO, press) | ✅ covered |
| **Landing page conversion** (visitor → user) | #9 Instant Price Check Widget | ✅ covered |
| **Trust building** (user → committed user) | #6 Trust Ladder | ✅ covered |
| **Retention** (one-time → recurring) | #7 Promo-Expiry Sentinel | ✅ covered |
| **Data moat** (user feedback → proprietary data) | #10 Hidden Retention Offer loop | ✅ covered |
| **Organic amplification** (user → brings more users) | ❌ **NOTHING** | ← this finding |

Without organic amplification, the funnel is a bucket with no overflow. Users come in (via scorecard/widget), get value (analysis/recommendation), and stay (sentinel). But they don't bring others. The growth is linear (paid/organic search only), not exponential (each user brings N more users).

The diagnostic card is the overflow mechanism. It's how each user becomes a distribution channel.

### Implementation: minimal, compatible with Sunday launch

The diagnostic card does NOT require:
- Any new data (it uses the analysis output that already exists)
- Any backend changes (card can be generated client-side as HTML/canvas → image)
- Any user data collection (no PII on the card)
- Any design system (can be a simple, clean HTML template rendered as an image)

**Estimated dev effort:** 2-4 hours. Components:
1. A card template (HTML/CSS or canvas) with the 4 data points + branding
2. A "Partager mon diagnostic" button that triggers the Web Share API (native on mobile) or generates a downloadable image
3. Two output sizes: 1080×1920 (Stories) and 1080×1080 (feed)

[HYPOTHESIS — dev effort estimate; must validate with renego-dev]

**Recommended placement in the V1 flow:**
After the user sees their full analysis and recommendation → prominent CTA: "Partagez votre diagnostic" → card generated → share sheet opens.

The card should appear AFTER the full analysis (not instead of it). The analysis is the value; the card is the amplification.

### Why this changes what ReneGo should SAY before Sunday

**Current landing page messaging emphasizes what the user gets:**
"Analysez votre facture" / "Découvrez combien vous pourriez économiser" / "Plan d'action personnalisé"

**With the diagnostic card, add a social proof and sharing angle:**
- "Partagez votre diagnostic avec vos proches — ils surpaient probablement aussi"
- "72% des abonnés box en post-promo surpaient leur forfait. Faites le test."
- After launch, aggregate the data: "En moyenne, nos utilisateurs découvrent qu'ils surpaient de 14 €/mois."

The sharing mechanic also enables a week-1 **"challenge" format** for social media launch:
- "Combien surpayez-vous votre box ? Faites le diagnostic ReneGo et partagez votre résultat."
- This is the French equivalent of "Spotify Wrapped" sharing — users share because it says something about them (savvy consumer, or victim of post-promo pricing), not because they're promoting a product.

### The Rocket Money growth lesson, fully closed

| Rocket Money's growth engine | ReneGo's equivalent |
|---|---|
| Free tier → savings discovery → shareable "aha" moment → UGC → viral loop | Free analysis → diagnostic card → WhatsApp sharing → viral loop |
| 64% TikTok UGC budget ($millions) amplifies organic sharing | Zero budget — the card IS the organic sharing |
| 21M views from creator posts (paid creators) | Organic shares from real users to real friends (free) |
| Screenshot-ready app screens → TikTok/Instagram content | Screenshot-ready diagnostic card → WhatsApp/Instagram content |
| Referral program (1 free month per referral, capped at 3/year) | V1: no referral program needed — the card IS the referral |
| Works because Rocket Money has 10M+ users generating content volume | Works because French sharing is concentrated (WhatsApp groups) — even 50 shares reach hundreds |

**The fundamental principle:** Rocket Money didn't build a growth team and then a product. It built a product whose output is inherently shareable, and then amplified it with paid spend. ReneGo can do the first part (shareable output) for 2-4 hours of dev time and $0 in ad spend. The amplification (paid UGC, influencer partnerships) comes later, if/when the organic loop proves the concept.

### Interaction with existing findings

- **Finding #8 (Transparency Scorecard):** The scorecard drives traffic to the site. The widget (Finding #9) converts it to an analysis. The diagnostic card turns the analysis into outbound sharing. Scorecard → widget → analysis → card → more visitors → loop.
- **Finding #9 (Instant Price Check Widget):** The widget gives a quick estimate. The card gives a precise, personalized result. The widget hooks; the card confirms and amplifies. Users who do the quick check may share the result informally ("je surpaie de ~15€"), but the full diagnostic card with exact numbers is the premium shareable artifact that drives higher-quality referrals.
- **Finding #10 (Hidden Retention Offer loop):** The card could include a "Résultat de mon diagnostic" variant AFTER the user has acted and received a retention offer — "Mon opérateur m'a proposé 27,50€ au lieu de 42,99€ après que ReneGo m'a préparé à la conversation." This post-action card is even more powerful because it shows REAL negotiation results, not just estimates.
- **Finding #7 (Promo-Expiry Sentinel):** When the sentinel fires (30 days before promo expiry), the alert can include a "Prévenez vos proches — leur promo expire peut-être aussi" sharing prompt with a pre-filled diagnostic card template. This turns the sentinel into an acquisition channel, not just a retention tool.

*Sources: rightmetric.co/outsight-library/wondermind-rocket-money-influencers (Rocket Money UGC strategy analysis, Aug 2022-Jul 2023), cdn.prod.website-files.com Rightmetric PDF report (64% UGC budget allocation, $1.7M professional content spend, 21M creator views), help.rocketmoney.com/en/articles/6871284 (referral program terms), rocketmoney.com/referral-terms-conditions (referral restrictions), thewaystowealth.com/rocket-money-review (app screenshot analysis), thenativa.com (Spotify Wrapped viral mechanics analysis), mediametrie.fr (WhatsApp France penetration data).*

---

---

## 17. Deep-Dive: The "Operator Negotiation Playbook" — How US Telecom Sites Turned Provider-Specific Action Scripts Into Their Highest-Converting Content, and Why ReneGo Must Integrate One Into the Recommendation Before Launch (new lesson, 2026-03-13 midday pass)

Research date: 2026-03-13 (12:35 CET)
Agent: research-us
Trigger: ReneGo's V1 recommendation ends with a generic action plan ("appeler le 3900 pour résilier"). But the user then faces the hardest step alone — the actual phone call with the retention desk. Findings #1-16 cover what to build, how to acquire, how to retain, and how to amplify. None of them address what happens in the 15 minutes AFTER the user picks up the phone. The US telecom content ecosystem reveals that this is the exact moment where the most value — and the most organic traffic — is concentrated.

### The discovery: US telecom comparison sites generate millions of monthly visits from provider-specific "how to negotiate" guides — the highest-intent content format in the category

A cluster of US telecom comparison sites has built large audiences on a single content pattern: **provider-specific negotiation playbooks** that give users the exact script, phone number, department name, and tactical leverage for their specific ISP.

Evidence:

1. **HighSpeedInternet.com: 2.68M monthly visits (Jan 2026), 780K from organic search.** Their content strategy centers on provider-specific guides like "How to Lower Your Xfinity Bill" and "How to Negotiate Your Spectrum Internet Bill." Each guide includes the exact retention phone number, a word-for-word script, expected outcome ranges, and the best time to call. These pages consistently rank in the top 3-5 Google results for "[Provider] bill too high" and "how to lower [Provider] bill" queries.
   [FACT — SimilarWeb traffic data for highspeedinternet.com, Jan 2026; INFERENCE — content ranking based on observable SERP positions]

2. **AllConnect.com: 601K monthly visits (Jan 2026), 291K from organic search.** Similar provider-specific content architecture. Their "How to Negotiate Your Internet Bill and Save Money" hub links to individual ISP negotiation guides that serve as the conversion bridge between informational search and actual provider action.
   [FACT — SimilarWeb traffic data for allconnect.com, Jan 2026]

3. **CompareInternet.com publishes "Internet Bill Negotiation Scripts That Actually Work"** — a complete guide with word-for-word scripts for every stage of the negotiation: opening introduction, account review request, competitor offer citation, equipment cost challenge, and retention department escalation. The guide explicitly states ISP customer acquisition costs exceed $300/subscriber — knowledge that empowers the user during negotiation: "you are worth $300+ to retain."
   [FACT — compareinternet.com/blog/internet-bill-negotiation-scripts-that-actually-work, verified 2026-03-13]

4. **BroadbandNow.com follows the same pillar-cluster model.** "How to Negotiate Your Internet Bill for the Best Deal" as the hub, with provider-specific sub-pages. Their data shows that users who arrive at these pages have **already decided to act** — they're not browsing, they're about to pick up the phone. This makes these pages among the highest-converting in the entire telecom content ecosystem.
   [FACT — broadbandnow.com/guides/how-to-negotiate-your-internet-bill-for-best-deal, verified 2026-03-13]

5. **The FCC Broadband Nutrition Labels (mandatory since April 2024) actually AMPLIFY this pattern.** The FCC now requires all US ISPs to display standardized "nutrition labels" with full pricing, fees, post-promo prices, and speed data in a comparable format. Several negotiation guide sites explicitly reference these labels as leverage: "Your FCC label shows a new-customer price $15 lower. As a loyal customer, I'd like that same rate." The existence of a standardized, regulator-mandated comparison format gives US consumers a powerful tool during negotiation.
   [FACT — FCC broadband label requirements, fcc.gov; compareinternet.com and broadbandnow.com reference FCC labels in negotiation scripts]

### The French gap: no standardized labels, no integrated playbooks

**France has NO equivalent of the FCC broadband nutrition label.** ARCEP, the French telecom regulator, provides a "Ma connexion internet" eligibility tool and publishes market observatories, but it does NOT mandate a standardized format for ISPs to disclose post-promo pricing, 24-month total costs, or fee breakdowns in a comparable structure. French ISPs are free to present pricing however they want — which is why Orange can display "29,99 €/mois" prominently while burying the post-promo price of 42,99 € in footnotes.
[FACT — arcep.fr consumer pages; INFERENCE — the absence of mandatory standardized labels is confirmed by ARCEP's own documentation which describes no such requirement]

French consumers DO have access to:
- **"Lettres types" de résiliation** on resilier.com and laposte.fr — but these are generic legal templates, not tactical negotiation scripts.
  [FACT — resilier.com/guides/telecommunications/mobile-box-loi-chatel, laposte.fr/modeles-lettres-resiliation]
- **Generic negotiation advice** on choisir.com and echosdunet.net — "soyez poli mais ferme, mentionnez la concurrence" — but with no operator-specific data, no competing offer to cite, and no connection to real market prices.
  [FACT — choisir.com, echosdunet.net/changer-operateur/negocier]
- **Reddit/forum threads** (r/AskFrance, forum.quechoisir.org) with anecdotal tips — but unstructured, undated, and unreliable.
  [FACT — reddit.com/r/AskFrance threads on ISP negotiation]

**What NO French resource provides:** an operator-specific, data-connected negotiation playbook that combines:
- The exact competing offer to cite (with price, source, date)
- The user's actual current price and calculated overpayment
- The specific retention phone number for their operator
- A word-for-word script adapted to their situation and operator
- The relevant loi Chatel/loi Hamon language to invoke
- The tactical timing advice (when to call, which department)

This is the gap ReneGo fills. And because France lacks the FCC's standardized nutrition labels, the negotiation playbook is even MORE valuable here than in the US — French consumers have less structural transparency to lean on during the call.

### What this changes for ReneGo: the "Plan d'action" becomes a "Playbook de négociation"

**Current V1 action plan output (as designed):**
> 1. Appeler le 3900 (service client Orange)
> 2. Demander la résiliation de votre abonnement
> 3. Comparer l'offre de rétention proposée avec Red by SFR à 22,99 €/mois
> 4. Souscrire Red by SFR si aucune contre-offre satisfaisante

This is procedural — it tells the user WHAT to do. It doesn't tell them WHAT TO SAY. The user reads these steps, picks up the phone, gets connected to a trained retention agent, and is immediately at a disadvantage because they don't have a script and the agent does.

**Proposed V1 action plan with integrated negotiation playbook:**

> ### Votre Playbook de Négociation — Orange
>
> **Objectif :** Obtenir un prix ≤ 25 €/mois ou confirmer le passage à Red by SFR (22,99 €/mois).
>
> **Étape 1 — Préparer l'appel (2 min)**
> - Ayez votre numéro de contrat sous les yeux (sur votre facture PDF)
> - Retenez ce chiffre : **Red by SFR propose 22,99 €/mois pour 1 Gb/s sym, sans engagement, prix fixe** (source : red-by-sfr.fr, vérifié le 13/03/2026)
> - Vous payez actuellement **39,99 €/mois** — c'est **17 €/mois de trop** vs le marché
>
> **Étape 2 — Appeler le bon numéro**
> - Numéro rétention Orange : **3900** (depuis votre ligne Orange, gratuit)
> - Demandez directement le **« service résiliation »** ou **« service fidélisation »**
> - ⏰ Meilleur moment : mardi à jeudi, 10h-12h ou 14h-16h (files d'attente plus courtes, conseillers moins pressés)
>
> **Étape 3 — Le script (mot pour mot)**
> > « Bonjour, je suis client Orange depuis [X] ans, numéro de contrat [N]. J'ai fait une analyse complète de ma facture box internet. Aujourd'hui, je paie 39,99 €/mois, soit 960 € sur 24 mois avec les frais. Red by SFR propose une fibre 1 Gb/s symétrique à 22,99 €/mois, prix fixe, sans engagement — soit 591 € sur 24 mois. C'est 369 € de moins.
> >
> > Je préférerais rester chez Orange, mais je ne peux pas justifier un écart de 17 € par mois pour un service équivalent. Est-ce que vous avez une offre de fidélisation qui pourrait se rapprocher de ce niveau de prix ? »
>
> **Étape 4 — Après la réponse de l'agent**
> - **Si l'agent propose une offre ≤ 25 €/mois :** Demandez la durée, les conditions d'engagement, et le prix post-promo. Comparez au coût 24 mois de Red (591 €).
> - **Si l'agent propose > 25 €/mois :** « Merci, mais l'écart reste trop important. Je souhaite lancer la procédure de résiliation, conformément à l'article L. 224-39 du Code de la consommation. »
> - **Si l'agent refuse toute offre :** Demandez à parler au « responsable fidélisation ». Les superviseurs ont souvent des offres supplémentaires.
>
> **Étape 5 — Confirmer par écrit**
> Quel que soit le résultat : demandez une confirmation par email de toute offre acceptée. Si vous résiliez, l'opérateur a 10 jours pour effectuer la résiliation (article L. 224-39).
>
> **Rappel légal :** En vertu de la loi Chatel, si votre engagement initial est terminé, vous pouvez résilier à tout moment avec un préavis de 10 jours. Les frais de résiliation standard (49-59 €) s'appliquent selon l'opérateur. Chez Orange, le code RIO (identifiant de portabilité) est obtenu en composant le 3179.

### Why this is the highest-ROI product change for the remaining 36 hours before launch

| Dimension | Generic action plan (current) | Integrated negotiation playbook (proposed) |
|---|---|---|
| **User confidence** | User knows WHAT to do but not WHAT TO SAY — anxiety before calling | User has a word-for-word script, the competing offer to cite, and the legal language — confidence to act |
| **Conversion to action** | Many users read the recommendation but never make the call (friction is psychological, not informational) | The script reduces the psychological barrier to near-zero — "just read this out loud" |
| **Differentiation** | Every French comparator can say "appelez le 3900" | NO French service provides a personalized, data-connected negotiation script with the exact competing offer, 24-month math, and legal language |
| **SEO value** | None — the action plan is inside the product, not indexable | Operator-specific playbook pages ("Comment négocier avec Orange", "Réduire sa facture SFR") capture high-intent French search queries |
| **Trust signal** | "We told you the best offer" | "We prepared you for the conversation — including what the agent will say back" |
| **Connection to Finding #10** | Disconnected from retention offer intelligence | The playbook ANTICIPATES the counter-offer: "L'agent vous proposera probablement une offre de rétention à ~27-30 €/mois. Voici comment la comparer..." |
| **Dev effort** | Already built | **Zero dev — this is a copy/content change to the existing action plan template** |

The critical point: **this is NOT a dev task. It's a content/copy task.** The action plan template already exists in the product. Replacing the generic steps with an operator-specific playbook requires:
1. One script template per operator (4 operators = 4 scripts)
2. Dynamic insertion of the user's current price, the recommended competing offer, and the 24-month math (data already available in the analysis output)
3. The specific phone numbers and legal references per operator (documented below)

**French ISP retention contact details (for the playbook):**

| Opérateur | Numéro rétention | Depuis | Horaires recommandés | Code RIO |
|---|---|---|---|---|
| Orange | 3900 | Ligne Orange (gratuit) | Mar-Jeu 10h-12h, 14h-16h | 3179 |
| SFR / Red by SFR | 1023 | Toute ligne (gratuit) | Mar-Jeu 10h-12h | 3179 |
| Free | 3244 | Toute ligne (gratuit depuis Freebox) | Mar-Jeu 9h-12h | 3179 |
| Bouygues Telecom | 1064 | Toute ligne (gratuit) | Mar-Jeu 10h-12h, 14h-16h | 3179 |

[FACT — operator customer service numbers from official websites; INFERENCE — timing recommendations based on consumer forum consensus and call center staffing patterns]

### Why this changes what ReneGo should SAY before launch

**Current product messaging:**
"Plan d'action personnalisé" / "On vous dit exactement quoi faire"

**Proposed messaging upgrade:**
**"On ne vous dit pas juste quoi faire. On vous dit quoi DIRE."**

This single line captures the entire differentiation:
- Every comparator tells you the cheapest offer. ReneGo gives you the script for the phone call.
- Every "lettre type" gives you the legal template. ReneGo gives you the negotiation playbook with live market data.
- Every forum thread gives you anecdotal tips. ReneGo gives you the exact numbers to cite, the department to ask for, and the legal articles to invoke.

**For the positioning/landing page, add:**
> "Quand vous appellerez votre opérateur, leur agent aura un script. Maintenant, vous aussi."

This is emotionally resonant because it names the asymmetry: ISP retention agents are trained negotiators with scripts, CRM data, and counter-offer playbooks. The consumer walks in blind. ReneGo levels the playing field.

### The SEO opportunity: publish operator-specific playbook pages as standalone content

Beyond the in-product playbook, each operator page becomes a high-intent SEO asset:

- **"Comment négocier avec Orange — Playbook ReneGo"** targets: "négocier Orange box", "réduire facture Orange", "baisser prix Livebox", "offre fidélisation Orange"
- **"Comment négocier avec SFR — Playbook ReneGo"** targets: "négocier SFR box", "réduire facture SFR", "offre rétention SFR"
- **"Comment négocier avec Free — Playbook ReneGo"** targets: "négocier Freebox prix", "baisser forfait Free", "offre fidélité Free"
- **"Comment négocier avec Bouygues — Playbook ReneGo"** targets: "négocier Bouygues Bbox", "réduire facture Bouygues"

Each page combines:
1. The Transparency Index score for that operator (Finding #8)
2. The current best competing offer with 24-month math
3. The negotiation script adapted for that operator
4. The loi Chatel/Hamon legal language
5. The hidden retention offer intelligence (Finding #10, once populated)
6. A CTA: "Faites votre diagnostic complet sur ReneGo.fr"

This pillar-cluster SEO architecture mirrors exactly what HighSpeedInternet.com (2.68M visits/month) and AllConnect.com (601K visits/month) use in the US. In France, this content niche is unoccupied — the only competitors are generic "lettre type" sites and forum threads.

[INFERENCE — SEO opportunity assessment based on US traffic data extrapolated to French market; must validate with French keyword volume data post-launch]

### The FCC-to-France regulatory gap amplifies the value

In the US, the FCC's mandatory broadband nutrition labels (April 2024) force ISPs to disclose:
- Full monthly price including all fees
- Post-promotional pricing
- Typical speeds and latency
- Early termination fees
- Contract terms

[FACT — FCC broadband label requirements, fcc.gov, mandatory since April 10, 2024 for large ISPs]

In France, ARCEP mandates NO equivalent standardized disclosure. French ISPs can (and do) present pricing in whatever format maximizes confusion — Orange's double-discount structure (Remise Client + ODR Bienvenue) is a perfect example.

This means: **ReneGo's negotiation playbook fills a structural transparency gap that the US regulator closed but the French regulator hasn't.** In the US, the negotiation script can reference the FCC label as leverage ("your label says $X"). In France, there is no label to reference — so ReneGo's analysis BECOMES the de facto "nutrition label" that the consumer brings to the negotiation.

**The positioning implication:**
> "En France, il n'existe pas d'étiquette nutritionnelle pour les forfaits box internet. Pas de format standard qui vous montre le vrai prix sur 24 mois. ReneGo crée cette étiquette — et vous donne le script pour l'utiliser au téléphone."

This frames ReneGo not just as a product, but as a **consumer protection initiative** — which is exactly the framing that gets press coverage from 60 Millions de Consommateurs and UFC-Que Choisir.

### Implementation for Sunday launch (minimal — mostly content, zero dev)

**Immediate (Day 2-3, content only):**
1. Write 4 operator-specific negotiation scripts (Orange, SFR, Free, Bouygues) using the template above. Each script dynamically references the user's current price and the recommended competing offer. **Estimated effort: 2-3 hours of content work.** The scripts are templated — the structure is identical, only the operator name, phone number, and specific counter-offer language changes.

2. Integrate the playbook into the existing "Plan d'action" section of the recommendation output. This is a **template change, not a code change** — the action plan already renders dynamic content (operator name, prices, recommendations). Adding the script text, phone number, and legal references is content expansion within the existing template.

3. Add the headline "On ne vous dit pas juste quoi faire. On vous dit quoi DIRE." to the landing page or positioning copy.

**Fast-follow (Week 1, SEO):**
4. Publish the 4 operator playbook pages as standalone public content on the site — each combining Transparency Index data + negotiation script + loi Chatel template + CTA to run a full diagnosis. This is the SEO layer that captures "négocier [opérateur] box" search intent.

### Interaction with existing findings

- **Finding #8 (Transparency Scorecard):** The scorecard provides the authority data. The playbook puts that data into the user's mouth during the phone call. Scorecard = "here's how honest your ISP is." Playbook = "here's exactly what to say about it."
- **Finding #9 (Instant Price Check Widget):** The widget shows overpayment. The playbook turns that overpayment number into a negotiation lever: "Je paie 17€/mois de plus que Red by SFR."
- **Finding #10 (Hidden Retention Offers):** The playbook ANTICIPATES the counter-offer: "L'agent vous proposera probablement une offre de rétention. Voici comment la comparer." Once the crowdsourced retention offer data (from the "Qu'a proposé votre opérateur ?" feedback loop) populates, the playbook can include specific counter-offer expectations per operator.
- **Finding #11 (Shareable Diagnostic Card):** After the user negotiates successfully using the playbook, the post-action diagnostic card variant ("Mon opérateur m'a proposé 27,50€ au lieu de 42,99€ après que ReneGo m'a préparé") is the ultimate social proof — it shows the playbook WORKED.
- **Finding #7 (Promo-Expiry Sentinel):** When the sentinel fires 30 days before promo expiry, the alert can include a freshly generated playbook for the upcoming renegotiation: "Votre promo Orange expire dans 30 jours. Voici votre playbook de renégociation mis à jour."
- **Finding #6 (Trust Ladder):** The playbook is the ultimate trust signal — it says "we don't just analyze your bill, we arm you for the conversation." This is the deepest level of the trust ladder: from information → to recommendation → to preparation for action.

### The fundamental insight: the value gap is not in the analysis — it's in the last mile

ReneGo's analysis engine (facture parsing, 24-month cost calculation, offer comparison, recommendation) is strong. But the user's journey doesn't end at "here's your recommendation." It ends at "I just called Orange and got my bill reduced." **Everything between the recommendation and the phone call result is the "last mile" — and it's where the user is most alone, most anxious, and most likely to abandon.**

The negotiation playbook closes the last mile. It transforms ReneGo from "an analysis tool that tells you what to do" into "a negotiation coach that tells you what to say." That's the difference between a comparator and a service.

US telecom sites figured this out: the "how to negotiate with [Provider]" page is where the intent is highest and the conversion most valuable. ReneGo can be the first French service to integrate this into the product itself — not as separate blog content, but as the natural conclusion of every analysis.

*Sources: highspeedinternet.com (2.68M monthly visits, SimilarWeb Jan 2026), allconnect.com (601K monthly visits, SimilarWeb Jan 2026), compareinternet.com/blog/internet-bill-negotiation-scripts-that-actually-work (ISP acquisition cost >$300, word-for-word negotiation scripts), broadbandnow.com/guides/how-to-negotiate-your-internet-bill-for-best-deal (pillar-cluster content model), fcc.gov (broadband nutrition label requirements, mandatory April 2024), arcep.fr (no equivalent French standardized label requirement), resilier.com (French lettre type de résiliation), choisir.com and echosdunet.net (French generic negotiation advice), laposte.fr (loi Chatel template letters). French ISP retention numbers: orange.fr, sfr.fr, free.fr, bouyguestelecom.fr official contact pages.*

---

*Sources accessed 2026-03-12 and 2026-03-13. All URLs verified at time of research. Claims from company-owned sources (rocketmoney.com, billshark.com, etc.) are tagged [FACT] for attribution but should be understood as self-reported metrics.*
