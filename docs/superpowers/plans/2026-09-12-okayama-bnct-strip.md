# Okayama University × BNCT Homepage Strip Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current About CSI card with a bilingual Okayama University × BNCT information strip and three labelled research-theme icons.

**Architecture:** Keep all EN/JP copy and icon metadata in `src/data/home.ts`. `AboutCsi.astro` renders the same shared data for both language routes, while `src/styles/home.css` owns the responsive strip layout. The three generated PNGs remain supplied visual assets under `public/images/home/icons/`.

**Tech Stack:** Astro, TypeScript, native CSS, Node built-in test runner.

## Global Constraints

- V1 publicly supports only `/en/` and `/ja/`.
- Translate only the user-supplied source facts; do not add claims about partnerships, credentials, treatments or outcomes.
- Preserve the existing Okayama University mark on a white background.
- Use the supplied icon files: `research-microscope.png`, `translation-dna.png`, and `globalization-globe.png`.
- Use CSS tokens rather than adding hard-coded brand values.

---

### Task 1: Define the bilingual strip data

**Files:**
- Modify: `src/data/home.ts`
- Test: `tests/homepage-components.test.mjs`

**Interfaces:**
- Produces: `about.title`, `about.paragraphs`, and `about.themes` for `AboutCsi.astro`.
- `about.themes` is a readonly list of `{ icon: string; title: string; subtitle: string }`.

- [ ] **Step 1: Write the failing test**

```js
assert.match(homeData, /title: "Okayama University × BNCT"/);
assert.match(homeData, /title: "岡山大学 × BNCT"/);
assert.match(homeData, /research-microscope\.png/);
assert.match(homeData, /translation-dna\.png/);
assert.match(homeData, /globalization-globe\.png/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because the new multilingual title and theme metadata do not exist.

- [ ] **Step 3: Write the minimal implementation**

Add the new `about` fields to the `HomeCopy` type and both language records. Use the approved English labels `Research / Basic Research`, `Translation / Clinical Application`, and `Globalization / International Collaboration`; use Japanese labels `研究 / 基礎研究`, `トランスレーション / 臨床応用`, and `グローバル化 / 国際連携`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/homepage-components.test.mjs`

Expected: PASS for the homepage component suite.

### Task 2: Render the strip and style its responsive layout

**Files:**
- Modify: `src/components/home/AboutCsi.astro`
- Modify: `src/styles/home.css`
- Test: `tests/homepage-components.test.mjs`

**Interfaces:**
- Consumes: `homeContent[lang].about.paragraphs` and `.themes` from Task 1.
- Produces: `.home-about__themes` containing three labelled icons beside the Okayama identity and BNCT description.

- [ ] **Step 1: Write the failing test**

```js
assert.match(aboutComponent, /about\.paragraphs\.map/);
assert.match(aboutComponent, /about\.themes\.map/);
assert.match(aboutComponent, /class="home-about__themes"/);
assert.match(css, /\.home-about__themes/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because the component has no paragraphs/themes renderer and the style layer has no themes grid.

- [ ] **Step 3: Write the minimal implementation**

Render a desktop strip in this order: white-background university mark, heading and two source-derived paragraphs, then three equal icon cells. Keep the existing About link out of this strip because the reference structure does not show it. At narrow widths, stack identity, description, and a three-column icon row; only collapse the icon row to one column at the existing mobile breakpoint.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/homepage-components.test.mjs`

Expected: PASS for the homepage component suite.

### Task 3: Verify static output

**Files:**
- Verify: `tests/foundation.test.mjs`
- Verify: `tests/homepage-components.test.mjs`

- [ ] **Step 1: Run the full required verification**

Run: `node --test tests/foundation.test.mjs; node --test tests/homepage-components.test.mjs; npm run build; git diff --check`

Expected: every test passes, Astro builds 13 routes, and `git diff --check` has no output.
