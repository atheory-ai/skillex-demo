---
name: Adding components
description: Private maintainer checklist for adding v3 components.
topics: [components, exports]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when adding or materially changing a component in v3.

## Do

- Add the component under `src/components`.
- Export it from `src/index.ts`.
- Add public skills for consumer-facing API if the component is reusable.

## Do Not

- Add undocumented exports.
- Copy v2 APIs by default.

## Example

If Banner gains a new slot, update `banner-composition.md` and migration guidance.

## See Also

`release-process.md`
