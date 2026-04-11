---
name: Workflow guidance
description: Broad guidance for composing business workflows in apps.
topics: [workflows, business-logic]
tags: [baseline]
audience: all
---

## Use When

Use when pages depend on promotion or commerce logic.

## Do

- Keep reusable business rules in workflow packages.
- Keep display logic in the consuming app.
- Make workflow outputs readable enough for UI composition.

## Do Not

- Duplicate promotion phrasing across multiple pages.
- Hide business rules in presentation components.

## Example

Generate a promotion message in a workflow package and render it in a Banner inside the app.

## See Also

Use package-specific skills when editing workflow packages.
