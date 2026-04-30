---
name: Stack usage
description: Public v3 guidance for vertical spacing with Stack.
topics: [stack, spacing]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when page sections need consistent vertical rhythm.

## Do

- Use `sm`, `md`, or `lg` gaps intentionally.
- Wrap page sections in one Stack rather than ad hoc margins.
- Let apps handle larger shell layout.

## Do Not

- Nest multiple stacks with arbitrary gaps for one simple flow.
- Encode page shell spacing inside shared components.

## Example

Use `gap="lg"` for page sections and `gap="md"` inside forms.

## See Also

`tokens-and-spacing.md`
