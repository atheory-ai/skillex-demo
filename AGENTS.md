# Skillex Treatment Guidance

This branch runs the Skillex treatment. Follow the generated Skillex section
below for initialization and retrieval. Use Skillex for all skill lookups.

Do not read `README.md`, `AGENT_PROMPT.md`, `EXPECTED.md`, the root-only
branch, or another worktree during a trial.

## Repository

This is a pnpm workspace with Next.js apps in `apps/`, shared packages in
`packages/`, and a legacy package in `vendor/`.

- Prefer TypeScript and React Server Components unless interactivity requires a
  client component.
- Use package exports instead of deep imports.
- Keep app behavior in apps and shared primitives in packages.
- Run the most focused typecheck after changes.

<!-- skillex:start -->
## Skillex

This project uses Skillex for skill management. Use the skillex MCP server
if available (preferred), otherwise use the CLI commands below.

### MCP (preferred)

At the start of each conversation, call `skillex_query` with no filters if Skillex setup context is missing. Follow the setup guidance from Skillex and use `skillex_read` for returned refs.

### CLI (fallback)

If MCP is not available, query skills via the command line. If the repository documents a local development binary, use it instead of a globally installed release:

Run the unfiltered query at the start of each conversation if setup context is missing. If it returns a core ref, use `read --ref` when that revision's guidance is missing or the revision changes. When a core cue applies, read its linked skill if needed. Match tasks using their cues and apply the linked skill before each occurrence. Use `read --ref` when a linked skill is missing from context.

Use filtered queries for additional context. Refine broad results before reading a selected skill or section. Treat update notices as advisory.

```
  node ./node_modules/@atheory-ai/skillex/bin/skillex.js query
  node ./node_modules/@atheory-ai/skillex/bin/skillex.js query --search "<concepts>" --json
  node ./node_modules/@atheory-ai/skillex/bin/skillex.js query --path <filepath> --limit 8 --json
  node ./node_modules/@atheory-ai/skillex/bin/skillex.js query --topic <topic> --tags <tags> --json
  node ./node_modules/@atheory-ai/skillex/bin/skillex.js query --source skillex --json
  node ./node_modules/@atheory-ai/skillex/bin/skillex.js read --ref <ref-from-query> --section <optional-section-id>
```

<!-- skillex:end -->
