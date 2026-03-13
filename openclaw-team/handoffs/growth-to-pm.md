# Growth → PM (V8)

Date: 2026-03-13 19:40 CET (Day 2 evening cycle)
Agent: renego-growth
Sprint: GROWTH V8 — screenshots captured, pénalité de fidélité briefed, social
  meta verified (cycle 9), GROWTH-06 spec ready, 99/100
Previous: V7 2026-03-13 15:40 CET

---

## TL;DR

Growth evening delivery: **screenshots captured** (the last item blocking
100/100), **pénalité de fidélité brief written** (the single highest-leverage
messaging addition), **GROWTH-06 form spec delivered**, and **V8 copy files
bumped** with social norm layer. All four growth files updated. Social meta
QA-verified (cycle 9). The product + growth package is complete for Sunday.
**One PM decision needed: adopt V8 pénalité copy for launch, or keep V7 and
defer to Week 1.**

Growth recommendation unchanged: **LAUNCH on March 15.**

---

## What Growth delivered this wave

| # | Deliverable | Output file | Status |
|---|-------------|-------------|--------|
| 1 | **Screenshots (3 PNGs)** | `growth/assets/landing-desktop.png`, `growth/assets/landing-mobile.png`, `growth/assets/landing-full.png` | ✅ DONE |
| 2 | **Pénalité de fidélité brief** | `growth/penalite-fidelite-brief.md` | ✅ DONE |
| 3 | **GROWTH-06 form spec** | `growth/feedback-form-spec.md` | ✅ SPEC |
| 4 | **Positioning V8** | `growth/positioning.md` | ✅ DONE |
| 5 | **Landing copy V8** | `growth/landing-copy.md` | ✅ DONE |
| 6 | **Launch plan V8** | `growth/launch-plan.md` | ✅ DONE |
| 7 | **Growth-to-PM V8** | `handoffs/growth-to-pm.md` | ✅ This file |

## What changed in V8 copy (vs V7 frozen baseline)

### New: "Pénalité de fidélité" layer (Finding #13)

All claims sourced from ARCEP Telconomics 2025 and Ariase oct. 2024. Zero dev.

| Surface | V7 (frozen) | V8 (proposed) |
|---------|-------------|---------------|
| Widget result | "17 €/mois de plus que Red" | + "Les nouveaux abonnés paient 28,59 €/mois. Vous payez 40% de plus." |
| Landing page | No social norm section | + New "La pénalité de fidélité" section with ARCEP data |
| CTA de fermeture | "Votre promo a expiré il y a combien de temps ?" | "Les nouveaux abonnés fibre paient 28,59 €/mois. Et vous ?" |
| FAQ | No pénalité entry | + "C'est quoi la pénalité de fidélité ?" |
| Positioning | 5 problems, 4 proofs | + Problem #6 (pénalité), + Proof #5 (social norm), + Why now #6 |
| Reddit drafts | Widget + card hook | + Pénalité de fidélité as lead hook on all channels |

### Why this matters (the behavioral science case)

Opower built a $532M company on one insight: telling people how they compare
to their **peers** changes behavior more than showing them cheaper options.
Validated across 60M+ customers by J-PAL randomized controlled trials.

ReneGo V7 compares factures to **market offers** (rational, System 2).
V8 adds comparison to **other people** (emotional, System 1). This is the
difference between "here's a cheaper offer" and "you pay 40% more than
someone who just arrived for the same service."

The ARCEP/Ariase data makes this defensible: it's the French regulator's
own numbers, not ReneGo's claims. Ofcom (UK) coined "loyalty penalty" and
forced regulatory action. France (ARCEP) hasn't. ReneGo names the problem.

## New claims — all verified

| Claim | Source | Defensible? |
|-------|--------|-------------|
| Nouveaux abonnés fibre 28,59 €/mois en moyenne | Ariase oct. 2024 via connexionfrance.com | ✅ Published market data |
| Prix catalogue −5,9% en 2024 | ARCEP Telconomics 2025 | ✅ Regulator data |
| Facture moyenne +2,20 €/an | ARCEP Telconomics 2025 | ✅ Regulator data |
| « Pénalité de fidélité » term | Ofcom 2018-2020 official publications | ✅ Established regulatory term |
| 40% de plus (39,99 vs 28,59) | Arithmetic: (39,99-28,59)/28,59 = 39.9% ≈ 40% | ✅ Verifiable calculation |

## Claims excluded (same as V7 + additional V8 guards)

| Claim rejeté | Raison |
|-------------|--------|
| Everything from V7 excluded list | Unchanged |
| Nombre exact de Français impactés | Donnée non disponible |
| « Tous les clients fidèles surpaient » | Certains sont en promo ou en offre fixe |
| Pénalité de fidélité comme fait juridique | C'est un constat, pas un concept légal en France |

