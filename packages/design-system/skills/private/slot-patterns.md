---
name: Slot patterns
description: Private maintainer guidance for compound components.
topics: [slots, compound-components]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when changing Banner or adding another compound component.

## Do

- Attach slots with `Object.assign`.
- Keep slot names explicit and stable.
- Type root props separately from slot props.

## Do Not

- Add hidden ordering requirements that consumers cannot see.
- Reintroduce v2 convenience props to v3 Banner.

## Example

`Banner.Title` should remain a named slot so migrations are mechanical and readable.

## See Also

`adding-components.md`
