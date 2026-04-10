---
name: Admin Next 15 conventions
description: Next.js 15 guidance for the admin app.
topics: [nextjs, admin]
tags: [next15]
audience: app-consumer
---

## Use When

Use when editing `apps/admin/src/app`.

## Do

- Use App Router pages under `src/app`.
- Keep dashboard and settings pages server-rendered.
- Check admin dependencies before copying storefront examples.

## Do Not

- Assume Next 16-only behavior applies here.
- Add client components for static operational content.

## Example

`apps/admin/src/app/dashboard/page.tsx` can fetch static demo data in the server component.

## See Also

Root `skills/nextjs/SKILL.md` for baseline guidance.
