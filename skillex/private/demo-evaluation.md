---
name: Demo evaluation
description: Maintainer guidance for evaluating the root-only versus Skillex workflows.
topics: [evaluation, demo]
tags: [shared, private]
audience: maintainer
---

## Use When

Use when updating the demo tasks, evaluation prompt, or comparison methodology.

## Do

- Keep baseline evaluations restricted to `AGENTS.md` plus root `skills/`.
- Keep Skillex evaluations focused on shared and distributed scoped skills.
- Measure both correctness and effort, not just whether a solution is possible.

## Do Not

- Let the baseline path read demo framing docs or scoped package skills.
- Treat narrative claims as evidence.

## Example

Use `AGENT_PROMPT.md` to rerun the impartial comparison after repo changes.

## See Also

`repo-maintenance.md`
