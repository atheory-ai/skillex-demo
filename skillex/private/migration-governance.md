---
name: Migration governance
description: Maintainer guidance for versioned-package migrations and examples.
topics: [migration, governance, versioning]
tags: [shared, private]
audience: maintainer
---

## Use When

Use when the repo changes how migrations are documented or demonstrated.

## Do

- Keep migration examples version-accurate.
- Update both the package guidance and the evaluation tasks when migration semantics change.
- Preserve the same-name, different-major contrast for the design-system demo.

## Do Not

- Flatten version differences to simplify docs.
- Let shared examples become ambiguous across majors.

## Example

If Banner mapping changes, update both public migration guidance and evaluation expectations.

## See Also

`architecture.md`
