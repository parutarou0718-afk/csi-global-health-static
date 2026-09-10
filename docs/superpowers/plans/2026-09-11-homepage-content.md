# Homepage Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Phase 1 EN/JP homepage placeholders with the approved, data-driven CSI Global Health homepage.

**Architecture:** A single `HomePage.astro` composes focused section components in the approved seven-section order. Source-backed company, business and expert records remain outside presentation components; EN/JP interface content comes from focused homepage translation modules. The supplied map becomes a responsive static image asset in the hero rather than a synthesized map effect.

**Tech Stack:** Astro 5, TypeScript, native HTML/CSS, Node test runner.

## Global Constraints

- V1 supports English and Japanese only. Do not introduce a public Chinese route or language control.
- Use `C:\Users\30781\Desktop\网站开发\CSI\7937b129-1207-4def-af3a-427fadeae776.png` only as the Hero map asset, copied to `public/images/home/global-network-map.png`.
- Do not invent company facts, medical claims, formal university partnerships, expert credentials, news, contact data or president-message copy.
- Keep the Okayama University wording at research-foundation level only.
- Keep contact values labelled placeholders unless supplied by an authoritative source.
- Preserve Astro + TypeScript + native CSS; do not add a framework, database or CMS.
- Stop after homepage implementation and its verification. Do not fill inner-page content in this plan.

---

### Task 1: Add homepage data contracts and approved map asset

**Files:**
- Create: `src/data/home.ts`
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/ja.ts`
- Create: `public/images/home/global-network-map.png`
- Modify: `tests/foundation.test.mjs`

**Interfaces:**
- `homeContent[lang]` provides `hero`, `foundation`, `globalStructure`, `researchLinks` and `cta` copy.
- `hero.mapSrc` is exactly `"/images/home/global-network-map.png"`.
- `homeContent` has no contact field and no unverified article or medical-performance copy.

- [ ] **Step 1: Write the failing homepage-data test**

```js
test("homepage content uses the supplied static network map and bilingual source data", () => {
  const home = readFileSync(file("src/data/home.ts"), "utf8");
  assert.match(home, /global-network-map\.png/);
  assert.match(home, /export const homeContent/);
  assert.equal(existsSync(file("public/images/home/global-network-map.png")), true);
});
```

- [ ] **Step 2: Run the new test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because `src/data/home.ts` and the approved map asset do not exist.

- [ ] **Step 3: Copy the user-supplied map and add focused homepage data**

Run:

```powershell
Copy-Item -LiteralPath 'C:\Users\30781\Desktop\网站开发\CSI\7937b129-1207-4def-af3a-427fadeae776.png' -Destination 'E:\csi-global-health-static-v0.1\csi-global-health-static\public\images\home\global-network-map.png'
```

Create `src/data/home.ts` with the following contract shape:

```ts
import type { Lang } from "../lib/i18n";

type HomeContent = Record<Lang, {
  hero: { eyebrow: string; title: string; summary: string; primaryLabel: string; secondaryLabel: string; mapAlt: string; mapSrc: string };
  foundation: { title: string; body: string; pillars: readonly { title: string; label: string }[] };
  globalStructure: readonly { title: string; body: string }[];
  researchLinks: readonly { title: string; body: string; href: string }[];
  cta: { title: string; body: string; label: string };
}>;
```

Populate EN and JP text only from approved site source material. Add a `home` export to each locale module that points to `homeContent.en` or `homeContent.ja`; do not duplicate page facts in components.

- [ ] **Step 4: Run the data test to verify it passes**

Run: `node --test tests/foundation.test.mjs`

Expected: PASS, including the supplied map-asset assertion.

- [ ] **Step 5: Commit the data and asset contract**

```bash
git add src/data/home.ts src/i18n/en.ts src/i18n/ja.ts public/images/home/global-network-map.png tests/foundation.test.mjs
git commit -m "feat: add homepage content data and map asset"
```

### Task 2: Create focused homepage section components

**Files:**
- Create: `src/components/home/HomeHero.astro`
- Create: `src/components/home/UniversityFoundation.astro`
- Create: `src/components/home/BusinessAreaGrid.astro`
- Create: `src/components/home/ExpertNetwork.astro`
- Create: `src/components/home/GlobalStructure.astro`
- Create: `src/components/home/ResearchNewsLinks.astro`
- Create: `src/components/home/SiteCta.astro`
- Create: `src/components/HomePage.astro`
- Modify: `tests/homepage-components.test.mjs`

**Interfaces:**
- `HomePage` accepts `{ lang: Lang }` and renders the seven approved section components in order.
- Every section component accepts `{ lang: Lang }` and imports its own focused data dependencies.
- `HomeHero` renders a single H1 and an `<img>` using `homeContent[lang].hero.mapSrc` and `.mapAlt`.
- `BusinessAreaGrid` uses `businessAreas`; `ExpertNetwork` uses `experts`.

- [ ] **Step 1: Write the failing component-order test**

```js
test("homepage composes the approved content sections in order", () => {
  const home = readFileSync(file("src/components/HomePage.astro"), "utf8");
  for (const component of ["HomeHero", "UniversityFoundation", "BusinessAreaGrid", "ExpertNetwork", "GlobalStructure", "ResearchNewsLinks", "SiteCta"]) {
    assert.match(home, new RegExp(`<${component} lang=\\{lang\\}`));
  }
  assert.match(readFileSync(file("src/components/home/HomeHero.astro"), "utf8"), /<h1>/);
  assert.match(readFileSync(file("src/components/home/HomeHero.astro"), "utf8"), /mapSrc/);
});
```

- [ ] **Step 2: Run the component test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because the new homepage components do not exist.

- [ ] **Step 3: Implement the section components**

Use the following `HomePage` composition order:

```astro
---
import type { Lang } from "../lib/i18n";
import HomeHero from "./home/HomeHero.astro";
import UniversityFoundation from "./home/UniversityFoundation.astro";
import BusinessAreaGrid from "./home/BusinessAreaGrid.astro";
import ExpertNetwork from "./home/ExpertNetwork.astro";
import GlobalStructure from "./home/GlobalStructure.astro";
import ResearchNewsLinks from "./home/ResearchNewsLinks.astro";
import SiteCta from "./home/SiteCta.astro";

