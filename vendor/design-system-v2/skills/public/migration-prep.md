---
name: Migration prep
description: Public v2 guidance for preparing consumers for a future v3 migration.
topics: [migration, prep]
tags: [design-system-v2, upgrade]
audience: consumer
package: "@demo/design-system"
version: "2.x"
---

## Use When

Use when making changes in v2 code that may later migrate to v3.

## Do

- Keep v2 usage internally consistent.
- Avoid layering new convenience props onto v2 APIs.
- Document any local abstractions that would complicate a later migration.

## Do Not

- Partially imitate v3 slot composition in v2 files.
- Hide Banner usage behind app-specific wrappers without need.

## Example

Keep Banner call sites explicit so a future migration can map them cleanly.

## See Also

`deprecations.md`
