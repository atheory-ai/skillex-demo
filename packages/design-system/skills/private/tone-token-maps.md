---
name: Tone token maps
description: Private maintainer guidance for tone/style maps in shared components.
topics: [tone, styling, tokens]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when changing tone-related styles in components like Banner.

## Do

- Keep tone values explicit and centralized.
- Make style differences readable in code.
- Preserve semantic intent across tone variants.

## Do Not

- Spread tone rules across unrelated helpers.
- Let app-specific branding leak into shared tone maps.

## Example

Banner tone styles should remain a clear record keyed by `info`, `success`, `warning`, and `critical`.

## See Also

`styling-strategy.md`
