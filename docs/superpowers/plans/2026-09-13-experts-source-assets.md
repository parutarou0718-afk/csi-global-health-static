# Experts Source Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the English and Japanese Experts pages with customer-supplied visuals and only the four expert profiles confirmed in the client Word document.

**Architecture:** Keep individual expert facts and portrait paths in `src/data/experts.ts`; keep page labels and explanatory UI copy in the EN/JA i18n modules. `ExpertsPage.astro` remains a data-driven presenter, while its CSS maps supplied hero and collaboration artwork into responsive full-width background regions.

**Tech Stack:** Astro, TypeScript, native CSS, Node test runner.

## Global Constraints

- Public routes remain English and Japanese only: `/en/` and `/ja/`.
- Publish only the four profiles confirmed by the client Word: Eiji Matsuura, Wolfgang A. G. Sauerwein, Sylviane Muller, and Rameshwar Patil.
- Use portraits embedded in the client Word only for those matching expert profiles.
- Keep expert facts in `src/data/`, localized interface copy in `src/i18n/`, and presentation in component/style files.
- Do not add unverified credentials, affiliations, claims, or people from the visual reference.

---

### Task 1: Add source-backed portrait asset paths to expert data

**Files:**
- Modify: `tests/foundation.test.mjs`
- Modify: `src/data/experts.ts`
- Create: `public/images/experts/eiji-matsuura.jpeg`
- Create: `public/images/experts/wolfgang-sauerwein.jpeg`
- Create: `public/images/experts/sylviane-muller.jpeg`
- Create: `public/images/experts/rameshwar-patil.jpeg`

**Interfaces:**
- Produces: every `Expert` record provides a `portrait: string` public asset path.
- Consumes: portraits embedded in `CSI_Global_Health_中文版公司介绍_粒子医学战略版.docx`, matched in the same order as its expert section.

- [ ] **Step 1: Write the failing test**

```js
assert.match(expertsData, /portrait: "\/images\/experts\/eiji-matsuura\.jpeg"/);
assert.match(expertsData, /portrait: "\/images\/experts\/rameshwar-patil\.jpeg"/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: the Experts source-assets assertion fails because portraits are not yet data-backed.

- [ ] **Step 3: Extract and name the approved portrait assets**

Extract the four `/word/media/` JPEG assets from the supplied Word file and name them by their confirmed, in-document expert order. Add `portrait` to `Expert` and assign the matching public path to all four records.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/foundation.test.mjs`

Expected: PASS.

### Task 2: Render supplied expert and brand assets

**Files:**
- Modify: `tests/foundation.test.mjs`
- Modify: `src/components/ExpertsPage.astro`
- Modify: `src/styles/experts.css`
- Create: `public/images/experts/hero-global-research.png`
- Create: `public/images/experts/collaboration-lab.png`
- Create: `public/images/experts/icons/global-network.png`
- Create: `public/images/experts/icons/particle-medicine.png`
- Create: `public/images/experts/icons/molecular-imaging.png`
- Create: `public/images/experts/icons/theranostics.png`

**Interfaces:**
- Consumes: `Expert.portrait` and the supplied research page PNG files.
- Produces: hero, founder, network, expertise, and collaboration regions using approved assets with responsive CSS.

- [ ] **Step 1: Write the failing test**

```js
assert.match(component, /src=\{expert\.portrait\}/);
assert.match(component, /\/images\/experts\/hero-global-research\.png/);
assert.match(component, /\/images\/experts\/collaboration-lab\.png/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/foundation.test.mjs`

Expected: the rendered-asset assertion fails because the component still uses the placeholder portrait and CSS-only background.

- [ ] **Step 3: Implement the minimal source-asset rendering**

Copy the six supplied PNG assets to the listed public paths. Replace the portrait placeholder with `expert.portrait`; add decorative hero and collaboration artwork as CSS backgrounds with a left-side readability gradient; point the four expertise cards at the supplied icon files.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/foundation.test.mjs`

Expected: PASS.

### Task 3: Verify the localized experts page end-to-end

**Files:**
- Verify: `src/pages/en/experts.astro`
- Verify: `src/pages/ja/experts.astro`
- Verify: `src/i18n/en.ts`
- Verify: `src/i18n/ja.ts`

**Interfaces:**
- Consumes: source-backed expert data and the shared `ExpertsPage` component.
- Produces: static EN and JA Experts pages with no unverified expert profiles.

- [ ] **Step 1: Run focused and full verification**

```powershell
node --test tests/foundation.test.mjs
git diff --check
npm run build
```

Expected: all 20 tests pass, no diff whitespace errors, and Astro generates `/en/experts/` and `/ja/experts/`.

- [ ] **Step 2: Check source boundary**

Confirm that no names beyond Eiji Matsuura, Wolfgang A. G. Sauerwein, Sylviane Muller, and Rameshwar Patil occur in `src/data/experts.ts` or `src/components/ExpertsPage.astro`.

