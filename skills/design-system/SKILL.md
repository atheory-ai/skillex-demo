---
name: Design system guidance
description: Baseline design-system usage notes.
topics: [design-system, components]
tags: [baseline, ambiguous]
audience: all
---

## Use When

Use shared primitives before creating one-off UI.

## Do

- Import components from `@demo/design-system`.
- Prefer Stack, PageHeader, Banner, Fieldset, ErrorSummary, and Button for common surfaces.
- Check the installed major version before copying examples.

## Do Not

- Deep import component internals from apps.
- Treat public consumer guidance as package maintainer guidance.

## Example

Both apps import `Banner` from `@demo/design-system`, but the component API differs by major version.

## See Also

Resolve package public or private skills by dependency and path.
