# US Actors - ReneGo Design Research

Date: 2026-03-13
Scope: recurring bills, bill negotiation, subscription/bill management

## Shortlist

### 1. Rocket Money

- Type: consumer finance app with bill negotiation concierge
- Why it matters:
  - official site says **over 5 million members**
  - official site says **$2.5 billion in savings**
  - App Store page shows **329K ratings at 4.5**
- Relevant patterns:
  - one clear hero promise around "save more, spend less"
  - very visible "lower bills" wedge inside a broader finance control center
  - repeated proof blocks, app screenshots, recurring tab / calendar framing
  - concierge angle without hiding the app layer
- Sources:
  - https://www.rocketmoney.com/
  - https://www.rocketmoney.com/lower-bills
  - https://apps.apple.com/us/app/rocket-money-bills-budgets/id1130616675
  - https://help.rocketmoney.com/en/articles/9744501-bill-negotiation-savings-process

### 2. Billshark

- Type: done-for-you bill negotiation specialist
- Why it matters:
  - official homepage says **millions saved for customers**
  - official homepage says **Mark Cuban backed**
  - official homepage says **4.8 Google Reviews**
  - explicit white-label / API story for partners
- Relevant patterns:
  - ultra-simple 2-step flow
  - concierge and SMS updates are above the fold
  - "no savings, no fee" creates immediate clarity
  - trust comes from press logos, backing, and outcome promises
- Sources:
  - https://www.billshark.com/
  - https://www.billshark.com/blogs/announcing-billshark-api-connect

### 3. Trim by OneMain

- Type: subscription and savings assistant with broad consumer adoption
- Why it matters:
  - official site says **3 million+ members**
  - official site says **4.2 stars (1K+ ratings)**
  - official site still leads with savings automation and recurring discovery
- Relevant patterns:
  - lightweight signup and "automagically" tone
  - strong trust and friction reduction in the hero
  - web-first landing language more direct than mobile-only apps
- Sources:
  - https://www.asktrim.com/
  - https://www.asktrim.com/faq

### 4. Hiatus

- Type: adjacent all-in-one bills/subscriptions app with concierge negotiation
- Why it matters:
  - direct messaging on comparing rates, negotiating bills, and canceling
  - still useful as a design comparable even if success metrics are lighter
- Relevant patterns:
  - "all-in-one finance and bill management tool"
  - emphasis on recurring organization before negotiation
  - testimonials tied to concrete life moments
- Sources:
  - https://hiatusapp.com/
  - https://apps.apple.com/us/app/hiatus-subscriptions-bills/id977040079

### 5. Experian BillFixer

- Type: bill negotiation + subscription cancellation embedded in a credit bureau premium membership
- Why it matters:
  - official product page says **$10+ million saved on everyday bills**
  - official product page says **negotiators can lower 81% of bills**
  - official product page says **cancel over 200+ subscriptions**
  - Experian acquired BillFixer in 2022 and integrated it into Premium ($24.99/mo)
  - Experian FY2025 Annual Report confirms "millions of dollars" saved for consumers through negotiation and cancellation features
  - AutoFix feature: automatically renegotiates bills when savings expire
- Relevant patterns:
  - bill negotiation embedded inside a trusted financial brand, not a standalone app
  - flat subscription model: customer keeps 100% of savings (no percentage fee)
  - "connect your bank → we find savings" discovery flow reduces user effort
  - three pillars above the fold: lower bills, cancel subscriptions, see spending
  - institutional trust (credit bureau) as the primary conversion lever
  - concierge framing ("let our experts negotiate") paired with automation ("AutoFix")
- Sources:
  - https://www.experian.com/money/manage-bills-subscriptions/
  - https://www.experian.com/blogs/ask-experian/how-to-negotiate-bills-with-experian-billfixer/
  - https://www.experianplc.com/content/dam/marketing/global/plc/en/assets/documents/reports/2025/experian-annual-report-2025.pdf

### 6. Rocket Money — Fee Transparency as Conversion UX (deep-dive)

