---
name: Accessibility checklist
description: Private maintainer checklist for shared component accessibility.
topics: [accessibility, checklist]
tags: [design-system-v3, private]
audience: maintainer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use before shipping a component or API change.

## Do

- Check role and semantic expectations.
- Verify focusable actions remain meaningful.
- Ensure tone is not the only signal.

## Do Not

- Assume consumer code will compensate for missing semantics.
- Treat accessibility as only a documentation problem.

## Example

Critical Banner changes should preserve assertive live-region behavior.

## See Also

`component-testing.md`
