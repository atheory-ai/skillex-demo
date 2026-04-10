---
name: Server component guidance
description: Broad guidance for server-rendered app pages.
topics: [react, server-components, nextjs]
tags: [baseline]
audience: all
---

## Use When

Use when deciding whether a page or component needs client interactivity.

## Do

- Keep static pages server-rendered by default.
- Let packages return plain data or JSX-friendly primitives.
- Add client components only when browser state is required.

## Do Not

- Add client directives for static copy or layout work.
- Move data logic into the browser without a reason.

## Example

Dashboard metrics and promotion banners can both render in server components.

## See Also

Use app-local Next version skills for current framework behavior.
