# AGENTS

This repository is designed to compare baseline file-based skill discovery with `skillex`.

## Before Skillex

Start with the default `AGENTS.md` style workflow described by Agent Skills:

- Read this file first.
- Inspect the repo structure.
- Discover relevant skill files by following paths and package boundaries.
- Load only the files that seem relevant to the task at hand.

## Repository shape

- `apps/next-legacy` is an older Next.js app using `pages/`.
- `apps/next-modern` is a newer Next.js app using `app/`.
- Both apps depend on `@demo/component-library`.
- The installed major version differs by app.

## Skill locations

- Repo-wide skills live in `skills/`.
- Package skills live under package-local `skillex/public/` and `skillex/private/` directories.
- Public package skills are for consumers of a package.
- Private package skills are for maintainers working on that package itself.

## Baseline discovery flow

When working on an app:

1. Read the relevant repo-level skill in `skills/`.
2. Determine which app you are in.
3. Determine which package version that app has installed.
4. Find the matching package skill files under that installed package.
5. Avoid using private package skills unless working inside the package itself.

## Places to inspect

- `skills/repo.md`
- `skills/demo-prompts.md`
- `skills/next-pages-router.md`
- `skills/next-app-router.md`
- `apps/next-legacy/package.json`
- `apps/next-modern/package.json`
- `apps/next-legacy/node_modules/@demo/component-library/skillex/public/`
- `apps/next-modern/node_modules/@demo/component-library/skillex/public/`

## Transition to Skillex

Later in the walkthrough, run:

```bash
npm run skillex:refresh
```

That will rebuild the local registry and replace this baseline experience with the generated `skillex`-aware `AGENTS.md` section.
