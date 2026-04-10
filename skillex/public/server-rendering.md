---
name: Server rendering
description: Shared server-rendering guidance for app tasks resolved by Skillex.
topics: [server-components, nextjs]
tags: [shared, public]
audience: consumer
---

## Use When

Use when deciding whether a page or component should remain server-rendered.

## Do

- Keep static dashboard and merchandising pages server-rendered by default.
- Let packages return plain data or composable primitives.
- Add client boundaries only for real browser-state needs.

## Do Not

- Add client components just to compose shared UI.
- Move stable package data logic into browser state.

## Example

Promotions pages and admin dashboards can render fully on the server while using shared components.

## See Also

App-local Next version skills for framework-specific details.
