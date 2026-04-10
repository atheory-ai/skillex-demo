---
name: Release process
description: Private maintainer notes for package changes.
topics: [release, versioning]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use before finishing a design-system change.

## Do

- Typecheck the package and consumers.
- Update public skills when public APIs change.
- Add migration notes for breaking changes.

## Do Not

- Ship API changes with only app examples updated.
- Change v2 vendor code as part of a v3 release unless simulating migration.

## Example

A new Banner variation should update private implementation notes and public usage guidance if consumers can access it.

## See Also

`adding-components.md`
