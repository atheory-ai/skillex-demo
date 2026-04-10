---
name: Error handling guidance
description: Broad guidance for validation and feedback errors.
topics: [errors, validation, summaries]
tags: [baseline]
audience: all
---

## Use When

Use when adding blocking or recoverable errors.

## Do

- Summarize blocking errors near the top of the task surface.
- Link errors to the inputs or actions they affect.
- Use inline help for local issues and banners for page-level issues.

## Do Not

- Mix status banners with field validation without intent.
- Leave users to scan the whole form for failures.

## Example

Put an ErrorSummary above the settings form when save validation fails.

## See Also

Use app-local form skills for ordering and density.
