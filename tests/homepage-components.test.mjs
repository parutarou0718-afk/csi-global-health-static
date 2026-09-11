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
  assert.match(css, /@import "\.\/tokens\.css"/);
  assert.doesNotMatch(css, /\.hero|\.timeline-card/);
});

test("homepage uses the Word-required six-section sequence", () => {
  const home = readFileSync(file("src/components/HomePage.astro"), "utf8");
  for (const component of ["HomeHero", "AboutCsi", "BusinessAreaGrid", "ExpertNetwork", "NewsPreview", "PartnershipCta"]) {
    assert.match(home, new RegExp(`<${component} lang=\\{lang\\}`));
  }
  assert.doesNotMatch(home, /GlobalStructure|UniversityFoundation|ResearchNewsLinks/);
});

test("hero map uses its own pale edge without fading blue map features", () => {
  const hero = readFileSync(file("src/components/home/HomeHero.astro"), "utf8");
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  assert.match(hero, /class="home-hero__art"/);
  assert.match(hero, /width="2240" height="1060"/);
  assert.doesNotMatch(hero, /home-hero__fade/);
  assert.match(css, /\.home-hero__art \{ position: absolute;/);
  assert.doesNotMatch(css, /\.home-hero__fade/);
  assert.match(css, /min-height: 25rem/);
  assert.match(css, /min-height: 18rem/);
  assert.match(css, /left: 40%/);
  assert.match(css, /width: 60%/);
  assert.match(css, /max-width: 30rem/);
  assert.match(css, /max-width: 24rem/);
  assert.match(css, /font-size: var\(--font-size-hero\)/);
  assert.match(css, /height: auto/);
  assert.match(css, /mix-blend-mode: normal/);
});

test("EN and JP routes render the shared homepage with its dedicated style layer", () => {
  for (const lang of ["en", "ja"]) {
    const page = readFileSync(file(`src/pages/${lang}/index.astro`), "utf8");
    assert.match(page, new RegExp(`<HomePage lang="${lang}"`));
  }
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  assert.match(css, /\.home-hero/);
  assert.match(css, /@media \(max-width: 63\.9375rem\)/);
  assert.match(readFileSync(file("src/styles/global.css"), "utf8"), /@import "\.\/home\.css"/);
});
