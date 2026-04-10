---
name: Release notes
description: Private guidance for documenting API client changes.
topics: [api-client, release]
tags: [private]
audience: maintainer
package: "@demo/api-client"
version: "0.x"
---

## Use When

Use when package outputs or helper names change.

## Do

- Note consumer-visible changes.
- Check whether any app depends on the changed shape.
- Keep package changes small and explicit.

## Do Not

- Change return contracts silently.
- Fold unrelated data changes into one release note.

## Example

If featured product fields change, mention the storefront impact.

## See Also

`schema-changes.md`
