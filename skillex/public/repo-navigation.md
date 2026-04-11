---
name: Repo navigation
description: Shared guidance for finding the right boundary before changing code.
topics: [architecture, boundaries, navigation]
tags: [shared, public]
audience: consumer
---

## Use When

Use when deciding where a change belongs in the monorepo.

## Do

- Check the current file path and owning package before changing code.
- Prefer app-local behavior in apps and reusable behavior in packages.
- Inspect the consuming dependency before copying package examples.

## Do Not

- Assume a package name implies one major version across the repo.
- Deep import package internals from app code.

## Example

Admin and storefront both import `@demo/design-system`, but they do not resolve the same major.

## See Also

`version-resolution.md`
