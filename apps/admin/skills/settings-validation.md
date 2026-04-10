---
name: Admin settings validation
description: Validation ordering and messaging for admin settings forms.
topics: [validation, admin, forms]
tags: [design-system-v2]
audience: app-consumer
---

## Use When

Use when adding validation to admin forms.

## Do

- Put ErrorSummary before the first field group.
- Keep messages specific to the saved configuration.
- Link errors to the exact controls.

## Do Not

- Spread blocking validation only across helper text.
- Use customer-facing phrasing for internal validation.

## Example

"Approval threshold must be at least 10 percent" is specific and actionable.

## See Also

`forms-and-layout.md`
