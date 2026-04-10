---
name: API review
description: Private maintainer guidance for reviewing public API changes.
topics: [api, review]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when changing component props, slots, or exports.

## Do

- Check whether the change affects consumers or only internals.
- Prefer additive slot changes over ambiguous convenience props.
- Update public skills when consumer-facing behavior changes.

## Do Not

- Merge public API changes without migration implications.
- Add overlapping props that undermine composition.

## Example

Adding a new Banner slot needs both implementation and consumer guidance review.

## See Also

`documentation-updates.md`
