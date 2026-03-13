# Dev → QA Handoff — Social Meta & OG Image (pre-launch)

Date: 2026-03-13 18:05 CET
Owner: `renego-dev`
Sprint: Day 2 (13 mars — evening delivery)
Previous: DEV-11 Shareable Diagnostic Card (14:05 CET)

---

## What shipped

### Social Sharing Meta Tags + OG Image + Favicon ✅

The `index.html` had zero Open Graph tags, zero Twitter Card tags, a developer-
facing title ("Renego Commodites FR"), and no favicon. With the Day 3 launch
plan targeting Reddit + Twitter posts, every shared link would have rendered as
a bare URL with no preview card — directly undercutting the viral loop
(DEV-11 Card → share → new visitors → bare link on social = broken funnel).

**What changed:**

1. **`index.html`** — complete `<head>` overhaul:
   - `<title>` → user-facing: "ReneGo — Payez-vous trop cher votre box internet ?"
   - `<meta name="description">` → launch-safe copy matching V7 positioning
   - Full Open Graph tags: `og:type`, `og:locale` (fr_FR), `og:site_name`,
     `og:title`, `og:description`, `og:url`, `og:image` (1200×630), image
     dimensions, image alt text
   - Full Twitter Card tags: `summary_large_image`, title, description, image,
     image alt
   - `<meta name="theme-color" content="#17211d">` (dark green, matches app)
   - `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`

2. **`public/og-image.png`** — branded OG image (1200×630, ~374 KB):
   - Dark gradient background (#17211d → #0d7a6d) matching app palette
   - "BETA · 100% GRATUIT" orange badge
   - "Payez-vous trop cher votre **box internet** ?" headline
   - Subtitle: "Importez votre facture, comparez les vrais prix sur 24 mois,
     obtenez un plan de renégociation en 30 secondes."
   - ReneGo brand + Vercel URL footer
   - No PII, no specific prices (won't go stale)

3. **`public/favicon.svg`** — minimal "R" favicon in brand colors
   (#17211d background, #f1643c "R" text)

**What to test:**
1. `npm run build` → confirm `dist/og-image.png`, `dist/favicon.svg`,
   and `dist/index.html` all present
2. Grep `dist/index.html` for `og:title`, `og:image`, `twitter:card` —
   all must be present
3. OG image: 1200×630 dimensions, readable text, no PII
4. After next Vercel deploy: test `https://renego-commodites-fr.vercel.app`
   via [opengraph.xyz](https://opengraph.xyz) or Twitter Card Validator
5. Favicon visible in browser tab (dark square with orange "R")
6. Theme-color on mobile: dark green status bar

---

## Technical checks — all green

| Check | Result |
|-------|--------|
| Build | ✅ 0 errors, 44 modules, 1.23s |
| Tests | ✅ 55/55 passed |
| URLs | ✅ 4/4 source HTTP 200 + Vercel 200 (18:05 CET) |
| OG image in dist/ | ✅ 1200×630, 374 KB |
| Favicon in dist/ | ✅ SVG, 258 bytes |
| Red 22,99 | ✅ |
| Snapshot date | ✅ "13 mars 2026" |

---

## Files changed

- `index.html` — complete `<head>` rewrite (OG, Twitter, favicon, theme-color,
  title, description)
- `public/og-image.png` — NEW (branded 1200×630 social preview image)
- `public/favicon.svg` — NEW (minimal "R" favicon)

---

## What didn't change

- `src/` — zero changes to any source file
- Scoring engine, recommendation logic, boxMarketSnapshot — untouched
- All components (App.tsx, InstantPriceCheck, DiagnosticCard, PriceTrendChart) — untouched
- All 55 test assertions — still pass
- index.css — untouched

---

## Residual risk

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| 1 | OG image won't work until next Vercel deploy | Low | Image is static in public/, auto-deployed by Vercel. Verify post-deploy with opengraph.xyz. |
| 2 | OG image uses absolute URL (renego-commodites-fr.vercel.app) | Low | Matches the current deployment URL. If domain changes, update og:url + og:image. |
| 3 | Some social platforms cache OG data aggressively | Low | First share will be fresh. If needed, use platform cache-busters (Facebook Debugger, Twitter Card Validator). |
| 4 | OG image doesn't include specific prices | Design choice | Intentional — avoids staleness if prices update. The headline + subtitle are enough for click-through. |
