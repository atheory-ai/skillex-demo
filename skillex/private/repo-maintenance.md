---
name: Repo maintenance
description: Maintainer guidance for keeping the demo structure coherent over time.
topics: [maintenance, repo]
tags: [shared, private]
audience: maintainer
---

## Use When

Use when updating docs, skills, or repo-wide configuration.

## Do

- Keep `.skillex/` ignored and out of git.
- Update README and evaluation docs when the skill topology changes.
- Preserve the contrast between root-only baseline skills and scoped Skillex skills.

## Do Not

- Commit local Skillex indexes or databases.
- Change the comparison methodology without updating the evaluation prompt.

## Example

If a new shared Skillex skill is added at the root, update `skillex.yaml` and the docs that explain the two systems.

## See Also

`demo-evaluation.md`
