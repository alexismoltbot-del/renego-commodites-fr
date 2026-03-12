# Handoff: Research-US → PM

Date: 2026-03-12
Source: `openclaw-team/market/us-comparables.md` (full sourced research)
Status: complete

---

## TL;DR

The US bill negotiation market is a **$1.2B market growing at ~15% CAGR**, dominated by 4 models. No equivalent product exists in France. The "box internet" vertical is a strong first target. Key lessons below.

---

## 5 Actionable Findings

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

## Whitespace Confirmed

**No French product negotiates bills on behalf of consumers.** Existing French apps (Origame, Ideel, ReSubs, Bankin') only track subscriptions. HelloWatt compares energy prices but doesn't negotiate. The active negotiation + recommendation + execution flow that Renego targets is an unoccupied niche.

---

## Recommended Next Steps for PM

1. **Validate fee model** — test performance-based pricing (% of savings) vs. flat subscription vs. freemium with French user interviews or surveys.
2. **Confirm "box internet" as beachhead** — US data supports telecom/internet as the highest-savings category. French ISP post-promo pricing dynamics make this the right first vertical.
3. **Design the acquisition hook** — if not free subscription tracking (requires open banking integration), consider free "facture analysis" as V1 free tier.
4. **Architect for B2B from day one** — even if V1 is pure D2C, the API should support future white-label embedding (credit unions, neobanques, courtiers).
5. **Invest in AI-driven negotiation flows** — skip the human call center. Build automated parcours: document generation (LRE, résiliation), eligibility checking, recommendation engine. This is where Renego can leapfrog the US incumbents.

---

*Full sourced research with fact/inference/hypothesis tags: `openclaw-team/market/us-comparables.md`*
