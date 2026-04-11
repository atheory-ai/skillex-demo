---
name: Exports and entrypoints
description: Private maintainer guidance for package exports.
topics: [exports, entrypoints]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when adding components or changing how they are imported.

## Do

- Export public components from `src/index.ts`.
- Keep consumer imports package-root based.
- Review whether a new internal helper should stay private.

## Do Not

- Require apps to deep import source files.
- Export internals that are not part of the intended API.

## Example

Adding a new public primitive means updating the package root export.

## See Also

`adding-components.md`
