# GitHub README English-Primary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the root README of all 15 approved public repositories English-primary without changing unverified facts, source code, licenses, or fork provenance.

**Architecture:** Discover default-branch metadata with GitHub CLI, clone repositories into a unique temporary root, audit and edit only root README files, then make and verify one commit per affected repository. A final user confirmation gate precedes public pushes.

**Tech Stack:** Git, GitHub CLI, Markdown, PowerShell.

## Global Constraints

- Approved repositories: `aetheria`, `GymFlow`, `deepseek-helper-portable`, `PandaWiki-Cross-Industry-Template`, `research-work`, `trpg-game`, `PandaWiki`, `sosap`, `research-workspace`, `quiet-web-lab`, `perception-notification-system-design`, `pm-agent-skills`, `ComfyUI-Photoreal-Prompt-Builder`, `work-Prompt`, and `ComfyUI-Photoreal-Prompt-Builder-NSFW`.
- Edit only a root README; create `README.md` only if a repository has no root README.
- Present English summaries and headings first. Keep useful Chinese as a secondary `中文说明` section, never as the only introduction.
- Preserve code fences, commands, badges, media, links, licensing, credits, and upstream attribution.
- Preserve upstream identity, URL, and license references in `research-work`, `PandaWiki`, `ComfyUI-Photoreal-Prompt-Builder`, and `ComfyUI-Photoreal-Prompt-Builder-NSFW`.
- Never force-push; every changed repository gets one README-only commit.

---

### Task 1: Discover and verify the exact repository set

**Files:** Create a temporary `repos.json` outside the workspace. Test GitHub API output against the approved names.

**Interfaces:** Consumes the authenticated `parutarou0718-afk` GitHub CLI session. Produces name, default branch, fork flag, clone URL, and web URL metadata.

- [ ] **Step 1: Create an isolated batch root**

Run: `$readmeBatchRoot = Join-Path $env:TEMP ('github-readme-english-' + [guid]::NewGuid().ToString()); New-Item -ItemType Directory -Path $readmeBatchRoot | Out-Null`

- [ ] **Step 2: Fetch the public owned repository inventory**

Run: `gh api --paginate '/users/parutarou0718-afk/repos?type=owner&per_page=100' --jq '.[] | {name, default_branch, fork, clone_url, html_url}' | ConvertFrom-Json | ConvertTo-Json -Depth 4 | Set-Content -Encoding utf8 (Join-Path $readmeBatchRoot 'repos.json'); (Get-Content -Raw (Join-Path $readmeBatchRoot 'repos.json') | ConvertFrom-Json).Count`

Expected: `15`.

- [ ] **Step 3: Reject an inventory mismatch before cloning**

Run: `$expected = @('aetheria','GymFlow','deepseek-helper-portable','PandaWiki-Cross-Industry-Template','research-work','trpg-game','PandaWiki','sosap','research-workspace','quiet-web-lab','perception-notification-system-design','pm-agent-skills','ComfyUI-Photoreal-Prompt-Builder','work-Prompt','ComfyUI-Photoreal-Prompt-Builder-NSFW'); $actual = (Get-Content -Raw (Join-Path $readmeBatchRoot 'repos.json') | ConvertFrom-Json).name; Compare-Object $expected $actual`

Expected: no output.

### Task 2: Audit each root README without modifying repository content

**Files:** Create one `$readmeBatchRoot/$repo.name/` clone directory per inventory record and `readme-audit.md`. Modify no repository files. Test clean clone status and root README discovery.

**Interfaces:** Consumes `repos.json`. Produces README filename, language order, source evidence, and mandatory attribution per repository.

- [ ] **Step 1: Clone each approved default branch**

Run: `$repos = Get-Content -Raw (Join-Path $readmeBatchRoot 'repos.json') | ConvertFrom-Json; foreach ($repo in $repos) { $repoPath = Join-Path $readmeBatchRoot $repo.name; git clone --depth 1 --branch $repo.default_branch $repo.clone_url $repoPath; git -C $repoPath status --short }`

Expected: empty status.

- [ ] **Step 2: Locate the root README**

