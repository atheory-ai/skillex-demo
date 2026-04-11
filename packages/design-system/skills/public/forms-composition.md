---
name: Forms composition
description: Public v3 form primitives and validation layout.
topics: [forms, validation]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when composing app forms with v3 primitives.

## Do

- Use PageHeader for page context.
- Put ErrorSummary before the first invalid group.
- Group controls with Fieldset and action rows with Button.

## Do Not

- Put validation only near the submit button.
- Create app-only variants before checking existing primitives.

## Example

Use Stack to separate PageHeader, ErrorSummary, Fieldset, and actions.

## See Also

`accessibility.md`
