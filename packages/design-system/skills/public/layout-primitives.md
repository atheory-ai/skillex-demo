---
name: Layout primitives
description: Public v3 layout guidance for Stack and PageHeader.
topics: [layout, primitives]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use for simple page and section layout.

## Do

- Use Stack for vertical spacing.
- Use PageHeader once per page-level surface.
- Keep custom CSS at the app boundary.

## Do Not

- Add wrapper components for one page only.
- Recreate Stack with ad hoc margins.

## Example

`<Stack gap="lg"><PageHeader ... /><Banner ... /></Stack>`

## See Also

`tokens-and-spacing.md`
