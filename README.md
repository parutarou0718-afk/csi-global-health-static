# CSI Global Health static site

The Phase 1 foundation for the CSI Global Health public site. V1 exposes English at `/en/` and Japanese at `/ja/`; the root route redirects to `/en/`.

## Local use

```bash
npm install
npm run dev
npm run build
```

The static build is written to `dist/` and is suitable for Cloudflare Pages.

## Source boundaries

- `src/data/company.ts` — company identity and labelled contact placeholders.
- `src/data/business.ts` — source-backed business-area records.
- `src/data/experts.ts` — source-backed expert index records.
- `src/i18n/en.ts` and `src/i18n/ja.ts` — public interface copy and navigation.
- `src/lib/i18n.ts` — V1 EN/JP route helper; it is the extension point for an approved future language.
- `src/components/` and `src/layouts/` — shared site shell and page primitives.
- `src/styles/` — token, reset, layout, component and responsive CSS layers.
- `public/images/` — labelled placeholders awaiting approved replacement artwork; `public/images/home/global-network-map.png` is the approved supplied homepage network map.

## Content and asset replacement

Do not replace contact placeholders with an email, phone number or address until the exact public value is supplied in an authoritative source file. Replace a placeholder image only with an approved, rights-cleared asset and preserve its folder purpose. The homepage map may be replaced only with a newly approved Hero network image at `public/images/home/global-network-map.png`.

For homepage information architecture, `网站详细结构.docx` is the authoritative source. Visual reference images establish visual direction only; they do not override the approved homepage section sequence.

## Verification

```bash
node --test tests/foundation.test.mjs
npm run build
```
     
