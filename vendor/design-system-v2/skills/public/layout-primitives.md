---
name: Layout primitives
description: Public v2 layout guidance.
topics: [layout, stack, page-header]
tags: [design-system-v2]
audience: consumer
package: "@demo/design-system"
version: "2.x"
---

## Use When

Use for compact operational pages consuming v2.

## Do

- Use Stack for page rhythm.
- Use PageHeader for title, eyebrow, and description.
- Keep dashboards dense and readable.

## Do Not

- Use storefront hero composition as the default admin layout.
- Depend on v3-only component slots.

## Example

`<Stack gap="lg"><PageHeader ... /><Banner ... /></Stack>`

## See Also

`banner-usage.md`
