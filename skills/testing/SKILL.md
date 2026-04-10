---
name: Testing guidance
description: Baseline verification guidance for the demo monorepo.
topics: [testing, typecheck, verification]
tags: [baseline]
audience: all
---

## Use When

Use this before finishing a code change.

## Do

- Run typecheck for touched packages and apps.
- Prefer focused verification over broad unrelated test runs.
- Verify both app and package contracts when changing shared components.

## Do Not

- Skip package verification after changing exported component props.
- Assume one app compiling means the other versioned dependency is safe.

## Example

Changing v3 Banner internals should typecheck `packages/design-system` and `apps/storefront`; admin uses v2 and should not be forced through a v3 migration.

## See Also

Use private package skills for maintainer workflows.
