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
  const header = readFileSync(file("src/components/Header.astro"), "utf8");
  const timeline = readFileSync(file("src/components/HistoryTimeline.astro"), "utf8");
  assert.match(header, /okayama-university\.svg/);
  assert.match(timeline, /okayama-university\.svg/);
});

test("homepage research cards use the dedicated visual asset pack", () => {
  for (const asset of ["bnct-cellular-network.webp", "atherox-biomarker-network.webp"]) {
    assert.equal(existsSync(file(`public/assets/${asset}`)), true, `${asset} is missing`);
  }
  const centers = readFileSync(file("src/components/BusinessCenters.astro"), "utf8");
  assert.match(centers, /bnct-cellular-network\.webp/);
  assert.match(centers, /atherox-biomarker-network\.webp/);
  assert.match(centers, /type="image\/webp"/);
});

test("homepage uses identity assets throughout the visual narrative", () => {
  const hero = readFileSync(file("src/components/Hero.astro"), "utf8");
  const timeline = readFileSync(file("src/components/HistoryTimeline.astro"), "utf8");
  const network = readFileSync(file("src/components/GlobalNetwork.astro"), "utf8");
  assert.match(hero, /world-map/);
  assert.match(hero, /map-dots/);
  assert.match(timeline, /csi-mark\.png/);
  assert.match(timeline, /timeline-flags/);
  assert.match(network, /network-brand/);
  assert.match(network, /okayama-university\.svg/);
});

test("tablet hero retains a constrained network visual", () => {
  const css = readFileSync(file("src/styles/global.css"), "utf8");
  assert.match(css, /@media\(max-width:1100px\)[\s\S]*?\.world-visual svg\{height:300px\}/);
});

test("mobile hero keeps its network visual compact", () => {
  const css = readFileSync(file("src/styles/global.css"), "utf8");
  assert.match(css, /@media\(max-width:700px\)[\s\S]*?\.world-visual svg\{height:210px\}/);
});

test("homepage shell preserves a clean timeline, footer identity, and mobile language access", () => {
  const timeline = readFileSync(file("src/components/HistoryTimeline.astro"), "utf8");
  const header = readFileSync(file("src/components/Header.astro"), "utf8");
  const css = readFileSync(file("src/styles/global.css"), "utf8");
  assert.match(timeline, /class="timeline-card"/);
  assert.match(css, /\.timeline-card\{list-style:none/);
  assert.match(header, /mobile-language-switcher/);
  assert.match(css, /\.footer-brand \.okayama-mark\{width:120px/);
  assert.match(css, /\.footer-brand>img\{mix-blend-mode:multiply/);
});

test("homepage visual system supports motion preferences and localized footer copy", () => {
  const footer = readFileSync(file("src/components/Footer.astro"), "utf8");
  const css = readFileSync(file("src/styles/global.css"), "utf8");
  assert.match(footer, /import \{ home, nav, site/);
  assert.match(footer, /\{t\.cta\}/);
  assert.match(footer, /\{t\.ctaSub\}/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});

test("homepage maintains a visible keyboard focus treatment", () => {
  const css = readFileSync(file("src/styles/global.css"), "utf8");
  assert.match(css, /:focus-visible\{outline:3px solid #d71936/);
});
