# Hero Map Blend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Blend the supplied global network map into the homepage Hero background while preserving its accessibility and responsive readability.

**Architecture:** `HomeHero.astro` keeps the map as an image but gives it a dedicated background-art layer. `home.css` changes the desktop Hero to a relative canvas, limits the art to 55% of the right side, overlays a multi-stop fade over its left edge, and reverts to a normal low-prominence stacked image at smaller widths.

**Tech Stack:** Astro, TypeScript, native CSS, Node test runner.

## Global Constraints

- Keep the map source as `/images/home/global-network-map.png` and keep its existing localized alt text.
- Do not change Hero copy, EN/JP data, navigation targets or homepage section order.
- Use native CSS only; do not add dependencies.

---

### Task 1: Blend the Hero map into its background

**Files:**
- Modify: `tests/homepage-components.test.mjs`
- Modify: `src/components/home/HomeHero.astro`
- Modify: `src/styles/home.css`

**Interfaces:**
- Consumes: `hero.mapSrc` and `hero.mapAlt` from `src/data/home.ts`.
- Produces: `.home-hero__art` as the visual map layer and `.home-hero__fade` as its blend overlay.

- [ ] **Step 1: Write the failing test**

Add this test to `tests/homepage-components.test.mjs`:

```js
test("hero map is rendered as a blendable background-art layer", () => {
  const hero = readFileSync(file("src/components/home/HomeHero.astro"), "utf8");
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  assert.match(hero, /class="home-hero__art"/);
  assert.match(hero, /class="home-hero__fade"/);
  assert.match(css, /\.home-hero__art \{ position: absolute;/);
  assert.match(css, /\.home-hero__fade \{ position: absolute;/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/homepage-components.test.mjs`

Expected: FAIL because the Hero has no art or fade layers.

- [ ] **Step 3: Implement the minimum component and CSS change**

Wrap the Hero image in a `home-hero__art` element, add a sibling `home-hero__fade` element, and make the desktop map absolutely positioned on the right of a relative Hero canvas. Apply a left-to-right background fade over the map; at `63.9375rem` and below, return the art to normal flow with reduced opacity and hide the fade.

- [ ] **Step 4: Verify the change**

Run: `node --test tests/*.test.mjs && npm run build`

Expected: all tests pass and Astro builds the EN/JP static routes.

- [ ] **Step 5: Commit**

```powershell
git add tests/homepage-components.test.mjs src/components/home/HomeHero.astro src/styles/home.css
git commit -m "feat: blend hero map into background"
```