- Type: pricing and post-negotiation UX pattern from the market leader
- Why it matters:
  - official help center confirms **35%–60% of first year's annualized savings**
    as the negotiation fee
  - fee is charged **only on success** ("no savings, no fee")
  - **48-hour review window** after success before the fee is applied
  - payment plans available: weekly, bi-weekly, or monthly (up to 12 months)
  - **"We will never downgrade your plan or remove features without your
    approval"** — explicit guarantee in the negotiation flow
  - email notification with subject "Negotiation Success" before any charge
- Relevant patterns:
  - **"No savings, no fee" is stated upfront** but the exact percentage
    (35–60%) is buried in help docs — not in the hero or landing page
  - the post-success flow is designed to feel collaborative, not extractive:
    review window → email summary → flexible payment → charge
  - the "never downgrade" guarantee works as a **fear-reduction lever**,
    addressing the #1 consumer objection ("will they mess up my plan?")
  - contrast with Experian: flat $24.99/mo = "keep 100% of savings" clarity,
    vs Rocket Money's sliding % that consumers can't predict in advance
  - contrast with Billshark: also success-fee, but emphasizes "no savings, no
    fee" more prominently above the fold
- Design implication for clone-adapt:
  - every variant should include a **"conditions claires" micro-block** near the
    main CTA that addresses fee anxiety before the user commits
  - the French market is especially sensitive to hidden fees (cf. UFC-Que
    Choisir culture) — being more transparent than the US leaders is a real
    competitive advantage
  - the "never downgrade" guarantee should be adapted as a "mandat transparent,
    aucune modification sans votre accord" trust signal
  - the 48-hour review window pattern can be cloned as a "vérifiez avant de
    payer" moment in the ReneGo flow
- Sources:
  - https://help.rocketmoney.com/en/articles/9744501-bill-negotiation-savings-process
  - https://help.rocketmoney.com/en/articles/9744474-bill-negotiation-charge-explained
  - https://help.rocketmoney.com/en/articles/9744575-why-use-our-negotiation-service

### 7. Rocket Money — User-Controlled Fee Slider & Dual Onboarding Path (deep-dive)

- Type: conversion UX pattern from the bill negotiation submission flow
- Why it matters:
  - official help center confirms users **choose their own success fee between
    35% and 60%** of first-year annualized savings — this is not a fixed rate
    imposed by Rocket Money but an **active user choice**
  - official help center gives a worked example: "if we save you $300/year and
    you choose 40%, you'll pay a one-time fee of $120"
  - two onboarding entry paths exist side by side: **connect provider credentials**
    or **upload a photo of billing statement** — privacy-conscious users get a
    lower-friction alternative
  - users can **submit multiple bills for negotiation simultaneously**, each
    handled separately with individual success fees
  - provider selection uses a **curated list with a "Can't Find Your Service"
    fallback** at the bottom, capturing long-tail providers
