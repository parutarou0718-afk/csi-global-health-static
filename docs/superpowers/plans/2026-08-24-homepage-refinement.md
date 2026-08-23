# CSI Global Health Homepage Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the multilingual homepage into a component-based, responsive implementation that closely follows the approved dual-center visual direction.

**Architecture:** Keep Astro static rendering and `src/data/site.ts` as the single language-content source. Replace the monolithic homepage markup with eight presentational Astro components assembled by `HomePage.astro`; all visual effects remain CSS and inline SVG, with no client framework or animation library.

**Tech Stack:** Astro 5, TypeScript, Astro components, plain CSS, static assets.

## Global Constraints

- Preserve the company-history and Japan / USA dual-center information architecture.
- Keep `output: 'static'`; do not add React, Vue, Tailwind, a database, SSR, or an animation framework.
- Use original SVG/CSS visual work; do not use the approved mockup or PDF slides as page imagery.
- Keep AtherOx® as research / technology information; do not introduce diagnostic, treatment, registration, performance, CE, FDA, GMP, or RUO claims.
- Support `/ja/`, `/en/`, and `/zh/` with the same component tree and equivalent language switching.
- Meet keyboard, semantic-navigation, alt-text, contrast, and `prefers-reduced-motion` requirements.

---

## File structure

- `src/components/Header.astro` — shared accessible navigation and same-page language links.
- `src/components/Hero.astro` — copy, CTA, and the SVG dual-center world network.
- `src/components/HistoryTimeline.astro` — four-stage company development story.
- `src/components/BusinessCenters.astro` — BNCT and AtherOx® business cards.
- `src/components/AdvisorGrid.astro` — advisor cards built from `advisors` data.
- `src/components/GlobalNetwork.astro` — Japan, USA, and global-partner network.
- `src/components/ResearchNews.astro` — three content entry cards.
- `src/components/Footer.astro` — shared footer and Okayama University SVG mark.
- `src/components/HomePage.astro` — homepage composition only.
- `src/layouts/BaseLayout.astro` — page shell and component composition of Header/Footer.
- `src/data/site.ts` — typed shared navigation, route, and homepage data.
- `src/styles/global.css` — scoped-by-class desktop and mobile presentation rules.
- `public/assets/okayama-university.svg` — supplied official vector mark.
- `public/assets/*.jpg` — four higher-resolution advisor portraits extracted from the supplied company profile PDF.

### Task 1: Import verified assets and establish typed route helpers

**Files:**
- Create: `public/assets/okayama-university.svg`
- Replace: `public/assets/eiji-matsuura.jpg`
- Replace: `public/assets/wolfgang-sauerwein.jpg`
- Replace: `public/assets/sylviane-muller.jpg`
- Replace: `public/assets/rameshwar-patil.jpg`
- Modify: `src/data/site.ts`

**Consumes:** the supplied `title.svg` and company-profile PDF page 5.

**Produces:** `Lang`, `langOrder`, `pagePath(lang, pathname)`, `nav`, `home`, and `advisors` data consumed by page components.

- [ ] Extract the four page-5 portrait images at their embedded PDF dimensions, crop only when preserving the current card aspect ratio, and write them to the named files above.
- [ ] Copy the supplied `title.svg` unchanged to `public/assets/okayama-university.svg`.
- [ ] Add the route helper in `src/data/site.ts`:

```ts
export const site = {
  company: "CSI Global Health, Co., Ltd.",
  email: "info@csi-globalhealth.com",
  tagline: {
    ja: "大学発バイオメディカル・スタートアップ",
    en: "University-based Biomedical Start Up",
    zh: "大学科研型生物医疗创新企业"
  },
  address: {
    ja: "〒700-8530 岡山県岡山市北区津島中1-1-1 岡山大学内",
    en: "1-1-1 Tsushima-naka, Kita-ku, Okayama 700-8530, Japan",
    zh: "日本冈山县冈山市北区津岛中1-1-1 冈山大学内"
  }
};

export const langOrder: Lang[] = ["ja", "en", "zh"];

export function pagePath(lang: Lang, pathname: string): string {
  const stripped = pathname.replace(/^\/(ja|en|zh)(?=\/|$)/, "");
  return `/${lang}${stripped === "/" ? "/" : stripped}`;
}
```

