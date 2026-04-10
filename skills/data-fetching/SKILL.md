---
name: Data fetching guidance
description: Broad guidance for loading data in the demo apps.
topics: [data, fetching, server-components]
tags: [baseline]
audience: all
---

## Use When

Use when pages need package-provided data or workflow output.

## Do

- Fetch data in server components when interactivity is not required.
- Keep transformation logic in packages when reused.
- Prefer stable demo data over ad hoc inline objects when a package already provides it.

## Do Not

- Move shared workflow logic into app pages.
- Add client state just to display static data.

## Example

Use `@demo/api-client` for catalog-like data and `@demo/commerce-workflows` for promotion messaging.

## See Also

Check package skills when editing shared data packages.
