---
name: Admin forms and layout
description: Admin-specific form composition using design-system v2.
topics: [forms, admin, layout]
tags: [next15, design-system-v2]
audience: app-consumer
---

## Use When

Use for forms in `apps/admin`.

## Do

- Keep pages compact and task-oriented.
- Place ErrorSummary before the form when blocking validation exists.
- Use v2 Fieldset and Button props directly; admin consumes design-system v2.

## Do Not

- Use storefront promotional spacing or copy tone.
- Introduce v3 slot-only component assumptions.

## Example

Settings pages should use `PageHeader`, then `ErrorSummary`, then grouped `Fieldset` controls.

## See Also

`vendor/design-system-v2/skills/public/forms-composition.md`
