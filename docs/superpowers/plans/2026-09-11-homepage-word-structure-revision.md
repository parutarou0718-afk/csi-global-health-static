# Homepage Word Structure Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the bilingual homepage content order and fields with `网站详细结构.docx` while preserving established V1 integrity constraints.

**Architecture:** Replace the old Foundation, Global Structure and generic Research links with discrete About CSI, News Preview and Partnership components. Update homepage and expert data contracts before presentation components so EN/JP content stays isolated from Astro templates.

**Tech Stack:** Astro 5, TypeScript, native CSS, Node test runner.

## Global Constraints

- `网站详细结构.docx` is authoritative for homepage information architecture; visual references only determine visual style.
- V1 exposes English and Japanese only.
- Do not invent contact data, expert credentials, medical-performance claims, partnerships or news.
- Keep Okayama University wording at research-foundation level.
- Continue using the user-supplied map at `public/images/home/global-network-map.png`.
- Do not implement inner-page bodies in this revision.

---

### Task 1: Revise source-backed homepage and expert data

**Files:**
- Modify: `src/data/home.ts`
- Modify: `src/data/experts.ts`
- Modify: `tests/foundation.test.mjs`

**Interfaces:**
- `homeContent[lang]` exposes `hero`, `about`, `news`, `partnership` and `cta` records.
- `hero.secondaryLabel` points to Contact rather than Business.
- Each expert record exposes `institution: Record<Lang, string>`.
- `news` has a visible empty-state record and no fictional article list.

- [ ] **Step 1: Write the failing data-boundary test**

```js
test("homepage data follows the Word structure without fabricated news", () => {
  const home = readFileSync(file("src/data/home.ts"), "utf8");
  const experts = readFileSync(file("src/data/experts.ts"), "utf8");
  assert.match(home, /about:/);
  assert.match(home, /news:/);
  assert.match(home, /partnership:/);
  assert.doesNotMatch(home, /globalStructure:/);
  assert.match(experts, /institution:/);
});
```

- [ ] **Step 2: Run the data-boundary test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because current homepage data still contains `globalStructure` and expert records omit institutions.

- [ ] **Step 3: Implement the revised data contracts**

Replace the old `foundation`, `globalHeading`, `globalStructure`, `researchHeading`, `researchLinks` and `cta` fields in `src/data/home.ts` with the following shape:

```ts
about: { title: string; body: string; linkLabel: string };
news: { title: string; emptyTitle: string; emptyBody: string; linkLabel: string };
partnership: { title: string; body: string; areas: readonly string[]; label: string };
```

Set the Hero calls to `/${lang}/about/` and `/${lang}/contact/`. Use the Word document’s three-part slogan and its EN/JP equivalent. Add source-backed institution strings to each of the four expert records; do not add unsourced job titles.

- [ ] **Step 4: Run the data test to verify it passes**

Run: `node --test tests/foundation.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the data revision**

```bash
git add src/data/home.ts src/data/experts.ts tests/foundation.test.mjs
git commit -m "feat: align homepage data with word structure"
```

### Task 2: Replace homepage sections and apply the Word sequence

**Files:**
- Create: `src/components/home/AboutCsi.astro`
- Create: `src/components/home/NewsPreview.astro`
- Create: `src/components/home/PartnershipCta.astro`
- Modify: `src/components/home/HomeHero.astro`
- Modify: `src/components/home/ExpertNetwork.astro`
- Modify: `src/components/HomePage.astro`
- Delete: `src/components/home/UniversityFoundation.astro`
- Delete: `src/components/home/GlobalStructure.astro`
- Delete: `src/components/home/ResearchNewsLinks.astro`
- Delete: `src/components/home/SiteCta.astro`
- Modify: `src/styles/home.css`
- Modify: `tests/homepage-components.test.mjs`

**Interfaces:**
- `HomePage` renders `HomeHero`, `AboutCsi`, `BusinessAreaGrid`, `ExpertNetwork`, `NewsPreview`, `PartnershipCta` in order.
- `NewsPreview` renders `homeContent[lang].news.emptyTitle` and `.emptyBody`, with no repeated card list.
- `PartnershipCta` renders the four `homeContent[lang].partnership.areas` labels and the Contact link.

- [ ] **Step 1: Write the failing section-order test**

```js
test("homepage uses the Word-required six-section sequence", () => {
  const home = readFileSync(file("src/components/HomePage.astro"), "utf8");
  for (const component of ["HomeHero", "AboutCsi", "BusinessAreaGrid", "ExpertNetwork", "NewsPreview", "PartnershipCta"]) {
    assert.match(home, new RegExp(`<${component} lang=\\{lang\\}`));
  }
  assert.doesNotMatch(home, /GlobalStructure|UniversityFoundation|ResearchNewsLinks/);
});
```

- [ ] **Step 2: Run the section-order test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because the old Foundation, Global Structure and Research links sections remain in the homepage.

- [ ] **Step 3: Implement focused components and styles**

Create `AboutCsi.astro` as a concise company-positioning panel with an About link. Create `NewsPreview.astro` as a visibly labelled verified-news empty state with a News link. Create `PartnershipCta.astro` as a closing section containing Research Collaboration, Clinical Collaboration, Technology & Equipment and International Business, plus Contact.

Update `HomeHero.astro` to target Contact for the secondary button. Update `ExpertNetwork.astro` to render `expert.institution[lang]` between name and professional focus. Replace the HomePage composition with the exact six-section sequence. Remove the old obsolete components. Replace their CSS selectors in `home.css` with `home-about`, `home-news` and `home-partnership` rules using existing tokens.

- [ ] **Step 4: Run component and build verification**

Run: `node --test tests/homepage-components.test.mjs && npm run build`

Expected: PASS, with EN and JP homepages built and no Home Global Structure section.

- [ ] **Step 5: Commit the homepage structure revision**

```bash
git add src/components src/styles/home.css tests/homepage-components.test.mjs
git commit -m "feat: align homepage sections with word structure"
```

### Task 3: Verify final homepage boundaries and handoff note

**Files:**
- Modify: `README.md`
- Modify: `tests/foundation.test.mjs`

**Interfaces:**
- README identifies `网站详细结构.docx` as the homepage-structure authority.
- Tests assert Word sequence data and no Global Structure home component.

- [ ] **Step 1: Write the failing README authority test**

```js
test("README identifies the Word document as homepage structure authority", () => {
  const readme = readFileSync(file("README.md"), "utf8");
  assert.match(readme, /网站详细结构\.docx/);
});
```

- [ ] **Step 2: Run the authority test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: FAIL because README does not name the Word document.

- [ ] **Step 3: Update the README and test**

Add this sentence to README’s source-boundary section: `For homepage information architecture, 网站详细结构.docx is authoritative; supplied visual references define visual direction only.` Append the test verbatim.

- [ ] **Step 4: Run final verification**

Run: `git diff --check && node --test tests/*.test.mjs && npm run build`

Expected: no diff errors, all tests pass, and Astro builds the EN and JP routes.

- [ ] **Step 5: Commit verification and handoff documentation**

```bash
git add README.md tests/foundation.test.mjs
git commit -m "docs: record homepage structure authority"
```

## Completion report

Stop after Task 3. Report revised homepage order, source-backed expert institution fields, empty-news behavior, test/build result and remaining content dependencies.
