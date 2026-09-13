# Footer Horizontal Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render the footer navigation as a compact horizontal, wrapping link group.

**Architecture:** Keep the existing `Footer.astro` semantic `nav` and navigation data untouched. Apply flexbox only to the footer navigation selector, so all locales and routes inherit the same responsive presentation.

**Tech Stack:** Astro, TypeScript, native CSS, Node test runner.

## Global Constraints

- V1 publicly supports English and Japanese only: `/en/` and `/ja/`.
- Use existing design tokens and native CSS only.
- Do not change navigation copy, routes, contact placeholders, or footer information hierarchy.

---

### Task 1: Make footer navigation horizontal and wrapping

**Files:**
- Modify: `tests/homepage-components.test.mjs`
- Modify: `src/styles/components.css`

**Interfaces:**
- Consumes: the existing `<nav aria-label="Footer navigation">` in `src/components/Footer.astro`.
- Produces: `.site-footer nav` flex layout with wrapping links at every locale and viewport width.

- [ ] **Step 1: Write the failing test**

Add this test assertion to the existing compact-footer test:

```js
assert.match(componentCss, /\.site-footer nav \{[\s\S]*?display: flex[\s\S]*?flex-wrap: wrap[\s\S]*?gap: var\(--space-3\)/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because `.site-footer nav` currently uses grid layout.

- [ ] **Step 3: Write minimal implementation**

Replace the existing footer navigation declaration with:

```css
.site-footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/homepage-components.test.mjs`

Expected: PASS.

- [ ] **Step 5: Run project verification**

Run: `node --test tests/foundation.test.mjs; npm run build; git diff --check`

Expected: both test suites and static build pass; `git diff --check` emits no whitespace errors.
