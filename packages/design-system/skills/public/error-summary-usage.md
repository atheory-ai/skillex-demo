---
name: Error summary usage
description: Public v3 guidance for ErrorSummary composition.
topics: [error-summary, validation]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when validation blocks form submission.

## Do

- Put ErrorSummary before the form or first invalid group.
- Link each item to the affected control.
- Keep labels actionable and specific.

## Do Not

- Use ErrorSummary for non-blocking hints.
- Repeat generic "Please fix errors" text without details.

## Example

List threshold and contact errors separately with linked anchors.

## See Also

`forms-composition.md`
