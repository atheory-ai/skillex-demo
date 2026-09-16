# Skillex Agent Worktree Demo

This repository is an agent-run comparison of conventional root-level skills and
Skillex 0.9 scoped retrieval. It is not a manual tutorial.

Give your coding agent this instruction:

> Set up and run the comparison described in README.md. Use sub-agents in isolated
> worktrees, verify both results, and report the evidence.

The agent should perform installation, worktree setup, task execution, validation,
cleanup, and reporting. The human reviews the final report rather than copying a
sequence of setup commands.

## Comparison branches

- `main` is the baseline. It exposes one root `AGENTS.md` and a broad root
  `skills/` corpus.
- `skillex-0.9` is the treatment. It contains the same application and package
  source, but uses the released Skillex 0.9 configuration, distributed skills,
  package exports, and bounded `query` / `read` retrieval.

The branches intentionally differ only in agent-guidance and Skillex integration
surfaces. Application source must remain equivalent.

## Agent procedure

The coordinating agent must read [AGENT_PROMPT.md](./AGENT_PROMPT.md) and execute
it. In summary, the agent will:

1. fetch both comparison branches;
2. create detached sibling worktrees for `origin/main` and
   `origin/skillex-0.9`;
3. install dependencies in both worktrees;
4. run `pnpm skillex:refresh` and `pnpm skillex:verify` in the treatment;
5. launch isolated baseline and treatment sub-agents with the same task;
6. validate each implementation and compare its diff, retrieval path, timing,
   correctness, and ambiguity;
7. return the structured report required by the prompt;
8. remove the disposable worktrees after preserving the evidence.

If sub-agents are unavailable, the coordinator may run the two trials sequentially,
but must disclose that limitation.

## What the demo tests

The monorepo contains two applications using different major versions of the same
design-system package:

- `apps/admin` uses Next.js 15 and `@demo/design-system` v2.
- `apps/storefront` uses Next.js 16 and `@demo/design-system` v3.

The tasks in [DEMO.md](./DEMO.md) exercise package-major selection, app-local
conventions, migrations, and consumer-versus-maintainer guidance.

The coordinator may consult [EXPECTED.md](./EXPECTED.md) only after both sub-agents
have submitted independent results. Trial sub-agents must not read that file.

## Maintainer checks

The baseline branch should pass:

```sh
pnpm install --frozen-lockfile
pnpm typecheck
```

The treatment branch adds:

```sh
pnpm skillex:refresh
pnpm skillex:verify
pnpm skillex:check
```
