---
name: Mock data maintenance
description: Private guidance for updating demo data in the API client.
topics: [api-client, mock-data]
tags: [private]
audience: maintainer
package: "@demo/api-client"
version: "0.x"
---

## Use When

Use when changing demo data returned by the API client.

## Do

- Keep data plausible and stable.
- Preserve the shape expected by consuming pages.
- Update both admin and storefront consumers if shared outputs change.

## Do Not

- Add app-specific copy that belongs in the app.
- Change returned field names casually.

## Example

Adding another metric is safer than renaming an existing metric key.

## See Also

`schema-changes.md`
