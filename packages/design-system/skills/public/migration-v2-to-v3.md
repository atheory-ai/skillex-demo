---
name: Migration from v2 to v3
description: Public migration guidance for design-system consumers.
topics: [migration, banner]
tags: [design-system-v3, upgrade]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when moving consumer code from v2 prop-driven APIs to v3 composition.

## Do

- Update the dependency and usage together.
- Map `title` to `Banner.Title`.
- Map `description` to `Banner.Description`.
- Map `action` to `Banner.Actions` with Button.

## Do Not

- Leave `title`, `description`, or `action` props on v3 Banner.
- Mix v2 and v3 examples in the same file.

## Example

The v2 `action={{ label, href }}` becomes `<Banner.Actions><Button href={href}>{label}</Button></Banner.Actions>`.

## See Also

`banner-composition.md`
