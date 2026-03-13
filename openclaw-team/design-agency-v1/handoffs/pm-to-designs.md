# PM -> Design Variants

Date: 2026-03-13 (updated 21:20)

## Status: SYNTHESIS PHASE — DLAB-15

Design phase complete. QA phase complete. PM decision locked.

**Direction leader: Variante B — Claude Concierge (92/100)**
**Backup: Variante D — Lovable Warm Consumer (87/100)**

## Task DLAB-15: Variante Synthese "ReneGo Best-Of"

### Fondation

Start from `claude-concierge.html` (Variant B). This is the base. Do not
redesign the structure, palette, or editorial voice — they're the reason B
won.

### Cherry-picks to integrate

1. **From Variant C (Google Observatory) — Multicriteria scoring panel**
   - Add a lightweight version of C's scoring grid (prix pur, debit, services,
     stabilite) to B's comparison section
   - Must feel editorial (like B's tone), not dashboard-dense (like C)
   - Include the 2-axis interpretation (prix pur vs valeur globale) but
     simplify the visual treatment — no filter chips, no heavy data tables
   - Place it after the existing comparison table, as a "Notre methode de
     notation" section

2. **From Variant D (Lovable) — FAQ / Objections section**
   - Add a collapsible FAQ section before the final CTA
   - Must answer preemptively: "C'est vraiment gratuit ?", "Comment ca
     marche concretement ?", "Et si je ne veux pas changer d'offre ?",
     "Mes donnees sont-elles protegees ?"
   - Tone: human, direct, jargon-free (match B's conversational voice)
   - Structure: question + short answer, expandable, 4-6 items max

3. **From Variant D (Lovable) — Testimonials pattern**
   - Add 2-3 short testimonials styled as "cas illustratifs" (clearly labeled)
   - Each: first name, situation, savings outcome, one human sentence
   - Place between the flow section and the FAQ
   - Must not feel like fake reviews — keep the "illustratif" label visible

### What NOT to change in B

- The hero headline ("Vous mandatez. On renegocie. Vous gardez tout.")
- The concierge timeline with confidence index
- The "Recommandation ≠ vente" signal
- The conditions-claires block
- The palette (parchment, warm earth, Newsreader serif)
- The mandate section structure

### Constraints

- Single HTML file: `public/design-lab/renego-synthesis.html`
- Responsive (mobile-first)
- No JS frameworks, vanilla HTML/CSS only
- Must pass clone-adapt: no trademark borrowing, no invented claims
- All copy in French with correct diacritics
- All illustrative numbers labeled as such

### Livrable

`public/design-lab/renego-synthesis.html` — the candidate for launch
integration review.

## After DLAB-15

- DLAB-16: QA rapide (scorecard check, clone-adapt verify)
- Then: handoff to sprint launch team for integration consideration

## Original Shared Constraints (preserved for reference)

- single product story: ReneGo renegocie les box internet pour l'utilisateur;
- no fake legal claims;
- no exact copy or trademark borrowing from US comparables;
- keep one strong hero, one proof layer, one flow section, and one trust layer;
- every variant must feel like a product someone could publicly launch.
