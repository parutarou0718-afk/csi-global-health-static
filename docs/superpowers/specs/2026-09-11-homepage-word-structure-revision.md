# Homepage Structure Revision: Word Document Authority

## Authority

For homepage information architecture, `网站详细结构.docx` is authoritative. The supplied visual JPGs and the supplied global-network map define visual direction and may be used as artwork, but do not define homepage section order or content requirements.

This revision supersedes the homepage composition in `2026-09-11-homepage-content-design.md` where the two documents differ.

## Final homepage sequence

1. **Hero** — company name and Okayama University-based subtitle are supplied by the shared header. The Hero uses the document’s three-part EN/JP slogan, a short company introduction, the approved global-network map, and exactly two actions: Learn about CSI and Contact.
2. **About CSI** — a concise company-positioning section covering the Okayama University research foundation, particle medicine and precision medicine, clinical translation, and international medical-technology and industry collaboration. It links to About.
3. **Our Business** — a six-card overview drawn from `businessAreas`, linking to Business.
4. **Scientific Network** — four expert cards with approved portraits, name, institution and professional focus, linking to Experts.
5. **News** — three or four news slots. Until a verified item is supplied, the section displays a clearly labelled no-verified-news state without dates, fictional titles, images or summaries.
6. **Contact / Partnership** — a closing collaboration section with Research Collaboration, Clinical Collaboration, Technology & Equipment, and International Business labels, followed by the Contact action.

The Global Structure cards are removed from Home and reserved for the later About Global Network section.

## Unchanged safety boundaries

- EN and JP are the only V1 public languages.
- Contact email, phone and address remain labelled placeholders until an authoritative source provides exact public values.
- The Okayama University relationship remains a research-foundation statement; do not imply an unverified operating, investment or formal partnership relationship.
- Do not invent medical-performance claims, expert credentials, president-message copy, partnerships or news.
- The project stays Astro, TypeScript and native CSS.

## Presentation and data design

- Update `src/data/home.ts` with the revised hero, About, News-empty-state and partnership data; do not put localized content inside components.
- Replace the `UniversityFoundation`, `GlobalStructure` and `ResearchNewsLinks` homepage sections with focused `AboutCsi`, `NewsPreview` and `PartnershipCta` components.
- Continue using the approved map in `HomeHero`; do not synthesize a replacement map.
- Retain light, university-based medical visual styling and existing responsive behavior.

## Acceptance checks

- `HomePage.astro` renders Hero, About CSI, six Business cards, Scientific Network, News and Contact / Partnership in that order.
- The Hero’s two actions point to About and Contact.
- All four expert cards include institution and professional-focus text from source-backed data.
- No homepage section labelled Global Structure is emitted.
- The News section is visibly empty-state content until verified news source data is supplied.
- EN and JP route parity, tests and static build pass.
