---
name: Package versioning
description: Private maintainer guidance for version-aware design-system changes.
topics: [versioning, migration]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when a change affects compatibility or migration from v2.

## Do

- Think about whether a change is additive or breaking.
- Preserve the distinction between v2 and v3 APIs.
- Update migration guidance when consumer structure changes.

## Do Not

- Blur v2 and v3 usage to make one example fit both.
- Backport v3 patterns into v2 semantics by accident.

## Example

Banner slot changes may require migration notes even if the package name stays the same.

## See Also

`change-management.md`
