# Skillex Treatment Guidance

This branch represents the Skillex 0.9 scoped-retrieval setup.

## Retrieval rules

- Use the Skillex MCP server when available; otherwise use
  `pnpm exec skillex query` and `pnpm exec skillex read`.
- Start with bounded discovery by current path and task intent.
- If discovery is too broad, narrow using the returned facets and suggestions.
- Read only selected references or sections.
- Do not crawl skill directories or load every matching skill.
- Do not read `README.md`, `AGENT_PROMPT.md`, `EXPECTED.md`, the root-only
  branch, or another worktree.

## Repository

This is a pnpm workspace with Next.js apps in `apps/`, shared packages in
`packages/`, and a legacy package in `vendor/`.

- Prefer TypeScript and React Server Components unless interactivity requires a
  client component.
- Use package exports instead of deep imports.
- Keep app behavior in apps and shared primitives in packages.
- Run the most focused typecheck after changes.

The generated Skillex section below is maintained by `skillex refresh`.


<!-- skillex:start -->
## Skillex

This project uses Skillex for skill management. Use the skillex MCP server
if available (preferred), otherwise use the CLI commands below.

### MCP (preferred)

If the `skillex` MCP server is connected, use it directly:

- Start with `skillex_query` (path, topic, tags, package, search, limit, cursor). It returns bounded discovery summaries, not whole skill files.
- If `too_broad` is true, use its candidate-scoped `narrow_with` facets and suggestions to refine the query.
- Use `skillex_read` with a selected result `ref` and optional section id only after discovery; keep reads bounded.
- MCP resources provide a skill table of contents. Do not bulk-load skill content.

### CLI (fallback)

If MCP is not available, query skills via the command line. If the repository documents a local development binary, use it instead of a globally installed release:

```
  skillex query --search "<concepts>"
  skillex query --path <filepath> --limit 8
  skillex query --topic <topic> --tags <tags>
  skillex read --ref <ref-from-query> --section <optional-section-id>
```

### Available scopes

  - apps/admin/**
  - apps/admin/node_modules/@demo/api-client/**
  - apps/admin/node_modules/@demo/commerce-workflows/**
  - apps/storefront/**
  - apps/storefront/node_modules/@demo/api-client/**
  - apps/storefront/node_modules/@demo/commerce-workflows/**
  - apps/storefront/node_modules/@demo/design-system/**
  - packages/api-client/**
  - packages/commerce-workflows/**
  - packages/design-system/**
  - vendor/design-system-v2/**

### Available topics

  accessibility, actions, adding, admin, api, api-client, architecture, banner, boundaries, button, caching, campaigns, changes, checklist, commerce-workflows, components, composition, compound-components, conversion, coordination, copy, cta, dashboard, data, demo, density, dependencies, deprecations, disclaimers, documentation, eligibility, entrypoints, error-summary, evaluation, exports, feedback, fieldset, forms, governance, headings, homepage, idempotency, internals, layout, links, maintenance, merchandising, messaging, migration, mock-data, navigation, nextjs, offers, operations, packages, page-header, prep, primitives, promotions, release, rendering, repo, review, schema, seasonal, server-components, skills, slots, spacing, stack, status, storefront, styling, testing, tokens, tone, trust, validation, versioning

### Available tags

  admin, consumer, conversion, customer, design-system-v2, design-system-v3, feedback, internal, marketing, next15, next16, private, public, shared, trust, upgrade

### Packages with skills

  @demo/api-client (0.1.0) — 6 public, 6 private
  @demo/commerce-workflows (0.1.0) — 6 public, 6 private
  @demo/design-system (2.0.0) — 12 public, 0 private
  @demo/design-system (3.0.0) — 15 public, 14 private

<!-- skillex:end -->
