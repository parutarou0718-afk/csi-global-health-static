# GitHub README English-Primary Conversion

## Scope

Convert the top-level README files in all 15 public repositories owned by
`parutarou0718-afk` to English-primary presentation, including forked
repositories. The work is limited to README content and repository metadata
when needed to describe the README accurately; it does not change product code,
licenses, releases, or issue history.

## Content rules

- Place a clear, idiomatic English project summary and English usage-facing
  headings before any equivalent Chinese material.
- Preserve meaningful source language content as a secondary Chinese section
  (preferably a collapsible details block) when translation would remove useful
  detail. Remove duplicate Chinese-only introductory material when the English
  version fully replaces it.
- Preserve code blocks, commands, badges, screenshots, diagrams, external
  links, licenses, contributor credits, and upstream attribution unless a
  localized explanatory sentence must change.
- For forks, retain the original project name, upstream URL, license notice,
  and attribution. Do not describe a fork as an original project.
- For repositories that lack a README, derive a concise English README only
  from files and configuration actually present in that repository. Do not
  invent features, results, or compatibility claims.

## Delivery method

1. Retrieve each repository's default branch into an isolated local working
   directory.
2. Inspect its README and supporting repository files to establish factual
   project purpose and determine whether rewriting is needed.
3. Make the smallest README-only English-primary change that meets the content
   rules, then render/check Markdown links and inspect the diff.
4. Create one focused commit per repository, so every change is independently
   reviewable and reversible.
5. Push each commit to that repository's default branch and report the
   repositories changed, unchanged, skipped, or blocked.

## Error handling and verification

- If the default branch is protected or credentials cannot push, leave the
  verified local commit in place and report the exact repository and reason.
- If a README has ambiguous claims, preserve wording or use a conservative
  translation rather than introducing a new claim.
- Before each push, review the diff for non-README changes, broken relative
  links, accidental removal of attribution, and language-order compliance.
- After each push, verify that the remote default branch contains the expected
  commit.
