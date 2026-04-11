---
name: Schema changes
description: Private guidance for altering API client return contracts.
topics: [api-client, schema]
tags: [private]
audience: maintainer
package: "@demo/api-client"
version: "0.x"
---

## Use When

Use when adding, removing, or renaming fields in API client outputs.

## Do

- Prefer additive changes when possible.
- Review affected apps before changing field names.
- Keep returned objects easy to consume in server components.

## Do Not

- Break consumer expectations without updating the apps.
- Encode presentation decisions into the data shape.

## Example

Adding `regionCount` is safer than replacing an existing `value` field.

## See Also

`mock-data.md`
