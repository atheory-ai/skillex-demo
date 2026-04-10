---
name: Workflow testing
description: Private guidance for verifying reusable business logic.
topics: [commerce-workflows, testing]
tags: [private]
audience: maintainer
package: "@demo/commerce-workflows"
version: "0.x"
---

## Use When

Use when workflow behavior or message composition changes.

## Do

- Typecheck consumers after changing workflow outputs.
- Verify the output shape is stable.
- Keep examples readable enough to serve as documentation.

## Do Not

- Change message keys without checking app consumers.
- Let one app's copy needs dominate a shared workflow helper.

## Example

If a workflow stops returning `headline`, storefront pages must change too.

## See Also

`adding-workflows.md`
