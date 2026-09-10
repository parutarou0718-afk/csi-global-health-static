import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("..", import.meta.url);
const file = (path) => new URL(path, root);

test("Phase 1 keeps identity assets while pages use the shared shell", () => {
  assert.equal(existsSync(file("public/assets/csi-mark.png")), true);
  assert.equal(existsSync(file("public/assets/okayama-university.svg")), true);

  for (const component of ["Header", "Footer", "MobileNav", "PagePlaceholder"]) {
    assert.equal(existsSync(file(`src/components/${component}.astro`)), true);
  }
});

test("obsolete public Chinese and legacy feature routes are absent", () => {
  assert.equal(existsSync(file("src/pages/zh/index.astro")), false);
  assert.equal(existsSync(file("src/pages/en/atherox.astro")), false);
  assert.equal(existsSync(file("src/pages/ja/bnct.astro")), false);
});

test("the Phase 1 CSS entrypoint contains layers only", () => {
  const css = readFileSync(file("src/styles/global.css"), "utf8");
  assert.equal(css.match(/@import/g)?.length, 5);
  assert.doesNotMatch(css, /\.hero|\.timeline-card/);
});
