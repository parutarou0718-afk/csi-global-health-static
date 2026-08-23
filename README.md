# CSI Global Health — Static Multilingual Website

Initial engineering package based on the client-approved homepage direction.

## Stack
- Astro (static output)
- TypeScript
- Plain CSS
- GitHub source control
- Designed for Cloudflare Pages deployment
- Languages: Japanese `/ja/`, English `/en/`, Chinese `/zh/`

## Included pages
Home, About CSI, Corporate History, BNCT, AtherOx®, Scientific Advisors, Research & News, Contact — in all three languages.

## Content basis
1. `CSI_Global_Health_中文版公司介绍.pdf`
   - company positioning
   - Okayama University research base
   - Japan/USA/global structure
   - BNCT/DDS/Theranostics and other technology areas
   - scientific advisors
   - vision and core value
2. `AtherOx Chicago 12-2025.pdf`
   - AtherOx® / oxLDL-β2GPI technology
   - research background
   - clinical-study topics
   - imaging/research applications

The supplied PDFs are treated as the factual content basis. Japanese/English/Chinese website wording in this package is a first web-editing draft and should receive final client/compliance approval before production publication.

## Important compliance treatment
AtherOx® is presented as research/technology information in this first version. Diagnostic, treatment, product-registration, CE/GMP, performance or clinical-indication claims should be published only after the client confirms the current jurisdiction-specific authorization and approved labeling.

## Local development
```bash
npm install
npm run dev
```

## Static production build
```bash
npm run build
```
Output: `dist/`

## GitHub + Cloudflare Pages
1. Create a GitHub repository, e.g. `csi-global-health`.
2. Push this folder to `main`.
3. In Cloudflare Pages choose **Connect to Git**.
4. Framework preset: **Astro**
5. Build command: `npm run build`
6. Build output directory: `dist`
7. Deploy previews first; bind the production domain only after content/compliance sign-off.

## Current asset notes
- CSI mark is cropped from the client-supplied logo image without redesigning the mark.
- Okayama University logo is the client-supplied asset.
- Advisor portraits are cropped from the client-supplied company profile PDF for prototype use.
- `docs/reference/approved-homepage.png` contains the approved visual direction.

## Recommended next engineering pass
- replace prototype logo crops with original transparent/vector files if available;
- confirm final addresses/contact routes;
- populate real Research & News content;
- add metadata/OpenGraph/structured data;
- implement sitemap/robots and privacy/contact handling;
- run accessibility, responsive and performance QA.
