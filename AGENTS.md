# Baseline Agent Guidance

This branch represents a conventional root-only agent setup.

## Allowed guidance

- Read this file and relevant skills under `skills/`.
- Inspect package manifests and source files when guidance is ambiguous.
- Do not fetch guidance from the `skillex-0.9` branch or another worktree.
- Do not read `README.md`, `AGENT_PROMPT.md`, `EXPECTED.md`, or reports from
  the coordinating agent.

## Repository

This is a pnpm workspace with Next.js apps in `apps/`, shared packages in
`packages/`, and a legacy package in `vendor/`.

- Prefer TypeScript and React Server Components unless interactivity requires a
  client component.
- Check the consuming app's package manifest before assuming framework or package
  behavior.
- Use package exports instead of deep imports.
- Keep app behavior in apps and shared primitives in packages.
- Run `pnpm typecheck` after changes.

The root skills are intentionally broad. Resolve version, package, path, and
consumer-versus-maintainer context manually from manifests and source.
