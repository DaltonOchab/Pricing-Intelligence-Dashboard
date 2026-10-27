# Golf Ball Locator — Competitive Pricing Intelligence

A responsive, dark analytics dashboard for Mission 2. Explore three researched competitors, seven offers, normalized comparisons, and tentative price positions. Fairway is the dashboard interface label; Golf Ball Locator remains the venture’s working product name.

## Run and build

Use Node.js 20+ (22 in GitHub Actions). No third-party runtime or build dependencies are needed.

```sh
npm test
npm run build
python3 -m http.server 5173 --directory dist
```

Open http://localhost:5173. Do not open index.html with file://; browsers require HTTP for ES modules and JSON fetching. A modular, dependency-free HTML/CSS/JavaScript stack was selected for reliable static deployment and straightforward future updates. All chart controls use accessible native HTML elements. Google Fonts is optional; system sans-serif fallbacks work offline.

## Deploy

Repository: https://github.com/DaltonOchab/Pricing-Intelligence-Dashboard

Expected Pages URL: https://daltonochab.github.io/Pricing-Intelligence-Dashboard/

Under repository Settings → Pages → Build and deployment, choose **GitHub Actions**. Push main or run the Deploy pricing dashboard workflow. The workflow runs analytical tests, builds dist, uploads it and deploys to Pages. Relative asset/data URLs work under the repository base path. Navigation uses hash anchors so refreshing sections works without server routing. No secrets, API keys, database, or backend are required. The expected URL is not evidence of a completed deployment.

## Data and provenance

`data/competitor_data.json` is an unchanged copy of Mission 1’s primary research JSON, checked against `competitor_research.xlsx` (all five worksheets) and `competitor_analysis.docx`. Research date: October 27, 2026. Source research files remain in their original workspace. No competitor prices were refreshed or invented during dashboard development.

Three brands: Chiping (direct), Callaway and Volvik (indirect). Seven comparable product/quantity offers; no optional add-ons. Representative offers: P01, P03, P05. All seven prices are verified observations, with inventory caveats. S07 is partially verified corroboration of pack quantity, not the primary price source.

Normalize pack price / pack quantity, without intermediate rounding. Conventional representative USD/dozen: min 26.99, max 34.99, mean and median 30.99. Smart representative USD/dozen: 399.90, one observation. Never pool functional groups into a mean or median. `analytics.js` owns these calculations; `app.js` owns presentation and interactions.

Volvik’s JSON regular_price values 104.97 and 209.94 are displayed compare-at values only. Report, workbook and JSON notes agree that historical selling prices are unverified. The dashboard therefore labels them compare-at rather than regular prices. The old JSON limitation about an inaccessible Desktop describes the prior environment; the source is preserved but this delivery note is contextualized in methodology. No substantive numerical discrepancies were found.

## Explorer methodology

Start at $17.50 per ball, midpoint of the preliminary $15–$20 hypothesis. The proposed pack is three balls. Default benchmark group is smart locator balls. Group-specific representative min/max and linearly interpolated quartiles determine position. With a single smart representative there is no dispersion or meaningful middle band, so only below/at/above the benchmark is classified. Conventional comparisons remain visibly different in function.

Presets use selected-group all-offer minimum, representative median, and all-offer maximum. This means smart middle and premium coincide; the UI explains why. Comparable prices round to the same cent, with floating-point tie correction. Distribution bands are descriptive $5/$10 intervals; scenario interpretation uses $5 bands. These are sample counts, not demand or market-share estimates. No demand, revenue, profit, elasticity, or willingness-to-pay model is included.

## Updating research

Replace the separate JSON with the same schema, retain evidence and notes, then run tests and build. The current editorial insights, annotations and tests intentionally reflect the three-brand Mission 1 study; review them when expanding the scope. Do not treat a data update as automatic validation of new strategic claims.

## Verification

`npm test` checks record integrity, source URL formatting, exact normalized group statistics, offer ranges, invalid/add-on exclusions, filters, sorting, and explorer classification. `DATA_VALIDATION.md` records the source cross-check. Browser testing results are recorded in `QA.md` once performed.
