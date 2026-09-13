# AI-Native Portfolio README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce evidence-backed, English recruiter-first README diffs for GymFlow, Research Workspace, Aetheria, and PM Agent Skills without changing product code or making unsupported personal claims.

**Architecture:** Each repository retains its own product narrative, but all four README files share a concise portfolio vocabulary and a transparent controlled agent-assisted development statement. Existing README technical instructions remain available below a new recruiter-first summary; reciprocal links connect the four projects without claiming dependencies that do not exist.

**Tech Stack:** Markdown, Git, GitHub URLs, existing repository documentation and test configuration.

## Global Constraints

- Use **AI-native product development** for overall positioning and **controlled agent-assisted development** for the human/agent execution model.
- Keep README text English-only; do not use “vibe coding” as candidate self-positioning.
- Do not invent features, outcomes, tests, test counts, deployments, authorship, or personal responsibilities.
- Do not modify source code, tests, licenses, or technical documentation.
- Preserve existing runnable commands unless repository evidence shows a command or link is broken.
- Create local diffs only; present a diff rationale and wait for user confirmation before repository commits.

---

### Task 1: Establish shared portfolio language and link map

**Files:**
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\GymFlow\README.md`
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\research-workspace\README.md`
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\aetheria\README.md`
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\pm-agent-skills\README.md`
- Test: all four README diffs and their Markdown links.

**Interfaces:**
- Consumes: the verified repository evidence and the approved portfolio design.
- Produces: a shared wording block and the four verified GitHub repository URLs.

- [ ] **Step 1: Add the transparent role statement where it is supported**

Use this wording, adjusting only project-specific evidence: “The project was developed through controlled agent-assisted development: I defined the product problem, scope, architecture direction, module boundaries, data and acceptance criteria; coding agents implemented bounded tasks; I reviewed tests, observed behavior, screenshots where used, regressions, and commits before accepting or rejecting each checkpoint.”

- [ ] **Step 2: Add the verified cross-link map**

Use only these URLs: `https://github.com/parutarou0718-afk/GymFlow`, `https://github.com/parutarou0718-afk/research-workspace`, `https://github.com/parutarou0718-afk/aetheria`, and `https://github.com/parutarou0718-afk/pm-agent-skills`.

- [ ] **Step 3: Validate links without writing to GitHub**

Run: `gh api repos/parutarou0718-afk/GymFlow --jq .html_url; gh api repos/parutarou0718-afk/research-workspace --jq .html_url; gh api repos/parutarou0718-afk/aetheria --jq .html_url; gh api repos/parutarou0718-afk/pm-agent-skills --jq .html_url`

Expected: the four exact URLs in Step 2.

### Task 2: Reframe GymFlow as a longitudinal local-first product case study

**Files:**
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\GymFlow\README.md`
- Test: `npm test`, `npx tsc --noEmit`, `npx expo-doctor`, and `npx expo export --platform web` remain documented exactly as the existing handoff lists them; README diff only.

**Interfaces:**
- Consumes: `docs/HANDOFF.md`, `CORE_ARCHITECTURE_AUDIT.md`, M1 design records, package scripts, and repository history.
- Produces: first-screen product problem, local-first/migration/domain-boundary evidence, validation evidence, a controlled agent-assisted development statement, and portfolio links.

- [ ] **Step 1: Lead with the real product workflow**

Describe only the documented flow: Current Gym → Gym Inventory → Program → Gym matching → Adapted Program when needed → Workout → Gym Visit.

- [ ] **Step 2: Add What this project demonstrates**

Map M1–M20 checkpoint delivery, public module APIs, SQLite/native versus in-memory web behavior, ordered migrations, validation commands, and documented deferred Auth/Cloud risks to consulting-relevant capabilities.

- [ ] **Step 3: Preserve uncertainty and limits**

State that Auth/Cloud Sync and production social UI remain planned decisions, not delivered capability; retain the existing handoff link.

### Task 3: Make Research Workspace the primary structured-AI workflow case study

**Files:**
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\research-workspace\README.md`
- Test: `uv run pytest -q` remains the documented full-suite command; README diff only.

