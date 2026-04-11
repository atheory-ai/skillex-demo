# Context Benchmark Report

This file captures the current context-only benchmark for the repo.

Status: pilot context benchmark  
Run count: `3` paired runs across the full five-task suite  
Date: `2026-04-10`

This report measures agent-emulated context acquisition. It is not a measurement of Skillex indexing time or resolver latency.

## Executive Summary

The repo now has a cleaner benchmark than the earlier end-to-end bake-off.

Across three paired context-only runs, the root-only baseline reached context-ready sooner on median wall-clock time. The Skillex-scoped workflow consistently reduced manual version and audience reconstruction and made the selected context more specific to app, package major, and maintainer boundary.

So the current pilot supports a strong applicability claim, not a raw retrieval-speed claim.

## Methodology

Each paired run evaluated the same five tasks:

1. add a promotional banner to `apps/admin/src/app/dashboard/page.tsx`
2. build a settings form in `apps/admin/src/app/settings/page.tsx`
3. add a merchandising banner/message to `apps/storefront/src/app/promotions/page.tsx`
4. migrate Banner usage between package majors
5. modify Banner internals in `packages/design-system/src/components/banner.tsx`

Root-only baseline was allowed to use:

- `AGENTS.md`
- root `skills/`
- manifests
- source files

Root-only baseline was forbidden from using:

- `specs/**`
- `README.md`
- `DEMO.md`
- `EXPECTED.md`
- `PROJECT.md`
- `skillex.yaml`
- `skillex/**`
- shipped skills under `apps/`, `packages/`, `vendor/`

Skillex workflow was allowed to use:

- `AGENTS.md`
- `skillex.yaml`
- `skillex/public`
- `skillex/private`
- shipped skills under `apps/`, `packages/`, `vendor/`
- manifests
- source files

Skillex workflow was forbidden from using:

- `specs/**`
- `README.md`
- `DEMO.md`
- `EXPECTED.md`
- `PROJECT.md`
- root `skills/`

Benchmark rule:

- each sub-agent stopped when it was context-ready
- no code was written
- no implementation review phase was included

Important limitation:

- timings and counts are self-reported by the sub-agents
- this measures manual retrieval behavior under constrained surfaces
- it does not measure product-level Skillex resolve time

## Whole-Run Medians

| Metric | Root-only median | Skillex median | Read |
|---|---:|---:|---|
| Elapsed to final context-ready | `41s` | `54s` | Root-only was faster in this pilot. |
| Lookup count | `29` | `24` | Skillex used fewer lookup actions. |
| File opens | `40` | `62` | Skillex opened more files after narrowing. |
| Guidance files read | `22` | `42` | Skillex read a denser scoped corpus. |
| Manifest/source files inspected | `16` | `16` | Roughly equal. |
| Manual version/audience resolutions | `8` | `6` | Skillex reduced manual context reconstruction. |
| Dead-end lookups | `0` | `0` | No explicit dead ends in either workflow. |

Context-size read:

- Root-only selected context per task was usually in the `~864` to `~1,900` word range in the runs that reported words explicitly.
- Skillex selected context per task was usually in the `~656` to `~1,888` word range, but it selected more files and more total guidance across a run.
- The median total selected context across the Skillex runs that reported a comparable total was about `6,429 words`.

Interpretation:

- Skillex reduced lookup count and manual reconstruction.
- Skillex did not reduce wall-clock time to context-ready in this pilot.
- The scoped workflow traded fewer lookup steps for more direct reading of richer local guidance.
- One scoped run still over-read outside the ideal package-major boundary on the admin settings task, which shows that this manual benchmark is measuring agent behavior on top of the scoped corpus, not a hard-enforced resolver.

## Aggregate Metrics By Task

Median cumulative time from run start to context-ready:

