---
name: Routing guidance
description: Broad guidance for links and route structure.
topics: [routing, links]
tags: [baseline]
audience: all
---

## Use When

Use when adding links or route-specific UI.

## Do

- Keep routes under `src/app` in these apps.
- Use links for navigation between pages.
- Keep route-level copy aligned with the page purpose.

## Do Not

- Encode routing assumptions inside package components.
- Use buttons for plain navigation.

## Example

Banner actions that move to another page should render as links.

## See Also

Use app-local Next skills for framework-major details.
