# skillex-demo

Demo monorepo for comparing file-crawled agent skills with `skillex` query-based retrieval.

This repo is intentionally small, but it recreates the failure modes that show up in larger codebases:

- Two apps with different framework conventions.
- The same package name installed at two different major versions.
- Consumer-facing and maintainer-facing package skills separated by visibility.
- A path-based query model that can answer "I'm working here on this, what do I need to know?" without asking the agent to crawl skill indexes.

## What this repo demonstrates

The current [Agent Skills specification](https://agentskills.io/specification) already covers some important concepts:

- Project-level and package-level skills.
- Package version scoping.
- Path activation within a project.
- Skill metadata for discovery.

So the gap is not that Agent Skills cannot express scope. The gap is how an agent gets to the right skill set efficiently as the number of skills grows.

The current model still assumes:

- A startup scan of configured skill directories and package skills.
- Metadata for discovered skills gets loaded into context up front.
- Agents then decide which skill content to read from that catalog.

That is workable when the skill surface is small. It gets weaker when:

- Many packages export skills.
- Multiple versions of the same package exist in one repo.
- Similar prompts collide across packages and versions.
- Public and private skills should be visible in different situations.
- The number of skill manifests and indexes starts competing with the actual task for context.

`skillex` changes the retrieval model:

- Skills are indexed into SQLite ahead of time.
- Scope is resolved from path, dependency boundary, package identity, and visibility.
- The agent asks a tool for the relevant slice instead of browsing the catalog itself.
- Retrieval cost stays stable even as the number of skills grows.

This demo is meant to make that difference obvious.

## Demo layout

```text
.
├── apps
│   ├── next-legacy
│   │   ├── package.json
│   │   └── pages/index.tsx
│   └── next-modern
│       ├── package.json
│       └── app/page.tsx
├── skills
│   ├── demo-prompts.md
│   ├── next-app-router.md
│   ├── next-pages-router.md
│   └── repo.md
├── vendor
│   ├── component-library-v1
│   │   ├── package.json
│   │   ├── skillex/public
│   │   └── skillex/private
│   └── component-library-v2
│       ├── package.json
│       ├── skillex/public
│       └── skillex/private
└── skillex.yaml
```

### Apps

- `apps/next-legacy` represents a pre-App Router Next.js app using `pages/`.
- `apps/next-modern` represents a newer App Router app using `app/`.

These apps are not meant to run. They exist to give the agent realistic path signals and different dependency scopes.

### Shared package name, different majors

Both apps depend on a package with the same name:

- `@demo/component-library@1.0.0`
- `@demo/component-library@2.0.0`

The APIs intentionally collide in meaning but differ in implementation:

- v1 uses `label`, `kind`, `headline`, and `actionHref`.
- v2 uses `children`, `tone`, `title`, and `href`.

That means a prompt like "add a CTA button" is ambiguous unless the agent resolves the active package version correctly.

## Why this is a useful comparison

A file-crawled skill approach can represent this repo, but it pushes more work onto the agent:

- Find the relevant project skill.
- Notice the app path convention.
- Discover the right package skill.
- Resolve which installed version applies in this app.
- Avoid loading the other version's equally plausible guidance.

`skillex` moves that work into deterministic indexing and query-time filtering.

## Setup

### 1. Install local demo dependencies

This repo expects the published npm package:

```bash
npm install --save-dev @atheory-ai/skillex
```

```bash
npm install
npm --prefix apps/next-legacy install
npm --prefix apps/next-modern install
```

At this point the repo starts in the baseline Agent Skills mode:

- [`AGENTS.md`](./AGENTS.md) is hand-authored.
- It tells the agent to discover repo and package skills by crawling files and package boundaries.
- There is no generated `skillex` section yet.

That is intentional. The demo is supposed to let people feel the discovery overhead before switching to `skillex`.

### 2. Try the baseline experience

Before running `skillex`, use the default workflow:

- Read [`AGENTS.md`](./AGENTS.md).
- Inspect [`skills/`](./skills/).
- Compare [`apps/next-legacy/package.json`](./apps/next-legacy/package.json) and [`apps/next-modern/package.json`](./apps/next-modern/package.json).
- Manually discover which installed `@demo/component-library` version applies in each app.

The point is not that this repo is impossible to understand. The point is that the agent has to spend real effort on discovery before it can start the task.

That means the baseline workflow asks the model to do all of this itself:

- infer whether it is in `pages/` or `app/`
- infer which local package install is active for the current app
- open multiple repo-level skills to find framework conventions
- open multiple package-level skills to find the matching dependency API
- avoid accidentally mixing consumer guidance with maintainer guidance
- keep the "other plausible answer" out of context once it has already seen it

### 3. Build the registry and switch experiences

Now run:

```bash
npm run skillex:refresh
```

This creates:

- `.skillex/index.db`
- a generated `skillex` section in `AGENTS.md`

## Configuration

The key file is [`skillex.yaml`](./skillex.yaml).

- Repo skills apply everywhere.
- App-specific skills apply only inside each app.
- Each app declares its own `DependencyBoundary`.
- That boundary causes `skillex` to read the installed dependencies for that app and attach the correct package skills.

In practice that means:

- A query under `apps/next-legacy/**` gets pages-router guidance and `@demo/component-library@1`.
- A query under `apps/next-modern/**` gets app-router guidance and `@demo/component-library@2`.

## Suggested walkthrough

### Baseline: feel the pain

Before running `skillex refresh`, try to answer these with only the baseline [`AGENTS.md`](./AGENTS.md), the repo tree, and normal file crawling:

### Trial 1: framework conventions

Pretend the agent is dropped into:

- [`apps/next-legacy/pages/index.tsx`](./apps/next-legacy/pages/index.tsx)
- [`apps/next-modern/app/page.tsx`](./apps/next-modern/app/page.tsx)

Ask it:

> Add a hero CTA to the homepage using the correct conventions for this app.

What the agent has to do in the baseline flow:

- notice which app it is in
- infer whether that means pages-router or app-router
- find the matching repo-level skill file
- ignore the equally relevant-looking skill file for the other app

What to notice:

- The distinction is obvious only after you inspect both the app path and the skill files.
- The agent can easily end up loading both [`skills/next-pages-router.md`](./skills/next-pages-router.md) and [`skills/next-app-router.md`](./skills/next-app-router.md) because both are clearly relevant to "Next.js routing".
- In a larger repo, this becomes less about obvious failure and more about context dilution: the model has now loaded multiple plausible instruction sets and has to self-police which one applies.

### Trial 2: same request, conflicting dependency APIs

Now ask the same question in both apps:

> Add a primary CTA button linking to `/signup`.

To answer correctly, the agent has to find:

- which installed version of `@demo/component-library` belongs to the current app
- which package skill files describe that version
- which component names and props are valid in that version

The collision is intentional:

- v1 uses `Button label=... kind=... href=...`
- v2 uses `Button tone=... href=...` with children
- v1 uses `Cta`
- v2 uses `CallToAction`

What to inspect manually:

- [`apps/next-legacy/package.json`](./apps/next-legacy/package.json)
- [`apps/next-modern/package.json`](./apps/next-modern/package.json)
- [`apps/next-legacy/node_modules/@demo/component-library/skillex/public/consumer.md`](./apps/next-legacy/node_modules/@demo/component-library/skillex/public/consumer.md)
- [`apps/next-modern/node_modules/@demo/component-library/skillex/public/consumer.md`](./apps/next-modern/node_modules/@demo/component-library/skillex/public/consumer.md)

What to notice:

- Both answers look reasonable if the model has seen both skill files.
- The names are close enough that cross-contamination is likely once both versions are in context.
- The repo is small, but even here the agent is effectively doing dependency-boundary resolution manually.

### Trial 3: consumer versus maintainer intent

Now switch the task:

> Explain how to work on the component library itself.

The agent now has to determine whether it is:

- consuming `@demo/component-library` from an app
- or working inside the package as a maintainer

What to inspect manually:

- [`vendor/component-library-v1/skillex/public/consumer.md`](./vendor/component-library-v1/skillex/public/consumer.md)
- [`vendor/component-library-v1/skillex/private/architecture.md`](./vendor/component-library-v1/skillex/private/architecture.md)
- [`vendor/component-library-v2/skillex/public/consumer.md`](./vendor/component-library-v2/skillex/public/consumer.md)
- [`vendor/component-library-v2/skillex/private/architecture.md`](./vendor/component-library-v2/skillex/private/architecture.md)

What to notice:

- The agent has to infer intent from the working path, not just the user prompt.
- A consumer task and a maintainer task can mention the same package name and similar concepts.
- Once both public and private docs are loaded, the model has to avoid leaking maintainer guidance into consumer work.

### Where the existing approach falls down

This demo is small enough that a careful model may still get many answers right. That does not remove the pain. It just hides it in extra retrieval work.

The problems to notice are:

- The agent has to browse before it can act.
- It has to load multiple plausible skills to determine which one applies.
- Correctness depends on the model remembering path, version, and intent at the same time.
- Similar prompts produce multiple plausible answers, and the filtering happens late inside the model.
- As skill files get longer, richer, and more numerous, this turns into context pollution instead of a single obvious mistake.

That is the feeling this repo is trying to create before you run `skillex refresh`: even when the answer is discoverable, the retrieval process is expensive, fragile, and model-dependent.

### After refresh: inspect the catalog

```bash
npm run skillex:query:legacy
npm run skillex:query:modern
```

Expected difference:

- The legacy app returns `next-pages-router.md` and the v1 component-library skills.
- The modern app returns `next-app-router.md` and the v2 component-library skills.

### Scenario 1: same request, different answers

Pretend the agent is asked:

> Add a primary CTA button that links to `/signup`.

Now query the two app paths:

```bash
skillex query --path 'apps/next-legacy/**' --format content
skillex query --path 'apps/next-modern/**' --format content
```

What should change:

- In `next-legacy`, the agent should use the pages-router guidance and the v1 `@demo/component-library` API.
- In `next-modern`, the agent should use the app-router guidance and the v2 `@demo/component-library` API.

### Scenario 2: same package name, two major versions

Ask for package-level results:

```bash
skillex query --package @demo/component-library --format summary
```

This shows both indexed versions exist in the registry. The path query then narrows the answer to the correct installed version for the active app boundary.

### Scenario 3: consumer vs maintainer visibility

Ask for package summaries:

```bash
skillex query --package @demo/component-library --format summary
```

You should see both:

- `public` skills for consumers of the package.
- `private` skills for maintainers of the package.

Then compare that with an app path query:

```bash
skillex query --path 'apps/next-legacy/**' --package @demo/component-library --format summary
```

Only public skills should be returned for app work.

### Scenario 4: framework convention scoping

Compare:

```bash
skillex query --path 'apps/next-legacy/**' --topic routing --format content
skillex query --path 'apps/next-modern/**' --topic routing --format content
```

The legacy app should get `pages/` guidance. The modern app should get `app/` guidance.

## Current implementation gaps surfaced by this demo

This repo is also useful as a reality check on the current local `skillex` build.

Those are good gaps to document because they sharpen the value proposition:

- The Agent Skills model needs a stronger retrieval layer.

## What this says about Agent Skills

This repo is not arguing that Agent Skills are a bad idea. The spec is useful and already gets several things right:

- Package-distributed skills.
- Version-aware package skills.
- Project path activation.
- Standard metadata and packaging conventions.

The pressure points are different:

- Startup discovery still grows with the number of skill-bearing packages.
- Metadata catalogs and indexes still have to be loaded and reasoned over by the agent.
- Collisions are resolved late, by the model, instead of early by deterministic scope rules.
- Context gets spent on "how to find the right skill" instead of just returning it.

`skillex` is best understood as a retrieval and scoping layer on top of the same general skill authoring idea.

## Files to inspect

- [`skillex.yaml`](./skillex.yaml)
- [`skills/repo.md`](./skills/repo.md)
- [`skills/next-pages-router.md`](./skills/next-pages-router.md)
- [`skills/next-app-router.md`](./skills/next-app-router.md)
- [`vendor/component-library-v1/skillex/public/consumer.md`](./vendor/component-library-v1/skillex/public/consumer.md)
- [`vendor/component-library-v2/skillex/public/consumer.md`](./vendor/component-library-v2/skillex/public/consumer.md)

## References

- Agent Skills specification: https://agentskills.io/specification
- Skillex project: https://github.com/atheoryai/skillex
