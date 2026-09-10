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
