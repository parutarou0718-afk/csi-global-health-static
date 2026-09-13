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

test("homepage omits the duplicate partnership section", () => {
  const home = readFileSync(file("src/components/HomePage.astro"), "utf8");
  for (const component of ["HomeHero", "AboutCsi", "BusinessAreaGrid", "ExpertNetwork", "NewsPreview"]) {
    assert.match(home, new RegExp(`<${component} lang=\\{lang\\}`));
  }
  assert.doesNotMatch(home, /PartnershipCta/);
  assert.doesNotMatch(home, /GlobalStructure|UniversityFoundation|ResearchNewsLinks/);
});

test("business area cards use their dedicated generated icons", () => {
  const businessData = readFileSync(file("src/data/business.ts"), "utf8");
  const businessComponent = readFileSync(file("src/components/home/BusinessAreaGrid.astro"), "utf8");
  const css = readFileSync(file("src/styles/home.css"), "utf8");

  for (const icon of [
    "particle-medicine-precision-oncology.png",
    "bnct-b10-dds.png",
    "heavy-ion-proton-therapy.png",
    "theranostics-medical-imaging.png",
    "accelerator-neutron-source.png",
    "global-medical-industry-platform.png",
  ]) {
    assert.ok(businessData.includes(icon), `${icon} is not referenced by business data`);
    assert.equal(existsSync(file(`public/images/home/business/${icon}`)), true, `${icon} is missing`);
  }

  assert.match(businessComponent, /area\.icon/);
  assert.doesNotMatch(businessComponent, /\{area\.number\}/);
  assert.match(css, /\.business-card__icon/);
  assert.match(css, /\.business-card__icon \{[\s\S]*?align-self: center/);
});

test("scientific network portraits use larger rounded rectangular frames without cropping", () => {
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  assert.match(css, /\.expert-card img \{[\s\S]*?border-radius: var\(--radius-md\)/);
  assert.match(css, /\.expert-card img \{[\s\S]*?object-fit: contain/);
  assert.match(css, /\.home-experts__grid \{[\s\S]*?grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.expert-card img \{[\s\S]*?width: 8rem[\s\S]*?height: 10rem/);
  assert.match(css, /\.expert-card h3 \{[\s\S]*?font-size: var\(--font-size-lg\)/);
  assert.doesNotMatch(css, /\.expert-card img \{[^}]*?border:/);
});

test("footer uses compact vertical spacing", () => {
  const componentCss = readFileSync(file("src/styles/components.css"), "utf8");
  assert.match(componentCss, /\.site-footer \{[\s\S]*?padding-top: var\(--space-6\)/);
  assert.match(componentCss, /\.footer-grid \{[\s\S]*?padding-bottom: var\(--space-6\)/);
  assert.match(componentCss, /\.site-footer nav \{[\s\S]*?display: flex[\s\S]*?flex-wrap: wrap[\s\S]*?gap: var\(--space-3\)/);
});

test("About CSI keeps the university mark on white and reserves its three feature icons", () => {
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  const aboutComponent = readFileSync(file("src/components/home/AboutCsi.astro"), "utf8");
  const bnctData = readFileSync(file("src/data/okayama-bnct.ts"), "utf8");
  assert.match(css, /\.home-about__identity[\s\S]*?background: var\(--csi-white\)/);
  assert.match(aboutComponent, /about\.paragraphs\.map/);
  assert.match(aboutComponent, /about\.themes\.map/);
  assert.match(aboutComponent, /class="home-about__themes"/);
  assert.match(css, /\.home-about__themes/);
  assert.match(bnctData, /title: "Okayama University × BNCT"/);
  assert.match(bnctData, /long-standing research foundation in BNCT and particle medicine/);
  assert.match(css, /\.home-about__copy p \{[\s\S]*?font-size: var\(--font-size-base\)/);
  assert.match(bnctData, /research-microscope\.png/);
  assert.match(bnctData, /translation-dna\.png/);
  assert.match(bnctData, /globalization-globe\.png/);

  for (const icon of ["research-microscope.png", "translation-dna.png", "globalization-globe.png"]) {
    assert.equal(existsSync(file(`public/images/home/icons/${icon}`)), true, `${icon} is missing`);
  }
});

test("hero map uses its own pale edge without fading blue map features", () => {
  const hero = readFileSync(file("src/components/home/HomeHero.astro"), "utf8");
  const css = readFileSync(file("src/styles/home.css"), "utf8");
  const homeData = readFileSync(file("src/data/home.ts"), "utf8");
  assert.match(hero, /class="home-hero__art"/);
  assert.match(hero, /hero\.titleLines/);
  assert.match(homeData, /titleLines: \["From Science to Medicine\.", "From Innovation to", "Patients\. From Japan to", "the World\."\]/);
  assert.match(hero, /width="2240" height="1060"/);
  assert.doesNotMatch(hero, /home-hero__fade/);
  assert.match(css, /\.home-hero__art \{ position: absolute;/);
  assert.doesNotMatch(css, /\.home-hero__fade/);
  assert.match(css, /min-height: 25rem/);
  assert.match(css, /min-height: 18rem/);
  assert.match(css, /left: 45%/);
  assert.match(css, /width: 55%/);
  assert.match(css, /max-width: 30rem/);
  assert.match(css, /max-width: 25rem/);
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
