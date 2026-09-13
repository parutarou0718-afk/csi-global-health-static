# About Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the EN/JP About page as a source-backed, responsive corporate introduction without changing other page structures.

**Architecture:** Keep verified company facts in `src/data/company.ts`, source-backed expert identity in `src/data/experts.ts`, and all bilingual About labels and presentation copy in the language modules. A new `AboutPage` component composes the fixed section order while `about.css` owns page-only presentation.

**Tech Stack:** Astro, TypeScript, native CSS, Node test runner.

## Global Constraints

- V1 publicly supports English and Japanese only: `/en/` and `/ja/`.
- Use Astro, TypeScript, native CSS and existing design tokens only.
- Do not invent university operating or investment relationships, contacts, outcomes, approvals, achievements, formal founder message content, or expert credentials.
- Do not modify the Home, Business, Experts, News, Contact, header, footer or global brand-token structures.

---

### Task 1: Create source-backed About data and bilingual page copy

**Files:**
- Modify: `src/data/company.ts`
- Modify: `src/data/experts.ts`
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/ja.ts`
- Modify: `tests/foundation.test.mjs`

- [ ] Add a failing test that asserts EN/JP About copy, the May 1, 2026 establishment date, CSI USA legal name, founder title, and explicit message placeholder are source-backed.
- [ ] Run `node --test tests/foundation.test.mjs` and confirm failure.
- [ ] Add localized company/network/profile facts and display copy without address or verified-contact claims.
- [ ] Run the foundation test and confirm it passes.

### Task 2: Compose the About page in the fixed approved order

**Files:**
- Create: `src/components/AboutPage.astro`
- Modify: `src/pages/en/about.astro`
- Modify: `src/pages/ja/about.astro`
- Modify: `tests/foundation.test.mjs`

- [ ] Add a failing test that asserts one About composition component contains the approved nine sections, CEO placeholder, proper CTA destinations and no placeholder-page component.
- [ ] Run `node --test tests/foundation.test.mjs` and confirm failure.
- [ ] Implement semantic page sections with a single H1, correct image alt text, data/i18n imports, EN/JP routes and page-specific SEO metadata.
- [ ] Run the foundation test and confirm it passes.

### Task 3: Add responsive, page-only About styling

**Files:**
- Create: `src/styles/about.css`
- Modify: `src/styles/global.css`
- Modify: `tests/foundation.test.mjs`

- [ ] Add a failing test for Hero desktop proportions, strategic and network responsive stacking, no overflow-prone fixed widths, and About style-layer import.
- [ ] Run `node --test tests/foundation.test.mjs` and confirm failure.
- [ ] Implement the restrained CSI visual sequence, 380–440px desktop hero, responsive breakpoints and accessible focusable CTA presentation using existing tokens.
- [ ] Run both test suites, `npm run build`, and `git diff --check`.
