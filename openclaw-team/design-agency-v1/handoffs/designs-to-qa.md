# Designs -> QA

Date: 2026-03-13 (updated 18:14)

## Status

All 5 variant prototypes are built and live in `public/design-lab/`:

| Variant | File | Pattern source |
|---------|------|----------------|
| A — OpenAI command center | `openai-command.html` | Recurring finance control center |
| B — Claude concierge | `claude-concierge.html` | Trust-first concierge |
| C — Google observatory | `google-observatory.html` | Proof-led observatory |
| D — Lovable warm consumer | `lovable-concierge.html` | Warm consumer conversion |
| E — US direct benchmark | `us-direct-benchmark.html` | Billshark / Rocket Money hybrid |

Hub: `index.html` links to all 5.

## Review Goals (DLAB-11)

For each variant, verify:

1. **Hero clarity** — Is the promise understandable in < 5 seconds?
2. **Trust layer credibility** — Do proof blocks, social proof, and mandate
   language feel real and non-geeky?
3. **Action flow quality** — Is the CTA low-friction? Is the step sequence
   logical and inviting?
4. **Observatory / proof presence** — Is transparent pricing or market data
   visible without user import?
5. **Grand public tone** — Would a non-tech consumer feel comfortable? No
   jargon, no fintech-bro energy?
6. **Launch-safe potential** — Could this ship publicly without legal, brand,
   or credibility risk?

### Scoring

Each axis: 0 (absent) to 5 (excellent). Total out of 30.

Deliver as a markdown table in a QA report file. Include:
- scores per variant per axis;
- one-line justification per cell;
- a leader recommendation and a backup;
- any blockers or must-fix items before a variant could go live.

## Clone-Adapt Check (DLAB-13)

Separately verify:
- no trademark borrowing from US actors (logos, names, taglines);
- no pixel-copied layouts;
- inspirations are structural, not literal;
- all copy is original and adapted to French consumer context.

## Screenshot Pack (DLAB-14)

Produce a mini set of side-by-side screenshots (or a single comparison HTML)
so the team can evaluate without opening 5 tabs.

## Next after QA

- DLAB-06 (PM): prioritize launch-safe variant based on QA scorecard.
- DLAB-12 (QA): formal recommendation.
- DLAB-03 (Research): can extract UI patterns retroactively from the built
  variants + US research — low priority, documentation-grade.
