---
name: Storefront Next 16 conventions
description: Next.js 16 guidance for the storefront app.
topics: [nextjs, storefront]
tags: [next16]
audience: app-consumer
---

## Use When

Use when editing `apps/storefront/src/app`.

## Do

- Keep static merchandising pages as server components.
- Use package exports and workspace dependencies.
- Prefer v3 design-system composition examples.

## Do Not

- Copy admin dependency assumptions.
- Use v2 Banner props in storefront.

## Example

The promotions page should compose Banner slots directly in the page component.

## See Also

`packages/design-system/skills/public/banner-composition.md`