Run: `foreach ($repo in $repos) { $repoPath = Join-Path $readmeBatchRoot $repo.name; Get-ChildItem -LiteralPath $repoPath -File -Force | Where-Object { $_.Name -match '^README(\\..+)?$' } | ForEach-Object { "$($repo.name): $($_.Name)" } }`

If absent, inspect only the top-level manifests and source/configuration files that exist, and derive a new README only from those facts.

- [ ] **Step 3: Write a concise audit entry**

For every repository record default branch, exact README filename or absence, current language order, nonduplicative Chinese material, and links/attribution that must survive. For forks, explicitly record upstream URL and license wording.

- [ ] **Step 4: Verify audit-only clones remain clean**

Run: `foreach ($repo in $repos) { $repoPath = Join-Path $readmeBatchRoot $repo.name; git -C $repoPath diff --check; git -C $repoPath status --short }`

Expected: no diff-check output and empty status.

### Task 3: Convert README copy and prove the change is scoped

**Files:** Modify one root README identified by the Task 2 audit per repository; create `README.md` in the clone only when the audit finds no root README. Test Markdown whitespace and README-only diffs.

**Interfaces:** Consumes the Task 2 audit. Produces English-first README diffs or explicit no-change records.

- [ ] **Step 1: Create English-first README copy from repository evidence**

Translate only title-adjacent summaries, headings, and explanatory prose. Preserve commands, fenced code, badges, images, links, license text, and project names. Never add a feature, compatibility, result, or ownership claim not supported by the audit.

- [ ] **Step 2: Place useful Chinese explanation after English**

Use the exact form `<details>\n<summary>中文说明</summary>\n\n<!-- existing Chinese text, including its commands and links -->\n\n</details>` when Chinese material remains useful. Omit it when it would merely duplicate the English text.

- [ ] **Step 3: Preserve fork context before the translated body**

For each fork retain a visible upstream attribution sentence, upstream URL, and license references; do not present the upstream work as an original project.

- [ ] **Step 4: Confirm every modification is README-only**

Run: `foreach ($repo in $repos) { $repoPath = Join-Path $readmeBatchRoot $repo.name; git -C $repoPath diff --check; git -C $repoPath diff --name-only; git -C $repoPath diff -- README.md README.rst README.txt }`

Expected: no whitespace errors; one README path only; preserved technical artifacts and attribution visible in diff.

- [ ] **Step 5: Mark already compliant repositories**

Record `unchanged — already English-primary` in the audit and do not create an empty commit.

### Task 4: Commit, push after confirmation, and verify the remote

**Files:** Modify Git history only for repositories with verified README changes. Test commit file list and remote branch hash.

**Interfaces:** Consumes README-only verified changes. Produces one remote-verified commit per changed repository and a final ledger.

- [ ] **Step 1: Create one focused commit per changed repository**

Run for each repository recorded as changed: `$repoPath = Join-Path $readmeBatchRoot $repo.name; $readmePath = (git -C $repoPath diff --name-only | Where-Object { $_ -match '(^|/)README(\\..+)?$' }); git -C $repoPath add -- $readmePath; git -C $repoPath commit -m 'docs: make README English-primary'; git -C $repoPath show --stat --oneline HEAD`

Expected: one README path in each commit.

- [ ] **Step 2: Request confirmation immediately before the first public push**

State that each push will publicly change a repository README and await confirmation.

- [ ] **Step 3: Push without force**

Run for each repository recorded as changed: `$repoPath = Join-Path $readmeBatchRoot $repo.name; git -C $repoPath push origin ("HEAD:" + $repo.default_branch)`

On branch protection, remote change, or permission failure, do not force-push; record the repository, non-sensitive error class, and local commit hash.

- [ ] **Step 4: Verify the pushed default-branch hash**

Run for each repository recorded as changed: `$repoPath = Join-Path $readmeBatchRoot $repo.name; git -C $repoPath ls-remote origin ("refs/heads/" + $repo.default_branch); git -C $repoPath rev-parse HEAD`

Expected: matching remote and local hashes.

- [ ] **Step 5: Deliver a full repository ledger**

Report each approved repository as `changed` with commit hash, `unchanged` with reason, or `blocked` with a non-sensitive cause, including totals and README links.
