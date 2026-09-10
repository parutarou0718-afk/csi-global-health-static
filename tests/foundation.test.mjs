import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("..", import.meta.url);
const file = (path) => new URL(path, root);

test("V1 exposes only English and Japanese public language routes", () => {
  const i18n = readFileSync(file("src/lib/i18n.ts"), "utf8");
  assert.match(i18n, /export type Lang = "en" \| "ja"/);
  assert.match(i18n, /supportedLanguages = \["en", "ja"\]/);
  assert.doesNotMatch(i18n, /"zh"/);
});

test("contact data remains a labelled placeholder", () => {
  const company = readFileSync(file("src/data/company.ts"), "utf8");
  assert.match(company, /status: "placeholder"/);
  assert.doesNotMatch(company, /info@csi-globalhealth\.com/);
});

test("the planned V1 data modules exist", () => {
  for (const path of [
    "src/data/business.ts",
    "src/data/experts.ts",
    "src/i18n/en.ts",
    "src/i18n/ja.ts",
  ]) {
    assert.equal(existsSync(file(path)), true, `${path} is missing`);
  }
});

test("the public shell is EN/JP-only and root redirects to English", () => {
  const header = readFileSync(file("src/components/Header.astro"), "utf8");
  const root = readFileSync(file("src/pages/index.astro"), "utf8");
  assert.match(header, /supportedLanguages/);
  assert.doesNotMatch(header, /zh/);
  assert.match(root, /redirect\("\/en\/"\)/);
  assert.equal(existsSync(file("src/pages/zh/index.astro")), false);
});

test("EN and JP expose only the approved six top-level routes", () => {
  for (const lang of ["en", "ja"]) {
    for (const page of ["index", "about", "business", "experts", "news", "contact"]) {
      assert.equal(existsSync(file(`src/pages/${lang}/${page}.astro`)), true, `${lang}/${page} is missing`);
    }
    for (const legacy of ["advisors", "atherox", "bnct", "history"]) {
      assert.equal(existsSync(file(`src/pages/${lang}/${legacy}.astro`)), false, `${lang}/${legacy} is still public`);
    }
  }
});

test("foundation styling is tokenized and placeholder assets exist", () => {
  const globalCss = readFileSync(file("src/styles/global.css"), "utf8");
  const tokens = readFileSync(file("src/styles/tokens.css"), "utf8");
  assert.match(globalCss, /@import "\.\/tokens\.css"/);
  assert.match(tokens, /--csi-navy: #0b315e/);
  assert.equal(existsSync(file("public/images/home/hero-map-placeholder.svg")), true);
});

test("handoff documentation defines the V1 content boundaries", () => {
  const agents = readFileSync(file("AGENTS.md"), "utf8");
  const readme = readFileSync(file("README.md"), "utf8");
  assert.match(agents, /Do not invent company facts/);
  assert.match(agents, /English and Japanese only/);
  assert.match(readme, /src\/data\/company\.ts/);
  assert.match(readme, /\/en\//);
  assert.match(readme, /\/ja\//);
  assert.doesNotMatch(readme, /Languages:.*Chinese/);
});
