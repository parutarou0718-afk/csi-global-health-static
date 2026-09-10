# CSI Global Health engineering rules

## Scope

- V1 publicly supports English and Japanese only: `/en/` and `/ja/`.
- Do not create a public `/zh/` route, Chinese language switcher or Chinese route-equivalence check in V1. Keep modules extensible so a later approved `/zh/` implementation is straightforward.
- Chinese source documents may be used to verify facts; they are not automatic V1 website copy.

## Content integrity

- Do not invent company facts, medical claims, partnerships, expert credentials, images, president messages or news.
- Describe the Okayama University relationship only as a research foundation for the start-up. Do not represent it as an unverified formal operating, investment or partnership relationship.
- Contact email, phone and postal address are placeholders until exact values appear in an authoritative source file. Never promote a placeholder to verified data without that source.
- Add news only through the approved content workflow once it is introduced; do not publish invented dates, results or announcements.

## Architecture and styling

- Keep company, business and expert facts in `src/data/`; keep EN/JP UI copy in `src/i18n/`; keep shared presentation in `src/components/` and `src/layouts/`.
- Use Astro, TypeScript and native CSS. Do not add a UI framework, CSS framework, database or CMS unless explicitly approved.
- Put reusable values in `src/styles/tokens.css`; do not scatter CSI brand colors, spacing scales or typography scales through components.
- Use supplied assets only when their intended use is clear. Otherwise use the labelled placeholders in `public/images/`.

## Before committing

- Run `git diff --check`.
- Run `node --test tests/foundation.test.mjs`.
- Run `npm run build`.
