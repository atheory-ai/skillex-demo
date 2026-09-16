# Agent Comparison Prompt

You are the coordinating agent. Set up, execute, verify, and report a controlled
comparison between this repository's `main` and `skillex-0.9` branches.

Do not ask the user to perform setup commands.

## 1. Prepare isolated worktrees

Fetch `origin`, confirm both branches exist, and create two detached sibling
worktrees from their remote heads. Use unique paths and record both commit SHAs.

The worktrees must be disposable and must not share uncommitted changes:

- baseline: `origin/main`
- treatment: `origin/skillex-0.9`

Install dependencies with the repository's declared pnpm version in each worktree.
In the treatment worktree, run:

```sh
pnpm skillex:refresh
pnpm skillex:verify
pnpm skillex:check
```

Stop and report a setup failure if either branch cannot reach a valid starting
state.

## 2. Verify source parity

Before trials, compare all non-guidance application and package source between the
worktrees. The following must be equivalent:

- `apps/**/src/**`
- `packages/**/src/**`
- `vendor/**/src/**`

Report any difference and do not claim a fair comparison until it is resolved.

## 3. Run isolated trials

Use two sub-agents in parallel when the environment supports them:

- Baseline sub-agent: work only in the baseline worktree.
- Treatment sub-agent: work only in the treatment worktree.

Give both sub-agents the same selected task from `DEMO.md`. Task 1 is the default
quick trial; tasks 4 and 5 are the strongest version and audience trials.

Each sub-agent must:

1. follow only the `AGENTS.md` in its worktree;
2. avoid `README.md`, `AGENT_PROMPT.md`, `EXPECTED.md`, and the other
   worktree;
3. begin from the same task wording;
4. make the requested code change;
5. run the most focused applicable typecheck;
6. report files and guidance consulted, commands run, elapsed time, uncertainty,
   and final rationale.

The treatment agent must use Skillex progressive retrieval:

1. start with `skillex query` or the Skillex MCP query;
2. narrow if discovery returns `too_broad`;
3. use `skillex read` only for selected references;
4. record query and read counts without dumping whole skill files.

Do not let either sub-agent see the other's work or conclusions before both finish.

If sub-agents are unavailable, run the trials sequentially in fresh detached
worktrees and clearly label the methodology limitation.

## 4. Verify results

After both trials finish:

- capture each diff;
- run the same relevant typecheck against both;
- compare API version, app conventions, tone, accessibility, and task completeness;
- inspect `EXPECTED.md` only now;
- distinguish observed facts from inference.

Do not assume the treatment wins. A correct baseline result remains correct even if
it required more manual discovery.

## 5. Report

Return:

### Executive summary

- winner or tie;
- strongest observed difference;
- largest caveat.

### Environment

- branch SHAs;
- Skillex version;
- package-manager version;
- parallel or sequential execution.

### Evidence table

For each trial include:

- elapsed time;
- guidance files read;
- manifest/source files inspected;
- Skillex query/read counts;
- typecheck result;
- wrong-version or audience mistakes;
- uncertainty and retrieval noise.

### Diff review

Explain correctness and meaningful implementation differences without counting
format-only changes as wins.

### Verdict

State what this run supports about scoped retrieval and what it does not establish.

### Cleanup

After preserving results, remove the two disposable worktrees. Never delete a
non-disposable user worktree.
