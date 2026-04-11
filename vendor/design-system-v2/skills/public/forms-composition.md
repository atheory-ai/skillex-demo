---
name: Forms composition
description: Public v2 form primitive guidance.
topics: [forms, validation]
tags: [design-system-v2]
audience: consumer
package: "@demo/design-system"
version: "2.x"
---

## Use When

Use for apps consuming design-system v2.

## Do

- Use Fieldset for grouped admin settings.
- Use ErrorSummary for blocking validation at the top of the form.
- Use Button with `variant="secondary"` for secondary navigation.

## Do Not

- Assume v3 spacing or composition rules.
- Inline validation summaries without links to fields.

## Example

Admin settings should group promotion controls and escalation controls separately when the form grows.

## See Also

`apps/admin/skills/forms-and-layout.md`