- [ ] Verify asset dimensions with Pillow and test the helper against `/ja/atherox/`, `/en/news/`, and `/zh/` through an Astro page import or a small Node assertion.
- [ ] Commit: `feat: add verified homepage assets`.

### Task 2: Build shared page shell, accessible navigation, and footer

**Files:**
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`

**Consumes:** `site`, `nav`, `langOrder`, and `pagePath` from `src/data/site.ts`.

**Produces:** a shared shell accepting `lang: Lang` and a page title, with same-page language targets, semantic navigation, and mobile-menu state.

- [ ] Create `Header.astro` with the interface below; keep the menu script inline and minimal:

```astro
---
import { langOrder, nav, pagePath, site, type Lang } from "../data/site";
const { lang, pathname } = Astro.props as { lang: Lang; pathname: string };
---
<header class="site-header">
  <a class="brand" href={`/${lang}/`} aria-label={site.company}>
    <img src="/assets/csi-mark.png" alt="" />
    <span><strong>{site.company}</strong><small>{site.tagline[lang]}</small></span>
  </a>
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">Menu</button>
  <nav id="primary-navigation" class="main-nav" aria-label="Primary navigation">
    {nav[lang].map(([label, href]) => <a class:list={{ active: pathname === href }} href={href}>{label}</a>)}
  </nav>
  <nav class="langs" aria-label="Language switcher">
    {langOrder.map((target) => <a aria-current={target === lang ? "page" : undefined} href={pagePath(target, pathname)}>{target.toUpperCase()}</a>)}
  </nav>
</header>
<script>
  const button = document.querySelector<HTMLButtonElement>(".menu-toggle");
  button?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(open));
  });
</script>
```

- [ ] Create `Footer.astro` using `/assets/okayama-university.svg` with an explicit `alt="Okayama University"`; preserve the localized CTA and contact information.
- [ ] Replace the header/footer markup in `BaseLayout.astro` with `<Header lang={lang} pathname={Astro.url.pathname} />`, `<main><slot /></main>`, and `<Footer lang={lang} />`.
- [ ] Add desktop and mobile CSS so the navigation is horizontal at 1101px and above, and the menu button controls the collapsed navigation at 1100px and below.
- [ ] Verify with `npm run build`; in the browser, verify a same-page language link from `/ja/atherox/` points to `/en/atherox/` and the menu button toggles `aria-expanded`.
- [ ] Commit: `feat: add shared multilingual site shell`.

### Task 3: Split homepage narrative components

**Files:**
- Create: `src/components/Hero.astro`
- Create: `src/components/HistoryTimeline.astro`
- Create: `src/components/BusinessCenters.astro`
- Create: `src/components/AdvisorGrid.astro`
- Create: `src/components/GlobalNetwork.astro`
- Create: `src/components/ResearchNews.astro`
- Modify: `src/components/HomePage.astro`
- Modify: `src/data/site.ts`

**Consumes:** `home[lang]`, `advisors`, and `Lang` from `src/data/site.ts`.

**Produces:** six focused homepage components, each consuming only its required typed data.

- [ ] Add interfaces at the top of every component, e.g.:

```astro
---
import type { Lang } from "../data/site";
const { lang } = Astro.props as { lang: Lang };
---
```

- [ ] Implement `Hero.astro` using an inline SVG with text labels Japan, USA, Europe, and China / Asia. Give the SVG `role="img"` and a localized `<title>`; keep decorative arcs `aria-hidden="true"`.
- [ ] Implement `HistoryTimeline.astro` by mapping `home[lang].steps`; use an ordered list so the four stages preserve chronological semantics.
- [ ] Implement `BusinessCenters.astro` with `<article>` elements for BNCT and AtherOx®, localized CTAs, and original abstract SVG/CSS decoration. Keep the existing research-only AtherOx® description.
- [ ] Implement `AdvisorGrid.astro`, `GlobalNetwork.astro`, and `ResearchNews.astro` by moving the current mapped card data without changing their language copy.
- [ ] Reduce `HomePage.astro` to this composition:

```astro
---
import Hero from "./Hero.astro";
import HistoryTimeline from "./HistoryTimeline.astro";
import BusinessCenters from "./BusinessCenters.astro";
import AdvisorGrid from "./AdvisorGrid.astro";
import GlobalNetwork from "./GlobalNetwork.astro";
import ResearchNews from "./ResearchNews.astro";
import type { Lang } from "../data/site";
const { lang } = Astro.props as { lang: Lang };
---
<Hero lang={lang} />
<HistoryTimeline lang={lang} />
<BusinessCenters lang={lang} />
<AdvisorGrid lang={lang} />
<GlobalNetwork lang={lang} />
<ResearchNews lang={lang} />
```

- [ ] Run `npm run build` and inspect the three homepage DOM trees for one `h1`, four timeline stages, two business cards, four advisor cards, and three research cards.
- [ ] Commit: `refactor: componentize multilingual homepage`.

### Task 4: Apply the approved desktop visual system

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/Hero.astro`
- Modify: `src/components/HistoryTimeline.astro`
- Modify: `src/components/BusinessCenters.astro`
- Modify: `src/components/AdvisorGrid.astro`
- Modify: `src/components/GlobalNetwork.astro`
- Modify: `src/components/ResearchNews.astro`

