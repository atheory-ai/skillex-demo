---
name: Deprecations
description: Public v2 deprecation and migration awareness.
topics: [deprecations, migration]
tags: [design-system-v2, upgrade]
audience: consumer
package: "@demo/design-system"
version: "2.x"
---

## Use When

Use when maintaining code that still consumes design-system v2.

## Do

- Keep v2 usage internally consistent.
- Prefer small local changes unless a migration is explicitly requested.
- Note that Banner will move to slot composition in v3.

## Do Not

- Partially migrate one component while the app remains on v2.
- Add new convenience props that make v3 migration harder.

## Example

Changing admin Banner copy should keep the v2 prop API unless the task is a migration.

## See Also

`packages/design-system/skills/public/migration-v2-to-v3.md`
