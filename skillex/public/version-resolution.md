---
name: Version resolution
description: Shared guidance for version-aware package usage under Skillex.
topics: [versioning, packages, dependencies]
tags: [shared, public]
audience: consumer
---

## Use When

Use when the same package name appears with multiple majors or when migration work is requested.

## Do

- Resolve the consuming dependency before using examples.
- Treat package name and package major as separate facts.
- Keep migration changes explicit and complete.

## Do Not

- Reuse v2 and v3 examples interchangeably.
- Infer version purely from package name.

## Example

`@demo/design-system` means v2 in admin and v3 in storefront.

## See Also

Versioned public package skills selected by the resolver.
