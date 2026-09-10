# CSI Global Health Homepage Content Design

## Scope

This phase implements the public homepage only, in English and Japanese. It replaces the Phase 1 homepage placeholder at `/en/` and `/ja/`; it does not implement detailed About, Business, Experts, News or Contact page bodies, a news collection, or a submitting contact form.

## Source and content limits

- The approved homepage order in the formal site specification is binding.
- The supplied customer documents provide factual company, business, expert and global-structure information.
- `7937b129-1207-4def-af3a-427fadeae776.png` is the approved hero visual asset. Its existing geographic labels are treated as part of the approved artwork, not as added website claims.
- No email, phone number, postal address, president message, news item, medical-performance claim, partnership claim or expert credential may be invented.

## Homepage composition

1. **Hero** — sourced EN/JP headline and supporting line, two internal calls to action, and the supplied map visual. On desktop, copy uses the left column and the map uses the right column. On smaller screens, copy comes first and the map follows.
2. **Okayama University × CSI** — cautious research-foundation statement with research, translation and globalization pillars. The wording does not imply formal university operation, investment or partnership.
3. **Six business areas** — six data-driven cards using the existing `businessAreas` records. They render as six columns on desktop, three by two on tablet and a stack on mobile.
4. **Global Scientific Advisory Network** — the four supplied, source-backed expert records. Existing approved portraits are used only if their filenames and public use remain clear; otherwise the existing expert placeholder is used.
5. **Global Structure** — Japan, USA and global-network cards, using cautious source-backed positioning only.
6. **Research & News** — three navigation cards for Research Highlights, Publications and News & Updates. They do not contain made-up articles, dates or claims.
7. **CTA and footer** — a non-medical partnership prompt linking to Contact. Contact information remains a labelled placeholder.

## Component and data boundaries

- `HomePage.astro` composes the page only.
- `HomeHero.astro`, `UniversityFoundation.astro`, `BusinessAreaGrid.astro`, `ExpertNetwork.astro`, `GlobalStructure.astro`, `ResearchNewsLinks.astro` and `SiteCta.astro` own their respective sections.
- `src/data/home.ts` stores source-backed structured homepage records; business and expert sections import their existing focused data modules.
- `src/i18n/en.ts` and `src/i18n/ja.ts` provide all homepage interface copy.
- Native CSS remains split by tokens, layout, components and responsive rules. New home rules belong in a dedicated imported `home.css` layer.

## Visual and responsive rules

- The page follows the supplied reference direction: light, clinical, university-based, with navy typography, restrained medical blue, CSI red emphasis, fine borders and white panels.
- The map is rendered as a responsive image with meaningful alt text. It is not duplicated with a synthetic map or canvas effect.
- No black-tech treatment, neon gradients, video, WebGL, parallax or decorative animation is added.
- Hero, cards and action links preserve keyboard focus, semantic headings and reduced-motion support.

## Validation

- EN and JP homepages use the same section sequence.
- Each homepage has exactly one H1 and semantic section headings.
- The only public language controls are EN and JP.
- The Hero references the supplied map asset and not a generated substitute.
- `node --test tests/*.test.mjs`, `npm run build` and responsive browser checks pass.
