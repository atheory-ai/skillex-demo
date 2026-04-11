---
name: Banner internals
description: Private maintainer guidance specific to Banner implementation.
topics: [banner, internals]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when modifying `src/components/banner.tsx`.

## Do

- Keep tone maps centralized near the root component.
- Preserve readable slot names.
- Keep Banner layout opinionated enough to be reusable but not app-specific.

## Do Not

- Reintroduce the v2 prop surface.
- Scatter Banner logic across multiple files without need.

## Example

A new slot should be attached through the existing compound-component export.

## See Also

`slot-patterns.md`
