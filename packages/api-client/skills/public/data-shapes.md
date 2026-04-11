---
name: Data shapes
description: Public guidance for consuming API client return values.
topics: [api-client, data]
tags: [consumer]
audience: consumer
package: "@demo/api-client"
version: "0.x"
---

## Use When

Use when rendering data returned by the API client package.

## Do

- Keep the package return shape intact unless the app truly needs a local projection.
- Name UI fields after the data shape where it improves clarity.
- Prefer package helpers over one-off arrays in app files.

## Do Not

- Hardcode the same metrics or product objects in several pages.
- Treat the API client as a place for app-specific copy.

## Example

Operational metrics belong in the API client; the app decides how to present them.

## See Also

`request-boundaries.md`
