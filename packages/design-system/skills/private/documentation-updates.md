---
name: Documentation updates
description: Private maintainer guidance for keeping package docs in sync.
topics: [documentation, skills]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when a package change affects how consumers should work.

## Do

- Update the relevant public skills.
- Add migration notes when the change alters consumer code structure.
- Keep examples aligned with the exported API.

## Do Not

- Leave internal changes undocumented when they alter contributor workflows.
- Add new public exports without usage guidance.

## Example

A new Banner slot should be reflected in `banner-composition.md`.

## See Also

`api-review.md`
