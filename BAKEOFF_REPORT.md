# Bake-Off Report

This file captures the current benchmark-style evaluation for the repo.

Status: pilot end-to-end benchmark  
Run count: `3` paired runs across the full five-task suite  
Date: `2026-04-10`

This report is an end-to-end agent benchmark. It is **not** a measurement of Skillex indexing time, Skillex resolve latency, or pure context-acquisition time.

This is enough to replace a one-off anecdote with a repeated comparison. It is not enough to make a strong public performance claim. For that, this repo should use the repeated-run harness in [BAKEOFF_PROMPT.md](/Volumes/Lukes/Jeremy/Sites/skillex-demo/BAKEOFF_PROMPT.md) in its default context-only mode, with at least `5` paired runs, and ideally `10`.

## Executive Summary

The repo now supports a credible bake-off.

The strongest repeated difference in this pilot is not raw speed. It is context quality. The root-only baseline stayed workable in all three runs, but it repeatedly had to reconstruct package-major and audience context from manifests and source. The Skillex path was consistently narrower and more confident, especially for versioned `@demo/design-system` work and maintainer tasks.

The biggest caveat is that raw elapsed time did not favor Skillex in this pilot. The scoped workflow usually read more guidance files and took longer wall-clock time, while still producing lower ambiguity and higher confidence. That does **not** mean Skillex retrieval itself is slower, because this report includes the full sub-agent reasoning pass after context selection.

## Methodology

Each run evaluated the same five tasks:

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

Timing and counts were captured by the sub-agents as best-effort wall-clock measurements. File counts and manual-resolution counts are self-reported, not instrumented by external tracing.

Important limitation:

- the timings in this report include end-to-end sub-agent evaluation work
- they do not isolate indexing, resolution, or time-to-context-ready
- they should not be read as product-level Skillex performance numbers

## Run Summary

| Run | Root-only elapsed | Skillex elapsed | Root-only guidance files | Skillex guidance files | Root-only manual resolutions | Skillex manual resolutions |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 26s | 60s | 21 | 69 | 7 | 4 |
| 2 | 34s | 26s | 17 | 34 | 4 | 6 |
| 3 | 25s | 52s | 8 | 18 | 6 | 4 |

Whole-run medians:

- root-only elapsed: `26s`
- Skillex elapsed: `52s`
- root-only guidance files read: `17`
- Skillex guidance files read: `34`
- root-only manifest/source files inspected: `12`
- Skillex manifest/source files inspected: `15`
- root-only manual context resolutions: `6`
- Skillex manual context resolutions: `4`

Interpretation:

- Skillex reduced manual context reconstruction.
- Skillex did not reduce end-to-end wall-clock time in this pilot.
- The scoped workflow paid for narrower context with more up-front reading.

## Aggregate Metrics By Task

Median timings across the three paired runs:

| Task | Root-only median first plausible / final | Skillex median first plausible / final | Root-only median effort | Skillex median effort | Notes |
|---|---|---|---|---|---|
| 1. Admin banner | `8s / 15s` | `10s / 16s` | Medium | Low | Skillex was more direct on v2 selection and admin tone. |
| 2. Admin settings form | `10s / 16s` | `15s / 24s` | Low-Medium | Low-Medium | Baseline was already workable here. |
| 3. Storefront banner | `12s / 18s` | `27s / 36s` | Medium | Low | Skillex reduced version and tone drift, but read more before judging. |
| 4. Banner migration | `17s / 22s` | `37s / 45s` | High | Medium | Skillex had better mapping, but the task still needed target scope. |
| 5. Banner internals | `20s / 25s` | `43s / 50s` | High | Low-Medium | Strongest maintainer-context improvement. |

Interpretation:

- On raw time alone, the root-only path was faster in this pilot.
- On ambiguity and confidence, the Skillex path was better in every repeated run.
- That means the demo currently proves a context-quality advantage more strongly than a speed advantage.
- A context-only benchmark would be the correct next measurement if the goal is to compare retrieval rather than downstream reasoning.

## Task-By-Task Findings

### 1. Admin Banner

Root-only:

- repeatedly recovered the correct v2 prop API by checking `apps/admin/package.json` and the vendor Banner source
- still had moderate retrieval noise
- wrong-version choice stayed plausible if manifest checks were skipped

Skillex:

- repeatedly resolved to admin app guidance plus v2 public Banner usage
- stayed lower effort and higher confidence
- made operational copy and placement rules clearer

Takeaway:

- strong evidence for version- and app-aware narrowing
- weak evidence for raw speed improvement

### 2. Admin Settings Form

Root-only:

- remained the strongest baseline task
- broad form, layout, button, and error guidance was enough

Skillex:

- stayed more app-specific and composition-aware
- did not create as large a practical advantage as other tasks

Takeaway:

- this task mostly shows that the baseline can still work

### 3. Storefront Merchandising Banner

Root-only:

- could recover v3 slot composition with manual package and source inspection
- still risked admin-style tone drift

Skillex:

- consistently selected storefront merchandising guidance and v3 composition
- made the consumer-facing copy expectations explicit

Takeaway:

- strong evidence for package-major and app-local resolution

### 4. Migration Between Majors

Root-only:

- consistently weakest area
- required manual reconstruction of the v2-to-v3 mapping from source
- mixed-version mistakes remained plausible to likely

Skillex:

- had explicit migration guidance and clearer mapping
- still needed a target app or file for fully deterministic execution

Takeaway:

- this is one of the best tasks for demonstrating the difference

### 5. Banner Internals

Root-only:

- could inspect the component source directly
- lacked maintainer-scoped guidance for API review, slot evolution, and change management

Skillex:

- repeatedly surfaced private maintainer guidance
- made it clear that internal Banner changes are not the same as consumer usage work

Takeaway:

- strongest evidence for audience-aware resolution

## Cross-Cutting Findings

- Version resolution matters. The same package name, `@demo/design-system`, still creates real ambiguity across app contexts.
- Audience resolution matters at least as much as version resolution. Maintainer work is where the root-only baseline degrades fastest.
- Migration tasks expose the biggest gap between broad guidance and applicable guidance.
- Root-only retrieval noise is now credible. The baseline corpus is large enough to be useful without being cleanly scoped.
- Raw timing and context quality diverged in this pilot. Skillex improved confidence and reduced ambiguity, but did not beat the baseline on wall-clock speed.

## Claims Check

| Claim | Result | Notes |
|---|---|---|
| Root-only guidance is broad but brittle | Strongly supported | Repeated across all three runs, especially on migration and maintainer work. |
| Scoped resolution reduces ambiguity | Strongly supported | Consistent across all tasks, strongest on tasks 1, 3, 4, and 5. |
| Version-aware resolution matters | Strongly supported | The same-name v2/v3 package split kept showing up as a real issue. |
| Audience-aware resolution matters | Strongly supported | Maintainer versus consumer guidance was one of the clearest differences. |
| Scoped resolution improves raw elapsed time | Not supported by this pilot | Median end-to-end wall-clock time favored the root-only baseline in the current three-run sample. This is not a resolver-latency measurement. |

## Final Verdict

What the repo proves well:

- flat root-only guidance remains workable but brittle
- scoped resolution materially improves version selection and maintainer-versus-consumer separation
- the stronger win is applicability, not documentation volume

What the repo only partially proves:

- that scoped resolution is faster in raw elapsed time
- that routine page tasks will frequently fail without Skillex

What would materially strengthen the case:

- rerun this benchmark in context-only mode with `5` or `10` paired runs
- capture instrumented lookup and file-open counts instead of self-reported counts
- add one or two more migration tasks with explicit target files
