# Hero Map White Margin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the Hero map's rectangular edge by extending the supplied map onto a larger white canvas without changing any map detail.

**Architecture:** Create a deterministic PNG derivative from `public/images/home/global-network-map.png`, preserving the source bitmap at one-to-one pixels and adding only white canvas around it. The existing semantic image path and Hero component remain unchanged.

**Tech Stack:** Astro, TypeScript, native CSS, PowerShell/.NET image encoding.

## Global Constraints

- V1 publicly supports only `/en/` and `/ja/`.
- Preserve the supplied map pixels; do not generate, redraw, crop or recolor geographic, label or network artwork.
- Do not introduce a CSS fade or opacity mask that affects blue continents.
- Keep the asset at `/images/home/global-network-map.png`.

---

### Task 1: Produce and verify the source-preserving expanded canvas

**Files:**
- Modify: `public/images/home/global-network-map.png`
- Modify: `tests/homepage-components.test.mjs`
- Modify: `docs/superpowers/specs/2026-09-11-hero-map-blend-design.md`

**Interfaces:**
- Consumes: the existing 1920×820 supplied network-map PNG.
- Produces: a PNG with the original bitmap centered on a white outer canvas, referenced by the existing `hero.mapSrc` value.

- [ ] **Step 1: Write the failing regression assertion**

Add an assertion to `tests/homepage-components.test.mjs` that the Hero continues to use the stable map path and that CSS contains no Hero fade overlay selector.

- [ ] **Step 2: Run the focused test to verify the invariant**

Run: `node --test tests/homepage-components.test.mjs`

Expected: PASS for the existing path and no-overlay invariant before the binary-only asset change.

- [ ] **Step 3: Create the white-margin derivative**

Use a deterministic local image operation: allocate a white canvas larger than the source, draw the existing PNG centered at native size, then atomically replace `public/images/home/global-network-map.png`. Do not alter any pixels inside the source image rectangle.

- [ ] **Step 4: Verify the delivered page**

Run: `node --test tests/*.test.mjs; npm run build`

Expected: all tests pass and Astro produces 13 static pages.

- [ ] **Step 5: Review at desktop width and commit**

Refresh `http://127.0.0.1:4324/en/`. Confirm the map remains complete, blue continents are crisp and the exterior joins the white Hero without a rectangular box. Commit only the map asset, test and documentation changes.
