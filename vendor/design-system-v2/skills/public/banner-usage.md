---
name: Banner usage
description: Public v2 Banner usage with prop-driven API.
topics: [banner, feedback]
tags: [design-system-v2]
audience: consumer
package: "@demo/design-system"
version: "2.x"
---

## Use When

Use when consuming `@demo/design-system@2`, especially in `apps/admin`.

## Do

- Pass `title`, optional `description`, and optional `action`.
- Keep action as `{ label, href }`.
- Use tones for operational feedback.

## Do Not

- Use `Banner.Icon`, `Banner.Content`, or other v3 slots.
- Nest Button inside Banner actions; v2 owns the action rendering.

## Example

```tsx
<Banner
  tone="success"
  title="Discount applied"
  description="Spring discount is now active."
  action={{ label: "View campaign", href: "/campaigns/123" }}
/>
```

## See Also

`deprecations.md`
