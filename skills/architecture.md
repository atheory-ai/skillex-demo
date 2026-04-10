---
name: Architecture overview
description: Broad architecture notes for the Skillex demo.
topics: [architecture, monorepo]
tags: [baseline]
audience: all
---

## Use When

Use this for initial orientation in the repository.

## Do

- Treat apps as separate product surfaces.
- Treat packages as owned boundaries with exported APIs.
- Keep the vendor design-system v2 package as a legacy dependency example.

## Do Not

- Collapse vendor v2 and workspace v3 into a single package.
- Move app-local conventions into root guidance.

## Example

Admin depends on `file:../../vendor/design-system-v2`; storefront depends on the workspace v3 package.

## See Also

Use `skillex.yaml` to see how resolution should narrow the available skills.
