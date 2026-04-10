---
name: Change management
description: Private maintainer guidance for coordinating package changes.
topics: [changes, coordination]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when a package change affects multiple consumers or docs.

## Do

- Check impacted apps before finalizing the change.
- Update migration notes for breaking behavior.
- Keep release notes aligned with the actual public surface.

## Do Not

- Change shared components in isolation from their documentation.
- Treat versioned package consumers as one homogeneous audience.

## Example

A Banner API change should consider storefront consumers and any migration path from v2.

## See Also

`release-process.md`
