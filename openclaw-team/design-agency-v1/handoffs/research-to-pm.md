# Research -> PM

Date: 2026-03-13

Decision required:

- build 4 variants around 4 different winning US patterns:
  - control center / recurring finance
  - concierge trust-first
  - observatory / proof-led
  - warm consumer conversion

New insight (2026-03-13 18:03):

- **Experian BillFixer** added to us-actors.md as actor #5.
  - Experian (Fortune 500 credit bureau) acquired BillFixer in 2022, now
    integrated into Premium membership at $24.99/mo.
  - Official page: $10M+ saved, 81% success rate, 200+ cancellable subs.
  - Key pattern: institutional trust + flat fee + "keep 100% of savings" removes
    both risk and fee anxiety. AutoFix re-negotiates automatically on expiry.
  - Design implication: ReneGo should frame itself with institutional-grade trust
    language. The "trusted brand embedding negotiation" model converts better
    than standalone tools. Consider a "you keep everything" fee model message
    even if the business model differs — transparency is the conversion lever.

New insight (2026-03-13 18:17):

- **Rocket Money fee transparency deep-dive** added to us-actors.md as actor #6.
  - Official help center confirms: 35%–60% of first year's annualized savings as
    the negotiation fee, charged only on success, with a 48-hour review window
    and flexible payment plans (weekly/bi-weekly/monthly up to 12 months).
  - Key finding: Rocket Money leads with "no savings, no fee" on its landing page
    but buries the actual percentage (35–60%) in help docs. This is the dominant
    US pattern: **promise clarity, defer cost details**.
  - Experian does the opposite: flat $24.99/mo = "keep 100% of savings" — no
    ambiguity.
  - Design implication for ALL 5 variants: add a **"conditions claires"
    micro-block** just above or beside the main CTA. French consumers (UFC-Que
    Choisir culture) expect upfront fee transparency more than US users do. Being
    more transparent than Rocket Money here is a genuine differentiator, not just
    a compliance checkbox.
  - Also clone: "aucune modification sans votre accord" guarantee (mirrors Rocket
    Money's "we never downgrade your plan" — a top fear-reduction lever).
  - Sources: help.rocketmoney.com (bill-negotiation-savings-process,
    bill-negotiation-charge-explained, why-use-our-negotiation-service)

New insight (2026-03-13 20:50):

- **Rocket Money user-controlled fee slider & dual onboarding** added to
  us-actors.md as actor #7.
  - Official help center confirms users **choose their own success fee between
    35% and 60%** — it's an active user choice, not a fixed rate. Worked example:
    "save $300/year, choose 40% → pay $120 one-time fee."
  - Two onboarding entry paths: connect provider credentials OR upload a photo of
    the billing statement. Multi-bill parallel submission supported.
  - Provider selection uses a curated list + "Can't Find Your Service" fallback.
  - **Design implication for ALL 5 variants**:
    1. Add a **"choisissez vos conditions" micro-interaction** before the mandat —
       letting users pick negotiation priorities, a service tier, or preferences
       creates ownership and reduces post-conversion regret. The principle:
       people value outcomes they feel they chose.
    2. **Dual entry path is critical for France**: bill upload should be at least
       as prominent as credential linking (GDPR culture, CNIL awareness).
       Privacy-cautious users are a larger segment in France than in the US.
    3. **Provider recognition list** (SFR, Free, Orange, EDF, Engie) visible
       near the CTA creates instant relevance ("they work with MY provider").
    4. Consider a visible "soumettre plusieurs factures" batch option to signal
       full financial-picture handling, not just one-off bill negotiation.
  - Sources: help.rocketmoney.com (how-to-submit-a-bill-negotiation,
    why-use-our-negotiation-service, bill-negotiation-savings-process)

Non-negotiables:

- promesse simple grand public;
- observatoire visible sans import;
- mandat et transparence tres lisibles;
- pas de branding trop "fintech generic";
- transparence sur les frais inspiree du modele "keep 100%" d'Experian;
- micro-bloc "conditions claires" pres du CTA principal sur chaque variante;
- garantie "aucune modification sans votre accord" visible dans le trust block;
- moment de controle utilisateur ("choisissez vos conditions") avant le mandat;
- double voie d'entree (identifiants OU import de facture) au meme niveau;
- liste de fournisseurs francais reconnaissables visible pres du CTA.
