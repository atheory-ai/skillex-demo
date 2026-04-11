# Context Benchmark

This file defines the benchmark this repo should prefer when comparing a flat root-only skill setup against the Skillex-scoped workflow.

The goal is to measure **context acquisition**, not downstream coding time.

## Why This Benchmark Matters More

End-to-end agent runtime is highly variable. It mixes:

- context lookup
- reading speed
- reasoning style
- confidence thresholds
- writing and review behavior

That makes it a weak proxy for the thing this repo is really trying to demonstrate.

The stronger comparison is:

- how long it takes to get to usable context
- what context was selected
- how much context was selected
- how many lookups it took to get there

## Preferred Metrics

For each workflow and task, capture:

- start time
- context-ready time
- elapsed time to context-ready
- number of lookups
- number of file opens
- number of guidance files read
- number of manifest/source files inspected
- number of manual version or audience resolutions
- number of dead-end lookups
- final selected context files
- selected context size in words or bytes
- optional estimated token count

## Context-Ready Definition

A run is context-ready when the agent can state all of the following without continuing into implementation:

1. which API or pattern should be used
2. which package major applies
3. which audience context applies
4. which concrete files or skill groups are the relevant inputs
5. what the most likely mistake would be if it moved too quickly

At that point, the run should stop.

## What To Avoid

Do not treat these numbers as:

- Skillex indexing time
- Skillex resolver latency
- whole-task implementation time

Those are different measurements and should be benchmarked separately.

## Recommended Usage

- Use [BAKEOFF_PROMPT.md](/Volumes/Lukes/Jeremy/Sites/skillex-demo/BAKEOFF_PROMPT.md) in its default context-only mode.
- Use at least `5` paired runs for internal reporting.
- Use `10` paired runs for a stronger public bake-off.

## Optional Second Phase

If needed, run an end-to-end follow-up phase after context acquisition and keep it clearly separate in the report:

- Phase 1: context-only benchmark
- Phase 2: downstream implementation benchmark
