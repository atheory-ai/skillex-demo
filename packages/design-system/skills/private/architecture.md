---
name: Design-system architecture
description: Private maintainer architecture guidance for v3.
topics: [architecture, internals]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when editing files under `packages/design-system/src`.

## Do

- Preserve the package export boundary through `src/index.ts`.
- Keep component files small and directly typed.
- Treat public skills as consumer guidance, not implementation rules.

## Do Not

- Add app-specific behavior to package internals.
- Break slot APIs without migration guidance.

## Example

Banner owns slot structure; apps own page placement and copy.

## See Also

`slot-patterns.md`
