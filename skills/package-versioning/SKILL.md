---
name: Package versioning guidance
description: Broad guidance for reasoning about versioned packages in the repo.
topics: [packages, versioning, dependencies]
tags: [baseline]
audience: all
---

## Use When

Use when the same package name appears with multiple majors.

## Do

- Inspect the consuming app dependency first.
- Treat package name and major version as separate facts.
- Keep migration changes explicit and complete.

## Do Not

- Copy examples between consumers without checking their resolved version.
- Infer package major from directory names alone.

## Example

`@demo/design-system` means v2 in admin and v3 in storefront.

## See Also

Use migration and package-specific skills for exact API mapping.
