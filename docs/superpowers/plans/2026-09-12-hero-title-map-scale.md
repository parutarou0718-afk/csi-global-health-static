# Hero Title and Map Scale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the English Hero heading within five desktop lines and make the complete global map visually fill most of the compact Hero.

**Architecture:** Adjust only desktop Hero layout tokens in `src/styles/home.css` and `src/styles/tokens.css`. The map asset, component markup, copy and mobile/tablet fallback remain unchanged.

**Tech Stack:** Astro, TypeScript, native CSS, Node test runner.

## Global Constraints

- V1 publicly supports only `/en/` and `/ja/`.
- Keep the complete map visible, with no crop and no continent beneath the left copy.
- Use the existing map asset without CSS opacity masks.
- Keep responsive tablet and mobile layout unchanged.

---

### Task 1: Compact desktop Hero typography and scale map layer

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/home.css`
- Modify: `tests/homepage-components.test.mjs`
- Modify: `docs/superpowers/specs/2026-09-11-hero-map-blend-design.md`

**Interfaces:**
- Consumes: `--font-size-hero`, `.home-hero`, `.home-hero__grid`, `.home-hero__copy h1` and `.home-hero__art`.
- Produces: a compact desktop composition that presents the English title in no more than five lines and increases the map's visible proportion without crop.

- [x] **Step 1: Write the failing layout assertions**

Add assertions requiring a `25rem` Hero minimum height, an `18rem` grid minimum height, a `40%` map offset, a `60%` map width and the dedicated Hero font token.

- [x] **Step 2: Run the focused test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because the existing desktop map split is `32%` and `68%`.

- [x] **Step 3: Implement the smallest desktop-only style update**

Keep the dedicated Hero font scale at `clamp(1.875rem, 2.75vw, 2.5rem)`. Update only desktop Hero minimum heights and vertical padding to the asserted compact values; leave the existing responsive media queries intact.

- [x] **Step 4: Run the full verification**

Run: `node --test tests/*.test.mjs; npm run build`

Expected: all tests pass and Astro produces 13 static pages.

- [x] **Step 5: Review and commit**

Refresh `http://127.0.0.1:4324/en/` at desktop width. Confirm the title is four or five lines, map is complete and visually taller, and no blue continent sits beneath the copy. Commit only the listed files.
