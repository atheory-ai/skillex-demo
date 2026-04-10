---
name: Server rendering
description: Public v3 guidance for using components in server-rendered app pages.
topics: [server-components, rendering]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when composing design-system components in App Router pages.

## Do

- Render static page content in server components.
- Pass plain values and JSX children into shared components.
- Keep browser state concerns out of static promotional pages.

## Do Not

- Add client boundaries just to use Banner or PageHeader.
- Treat compound components as client-only patterns.

## Example

Storefront home and promotions pages can stay server-rendered while using Banner slots.

## See Also

`banner-composition.md`
