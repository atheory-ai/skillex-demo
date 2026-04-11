---
name: Request boundaries
description: Public guidance for keeping data helpers separate from UI logic.
topics: [api-client, boundaries]
tags: [consumer]
audience: consumer
package: "@demo/api-client"
version: "0.x"
---

## Use When

Use when deciding whether logic belongs in the API client or the app.

## Do

- Keep reusable data retrieval and shaping in the package.
- Keep app-specific wording and layout in the app.
- Return plain objects that are easy to render.

## Do Not

- Put JSX or app-local copy in the API client.
- Turn the package into a grab bag of unrelated helpers.

## Example

The API client can return metrics; the admin dashboard decides panel layout.

## See Also

`data-shapes.md`
