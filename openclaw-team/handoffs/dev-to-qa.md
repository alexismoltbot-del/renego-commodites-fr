# Dev → QA Handoff — DEV-11 Shareable Diagnostic Card

Date: 2026-03-13 14:05 CET
Owner: `renego-dev`
Sprint: Day 2 (13 mars — afternoon delivery)
Previous: DEV-10 Instant Price Check Widget (10:05 CET)

---

## What shipped

### DEV-11 — Shareable Diagnostic Card ✅

New component `src/components/DiagnosticCard.tsx` (342 lines) placed between the
decision/recommendation panel and the observatory. Only appears after a facture
analysis is complete (conditionally rendered on `decisionMemo && recommendedOffer
&& analysis`).

**What it does:**
- Generates a branded, screenshot-ready card with HTML Canvas → PNG
- Two sizes: Story (1080×1920 for WhatsApp Status/Stories) and Feed (1080×1080)
- Size toggle lets user switch between formats
- "Générer la carte" button renders the preview
- "Partager mon diagnostic" button uses Web Share API (native share on mobile)
  with fallback to image download on desktop
- Card shows: current provider → recommended provider, current price, best
  price, 24m savings, CTA URL (renego.fr)
- **Zero PII on the card** — only provider names, prices, and savings
- ReneGo branding, beta badge, disclaimer about data date

**Card content:**
- 🔍 Diagnostic Box Internet
- Provider transition (e.g. "Free → Red by SFR")
- Current monthly price (in red/danger color)
- Best monthly price (in green/accent color)
- 24m savings in a highlighted pill
- CTA: "Faites le test → renego.fr"
- Beta and date disclaimer (story format)

**Savings calculation:**
- Uses `annualCostEur * 2 - totalCost24mEur` when 24m cost data is available
  (accurate, matches diagnostic)
- Falls back to `annualSavingEur * 2` if totalCost24mEur is missing
- Capped at 0 minimum (no negative savings displayed)

**What to test:**
1. Upload a Freebox PDF → complete analysis → scroll past the recommendation
   section → Diagnostic Card section should be visible
2. Click "Story (9:16)" then "Générer la carte" → canvas renders with correct
   data (Free → Red by SFR, 39,99 → 22,99, savings ~369 EUR)
3. Click "Feed (1:1)" → switch size → click "Générer la carte" → square format
   renders correctly
4. Click "Partager mon diagnostic" → on desktop: downloads
   `diagnostic-renego.png`; on mobile: opens native share sheet
5. Without analysis (before PDF upload) → no diagnostic card section visible
6. Card has no PII (no name, no address, no invoice number)
7. Card visual: centered text, gradient background, branded colors, readable
   on phone screens
8. Mobile responsive: section stacks properly on narrow screens

---

## Technical checks — all green

| Check | Result |
|-------|--------|
| Build | ✅ 0 errors, 44 modules (+1), 912ms |
| Tests | ✅ 55/55 passed |
| URLs | ✅ 4/4 HTTP 200 (14:05 CET) |
| Red 22,99 | ✅ |
| Snapshot date | ✅ "13 mars 2026" |

---

## Files changed

- `src/components/DiagnosticCard.tsx` — NEW (342 lines, canvas rendering + share)
- `src/App.tsx` — import added (line 7), component rendered conditionally
  between recommendation panel and observatory (line 656-673)
- `src/index.css` — CSS block appended for `.diagnostic-share`,
  `.diagnostic-card-*`, `.size-toggle`, `.size-btn` styles

---

## What didn't change

- Scoring engine, recommendation logic, boxMarketSnapshot data — untouched
- InstantPriceCheck widget (DEV-10) — untouched
- Existing 55 test assertions — all still pass
- All existing UI sections — preserved as-is

---

## Residual risk

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| 1 | Canvas fonts may differ across OS/browsers (system sans-serif fallback) | Cosmetic P3 | Card uses system fonts for maximum compatibility; layout is identical, only typeface may vary slightly |
| 2 | Web Share API not available on all desktop browsers | Low | Fallback download always works; share button labels adapt dynamically |
| 3 | No unit tests for canvas rendering | P3 | Canvas rendering is 100% visual; manual QA verification sufficient for beta |
| 4 | Savings on card may differ from widget by ~39 EUR (setup fees) | P3 | Card uses full 24m calculation including setup fees (more accurate than widget) |
| 5 | MARKET_SNAPSHOT_AS_OF date is hardcoded in canvas text | Low | Same pattern as rest of app; updates with data refresh |
