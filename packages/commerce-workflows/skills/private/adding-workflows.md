---
name: Adding workflows
description: Private guidance for adding new reusable workflow helpers.
topics: [commerce-workflows, adding]
tags: [private]
audience: maintainer
package: "@demo/commerce-workflows"
version: "0.x"
---

## Use When

Use when adding another business-logic helper to the workflow package.

## Do

- Keep inputs explicit.
- Return plain serializable data.
- Keep wording reusable across multiple app surfaces.

## Do Not

- Encode app-specific layout or component assumptions.
- Return partially formatted JSX.

## Example

A promotion helper should return headline and body text, not a Banner element.

## See Also

`idempotency.md`
