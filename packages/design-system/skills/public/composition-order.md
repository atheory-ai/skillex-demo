---
name: Composition order
description: Public v3 guidance for arranging compound component slots.
topics: [composition, slots]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when composing Banner slots or similar primitives.

## Do

- Keep icon, content, and actions in a readable order.
- Put descriptive text inside `Banner.Content`.
- Keep actions at the end of the composition.

## Do Not

- Scatter Banner text across multiple unrelated wrappers.
- Place actions before the main message unless a workflow demands it.

## Example

`Icon -> Content -> Actions` is the expected Banner reading order.

## See Also

`banner-composition.md`
