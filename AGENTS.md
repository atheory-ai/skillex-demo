# Agent Guidance

This repo uses pnpm workspaces with apps in `apps/`, shared packages in `packages/`, and legacy package examples in `vendor/`.

## Repo Conventions

- Prefer TypeScript and React Server Components unless a page explicitly needs client interactivity.
- Keep UI changes small and realistic.
- Use package exports instead of deep imports.
- Keep app-specific behavior in the app and shared primitives in packages.

## Next.js

Both apps use the App Router. Put routes under `src/app`, keep page files focused, and avoid global state unless the task calls for it. Check the app package version before assuming framework behavior.

## Design System

Use `@demo/design-system` for shared UI primitives such as Banner, Button, Stack, Fieldset, PageHeader, and ErrorSummary. The design system has multiple major versions in this repo, so check the consuming app dependency before copying examples.

## Testing

Run typechecks for touched packages and apps. Add focused tests when behavior becomes nontrivial.

## Architecture

Root guidance is intentionally broad. It is useful for orientation but does not resolve package version, app-local convention, or consumer versus contributor context. Treat the root `skills/` directory as a baseline system, not as a substitute for package- or app-local guidance.
