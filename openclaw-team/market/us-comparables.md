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

*Sources accessed 2026-03-12. All URLs verified at time of research. Claims from company-owned sources (rocketmoney.com, billshark.com, etc.) are tagged [FACT] for attribution but should be understood as self-reported metrics.*
