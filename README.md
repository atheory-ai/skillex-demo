# demo-skillex-monorepo

This repository is a compact demo of a common AI coding failure mode: the system has useful knowledge available, but it cannot reliably resolve which knowledge applies to the file being changed.

Most current skill systems assume the agent can filter relevance from a pile of skills. This repo demonstrates why that assumption breaks at scale.

## What It Contains

- `apps/admin`: a Next.js 15 internal admin app that consumes `@demo/design-system` v2 from `vendor/design-system-v2`.
- `apps/storefront`: a Next.js 16 storefront app that consumes `@demo/design-system` v3 from `packages/design-system`.
- `packages/design-system`: current v3 design system with slot-based `Banner` composition.
- `vendor/design-system-v2`: legacy v2 design system with prop-driven `Banner` usage.
- `skills`: broad root skills that are true and useful, but not sufficiently scoped.
- Distributed app and package skills that encode path, package, version, and audience context.

## The Problem

Both design-system packages are named `@demo/design-system`, but their APIs differ:

- v2 uses `<Banner title="..." description="..." action={...} />`
- v3 uses `<Banner><Banner.Content>...</Banner.Content></Banner>`

A flat skill directory can retrieve both sets of guidance and leave the user or agent to infer which one applies. That inference becomes harder when framework versions, app conventions, and consumer versus maintainer guidance are mixed in the same context.

## Part 1: Work Without Skillex

Start with the root `AGENTS.md` and `skills/` directory. They contain reasonable repo-wide advice, but they do not say which Banner API applies in `apps/admin`, which Next.js convention applies in `apps/storefront`, or when design-system private maintainer guidance should be used.

Try the tasks in `DEMO.md` using only root-level guidance. The expected failure is subtle: changes may look plausible while using the wrong versioned API or the wrong app convention.

## Part 2: Turn On Skillex

The `skillex.yaml` file describes a path-aware, dependency-aware, version-aware resolution model:

- app paths resolve app-local skills
- app dependencies resolve the correct package skills
- design-system package paths expose private maintainer skills
- vendor paths expose v2 public skills

The same tasks should now retrieve narrower context before code is changed.

## What This Proves

This is not a documentation volume problem. More docs alone can make retrieval noisier. The useful distinction is applicability: current file path, installed package version, package boundary, and audience should determine which skills enter context.

## Try It

Install and run the apps:

```sh
pnpm install
pnpm dev:admin
pnpm dev:storefront
```

Then work through `DEMO.md` and compare the likely behavior with and without Skillex resolution.
