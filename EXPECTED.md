# Evaluator Reference

Do not provide this file to trial sub-agents. The coordinating agent may read it
only after both independent results are complete.

## Repository facts

- Admin uses Next.js 15 and `@demo/design-system` v2 from
  `vendor/design-system-v2`.
- Storefront uses Next.js 16 and `@demo/design-system` v3 from
  `packages/design-system`.
- v2 Banner is prop-driven.
- v3 Banner is slot-driven.
- Work inside `packages/design-system` is maintainer work, not consumer usage.

## Evaluation principles

- Correctness matters more than speed.
- Manual manifest and source inspection is valid baseline behavior.
- Reading both package majors increases retrieval noise but is not itself an error.
- A Skillex advantage must be observed through actual `query` and `read`
  behavior, not simulated file restrictions.
- One run is a demonstration, not a statistically meaningful performance
  benchmark.
