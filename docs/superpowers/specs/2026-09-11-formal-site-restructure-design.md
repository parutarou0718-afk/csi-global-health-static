# CSI Global Health Formal Website Restructure

## Decision and source precedence

The site will be rebuilt in the existing Astro static project (approach A), not replaced with a separate application. The implementation source order is:

1. `CSI PLAN.docx` for scope, technology, routes, component boundaries, SEO, accessibility, performance and delivery rules.
2. `网站详细结构.docx` for page information architecture.
3. `CSI Global Health.ver2.docx` and `CSI_Global_Health_中文版公司介绍_粒子医学战略版.docx` for factual company, business and expert content only.
4. The supplied English and Japanese homepage JPGs for visual hierarchy, density, palette and layout only.

No source grants permission to invent a company fact, relationship, medical claim, partner, credential, phone number, address, president message, publication or news item. Content that lacks a verified source remains a clearly labelled placeholder.

## Languages and routes

Version 1 officially supports English and Japanese only. Every public page has a corresponding same-page language link. The route and data boundaries must make a future Simplified Chinese variant straightforward, but V1 has no `/zh/` route, Chinese i18n module, route-equivalence requirement or public language-switcher entry.

| Area | Routes |
| --- | --- |
| Home | `/en/`, `/ja/` |
| About | `/{lang}/about/` |
| Business | `/{lang}/business/` |
| Experts | `/{lang}/experts/` |
| News list | `/{lang}/news/` |
| News detail | `/{lang}/news/{slug}/` |
| Contact | `/{lang}/contact/` |

The root route redirects to `/en/`. The default-language setting is isolated so it can change later without route rewrites.

## Information architecture

The desktop header and mobile navigation use the same six primary sections:

1. HOME
2. ABOUT US
3. BUSINESS
4. EXPERTS
5. NEWS
6. CONTACT

The president message is an About section, not a primary navigation item. The company profile, vision and global network are also About sections. The six business areas are an overview on Home and detailed sections on Business. The Experts page separates the Founder & CEO from the international advisory board.

## Homepage

The official homepage order is fixed:

1. Hero: approved map/network composition, sourced slogan and dual actions.
2. Okayama University x CSI: qualified university-origin statement, research, translation and globalization pillars.
3. Six business areas: Particle & Precision Medicine; BNCT / B-10 / DDS; Heavy Ion & Proton Therapy; Theranostics & Medical Imaging; Accelerator / Neutron Source / Advanced Engineering; Global Medical Technology Platform.
4. Global Scientific Advisory Network: four verified experts with supplied portraits.
5. Global Structure: Japan -> USA -> Global Network.
6. Research & News: Research Highlights, Publications and News & Updates links.
7. Bottom partnership CTA and footer.

At desktop the six business cards form six columns. At tablet they form a 3 x 2 grid; at mobile they stack. The hero remains two-column on large displays and becomes a content-first single column on small displays.

## Visual system

The supplied JPGs define a clean, light, university-based biomedical corporate direction: CSI navy, restrained medical blue, CSI red as the emphasis color, white panels, fine borders and low-radius surfaces. The site does not use an AI SaaS look, black-tech treatment, neon gradients, excessive glass, parallax, WebGL, video backgrounds or decorative motion.

Existing responsive hero/network visual work and verified visual assets are retained when compatible with the formal structure. New image slots use fixed aspect ratios and WebP-first sources, so future approved assets can replace placeholders without layout changes.

## Data and content model

Company profile and verified global-structure facts move to `src/data/company.ts`. Six business records move to `src/data/business.ts`. Expert records and bios move to `src/data/experts.ts`. UI copy belongs in separate `src/i18n/en.ts` and `src/i18n/ja.ts` modules. Astro page templates only compose data and components.

News uses Astro Content Collections. Each language variant is a separate Markdown item with title, slug, date, category, language, summary, image, featured and draft frontmatter. Only verified, sourced news is published; until supplied, the list provides non-factual structured placeholders marked as such.

## Page requirements

### About

Includes Who We Are, a president-message placeholder attributed to Eiji Matsuura, Vision, Global Network and a sourced Company Information table. The page communicates the Okayama University-based research foundation without stating an unverified formal university investment, operation or partnership.

### Business

Uses six full sections, each with the supplied English and Chinese/Japanese-equivalent title, verified description, key areas and a replaceable image slot. The language stays at research, development, translation, equipment introduction and international collaboration level; it does not make diagnostic, therapeutic-performance, regulatory or commercial claims.

### Experts

Displays Eiji Matsuura as Founder & CEO and Wolfgang A. G. Sauerwein, Sylviane Muller and Rameshwar Patil as advisory-board members. Bios are derived only from the supplied company documents. Additional names in the documents are not added until explicitly confirmed as public website experts.

### News

Provides language-aware list, category filtering through query parameters, static detail pages and featured/latest cards. Publications remain a News category rather than a distinct CMS.

### Contact

Provides the company identity, clearly labelled contact placeholders unless authoritative contact data is explicitly supplied, map placeholder and non-submitting inquiry form UI. It does not imply that a message is sent until a form service is intentionally configured.

## Engineering and quality gates

The site stays Astro + TypeScript + semantic HTML + native CSS + minimal native JavaScript. It does not add React, Vue, Tailwind, Bootstrap, a database or a traditional CMS. CSS uses design tokens for all brand colors, typography, spacing, container widths and breakpoints.

Required launch gates are: one H1 per page; semantic landmarks; alt text; visible focus; keyboard-safe menu; full EN/JP route equivalence; 1200px-class desktop layout, tablet and mobile reflow; WebP/AVIF-first images; meaningful lazy loading; per-page title, description, canonical and Open Graph metadata; sitemap and robots; no broken internal links; and a successful static build.

## Delivery sequence

1. Establish formal data, i18n, tokens and shared shell.
2. Rebuild the homepage to the approved formal structure.
3. Add About, Business, Experts and Contact pages.
4. Add Content Collections, News list and detail routes.
5. Complete multilingual, responsive, SEO, accessibility and static-build QA.
