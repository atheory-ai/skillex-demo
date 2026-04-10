---
name: Shared workflow packages
description: Shared guidance for consuming the API client and commerce workflow packages.
topics: [api-client, commerce-workflows, data]
tags: [shared, public]
audience: consumer
---

## Use When

Use when a task depends on shared demo data or reusable business messaging.

## Do

- Prefer package helpers over duplicating demo data in app files.
- Keep business-rule phrasing in workflow packages and layout in apps.
- Reuse the existing package return shapes where possible.

## Do Not

- Put JSX into data or workflow packages.
- Copy identical product or promotion data into multiple pages.

## Example

Use the workflow package to compose promotion copy, then render it with the app's resolved Banner API.

## See Also

Package-specific public skills for `@demo/api-client` and `@demo/commerce-workflows`.