**Interfaces:**
- Consumes: existing README, `docs/PRD.md`, `docs/GATE2_FREEZE.md`, `docs/ARCHITECTURE.md`, UX validation record, test configuration, and commit history.
- Produces: a recruiter-first AI-workflow narrative that preserves the existing structured-output and manual-acceptance boundaries.

- [ ] **Step 1: Lead with the controlled product workflow**

Keep the actual flow: Paper → AI analysis → Summary/Key Claims/Suggested Ideas → user review → existing Create Idea dialog. State that it is not a generic chatbot and does not automatically save suggestions.

- [ ] **Step 2: Make human and agent responsibilities explicit**

Preserve the existing documented GPT-5.6 responsibilities, Codex responsibilities, checkpoint loop, screenshot-review rejections, and recorded test-status evidence without adding new metrics.

- [ ] **Step 3: Add What this project demonstrates and links**

Connect scope freezing, structured AI integration, user review gates, regression validation, packaging, and commits to AI-consultant/AI-application work.

### Task 4: Position Aetheria as a controlled-action LLM system experiment

**Files:**
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\aetheria\README.md`
- Test: `npm run verify` and existing `npm run audit:direct-writes` remain intact; README diff only.

**Interfaces:**
- Consumes: `ARCHITECTURE.md`, phase closure and state-write audit documents, package scripts, test inventory, and commit history.
- Produces: a first-screen explanation of constrained LLM-to-state interaction and recovery, plus portfolio relevance.

- [ ] **Step 1: Explain the real control boundary**

Describe `StateChangeProposal` → validation → authoritative Recorder → SQLite transaction and state-change log → Publish/recovery. State that the LLM does not write public world state directly.

- [ ] **Step 2: Add What this project demonstrates**

Use only recorded evidence for atomicity, write guards, idempotency, runtime recovery, audit scripts, and tests; do not claim production readiness.

- [ ] **Step 3: Preserve game and technical material below the portfolio overview**

Keep the provider-neutral LLM, architecture, verification commands, repository structure, and license information.

### Task 5: Reframe PM Agent Skills as the reusable operating method

**Files:**
- Modify: `C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\pm-agent-skills\README.md`
- Test: README links to `docs/workflow.md`, `docs/llm-first-agent-second.md`, templates, and all four portfolio repositories resolve.

**Interfaces:**
- Consumes: existing README, three workflow documents, and templates.
- Produces: a concise method overview that connects Discovery → Scope Reduction → PRD → Implementation Plan → Acceptance to real portfolio projects.

- [ ] **Step 1: Replace the candidate-facing “vibe coding” framing**

Lead with AI-native product development and controlled agent-assisted development; keep “vibe coding” only as the documented failure mode this repository addresses.

- [ ] **Step 2: Add portfolio evidence links**

Link GymFlow as the longitudinal local-first case, Research Workspace as the structured-AI workflow case, and Aetheria as the controlled-action LLM case.

- [ ] **Step 3: Preserve non-goals**

Retain that this repository is not a project-management platform, does not replace human product judgment, does not guarantee correctness, and is not tied to one coding agent.

### Task 6: Review README-only diffs and request commit approval

**Files:**
- Test: all four modified README files.

**Interfaces:**
- Consumes: the Task 1–5 local diffs.
- Produces: a user-facing per-repository diff summary and commit-ready working trees.

- [ ] **Step 1: Verify file scope and whitespace**

Run: `git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\GymFlow diff --check; git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\research-workspace diff --check; git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\aetheria diff --check; git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\pm-agent-skills diff --check`

Expected: no output.

- [ ] **Step 2: Verify README-only scope**

Run: `git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\GymFlow diff --name-only; git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\research-workspace diff --name-only; git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\aetheria diff --name-only; git -C C:\Users\30781\AppData\Local\Temp\github-readme-english-c76643fc-704b-4861-82d2-6c93a5ddb5cb\pm-agent-skills diff --name-only`

Expected: `README.md` once per repository.

- [ ] **Step 3: Report the diff rationale before committing**

Describe why each README changed, its evidence sources, retained limitations, and cross-link outcome. Stop for user commit approval.
