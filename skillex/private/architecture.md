---
name: Shared repo architecture
description: Maintainer guidance for repo-wide architecture and skill boundaries.
topics: [architecture, repo]
tags: [shared, private]
audience: maintainer
---

## Use When

Use when changing repo structure, skill boundaries, or shared ownership lines.

## Do

- Keep baseline root skills distinct from scoped Skillex skills.
- Let shared root Skillex skills stay repo-global and non-versioned.
- Keep code-local skills near the code they govern.

## Do Not

- Collapse baseline and scoped skill systems into one directory.
- Move package-specific guidance into repo-global shared skills without a reason.

## Example

Root-only `skills/` models a flat system; `skillex/` and code-local skills model scoped resolution.

## See Also

`repo-maintenance.md`
