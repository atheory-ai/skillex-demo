---
name: Promotion messaging
description: Public guidance for consuming workflow-generated promotion copy.
topics: [commerce-workflows, promotions]
tags: [consumer]
audience: consumer
package: "@demo/commerce-workflows"
version: "0.x"
---

## Use When

Use when a page needs a reusable promotion message or headline.

## Do

- Generate the campaign message in the workflow package.
- Render the result with app-local components and tone.
- Keep the workflow output neutral enough to fit multiple surfaces.

## Do Not

- Duplicate identical promotion strings in multiple pages.
- Push layout concerns into the workflow helper.

## Example

Use `buildPromotionMessage()` to create headline and body text for a Banner.

## See Also

`workflow-composition.md`