const { lang } = Astro.props as { lang: Lang };
---
<HomeHero lang={lang} />
<UniversityFoundation lang={lang} />
<BusinessAreaGrid lang={lang} />
<ExpertNetwork lang={lang} />
<GlobalStructure lang={lang} />
<ResearchNewsLinks lang={lang} />
<SiteCta lang={lang} />
```

Use semantic `section` elements with section-level H2 headings. The hero contains only one H1. Give business and expert cards source-backed labels, internal target links, and no unsupported factual expansion. Use placeholder artwork for expert cards unless the existing portrait source is explicitly retained by the section data.

- [ ] **Step 4: Run the component test to verify it passes**

Run: `node --test tests/homepage-components.test.mjs`

Expected: PASS with all approved homepage section components present in the fixed order.

- [ ] **Step 5: Commit the component composition**

```bash
git add src/components/HomePage.astro src/components/home tests/homepage-components.test.mjs
git commit -m "feat: build homepage content sections"
```

### Task 3: Integrate EN/JP homepage routes and responsive visual layer

**Files:**
- Modify: `src/pages/en/index.astro`
- Modify: `src/pages/ja/index.astro`
- Create: `src/styles/home.css`
- Modify: `src/styles/global.css`
- Modify: `tests/homepage-components.test.mjs`

**Interfaces:**
- Both homepage routes render `<HomePage lang="…" />` inside `BaseLayout` with language-specific metadata.
- `global.css` imports `home.css` after the shared layers.
- `home.css` owns `.home-*` rules and uses existing CSS tokens.

- [ ] **Step 1: Write the failing route and responsive-style test**

```js
test("EN and JP routes render the shared homepage with its dedicated style layer", () => {
  for (const lang of ["en", "ja"]) {
    const page = readFileSync(file(`src/pages/${lang}/index.astro`), "utf8");
    assert.match(page, new RegExp(`<HomePage lang="${lang}"`));
  }
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  assert.match(css, /\.home-hero/);
  assert.match(css, /@media \(max-width: 63\.9375rem\)/);
  assert.match(readFileSync(file("src/styles/global.css"), "utf8"), /@import "\.\/home\.css"/);
});
```

- [ ] **Step 2: Run the route test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because each homepage still renders `PagePlaceholder` and `home.css` is absent.

- [ ] **Step 3: Implement route integration and CSS**

Replace each route body with `HomePage` and retain localized title and description values. Add token-based `.home-*` styles for: a desktop two-column hero, responsive map frame, white information panels, six-column business grid, expert grid, three-card global/research regions, CTA, tablet three-by-two business grid, and mobile single-column stacking. Keep map `object-fit: contain`; do not crop its labels.

- [ ] **Step 4: Run route and build verification**

Run: `node --test tests/homepage-components.test.mjs && npm run build`

Expected: PASS and Astro builds the EN and JP homepages without a public Chinese route.

- [ ] **Step 5: Commit the integrated homepage**

```bash
git add src/pages/en/index.astro src/pages/ja/index.astro src/styles/home.css src/styles/global.css tests/homepage-components.test.mjs
git commit -m "feat: launch bilingual homepage content"
```

### Task 4: Verify semantic boundaries and visual route output

**Files:**
- Modify: `tests/foundation.test.mjs`
- Modify: `README.md`

**Interfaces:**
- Tests verify the hero asset, EN/JP homepage parity and absence of a public Chinese route.
- README identifies the homepage map asset as an approved supplied asset and identifies its replacement path.

- [ ] **Step 1: Write the failing semantic-boundary test**

```js
test("homepage preserves the EN/JP-only and placeholder-contact boundaries", () => {
  const hero = readFileSync(file("src/components/home/HomeHero.astro"), "utf8");
  const company = readFileSync(file("src/data/company.ts"), "utf8");
  assert.doesNotMatch(hero, /info@csi-globalhealth\.com/);
  assert.match(company, /status: "placeholder"/);
  assert.equal(existsSync(file("src/pages/zh/index.astro")), false);
});
```

- [ ] **Step 2: Run the semantic-boundary test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL before the test is added because no homepage-hero boundary assertion exists.

- [ ] **Step 3: Add the test and README asset note**

Append the test verbatim to `tests/foundation.test.mjs`. In `README.md`, add `public/images/home/global-network-map.png` to the asset-replacement guidance and identify it as the supplied homepage network map.

- [ ] **Step 4: Run final verification**

Run: `git diff --check && node --test tests/*.test.mjs && npm run build`

Expected: no diff errors, all tests pass, and the static build lists only `/en/` and `/ja/` homepage routes.

- [ ] **Step 5: Commit final homepage documentation and tests**

```bash
git add tests/foundation.test.mjs README.md
git commit -m "test: verify homepage content boundaries"
```

## Completion report

Stop after Task 4. Report the map-asset path, the homepage components and data modules created, the EN/JP routes updated, test and build results, and any remaining factual-content or asset approval questions.
