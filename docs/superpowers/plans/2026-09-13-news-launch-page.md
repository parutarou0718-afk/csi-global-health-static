# News Launch Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder News pages with one source-approved website-launch news item and a future-ready latest-news layout.

**Architecture:** Store each approved news item in a new bilingual `src/data/news.ts` module. `NewsPage.astro` renders its first item as the featured news item and any later records as compact latest-news cards; no records are invented.

**Tech Stack:** Astro, TypeScript, native CSS, Node test runner.

## Global Constraints

- Publish English and Japanese only.
- The only initial news item is the user-approved website launch.
- Keep facts in `src/data/`, interface copy in `src/i18n/`, and presentation in component/style files.
- Do not invent dates, results, partnerships, or additional announcements.

---

### Task 1: Add a test-first, source-backed news data module

**Files:**
- Modify: `tests/foundation.test.mjs`
- Create: `src/data/news.ts`
- Create: `public/images/news/website-launch.png`

- [ ] **Step 1: Write the failing test**

```js
assert.match(newsData, /website-launch/);
assert.equal(existsSync(file("public/images/news/website-launch.png")), true);
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because the news module and launch image do not exist.

- [ ] **Step 3: Add the minimal approved news record**

Add one bilingual `website-launch` record with no date, the supplied image, and concise source-approved website-launch copy.

- [ ] **Step 4: Re-run the test**

Run: `node --test tests/foundation.test.mjs`

Expected: PASS.

### Task 2: Build and validate the News pages

**Files:**
- Create: `src/components/NewsPage.astro`
- Create: `src/styles/news.css`
- Modify: `src/styles/global.css`
- Modify: `src/pages/en/news.astro`
- Modify: `src/pages/ja/news.astro`

- [ ] **Step 1: Extend the failing test**

```js
assert.match(component, /featured/);
assert.match(component, /newsItems\.slice\(1\)/);
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because `NewsPage` does not exist.

- [ ] **Step 3: Implement the shared data-driven layout**

Render a restrained featured-news hero with the supplied image and a latest-news section that is ready to render later data entries. Replace EN/JA placeholder routes and import the page styles.

- [ ] **Step 4: Run full verification**

Run: `node --test tests/foundation.test.mjs; git diff --check; npm run build`

Expected: all tests pass, no whitespace errors, and Astro generates `/en/news/` and `/ja/news/`.
