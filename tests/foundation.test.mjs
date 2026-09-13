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

test("contact data contains the verified public contact details", () => {
  const company = readFileSync(file("src/data/company.ts"), "utf8");
  assert.match(company, /eijimatu@md\.okayama-u\.ac\.jp/);
  assert.match(company, /086-251-8088/);
  assert.match(company, /status: "verified"/);
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

test("homepage content uses the supplied static network map and bilingual source data", () => {
  const home = readFileSync(file("src/data/home.ts"), "utf8");
  assert.match(home, /global-network-map\.png/);
  assert.match(home, /export const homeContent/);
  assert.equal(existsSync(file("public/images/home/global-network-map.png")), true);
});

test("homepage preserves EN/JP-only and public-contact boundaries", () => {
  const hero = readFileSync(file("src/components/home/HomeHero.astro"), "utf8");
  const company = readFileSync(file("src/data/company.ts"), "utf8");
  const readme = readFileSync(file("README.md"), "utf8");
  assert.doesNotMatch(hero, /info@csi-globalhealth\.com/);
  assert.match(company, /status: "verified"/);
  assert.equal(existsSync(file("src/pages/zh/index.astro")), false);
  assert.match(readme, /global-network-map\.png/);
});

test("homepage data follows the Word structure without fabricated news", () => {
  const home = readFileSync(file("src/data/home.ts"), "utf8");
  const experts = readFileSync(file("src/data/experts.ts"), "utf8");
  assert.match(home, /about:/);
  assert.match(home, /news:/);
  assert.match(home, /partnership:/);
  assert.doesNotMatch(home, /globalStructure:/);
  assert.match(experts, /institution:/);
});

test("README identifies the Word document as the homepage structure authority", () => {
  const readme = readFileSync(file("README.md"), "utf8");
  assert.match(readme, /网站详细结构\.docx/);
});

test("About page facts and bilingual copy remain source-backed", () => {
  const company = readFileSync(file("src/data/company.ts"), "utf8");
  const experts = readFileSync(file("src/data/experts.ts"), "utf8");
  const en = readFileSync(file("src/i18n/en.ts"), "utf8");
  const ja = readFileSync(file("src/i18n/ja.ts"), "utf8");

  assert.match(company, /May 1, 2026/);
  assert.match(company, /2026年5月1日/);
  assert.match(company, /Cardiovascular Solutions and Innovations, LLC/);
  assert.match(experts, /Founder & CEO/);
  assert.match(en, /connect scientific research with clinical translation/);
  assert.match(ja, /科学研究を臨床応用と国際連携へつなぐ/);
  assert.match(en, /About CSI/);
  assert.match(ja, /CSIについて/);
});

test("About page composes the approved structure without a generic placeholder", () => {
  const about = readFileSync(file("src/components/AboutPage.astro"), "utf8");
  const enPage = readFileSync(file("src/pages/en/about.astro"), "utf8");
  const jaPage = readFileSync(file("src/pages/ja/about.astro"), "utf8");

  for (const section of ["about-hero", "about-who", "about-foundation", "about-founder", "about-strategy", "about-network", "about-vision", "about-profile", "about-cta"]) {
    assert.match(about, new RegExp(`class=\"${section}`));
  }
  assert.match(about, /Message content to be provided\.|copy\.founder\.message/);
  assert.match(about, /business\//);
  assert.match(about, /experts\//);
  assert.match(about, /<h1>/);
  assert.match(about, /alt=\{copy\.hero\.cityAlt\}/);
  assert.match(about, /alt=\{copy\.hero\.globeAlt\}/);
  assert.doesNotMatch(enPage, /PagePlaceholder/);
  assert.doesNotMatch(jaPage, /PagePlaceholder/);
  assert.match(enPage, /<AboutPage lang="en"/);
  assert.match(jaPage, /<AboutPage lang="ja"/);
});

test("About page styling provides a compact responsive visual hierarchy", () => {
  const css = readFileSync(file("src/styles/about.css"), "utf8");
  const global = readFileSync(file("src/styles/global.css"), "utf8");
  assert.match(global, /@import "\.\/about\.css"/);
  assert.match(css, /\.about-hero[\s\S]*?min-height: 24rem/);
  assert.match(css, /\.about-strategy__grid[\s\S]*?repeat\(3/);
  assert.match(css, /\.about-network__flow[\s\S]*?repeat\(3/);
  assert.match(css, /@media \(max-width: 47\.9375rem\)/);
});

test("Business overview cards omit decorative arrows", () => {
  const business = readFileSync(file("src/components/BusinessPage.astro"), "utf8");
  const overview = business.match(/<section class="business-overview[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.doesNotMatch(overview, /<span aria-hidden="true">→<\/span>/);
  assert.match(overview, /id=\{area\.id\}/);
  assert.match(business, /heroDescription/);
});

test("Business detail rows alternate the image position", () => {
  const business = readFileSync(file("src/components/BusinessPage.astro"), "utf8");
  const css = readFileSync(file("src/styles/business.css"), "utf8");

  assert.match(business, /business-details__item--reverse/);
  assert.match(css, /\.business-details__item--reverse[\s\S]*?grid-template-columns: 1fr 30%/);
  assert.match(css, /\.business-details \.business-details__item--reverse[\s\S]*?grid-template-columns: 1fr 30%/);
});

test("Business detail titles and descriptions share a compact text row", () => {
  const business = readFileSync(file("src/components/BusinessPage.astro"), "utf8");
  const css = readFileSync(file("src/styles/business.css"), "utf8");

  assert.match(business, /business-details__content/);
  assert.match(css, /\.business-details__content[\s\S]*?grid-template-columns/);
  assert.match(css, /\.business-details img[\s\S]*?height: 8rem/);
});

test("Business overview uses the supplied six matching icons", () => {
  const business = readFileSync(file("src/components/BusinessPage.astro"), "utf8");
  const icons = ["network", "molecule", "atom", "dna", "engineering", "global"];

  for (const icon of icons) {
    const path = `public/images/business/icons/${icon}.png`;
    assert.equal(existsSync(file(path)), true, `${path} is missing`);
    assert.match(business, new RegExp(`/images/business/icons/${icon}\\.png`));
  }
});

test("Business translation section renders a four-step icon flow", () => {
  const business = readFileSync(file("src/components/BusinessPage.astro"), "utf8");
  const css = readFileSync(file("src/styles/business.css"), "utf8");

  for (const icon of ["research", "technology", "clinical", "global"]) {
    assert.equal(existsSync(file(`public/images/business/translation/${icon}.png`)), true);
    assert.match(business, new RegExp(`/images/business/translation/${icon}\\.png`));
  }
  assert.match(business, /business-translation__steps/);
  assert.doesNotMatch(business, /business-translation__number/);
  assert.match(css, /\.business-translation__step/);
  assert.match(css, /clip-path/);
  assert.match(css, /\.business-translation__step[\s\S]*?min-height: 5\.5rem/);
  assert.match(css, /\.business-translation__step img[\s\S]*?width:3rem/);
  assert.match(css, /\.business-translation__step h3[\s\S]*?font-size:var\(--font-size-lg\)/);
});

test("Experts page is data-driven and includes no unverified experts", () => {
  const expertsData = readFileSync(file("src/data/experts.ts"), "utf8");
  const component = readFileSync(file("src/components/ExpertsPage.astro"), "utf8");
  const enPage = readFileSync(file("src/pages/en/experts.astro"), "utf8");
  const jaPage = readFileSync(file("src/pages/ja/experts.astro"), "utf8");

  assert.match(expertsData, /expertPlacement/);
  assert.match(expertsData, /"eiji-matsuura": "founder"/);
  assert.match(expertsData, /"wolfgang-sauerwein": "network"/);
  assert.match(component, /expertPlacement\[expert\.slug\] === "founder"/);
  assert.match(component, /expertPlacement\[expert\.slug\] === "network"/);
  assert.match(component, /src=\{expert\.portrait\}/);
  assert.doesNotMatch(component, /Takeshi Nakamura/);
  assert.match(enPage, /<ExpertsPage lang="en"/);
  assert.match(jaPage, /<ExpertsPage lang="ja"/);
});

test("Experts page uses the client-approved profile and background assets", () => {
  const expertsData = readFileSync(file("src/data/experts.ts"), "utf8");
  const component = readFileSync(file("src/components/ExpertsPage.astro"), "utf8");

  for (const [portrait, extension] of [["eiji-matsuura", "jpeg"], ["wolfgang-sauerwein", "png"], ["sylviane-muller", "jpeg"], ["rameshwar-patil", "jpeg"]]) {
    assert.match(expertsData, new RegExp(`portrait: "/images/experts/${portrait}\\.${extension}"`));
    assert.equal(existsSync(file(`public/images/experts/${portrait}.${extension}`)), true);
  }
  for (const asset of ["hero-global-research.png", "collaboration-lab.png"]) {
    assert.equal(existsSync(file(`public/images/experts/${asset}`)), true);
    assert.match(component, new RegExp(`/images/experts/${asset.replace(".", "\\.")}`));
  }
  assert.match(component, /src=\{expert\.portrait\}/);
});

test("Expert portraits preserve their original framing", () => {
  const css = readFileSync(file("src/styles/experts.css"), "utf8");

  assert.match(css, /\.experts-founder__card > img\s*\{[^}]*object-fit:\s*contain/);
  assert.match(css, /\.experts-network__card > img\s*\{[^}]*object-fit:\s*contain/);
  assert.match(css, /\.experts-network__card > img\s*\{[^}]*height:\s*13rem/);
});

test("Experts hero omits the secondary statement and keeps lower sections compact", () => {
  const component = readFileSync(file("src/components/ExpertsPage.astro"), "utf8");
  const css = readFileSync(file("src/styles/experts.css"), "utf8");

  assert.doesNotMatch(component, /Science for a Healthier World/);
  assert.match(css, /\.experts-expertise__grid article\s*\{[^}]*align-items:\s*center/);
  assert.match(css, /\.experts-collaboration__inner\s*\{[^}]*min-height:\s*11rem/);
  assert.match(css, /\.experts-collaboration h2\s*\{[^}]*font-size:\s*var\(--font-size-xl\)/);
});

test("News page is driven by the approved website-launch announcement", () => {
  const newsData = readFileSync(file("src/data/news.ts"), "utf8");
  const component = readFileSync(file("src/components/NewsPage.astro"), "utf8");
  const article = readFileSync(file("src/components/NewsArticlePage.astro"), "utf8");
  const enArticle = readFileSync(file("src/pages/en/news/[slug].astro"), "utf8");
  const jaArticle = readFileSync(file("src/pages/ja/news/[slug].astro"), "utf8");

  assert.match(newsData, /website-launch/);
  assert.equal(existsSync(file("public/images/news/website-launch.png")), true);
  assert.match(component, /featured/);
  assert.match(component, /newsItems\.map/);
  assert.match(component, /href=\{`\/\$\{lang\}\/news\/\$\{featured\.slug\}\//);
  assert.match(article, /item\.body\[lang\]/);
  assert.match(enArticle, /getStaticPaths/);
  assert.match(jaArticle, /getStaticPaths/);
  const css = readFileSync(file("src/styles/news.css"), "utf8");
  assert.match(css, /\.news-featured\s*\{[^}]*max-width:\s*56rem/);
  assert.match(css, /\.news-featured > img\s*\{[^}]*min-height:\s*12rem/);
  assert.match(css, /\.news-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/);
});

test("Homepage news preview reads the shared published news data", () => {
  const preview = readFileSync(file("src/components/home/NewsPreview.astro"), "utf8");

  assert.match(preview, /import \{ newsItems \} from "\.\.\/\.\.\/data\/news"/);
  assert.match(preview, /const latest = newsItems\[0\]/);
  assert.match(preview, /latest\.title\[lang\]/);
  assert.match(preview, /latest\.image/);
  assert.match(preview, /\/news\/\$\{latest\.slug\}/);
});

test("Contact page exposes the verified contact details without a form", () => {
  const component = readFileSync(file("src/components/ContactPage.astro"), "utf8");
  const enPage = readFileSync(file("src/pages/en/contact.astro"), "utf8");
  const jaPage = readFileSync(file("src/pages/ja/contact.astro"), "utf8");

  assert.match(component, /companyContact/);
  assert.match(component, /mailto:/);
  assert.match(component, /tel:/);
  assert.doesNotMatch(component, /<form/);
  assert.match(enPage, /<ContactPage lang="en"/);
  assert.match(jaPage, /<ContactPage lang="ja"/);
});
