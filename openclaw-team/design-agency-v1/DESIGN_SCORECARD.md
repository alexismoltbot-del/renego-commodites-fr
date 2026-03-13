# Design Scorecard

Date: 2026-03-13 20:09 CET
Owner: Design QA Agent (renego-design-qa)

## Criteria

| Critere | Poids | OpenAI (A) | Claude (B) | Google (C) | Lovable (D) | US Direct (E) |
|---------|-------|------------|------------|------------|-------------|----------------|
| Clarte de la promesse | 20 | 15 | **19** | 16 | 18 | 14 |
| Credibilite trust / mandat | 20 | 16 | **19** | 18 | 17 | 12 |
| Impact visuel / memorisation | 15 | 13 | **14** | 12 | 13 | 8 |
| Qualite des preuves / observatoire | 15 | 12 | 12 | **15** | 11 | 8 |
| Simplicite du flow grand public | 15 | 10 | **14** | 11 | **14** | 12 |
| Conversion hero + CTA | 15 | 12 | **14** | 12 | **14** | 10 |
| **Total /100** | **100** | **78** | **92** | **84** | **87** | **64** |

### Per-Cell Justifications

#### Variant A — OpenAI Command Center

| Critere | Score | Justification |
|---------|-------|---------------|
| Clarte promesse | 15/20 | "Le verdict est net" is sharp but the command-center framing reads techy; needs a second beat to land for grand public |
| Trust / mandat | 16/20 | Full conditions-claires block, mandate cards and trust checklist present; operator-grade feel adds credibility but can feel cold |
| Visuel | 13/15 | Dark theme is the most distinctive and memorable palette of the five; professional and premium |
| Preuves | 12/15 | Solid comparison table with cost bars, KPIs with 6 offers; observatory is secondary to the dashboard narrative |
| Simplicite | 10/15 | Dense dashboard layout, small type, many KPI tiles — non-tech users may feel they walked into a trading terminal |
| CTA | 12/15 | "Lancer le diagnostic" is clear but surrounded by density that dilutes urgency; secondary CTA present |

#### Variant B — Claude Concierge

| Critere | Score | Justification |
|---------|-------|---------------|
| Clarte promesse | 19/20 | "Vous mandatez. On renégocie. Vous gardez tout." — best headline of the five: three verbs, zero ambiguity, instant comprehension |
| Trust / mandat | 19/20 | Concierge timeline showing live progress, confidence index bar, "Recommandation ≠ vente" signal, full mandate section — deepest trust architecture |
| Visuel | 14/15 | Warm parchment palette + Newsreader serif = editorial premium feel; distinctive without being flashy; very memorable |
| Preuves | 12/15 | Comparison table, savings card with sourced data, trust bar; observatory isn't the hero but proof is present and credible |
| Simplicite | 14/15 | Language is genuinely human and jargon-free; concierge metaphor is universally understood; flow reads like a conversation |
| CTA | 14/15 | "Lancer mon diagnostic gratuit" + "Voir comment ça marche" — perfect dual-CTA; clean hero with breathing room |

#### Variant C — Google Observatory

| Critere | Score | Justification |
|---------|-------|---------------|
| Clarte promesse | 16/20 | "Les prix se voient. Le raisonnement se prouve." — intellectually elegant but requires a half-beat of parsing; more cerebral than visceral |
| Trust / mandat | 18/20 | Strongest proof infrastructure: live market snapshot, multicriteria scoring with visible weights, interpretation band, full mandate section |
| Visuel | 12/15 | Clean Material-ish design, professional; but could be "any SaaS dashboard" — less personality than B or D |
| Preuves | 15/15 | Best observatory by far: bar charts, 2-axis scoring (prix pur / valeur), date stamps, legends, filter chips — proof-first and proud of it |
| Simplicite | 11/15 | Filter chips, scoring panels, and two data tables are power-user friendly but may overwhelm casual consumers; data density is a double edge |
| CTA | 12/15 | "Lancer un diagnostic gratuit" + "Explorer l'observatoire" — the secondary CTA invites browsing, which may delay conversion |

#### Variant D — Lovable Warm Consumer

