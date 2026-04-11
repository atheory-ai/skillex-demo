# Bake-Off Prompt

Use this prompt when you want a separate, optionally run benchmark instead of the lighter one-shot evaluation in [AGENT_PROMPT.md](/Volumes/Lukes/Jeremy/Sites/skillex-demo/AGENT_PROMPT.md).

This is intentionally heavier. It uses repeated paired runs so the final report can say more than a single anecdotal comparison.

By default, this prompt is for a **context-acquisition benchmark**, not an end-to-end coding benchmark. It is meant to answer:

- how long it takes each workflow to get to usable context
- what context it selected
- how much context it pulled in
- how many lookups and dead ends it needed before it was ready

If you want the agent to continue into full task judgment or code-generation analysis, state that explicitly as a second phase.

Recommended defaults:

- quick pilot: `3` paired runs
- credible internal benchmark: `5` paired runs
- stronger public bake-off: `10` paired runs

```md
You are acting as an impartial benchmark board for this repository.

Your job is to run a repeated bake-off between two agent workflows:

1. a root-only baseline that mirrors the common root-skills setup many teams are currently using
2. a Skillex-style scoped workflow that resolves skills by path, dependency, version, and audience

You must use sub-agents in parallel and keep the two workflows isolated.

Do not make code changes unless the user explicitly asks for them. This is an evaluation and reporting task.

## Benchmark Mode

Default mode: `context-only`

In `context-only` mode, each sub-agent must stop as soon as it has enough context to implement the task correctly. It must not continue into drafting code, proposing a patch, or doing a full final implementation review.

Only switch to `end-to-end` mode if the user explicitly asks for a broader evaluation.

## Run Count

Run `N` paired benchmark passes. Unless the user specifies otherwise:

- use `N = 3` for a quick pilot
- mention that `N = 10` is the better default for a stronger public-facing benchmark

Each paired pass means:

- one root-only sub-agent
- one Skillex sub-agent
- both evaluate the same five tasks under the same model and the same overall prompt shape

Keep each paired pass isolated from the others. Do not reuse conclusions across runs.

## Evaluation Tasks

Evaluate these five tasks exactly:

1. Add a promotional banner to `apps/admin/src/app/dashboard/page.tsx`
2. Build a settings form in `apps/admin/src/app/settings/page.tsx`
3. Add a merchandising banner/message to `apps/storefront/src/app/promotions/page.tsx`
4. Migrate Banner usage between package majors
5. Modify Banner internals in `packages/design-system/src/components/banner.tsx`

## Fairness Rules

The two workflows must be intentionally asymmetric in a way that mirrors real-world usage.

### Workflow A: Root-only baseline

This agent should mirror a typical root-only setup such as agentskills.io or Cursor-style usage where the agent sees:

- `AGENTS.md`
- the root `skills/` directory only
- `package.json` files
- source files

It must **not** read:

- `specs/**`
- `README.md`
- `DEMO.md`
- `EXPECTED.md`
- `PROJECT.md`
- `skillex.yaml`
- `skillex/**`
- any shipped skills under `apps/`, `packages/`, or `vendor/`
- any other meta or evaluative docs that explain what the demo is trying to prove

It may inspect manifests and source code manually.

### Workflow B: Skillex-style scoped workflow

This agent should mirror the proposed Skillex-style experience.

It may read:

- `AGENTS.md`
- `skillex.yaml`
- `skillex/public`
- `skillex/private`
- app/package/vendor shipped skills selected by path, dependency, version, and audience
- `package.json` files
- source files

It must **not** read:

- `specs/**`
- `README.md`
- `DEMO.md`
- `EXPECTED.md`
- `PROJECT.md`
- the root `skills/` baseline corpus
- any other meta or evaluative docs that explain what the demo is trying to prove

## Timing And Measurement

For every sub-agent run, capture:

1. start time
2. context-ready time
3. elapsed time to context-ready
4. end time if and only if you also run an explicit end-to-end phase
4. per task:
   - time to first plausible implementation approach
   - time to context-ready
   - time to final task judgment only in `end-to-end` mode
5. counts:
   - total lookups performed
   - total file opens
   - markdown guidance files read
   - manifest/source files inspected
   - manual version or audience resolutions from code instead of guidance
   - rejected or dead-end lookups
   - final selected context files
   - total context size in bytes or word count
   - optional estimated token count for final selected context

If the environment makes exact timing noisy, keep the raw timings anyway and state that they are best-effort wall-clock timings.

## What Each Sub-agent Must Report

For each task, each sub-agent must report:

1. available guidance and signals
2. selected context files
3. likely implementation approach
4. likely mistakes
5. whether wrong-version API choice is:
   - likely
   - plausible
   - unlikely
6. retrieval noise or ambiguity level
7. number of lookups and dead ends before context-ready

The Skillex sub-agent must additionally report:

- which scoped signals were used:
  - current path
  - dependency
  - package version
  - audience
- which skill groups were selected

## Aggregation Rules

After all paired runs complete:

1. keep the raw results
2. aggregate by task and workflow
3. compute at least:
   - median elapsed time to context-ready
   - median time to first plausible approach
   - median time to final judgment only if you ran `end-to-end` mode
   - median lookup count
   - median file-open count
   - median guidance files read
   - median manifest/source files inspected
   - median manual context resolutions
   - median dead-end lookups
   - median selected context size
4. summarize repeated qualitative findings:
   - where the baseline remains workable
   - where it becomes brittle
   - where scoped resolution materially helps
5. do not overstate raw speed wins if the measured timings do not show them
6. keep resolver-like retrieval metrics separate from downstream coding time

## Required Final Report Format

Return one structured report with these sections:

### 1. Executive Summary

- short verdict
- strongest observed difference
- biggest caveat

### 2. Methodology

- run count
- model used
- allowed and forbidden files for each workflow
- how timing was measured
- any assumptions

### 3. Aggregate Metrics

Include a table with one row per task and columns like:

- Task
- Root-only median time to context-ready
- Skillex median time to context-ready
- Root-only median lookups / files opened
- Skillex median lookups / files opened
- Root-only median selected context size
- Skillex median selected context size
- Notes

Also include whole-run medians for:

- elapsed time to context-ready
- lookup count
- file-open count
- guidance files read
- manifest/source files inspected
- manual context resolutions
- dead-end lookups
- selected context size

### 4. Per-Run Notes

Give a brief note for each paired run if anything unusual happened.

### 5. Task-By-Task Findings

For each task:

- root-only findings
- Skillex findings
- correctness difference
- ambiguity difference
- likely failure mode

### 6. Cross-Cutting Findings

Cover:

- version resolution
- audience resolution
- migration difficulty
- maintainer versus consumer guidance
- effect of root-skill retrieval noise
- context size and lookup count tradeoffs
- raw timing versus confidence tradeoffs
- any gap between context-ready time and full end-to-end time

### 7. Claims Check

State whether the evidence supports these claims:

- root-only guidance is broad but brittle
- scoped resolution reduces ambiguity
- version-aware resolution matters
- audience-aware resolution matters
- time to usable context is better with scoped resolution
- raw elapsed time is better with scoped resolution only if you ran `end-to-end` mode

Mark each claim as:

- strongly supported
- partially supported
- not supported by this run set

### 8. Final Verdict

Provide:

- what the repo proves well
- what it only partially proves
- what next benchmark step would materially strengthen the case

Be explicit about the difference between:

- context-acquisition measurements
- observed evidence
- reasonable inference
- repo claims not yet proven by the measured runs
```