| Task | Root-only median time to context-ready | Skillex median time to context-ready | Read |
|---|---:|---:|---|
| 1. Admin banner | `12s` | `17s` | Skillex was more specific, baseline was faster. |
| 2. Admin settings form | `17s` | `22s` | Baseline remained strong here. |
| 3. Storefront banner | `23s` | `28s` | Skillex cut ambiguity, especially on tone and v3 composition. |
| 4. Banner migration | `31s` | `33s` | Small timing gap, but better mapping on the Skillex side. |
| 5. Banner internals | `39s` | `54s` | Biggest maintainer-context advantage, but also the heaviest scoped read. |

## Task-By-Task Findings

### 1. Admin Banner

Root-only:

- recovered the correct v2 Banner approach from manifests plus vendor source
- relied on broad banner, dashboard, and copy skills
- still left some tone drift risk

Skillex:

- resolved directly to admin dashboard feedback plus v2 public Banner guidance
- made operational tone and action priority explicit
- lowered wrong-major ambiguity

Read:

- best small-task example of scoped relevance
- still not faster in these manual retrieval runs

### 2. Admin Settings Form

Root-only:

- remained the strongest baseline task
- broad form, error, fieldset, and button skills were enough

Skillex:

- added admin-specific validation and action-order guidance
- improved specificity more than speed
- had one run that also opened v3 public form skills during admin settings, even though the clean target should be v2-only guidance

Read:

- this task shows the baseline can still work when the problem is mostly local page composition
- it also shows that a manual scoped workflow can still leak across version boundaries if the resolver is being emulated by an agent rather than enforced by tooling

### 3. Storefront Merchandising Banner

Root-only:

- could recover v3 from manifests and source
- still had moderate noise because the same package name resolves to a different major here
- copy and tone could drift toward admin language

Skillex:

- selected storefront merchandising skills plus v3 Banner composition directly
- reduced version and tone ambiguity

Read:

- strong scoped win on applicability

### 4. Banner Migration Between Majors

Root-only:

- repeatedly had to reconstruct the v2-to-v3 mapping by hand
- showed the highest wrong-version and mixed-syntax risk

Skillex:

- had explicit migration mapping and change-management guidance
- still suffered from task underspecification because no target app/file was named

Read:

- strongest demonstration of version-aware narrowing

### 5. Banner Internals

Root-only:

- could inspect source but lacked maintainer-specific guidance
- had to infer API review and release concerns from code structure

Skillex:

- resolved to private maintainer skills for Banner internals, slot patterns, API review, testing, docs, and release process
- made the consumer-versus-maintainer split explicit

Read:

- strongest demonstration of audience-aware narrowing

## Cross-Cutting Findings

- The root-only baseline remains workable. The failure mode is friction, not immediate failure.
- Skillex reduced manual version and audience reconstruction.
- Skillex required fewer lookup actions but more actual reading once the scoped surface was found.
- Migration and maintainer work remain the best tasks for showing the difference.
- Routine page work is still recoverable under the baseline, especially admin settings.
- Framework version mattered less than package major and audience in these runs.

## Claims Check

| Claim | Result | Notes |
|---|---|---|
| Root-only guidance is broad but brittle | Strongly supported | Repeated across all three runs, especially on migration and maintainer tasks. |
| Scoped resolution reduces ambiguity | Strongly supported | Consistent across all five tasks, though one scoped run still over-read a v3 public form skill during an admin v2 task. |
| Version-aware resolution matters | Strongly supported | Migration and storefront work kept surfacing the same-name v2/v3 package split. |
| Audience-aware resolution matters | Strongly supported | Banner internals was the clearest example. |
| Time to usable context is better with scoped resolution | Not supported by this pilot | Median context-ready time favored the root-only baseline in these manual retrieval runs. |

## Final Verdict

What the repo proves well:

- flat root-only guidance remains workable but brittle
- scoped resolution materially improves applicability of guidance
- version and audience boundaries are the most important resolver dimensions in this repo

What the repo does not yet prove:

- that manual context-ready time is faster with the scoped workflow
- that Skillex runtime itself is slower or faster as a product system

What would strengthen the case next:

- instrument actual resolver latency separately from agent reading time
- rerun this context benchmark with `5` or `10` paired runs
- add a concrete migration target so task 4 measures retrieval rather than task ambiguity
