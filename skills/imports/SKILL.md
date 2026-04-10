---
name: Import guidance
description: Broad import and boundary rules for the monorepo.
topics: [imports, boundaries]
tags: [baseline]
audience: all
---

## Use When

Use when adding or changing imports across apps and packages.

## Do

- Import shared UI from package entrypoints.
- Import data and workflow helpers from their package roots.
- Let app code depend on package APIs, not internals.

## Do Not

- Deep import package source files from apps.
- Assume the same package name means the same major version everywhere.

## Example

Use `@demo/design-system` and let the app dependency decide the version.

## See Also

Use package-private skills only when editing the package itself.
