# demo-skillex-monorepo

This repository is a compact demo of a common AI coding failure mode: the system has useful knowledge available, but it cannot reliably resolve which knowledge applies to the file being changed.

Most current skill systems assume the agent can filter relevance from a pile of skills. This repo demonstrates why that assumption breaks at scale.

## What It Contains

- `apps/admin`: a Next.js 15 internal admin app that consumes `@demo/design-system` v2 from `vendor/design-system-v2`.
- `apps/storefront`: a Next.js 16 storefront app that consumes `@demo/design-system` v3 from `packages/design-system`.
- `packages/design-system`: current v3 design system with slot-based `Banner` composition.
- `vendor/design-system-v2`: legacy v2 design system with prop-driven `Banner` usage.
- `skills`: a broad root-only corpus in a directory-per-skill `SKILL.md` format. It is intentionally useful, overlapping, and not sufficiently scoped.
- `skillex/public` and `skillex/private`: shared repo-level scoped skills used by Skillex in addition to app/package/vendor skills.
- Distributed app and package skills that encode path, package, version, and audience context.

## The Problem

Both design-system packages are named `@demo/design-system`, but their APIs differ:

- v2 uses `<Banner title="..." description="..." action={...} />`
- v3 uses `<Banner><Banner.Content>...</Banner.Content></Banner>`

A flat skill directory can retrieve both sets of guidance and leave the user or agent to infer which one applies. That inference becomes harder when framework versions, app conventions, and consumer versus maintainer guidance are mixed in the same context.

## Part 1: Work Without Skillex

Start with the root `AGENTS.md` and `skills/` directory only. In that baseline mode, ignore the skills shipped deeper under `apps/`, `packages/`, `vendor/`, and `skillex/`. The root corpus contains a larger set of reasonable repo-wide advice, but it still does not say which Banner API applies in `apps/admin`, which Next.js convention applies in `apps/storefront`, or when design-system private maintainer guidance should be used.

Try the tasks in `DEMO.md` using only root-level guidance. The expected failure is subtle: changes may look plausible while still requiring brittle manual context reconstruction from root docs, manifests, and source.

## Part 2: Turn On Skillex

The `skillex.yaml` file describes a path-aware, dependency-aware, version-aware resolution model. In this mode, Skillex ignores the root-only baseline corpus and resolves:

- shared scoped skills in `skillex/public` and `skillex/private`
- distributed app/package/vendor skills shipped alongside the code

That means:

- app paths resolve app-local skills
- app dependencies resolve the correct package skills
- shared repo-level Skillex skills remain available without falling back to the root-only baseline
- design-system package paths expose private maintainer skills
- vendor paths expose v2 public skills

The same tasks should now retrieve narrower context before code is changed.

## What This Proves

This is not a documentation volume problem. More docs alone can make retrieval noisier. The useful distinction is applicability: current file path, installed package version, package boundary, and audience should determine which skills enter context. Skillex can support both shared root-level skills and code-local shipped skills; this demo keeps the baseline root corpus separate so the comparison stays visible.

## Try It

Install and run the apps:

```sh
pnpm install
pnpm dev:admin
pnpm dev:storefront
```

Then work through `DEMO.md` and compare the likely behavior between:

- a root-only baseline using `AGENTS.md` plus `skills/`
- a Skillex path using the distributed skills selected by `skillex.yaml`