| Critere | Score | Justification |
|---------|-------|---------------|
| Clarte promesse | 18/20 | "Vous nous donnez mandat. On fait baisser la facture." — direct, emotional, consumer-pitched; nearly as strong as B but slightly less poetic |
| Trust / mandat | 17/20 | Good trust checklist, FAQ section preemptively answers objections (excellent pattern), mandate cards present; slightly less deep than B or C |
| Visuel | 13/15 | Warm coral/peach/plum palette is distinctive and approachable; Fraunces serif adds personality; promise band in plum is striking |
| Preuves | 11/15 | Comparison table and social proof cards are present but emoji-led KPIs feel lighter than hard data; observatory concept is less prominent |
| Simplicite | 14/15 | Most consumer-friendly: "4 étapes, zéro prise de tête", FAQ in plain language, testimonials with relatable stories; warmest tone |
| CTA | 14/15 | "Commencer — c'est gratuit" is the most conversion-optimized CTA text; plum button high-contrast; final CTA with reassurance dots is excellent |

#### Variant E — US Direct Benchmark

| Critere | Score | Justification |
|---------|-------|---------------|
| Clarte promesse | 14/20 | Headline is direct but bare; missing diacritics throughout ("marche", "operateur", "economises") hurt perceived quality and professionalism |
| Trust / mandat | 12/20 | Only three stat cards; no detailed trust checklist, no mandate section in depth; the "proof" section is meta-commentary about design choices, not product proof |
| Visuel | 8/15 | Clean and functional but feels rushed rather than deliberately minimal; lime accent is good but overall lacks the polish of A-D |
| Preuves | 8/15 | Minimal: one example box with text, no table, no scoring, no observatory, no comparison data structure |
| Simplicite | 12/15 | Very simple 4-step flow that's easy to grasp; simplicity is a strength but crosses into "too little to persuade" territory |
| CTA | 10/15 | Single CTA "Tester ReneGo" is direct but lacks the emotional hooks, secondary actions, and proof proximity that drive conversion |

---

## Clone-Adapt Compliance (DLAB-13)

| Check | A | B | C | D | E |
|-------|---|---|---|---|---|
| No trademark/logo borrowing | ✅ | ✅ | ✅ | ✅ | ✅ |
| No pixel-copied layouts | ✅ | ✅ | ✅ | ✅ | ✅ |
| Inspirations are structural not literal | ✅ | ✅ | ✅ | ✅ | ✅ |
| All copy original + FR adapted | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| No invented social proof | ✅ | ✅ | ✅ | ⚠️ | ✅ |

Notes:
- **Variant E:** Missing diacritics throughout the French copy ("marche", "operateur", "demarches", "economises", "datees"). Must be fixed before any public use.
- **Variant D:** Testimonials from "Isabelle", "Marc", "Sarah" are labeled "Cas illustratif" — this is honest and good practice. But the first testimonial ("49 € → 19 €") with "– 720 € sur 24 mois" uses a different scenario than the hero savings example (39,99 → 24,61); this is fine for illustration but should be noted.
- All five variants pass the clone-adapt framework on structural inspiration. None reproduce US actor branding, taglines, or visual identity.

---

## QA Mandatory Questions (from CLONE_ADAPT_FRAMEWORK.md)

| Question | A | B | C | D | E |
|----------|---|---|---|---|---|
| Hero looks like a launchable product? | ✅ Yes, premium | ✅ Best launch feel | ✅ Yes, credible | ✅ Yes, warm | ⚠️ Too skeletal |
| Design has a distinct personality? | ✅ Dark ops | ✅ Editorial warmth | ⚠️ Borderline generic | ✅ Warm consumer | ❌ Generic |
| Mandate/transparency readable without jargon? | ✅ | ✅ Best | ✅ | ✅ | ⚠️ Too brief |
| Market proof visible early enough? | ✅ Hero panel | ✅ Hero card | ✅ Hero observatory | ✅ Hero card | ⚠️ Only text |
| Could rival a US actor visually? | ✅ | ✅ Best | ✅ | ✅ | ❌ Not yet |

---

## Threshold Check (from CLONE_ADAPT_FRAMEWORK.md)

Minimum retainable: 80/100 total, 16/20 clarity, 16/20 trust, 12/15 visual.