- Relevant patterns:
  - **user-controlled fee slider as conversion lever**: letting the user "choose"
    the percentage creates a sense of agency and reduces fee resentment ("I chose
    this" vs "they charged me this"). It also works as a commitment device —
    active choice deepens psychological buy-in before the negotiation begins
  - **anchoring effect**: the 35% minimum makes any choice within the range feel
    like a "deal", since the user perceives they could have paid up to 60%
  - **dual entry path reduces friction**: credentials = higher-value data capture
    but higher user reluctance; photo upload = lower barrier, especially for
    privacy-first users. Offering both maximizes conversion across user segments
  - **multi-bill parallel submission** reinforces the "control center" metaphor —
    not a one-off action but a batch operation across your financial life
  - **provider list + fallback** UX avoids dead ends: curated names create
    familiarity ("they know my provider"), while the fallback catches everyone else
- Design implication for clone-adapt:
  - **"Choisissez vos conditions" micro-interaction**: even if ReneGo's business
    model differs, giving users a visible moment of control over their engagement
    terms (e.g., choosing negotiation priorities, selecting a service tier, or
    setting preferences before the mandat) can dramatically improve conversion
    and reduce post-purchase regret. The psychological principle: people value
    outcomes they feel they chose, even when the options are structurally similar
  - **dual entry path is critical for France**: French users are more reluctant
    to share service provider credentials (GDPR culture, CNIL awareness, general
    distrust of credential delegation). The "upload your bill" alternative should
    be at least as prominent as credential-based linking — possibly more so. This
    directly affects trust-block design in all 5 variants
  - **provider recognition list**: showing familiar French providers (SFR, Free,
    Orange, EDF, Engie, etc.) in a curated list above the fold creates instant
    relevance ("they work with MY provider") — a small UX element with outsized
    trust impact
  - consider a "soumettre plusieurs factures" batch option visible early in the
    flow to signal that ReneGo handles the user's full financial picture, not
    just one bill at a time
- Sources:
  - https://help.rocketmoney.com/en/articles/9744564-how-to-submit-a-bill-negotiation
  - https://help.rocketmoney.com/en/articles/9744575-why-use-our-negotiation-service
  - https://help.rocketmoney.com/en/articles/9744501-bill-negotiation-savings-process

## What seems to work in the US

1. Lead with a plain-English consumer outcome, not a technical capability.
2. Show a concierge motion early: "we do it for you" reduces fear.
3. Pair savings proof with a recurring-bills control center or observatory.
4. Keep the first CTA low-friction: check, upload, connect, or see your bills.
5. Use trust layers everywhere: ratings, media, backing, security, app visuals.
6. Separate the "save money" wedge from the rest of the product, but keep it in
   a broader financial-control story.
7. Institutional trust amplifies conversion: Experian embedding negotiation in a
   credit bureau context shows that trusted-brand framing beats standalone tools
   for consumer adoption. The 81% success rate and "keep 100%" model removes
   both risk and fee anxiety.
8. User agency in pricing is a conversion multiplier: Rocket Money lets users
   choose their own success fee (35–60%), turning a cost into an active decision.
   This reduces fee resentment and increases commitment. The pattern generalizes:
   giving users visible control over terms — even within a constrained range —
   converts better than imposing fixed conditions.
9. Dual entry paths maximize coverage: credentials for high-intent users, bill
   upload for privacy-cautious ones. Offering both side by side avoids losing
   either segment at the funnel entrance.
10. Fee transparency is the hidden conversion battleground: Rocket Money buries
   its 35–60% fee in help docs while leading with "no savings, no fee";
   Experian's flat-rate model lets users keep 100%. The US market splits into
   "success fee hidden" vs "flat fee visible" — and the flat-fee framing
   generates stronger trust signals. For France, being upfront about conditions
   before the CTA (not after) is both a cultural expectation and a differentiator.

## Implications for ReneGo

- ReneGo should not feel like a PDF tool first.
- The best hero story is outcome + mandate + transparent recommendation.
- The observatory is a proof asset and should be visible without upload.
- A launch-safe version can still feel premium if it combines:
  - concierge trust,
  - transparent scoring,
  - concrete savings examples,
  - public market proof.
- Experian's move validates the category at enterprise scale: ReneGo should lean
  into institutional-grade trust language and "keep 100% of your savings" clarity
  to compete with both startups and incumbents entering the space.
- Fee transparency near the CTA is a must: Rocket Money's model shows that even
  the US market leader hides the real cost (35–60%). ReneGo can differentiate by
  placing a clear, simple "conditions claires" block before the main CTA —
  addressing fee anxiety before conversion rather than after. This aligns with
  French consumer expectations (UFC-Que Choisir culture) and should be reflected
  in all five variants as a trust micro-block.
- User agency converts: Rocket Money's user-controlled fee slider proves that
  giving users a choice — even within a bounded range — increases conversion and
  reduces regret. ReneGo should include a "choisissez vos conditions" moment
  (negotiation priorities, service tier, or preferences) before the mandat to
  create ownership of the process. Combined with a dual entry path (credentials
  OR bill upload) and a visible provider list (SFR, Free, Orange, EDF…), this
  creates an onboarding funnel that feels collaborative rather than extractive.
  All 5 variants should reflect this: the CTA leads to a moment of user control,
  not a black-box handoff.
