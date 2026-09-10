# CSI Global Health Phase 1 Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the EN/JP-only V1 foundations for the formal CSI Global Health static site without implementing the formal homepage or inner-page content.

**Architecture:** Replace the current all-in-one `site.ts` contract with focused company, business, expert and i18n modules. The common layout receives all metadata through typed props; a compact route helper supports English and Japanese today while keeping language handling extendable without exposing Chinese routes. CSS moves from a monolith to readable token, reset, layout, component and responsive layers.

**Tech Stack:** Astro 5, TypeScript, native HTML/CSS, minimal native JavaScript, Node test runner.

## Global Constraints

- V1 supports only `/en/` and `/ja/`; do not emit `/zh/` routes or a public Chinese language switcher.
- Chinese customer documents remain factual sources but do not become V1 UI copy by default.
- Contact email, phone and address are explicit placeholders unless an authoritative supplied file contains the exact public contact value.
- Preserve the existing Astro static output; do not add React, Vue, Tailwind, Bootstrap, a database or CMS.
- Do not invent company facts, research claims, partnerships, credentials, news, images or president copy.
- Use readable CSS classes and design tokens; no hard-coded brand colors, sizing scales or spacing scales outside token declarations.
- Stop after this phase, run build, and report created files, modified files, resulting directory structure, build output and unresolved questions.

---

### Task 1: Establish typed EN/JP routing and neutral data boundaries

**Files:**
- Create: `src/lib/i18n.ts`
- Create: `src/data/company.ts`
- Create: `src/data/business.ts`
- Create: `src/data/experts.ts`
- Create: `src/i18n/en.ts`
- Create: `src/i18n/ja.ts`
- Modify: `src/data/site.ts`
- Test: `tests/foundation.test.mjs`

**Interfaces:**
- `Lang` is exactly `"en" | "ja"`.
- `supportedLanguages` is `readonly ["en", "ja"]`.
- `pagePath(lang: Lang, pathname: string): string` translates a same-page route without emitting a Chinese route.
- `site.company` is `"CSI Global Health, Co., Ltd."`.
- `companyContact` exposes labelled placeholder values, not an invented email, phone or address.
- Each i18n module exports `navigation` and `common` UI copy only.

- [ ] **Step 1: Write the failing foundation test**

```js
test("V1 exposes only English and Japanese public language routes", () => {
  const i18n = readFileSync(file("src/lib/i18n.ts"), "utf8");
  assert.match(i18n, /export type Lang = "en" \| "ja"/);
  assert.match(i18n, /supportedLanguages = \["en", "ja"\]/);
  assert.doesNotMatch(i18n, /"zh"/);
});

test("contact data remains a labelled placeholder", () => {
  const company = readFileSync(file("src/data/company.ts"), "utf8");
  assert.match(company, /status: "placeholder"/);
  assert.doesNotMatch(company, /info@csi-globalhealth\.com/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because `src/lib/i18n.ts` and `src/data/company.ts` do not exist.

- [ ] **Step 3: Implement the smallest typed modules**

```ts
// src/lib/i18n.ts
export type Lang = "en" | "ja";
export const supportedLanguages = ["en", "ja"] as const;
export const defaultLanguage: Lang = "en";
export function pagePath(lang: Lang, pathname: string): string {
  const path = pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
  return `/${lang}${path}`;
}
```

Implement `company.ts`, `business.ts`, `experts.ts`, `en.ts` and `ja.ts` as data-only modules. Include only sourced facts and explicit placeholders. Retain old `site.ts` only as a temporary compatibility re-export until Task 2 migrates imports.

- [ ] **Step 4: Run the foundation test to verify it passes**

Run: `node --test tests/foundation.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the data foundation**

```bash
git add src/lib/i18n.ts src/data src/i18n tests/foundation.test.mjs
git commit -m "feat: add v1 bilingual data foundation"
```

### Task 2: Build the shared EN/JP site shell and metadata contract

**Files:**
- Create: `src/components/MobileNav.astro`
- Create: `src/components/PagePlaceholder.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`
- Modify: `src/pages/ja/index.astro`
- Create: `src/pages/en/business.astro`
- Create: `src/pages/en/experts.astro`
- Create: `src/pages/ja/business.astro`
- Create: `src/pages/ja/experts.astro`
- Delete: `src/pages/en/advisors.astro`
- Delete: `src/pages/en/atherox.astro`
- Delete: `src/pages/en/bnct.astro`
- Delete: `src/pages/en/history.astro`
- Delete: `src/pages/ja/advisors.astro`
- Delete: `src/pages/ja/atherox.astro`
- Delete: `src/pages/ja/bnct.astro`
- Delete: `src/pages/ja/history.astro`
- Delete: `src/pages/zh/`
- Test: `tests/foundation.test.mjs`

**Interfaces:**
- `BaseLayout` accepts `{ lang: Lang; title: string; description: string; image?: string }`.
- Header accepts `{ lang: Lang; pathname: string }` and displays exactly EN and JP controls.
- Footer renders no factual contact values unless their `status` is `"verified"`.
- Root route redirects to `/en/`.
- The only Phase 1 public page routes are Home, About, Business, Experts, News and Contact under `/en/` and `/ja/`; their bodies may use a non-factual shared placeholder until their dedicated implementation phases.

- [ ] **Step 1: Extend the failing test with shell and route assertions**

