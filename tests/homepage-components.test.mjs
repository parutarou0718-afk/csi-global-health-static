import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("..", import.meta.url);
const file = (path) => new URL(path, root);

test("homepage is assembled from focused shared components", () => {
  for (const component of ["Header", "Footer", "Hero", "HistoryTimeline", "BusinessCenters", "AdvisorGrid", "GlobalNetwork", "ResearchNews"]) {
    assert.equal(existsSync(file(`src/components/${component}.astro`)), true, `${component}.astro is missing`);
  }
  const home = readFileSync(file("src/components/HomePage.astro"), "utf8");
  assert.match(home, /<Hero lang=\{lang\}/);
  assert.match(home, /<HistoryTimeline lang=\{lang\}/);
  assert.match(home, /<BusinessCenters lang=\{lang\}/);
});

test("official Okayama University vector asset is available", () => {
  assert.equal(existsSync(file("public/assets/okayama-university.svg")), true);
});