| Variant | Total ≥ 80 | Clarity ≥ 16 | Trust ≥ 16 | Visual ≥ 12 | **Retainable?** |
|---------|-----------|-------------|-----------|-----------|-----------------|
| A — OpenAI | 78 ❌ | 15 ❌ | 16 ✅ | 13 ✅ | **No** — needs clarity + flow rework |
| B — Claude | 92 ✅ | 19 ✅ | 19 ✅ | 14 ✅ | **Yes — LEADER** |
| C — Google | 84 ✅ | 16 ✅ | 18 ✅ | 12 ✅ | **Yes — retainable** |
| D — Lovable | 87 ✅ | 18 ✅ | 17 ✅ | 13 ✅ | **Yes — BACKUP** |
| E — US Direct | 64 ❌ | 14 ❌ | 12 ❌ | 8 ❌ | **No** — needs major rework |

---

## Blockers & Must-Fix Items

### Before any variant could go live:

**Variant E (critical):**
- Fix all missing diacritics in French copy (accents on é, è, ê throughout)
- Add a real comparison table with data structure (not just text)
- Add a proper trust/mandate section with depth
- Add conditions-claires block near CTA
- Currently 36 points below threshold — needs near-complete redesign to be viable

**Variant A (moderate):**
- Simplify hero messaging: "Le verdict est net" → something more consumer-accessible
- Reduce dashboard density in first viewport; move KPI tiles below fold
- Add more breathing room around CTA
- 2 points below threshold — targeted fixes could bring it to retainable

**Variant C (minor):**
- Consider a warmer headline variant that's less cerebral
- The filter chips row (Fibre seule, Fibre + TV, etc.) is aspirational UI for a static page — either make them functional or remove to avoid "clickbait" feel

**Variant D (minor):**
- Social proof KPI cards (204 €, 6, 100 %, 0 €) duplicate info already in the hero — consider differentiating
- Testimonial section is strong but ensure "cas illustratif" labeling is prominent enough to avoid credibility risk

**Variant B (polish only):**
- No blockers. The variant is launch-ready at prototype level.
- Consider: the dark interpretation band could be slightly warmer to match the overall editorial tone

---

## Recommendation

- **Variante leader:** B — Claude Concierge (92/100)
- **Variante backup:** D — Lovable Warm Consumer (87/100)
- **Variante la plus fidele au benchmark US:** E — US Direct Benchmark (structurally closest to Billshark/Rocket Money hybrid, but least polished)

### Pourquoi B leads:

Variant B nails the hardest problem: making a bill negotiation service feel trustworthy and human in France. The headline "Vous mandatez. On renégocie. Vous gardez tout." is a three-part promise that's instantly clear, culturally resonant (the "mandat" framing maps to French legal/cultural expectations), and emotionally satisfying. The concierge timeline showing live progress gives the page a sense of motion and reality that static comparison tables can't match. The editorial warmth (Newsreader serif, parchment palette) creates a personality that's premium without being cold — a critical balance for French grand public.

The trust architecture is the deepest: confidence index bar, "Recommandation ≠ vente" signal, conditions-claires block, and a mandate section that reads like a commitment rather than fine print. This is the only variant where I'd feel comfortable showing it to a skeptical French consumer and expecting them to understand and trust the service within one scroll.

### Ce qu'il faut reprendre dans les autres:

- **From C → B:** The multicriteria scoring panel (prix, débit, services, stabilité) is excellent pedagogy. Variant B would benefit from a lightweight version of this.
- **From D → B:** The FAQ/objections section is a conversion insurance layer that B lacks. "C'est vraiment gratuit ?" answered preemptively removes the #1 barrier.
- **From D → B:** The testimonials pattern (even as "cas illustratifs") adds social reality that pure data can't provide.
- **From A → all:** The dark theme's visual distinctiveness proves that bold palette choices work. Don't be afraid to push further.

### Ce qu'il faut eviter:

- **Variant A's density trap:** Packing every data point above the fold overwhelms rather than persuades. Proof should be discoverable, not mandatory.
- **Variant E's false minimalism:** Minimal design works when every remaining element earns its space. Removing polish (accents, data structures, trust depth) isn't minimalism — it's incompleteness.
- **Invented metrics without context:** Numbers like "204 € économie moyenne" (Variant D) need sourcing or clear "illustratif" labeling to avoid UFC-Que Choisir-style credibility challenges.
- **Filter chips as decoration:** Non-functional filter chips (Variant C) create false interactivity expectations. Either ship them functional or remove them.
