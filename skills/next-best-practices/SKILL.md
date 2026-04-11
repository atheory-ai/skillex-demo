---
name: Next Best Practices
description: Broad Next.js guidance modeled after common reusable skill packs.
topics: [nextjs, routing, server-components]
tags: [baseline, generic]
audience: all
---

## Use When

Use when adding or restructuring pages in either app.

## Do

- Keep route files under `src/app`.
- Prefer server-rendered pages unless browser state is required.
- Inspect the app dependency and existing route structure before copying patterns.

## Do Not

- Assume sibling apps share the same framework-major behavior.
- Introduce client boundaries for static page composition.

## Example

Both admin and storefront use App Router, but route composition and shared dependencies differ.

## See Also

`../nextjs/SKILL.md`
