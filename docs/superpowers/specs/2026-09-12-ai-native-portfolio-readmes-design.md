# AI-Native Portfolio README Design

## Goal

Reposition the English README files of `GymFlow`, `research-workspace`,
`aetheria`, and `pm-agent-skills` for junior Japan-market roles in generative
AI consulting, AI adoption support, AI applications, and forward-deployed
engineering. The README files must make a transparent distinction between
human product responsibility and agent implementation assistance.

## Shared positioning

The portfolio uses two consistent terms:

- **AI-native product development** for the candidate's overall approach to
  translating ambiguous product ideas into working software.
- **Controlled agent-assisted development** for the execution model: the human
  defines requirements, scope, boundaries, data models, priorities, and
  acceptance criteria; coding agents implement bounded tasks; the human reviews
  tests, screenshots, observed behavior, regressions, and commits before
  accepting or rejecting an iteration.

The README files remain English-only. “Vibe coding” appears only as an
anti-pattern addressed by `pm-agent-skills`, never as the candidate's personal
positioning.

## Shared README structure

Each README begins with a recruiter-first first screen:

1. Product problem and intended workflow.
2. Where AI is used and, where applicable, constrained.
3. Transparent candidate role statement.
4. Concrete, repository-supported engineering validation.

Complex repositories add **What this project demonstrates**, mapping real
repository evidence to requirement definition, problem structuring, scope
reduction, proof-of-concept thinking, workflow design, AI integration,
validation, risk identification, iteration, and documentation. Technical
details, running commands, and deep documentation links remain below this
section.

## Repository-specific design

### GymFlow

Present GymFlow as a long-running, local-first workout product with modular
domain boundaries, SQLite-backed native persistence, migration governance, and
web/native behavior constraints. Cite only the existing M1–M20 handoff,
architecture audit, explicit module public APIs, current test command, and
recorded validation evidence. Explain the checkpoint-driven agent workflow
without claiming that all implementation was handwritten.

### Research Workspace

Present it as the primary case study. Lead with its controlled research flow:
Paper → structured AI analysis → reviewed suggested idea → normal idea-creation
workflow. Preserve the stated distinction that it is not a generic chatbot and
that suggested ideas are not automatically saved. Retain the documented
Discuss → Define → Freeze Scope → Implement → Test → Screenshot Review →
Accept/Reject → Commit loop, plus the repository's distinct GPT and Codex
responsibilities and existing test-status evidence.

### Aetheria

Present the game as an experiment in allowing an LLM-driven system to act only
inside controlled state boundaries. Lead with `StateChangeProposal`, the
authoritative Recorder, validation, SQLite transactions, atomic
Prepare–Persist–Publish commits, write guards, recovery, and audit/test
evidence. Do not reduce the project to a game pitch or imply that an LLM writes
state directly.

### PM Agent Skills

Present it as a reusable method distilled from controlled agent-assisted
development: Discovery → Scope Reduction → PRD → Implementation Plan →
Acceptance. Retain its documented non-goals and avoid representing its
templates as a production project-management platform. Link to its existing
workflow documentation and to the other portfolio repositories as concrete
examples.

## Cross-linking

Each README includes a compact **Related portfolio projects** section. Links
must use the four verified GitHub repository URLs and describe only the
receiving repository's documented role. The links are reciprocal where useful:
PM Agent Skills links to the three implementation case studies; the three case
studies link to PM Agent Skills and to each other only when the relationship is
accurately supported by their documentation.

## Integrity and validation

- Read current README, selected architecture/PRD/handoff documents, test
  configuration, and meaningful commit history before editing each repository.
- Do not add metrics, test counts, product capabilities, deployment claims, or
  candidate-role claims not present in repository evidence.
- Do not modify business code, and do not delete existing technical documents.
- Keep README commands unchanged unless repository evidence proves a command or
  link is broken.
- Before requesting commit approval, review every README diff, verify that only
  README files changed, check Markdown whitespace, validate every cross-link,
  and provide a repository-by-repository diff rationale.