**Consumes:** the component class contracts from Task 3.

**Produces:** the 1440px desktop composition with reference-like proportions, rhythm, borders, emphasis, and visual density.

- [ ] Define and use the existing semantic color tokens only: `--navy`, `--navy2`, `--red`, `--blue`, `--ink`, `--muted`, and `--line`.
- [ ] Set the desktop content width to 1440px and give Hero a left copy column with a right SVG network field; use red solely for the Japan node and primary CTA.
- [ ] Give the timeline a single bordered surface with directional separators, business cards equal height and 24px gap, advisor cards aligned portraits, and the global network a three-hub visual hierarchy.
- [ ] Add only `transform`/`opacity` keyframe effects for hero nodes and arcs, gated by:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
}
```

- [ ] Capture a 1440px homepage screenshot and compare it to `docs/reference/approved-homepage.png`: Hero balance, timeline density, card borders, advisor row, network row, research row, and footer all remain visibly present without copied imagery.
- [ ] Run `npm run build`.
- [ ] Commit: `feat: refine approved homepage visual system`.

### Task 5: Finish responsive, language, and accessibility QA

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/Header.astro` if QA finds menu-state defects
- Modify: `src/components/Hero.astro` if QA finds SVG labeling defects

**Consumes:** the completed component tree and CSS from Tasks 2–4.

**Produces:** responsive pages with validated language routing and accessible controls.

- [ ] At 1024px, verify the desktop information order persists and the header menu is reachable; at 768px, verify business and advisor grids reflow without clipping; at 375px and 430px, verify single-column Hero, vertical timeline, business cards, advisor cards, global network, research cards, and footer.
- [ ] Tab through Header, language switcher, primary CTA, business CTAs, advisor link, research links, and footer CTA. Confirm visible focus and no keyboard trap.
- [ ] Verify `/`, `/ja/`, `/en/`, and `/zh/`; verify same-page language switching for the homepage and `/atherox/` across all three languages.
- [ ] Run `npm run build` and confirm the static build completes with zero errors.
- [ ] Review `git diff --check` and `git status --short`.
- [ ] Commit: `fix: complete responsive multilingual homepage qa`.
