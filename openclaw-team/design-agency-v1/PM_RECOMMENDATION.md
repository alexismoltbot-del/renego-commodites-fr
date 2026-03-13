# PM Recommendation — Evening Close

Date: 2026-03-13 20:42 CET
Owner: ReneGo Design PM

---

## Summary

Five variant prototypes live in `public/design-lab/`. QA scored them on a
100-point scorecard across 6 weighted axes. Three pass the retainable threshold
(80/100 + sub-thresholds on clarity, trust, and visual impact). Two don't.

## Verdict

| Role | Variant | Score | Why |
|------|---------|-------|-----|
| **Leader** | **B — Claude Concierge** | **92/100** | Strongest headline ("Vous mandatez. On renégocie. Vous gardez tout."), deepest trust architecture (confidence index, conditions claires, concierge timeline), warmest editorial tone (Newsreader serif + parchment palette). Only variant with zero blockers at prototype level. |
| **Backup** | **D — Lovable Warm Consumer** | **87/100** | Most consumer-friendly conversion funnel: FAQ objection-killing, warm emoji KPIs, "Commencer — c'est gratuit" CTA. Slightly less trust depth than B but better at preempting consumer fears. |
| Benchmark ref | E — US Direct | 64/100 | Structurally closest to Billshark/Rocket Money but too skeletal and has diacritics issues. Useful as a reference, not shippable. |

## What should ship into the live front next

**Start from Variant B (Claude Concierge) and cherry-pick three elements from
other variants before integration:**

1. **From C (Google Observatory):** the multicriteria scoring panel (prix pur /
   valeur d'usage / stabilité). B's proof section is a comparison table — adding
   a lightweight 2-axis scoring card would make the "why this recommendation"
   moment more convincing without adding density.

2. **From D (Lovable):** the FAQ/objections block. B has no objection-handling
   section. "C'est vraiment gratuit ?", "Et si je ne veux pas changer ?", "Mes
   données sont-elles en sécurité ?" — these 3–4 Q&As are conversion insurance
   that cost nothing to add.

3. **From D (Lovable):** the testimonial warmth. B has testimonials but they're
   more editorial. D's "cas illustratif" stories with relatable amounts (49 € →
   19 €) and life-moment framing hit harder emotionally.

**Do not bring:**
- A's dashboard density (overwhelms non-tech users)
- E's bare-bones structure (feels unfinished)
- C's filter chips (non-functional UI creates false expectations)

## Open items for next session

- [ ] DLAB-03 (Research): extract 8–12 reusable UI/conversion patterns from the
  built variants + US research — documentation-grade, not blocking
- [ ] DLAB-14: screenshot comparison pack — skipped tonight (browser unavailable),
  can be done next session
- [ ] Integration plan: define how B's prototype maps onto the live Nuxt/Vue
  codebase and what stays static vs dynamic

## Mandatory deliverables — status check

| Deliverable | Status |
|-------------|--------|
| 5 pages in `public/design-lab/` | ✅ All 6 files present (5 variants + hub) |
| Competitor → variant mapping | ✅ `COMPETITOR_TO_VARIANT_MAP.md` |
| Scorecard with leader | ✅ `DESIGN_SCORECARD.md` — B leads at 92/100 |
| PM recommendation | ✅ This file |

---

All gates from `TONIGHT_DELIVERY_PLAN.md` are met. The design lab sprint is
closed for the evening.
