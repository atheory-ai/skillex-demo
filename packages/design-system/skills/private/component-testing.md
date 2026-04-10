---
name: Component testing
description: Private maintainer guidance for verifying shared primitives.
topics: [testing, components]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when shared component behavior or props change.

## Do

- Typecheck the package and consumer apps.
- Verify component usage examples still compile.
- Check both default and non-default tone or layout cases when relevant.

## Do Not

- Stop after package-only verification if consumers rely on the component.
- Assume v2 consumers are affected by v3 internals unless migration is part of the task.

## Example

After changing Banner internals, verify `packages/design-system` and `apps/storefront`.

## See Also

`release-process.md`
