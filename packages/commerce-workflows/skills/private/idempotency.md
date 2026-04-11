---
name: Idempotency guidance
description: Private guidance for stable workflow outputs.
topics: [commerce-workflows, idempotency]
tags: [private]
audience: maintainer
package: "@demo/commerce-workflows"
version: "0.x"
---

## Use When

Use when changing or adding workflow functions.

## Do

- Keep the same inputs producing the same outputs.
- Avoid hidden state or environment assumptions.
- Make outputs predictable enough for static rendering.

## Do Not

- Depend on mutable global state for simple messaging helpers.
- Hide side effects inside formatting logic.

## Example

The same promotion input should always return the same headline and body.

## See Also

`workflow-testing.md`
