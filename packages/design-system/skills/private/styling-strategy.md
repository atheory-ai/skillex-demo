---
name: Styling strategy
description: Private maintainer styling guidance for v3 primitives.
topics: [styling, tokens]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when changing shared component styles.

## Do

- Keep component styles deterministic and portable across apps.
- Prefer small token maps for tones and gaps.
- Let apps provide page shells and grids.

## Do Not

- Couple package styles to admin or storefront classes.
- Encode app-specific layout into primitives.

## Example

Banner owns tone colors; storefront owns product grid layout.

## See Also

`architecture.md`