```js
test("the public shell is EN/JP-only and root redirects to English", () => {
  const header = readFileSync(file("src/components/Header.astro"), "utf8");
  const root = readFileSync(file("src/pages/index.astro"), "utf8");
  assert.match(header, /supportedLanguages/);
  assert.doesNotMatch(header, /zh/);
  assert.match(root, /redirect.*\/en\//);
  assert.equal(existsSync(file("src/pages/zh/index.astro")), false);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because the existing header and routes still expose Chinese.

- [ ] **Step 3: Implement the shared shell**

Use semantic `header`, `nav`, `main` and `footer` landmarks. Use `pagePath` for EN/JP same-page switching. Move the menu state into `MobileNav.astro` with a `button`, `aria-expanded` and controlled navigation id. Give `BaseLayout` title, description, canonical and Open Graph props. Make root use `return Astro.redirect("/en/")`.

Create the six official EN/JP route shells with `PagePlaceholder.astro`, replacing legacy public routes such as Advisors, AtherOx, BNCT and History. Delete the obsolete `src/pages/zh/` page tree and the legacy EN/JP route files. Do not delete Chinese customer source documents or the currently supplied visual assets.

- [ ] **Step 4: Run the shell test and static build**

Run: `node --test tests/foundation.test.mjs && npm run build`

Expected: all tests pass and only `/en/` and `/ja/` pages are generated.

- [ ] **Step 5: Commit the bilingual shared shell**

```bash
git add src/components/Header.astro src/components/Footer.astro src/components/MobileNav.astro src/layouts/BaseLayout.astro src/pages tests/foundation.test.mjs
git commit -m "feat: establish bilingual v1 site shell"
```

### Task 3: Replace the CSS monolith with tokenized Phase 1 styling and image placeholders

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/reset.css`
- Create: `src/styles/layout.css`
- Create: `src/styles/components.css`
- Create: `src/styles/responsive.css`
- Modify: `src/styles/global.css`
- Create: `public/images/common/placeholder.svg`
- Create: `public/images/home/hero-map-placeholder.svg`
- Create: `public/images/about/placeholder.svg`
- Create: `public/images/business/placeholder.svg`
- Create: `public/images/experts/placeholder.svg`
- Create: `public/images/news/placeholder.svg`
- Test: `tests/foundation.test.mjs`

**Interfaces:**
- `tokens.css` owns `--csi-*`, font scale, spacing scale, container width and breakpoints.
- `global.css` imports the five ordered style layers only.
- Placeholder SVGs are neutral, labelled decorative files with stable view boxes; they carry no fictional factual content.

- [ ] **Step 1: Extend the failing test for readable style layers**

```js
test("foundation styling is tokenized and placeholder assets exist", () => {
  const globalCss = readFileSync(file("src/styles/global.css"), "utf8");
  const tokens = readFileSync(file("src/styles/tokens.css"), "utf8");
  assert.match(globalCss, /@import "\.\/tokens\.css"/);
  assert.match(tokens, /--csi-navy: #0b315e/);
  assert.equal(existsSync(file("public/images/home/hero-map-placeholder.svg")), true);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because the style layers and placeholder directory do not exist.

- [ ] **Step 3: Implement the token layers and placeholder system**

Declare the plan’s CSI color tokens and semantic font, spacing and container tokens in `tokens.css`. Keep reset rules in `reset.css`, structural container/section rules in `layout.css`, component rules in `components.css`, and breakpoints in `responsive.css`. `global.css` contains imports only. Preserve accessible focus and reduced-motion behavior.

Create SVG placeholders with `viewBox="0 0 1200 675"`, a light CSI-blue background and no people, logos, claims or fake medical imagery.

- [ ] **Step 4: Run style-layer test and build**

Run: `node --test tests/foundation.test.mjs && npm run build`

Expected: PASS and static build exits 0.

- [ ] **Step 5: Commit the tokenized styling foundation**

```bash
git add src/styles public/images tests/foundation.test.mjs
git commit -m "feat: add tokenized styles and placeholder assets"
```

### Task 4: Add project handoff rules and Phase 1 verification report

**Files:**
- Modify: `AGENTS.md`
- Create: `README.md`
- Modify: `tests/foundation.test.mjs`

**Interfaces:**
- `AGENTS.md` contains the supplied no-fabrication, news-update, expert-update, company-data, styling and pre-commit rules.
- `README.md` documents setup, build, data locations, placeholder replacement and EN/JP language routing without claiming future Phase 2+ features exist.

- [ ] **Step 1: Extend the failing test for handoff documentation**

```js
test("handoff documentation defines content boundaries", () => {
  const agents = readFileSync(file("AGENTS.md"), "utf8");
  const readme = readFileSync(file("README.md"), "utf8");
  assert.match(agents, /Do not invent company facts/);
  assert.match(readme, /src\/data\/company\.ts/);
  assert.match(readme, /\/en\//);
  assert.match(readme, /\/ja\//);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because the current handoff files do not describe the formal V1 boundaries.

- [ ] **Step 3: Write the handoff documents**

Update `AGENTS.md` with the supplied safety rules and V1 language constraint. Add a concise `README.md` covering install, development, static build, data modules, image placeholders, EN/JP routing, the intended future Chinese extension point, and Cloudflare Pages preparation. Do not document non-existent Phase 2+ features as complete.

- [ ] **Step 4: Perform Phase 1 final verification**

Run: `git diff --check && node --test tests/foundation.test.mjs && npm run build`

Expected: no diff errors, all foundation tests pass, and Astro statically generates EN/JP-only pages.

- [ ] **Step 5: Commit Phase 1 documentation**

```bash
git add AGENTS.md README.md tests/foundation.test.mjs
git commit -m "docs: define v1 site handoff rules"
```

## Phase 1 completion report

Stop after Task 4. Report the created files, modified files, resulting `src/`, `public/images/` and test directory structure, exact build result, and these unresolved questions:

1. Which final public email, phone, postal address and map location should replace placeholders?
2. Is a formal president message available for About?
3. Which verified initial news items may be published?
4. Which approved business and news images should replace Phase 1 placeholders?
