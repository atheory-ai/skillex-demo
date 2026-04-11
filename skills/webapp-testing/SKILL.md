---
name: Webapp Testing
description: Broad testing guidance modeled after reusable web-app skill packs.
topics: [testing, verification, apps]
tags: [baseline, generic]
audience: all
---

## Use When

Use before finishing a change that touches pages, packages, or shared components.

## Do

- Typecheck the touched apps and packages.
- Rebuild the apps after shared component changes.
- Verify the consuming app that resolves the changed package major.

## Do Not

- Assume one app passing means the other app is unaffected.
- Treat migration work as verified without checking both dependency and usage.

## Example

Banner changes should be validated against the app that consumes the changed package version.

## See Also

`../testing/SKILL.md`