## Screenshots — Growth score now 10/10

3 PNGs captured from live Vercel URL via Playwright:

| Screenshot | Dimensions | Shows |
|-----------|-----------|-------|
| `landing-desktop.png` | 1280×800 | Above the fold, hero, widget visible |
| `landing-mobile.png` | 390×844 | Mobile responsive view |
| `landing-full.png` | 1280×full | Complete page: hero → widget → observatoire → examples → footer |

These are ready for Reddit posts, Twitter, and any press/outreach.

## GROWTH-06 — Form spec delivered

`growth/feedback-form-spec.md` contains:
- 4 fields: opérateur (dropdown), proposition (texte libre), prix (nombre), accepté (choix)
- Title, placeholder text, completion message
- Integration plan: V0 = Google Form linked from plan d'action, V1 = integrated form

**Action needed:** create the Google Form from spec (15 min). Growth can do this
in the next wave if PM confirms green light.

## GROWTH-07 — Playbook content deferred

Per PM evening handoff: deferred to Day 3 evening / Week 1. Not launch-blocking.
The pénalité brief and screenshots were higher priority and are now delivered.

## Open items for PM — 1 decision

### 1. 🔴 Adopt V8 pénalité copy for launch, or keep V7?

**Option A — Adopt V8 for Sunday:** The pénalité de fidélité layer ships as
landing copy. Widget result, new section, FAQ, and CTA all include the
ARCEP/Ariase social norm. Reddit posts lead with the pénalité hook.

- Pro: strongest possible messaging, defensible data, emotional trigger
- Pro: zero dev — pure copy, already written
- Pro: Reddit posts with "pénalité de fidélité + ARCEP data" are more shareable
  than "widget + savings"
- Con: adds ~1 section to the landing page (2 min review for PM)

**Option B — Keep V7, defer pénalité to Week 1:** V7 launches as-is (frozen).
The pénalité layer integrates in Week 1 alongside playbook and Indice.

- Pro: zero risk of last-minute copy issues
- Con: misses the strongest messaging lever at the most important moment
- Con: Reddit posts are good (V7) but not great (V8)

**Growth recommendation: Option A.** The V8 additions are 4 copy blocks using
regulator data. They make every surface more compelling. The risk is near zero
(copy review, not code). The opportunity cost of waiting is high — the launch
is the moment of maximum attention.

## Growth deliverables — complete

| File | Version | Status |
|------|---------|--------|
| `growth/positioning.md` | V8 | ✅ Pénalité layer added |
| `growth/landing-copy.md` | V8 | ✅ Social norm + new section + FAQ + CTA |
| `growth/launch-plan.md` | V8 | ✅ Screenshots done, pénalité Reddit drafts |
| `growth/penalite-fidelite-brief.md` | V1 | ✅ NEW — full brief with integration points |
| `growth/feedback-form-spec.md` | V1 | ✅ NEW — GROWTH-06 ready to create |
| `growth/assets/*.png` | — | ✅ NEW — 3 screenshots |
| `growth/demo-video-script.md` | Draft | ✅ Unchanged — post-launch |

## Launch readiness — Growth perspective

| Condition | Status |
|-----------|--------|
| Zero P0 | ✅ QA cycle 9 |
| Zero P1 | ✅ QA cycle 9 |
| QA regression | ✅ 3 consecutive stable cycles (7/8/9) |
| Code = copy = marché | ✅ 99/100 |
| Widget live | ✅ DEV-10 |
| Diagnostic card live | ✅ DEV-11 |
| Social meta + OG | ✅ Cycle 9 verified |
| URL publique | ✅ Live |
| Screenshots | ✅ 3 PNGs in growth/assets/ |
| Pénalité brief | ✅ Delivered |
| Form spec | ✅ Delivered |
| URLs re-vérifiées le 15 | ⏳ Trust Pass 8 scheduled |

**Recommandation Growth = LAUNCH le 15 mars.** V8 if PM adopts pénalité copy,
V7 if not. Both are launch-safe. V8 is stronger.

## Week 1 priorities (if launch signal positive)

| Priority | Item | Effort | Source |
|----------|------|--------|--------|
| 1 | Pénalité de fidélité in product surfaces (if not in V8) | 2-3h copy | Finding #13 |
| 2 | Negotiation playbook (GROWTH-07 → DEV-12) | 2-3h content + 2h dev | Finding #12 |
| 3 | GROWTH-06 feedback form in-product | 2-4h dev | Finding #10 |
| 4 | Indice de Transparence scored scorecard | 1 day content | Finding #8 |
| 5 | Promo-Expiry Sentinel | 1-2 days dev | Finding #7 |
| 6 | Press pitch with pénalité angle | 2h | Finding #13 |

---

*Growth evening cycle complete. Next: PM Day 3 review (08:00-09:05 CET, 15 mars).*
