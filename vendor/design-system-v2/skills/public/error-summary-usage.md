---
name: Error summary usage
description: Public v2 guidance for ErrorSummary on blocking forms.
topics: [error-summary, validation]
tags: [design-system-v2]
audience: consumer
package: "@demo/design-system"
version: "2.x"
---

## Use When

Use when a v2 form cannot be submitted due to validation errors.

## Do

- Place ErrorSummary before the invalid fields.
- Keep each message linked to a specific control.
- Use concrete corrective language.

## Do Not

- Use ErrorSummary for passive hints.
- Collapse multiple errors into generic copy.

## Example

Use one summary item per invalid settings field.

## See Also

`forms-composition.md`
