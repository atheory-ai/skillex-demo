---
name: Form guidance
description: Broad form composition guidance for apps in the demo repo.
topics: [forms, validation, errors]
tags: [baseline]
audience: all
---

## Use When

Use this skill when adding settings, configuration, or checkout-like forms.

## Do

- Group related controls with Fieldset.
- Put a summary of blocking errors before the form.
- Keep submit and cancel actions close to the final field group.

## Do Not

- Hide validation state only in placeholder text.
- Assume admin density and storefront merchandising pages should use the same layout.

## Example

A settings form should start with a PageHeader, then ErrorSummary when invalid, then Fieldset groups.

## See Also

Use app-local skills for density and placement rules.
