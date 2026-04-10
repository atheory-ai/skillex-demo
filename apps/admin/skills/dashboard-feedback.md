---
name: Admin dashboard feedback
description: Operational feedback patterns for dashboard surfaces.
topics: [dashboard, feedback, banner]
tags: [admin, design-system-v2]
audience: app-consumer
---

## Use When

Use for status messages on admin dashboard pages.

## Do

- Use concise operational copy.
- Prefer v2 Banner props: `title`, `description`, and optional `action`.
- Put banners below PageHeader and above metrics.

## Do Not

- Use customer-facing promotional language.
- Use `Banner.Content` or other v3 slot APIs in admin.

## Example

`<Banner tone="success" title="Discount applied" description="Campaign is active." />`

## See Also

`vendor/design-system-v2/skills/public/banner-usage.md`
