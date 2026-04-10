---
name: Caching guidance
description: Public guidance for consuming stable demo data from the API client.
topics: [api-client, caching]
tags: [consumer]
audience: consumer
package: "@demo/api-client"
version: "0.x"
---

## Use When

Use when pages consume read-only demo data from the API client.

## Do

- Treat package outputs as stable server-side data.
- Keep view-level formatting in the app.
- Reuse package helpers when multiple pages need the same shape.

## Do Not

- Duplicate canned demo data in multiple apps.
- Move shared data shaping into page components.

## Example

Read featured products from `getFeaturedProducts()` in storefront pages.

## See Also

`data-shapes.md`
