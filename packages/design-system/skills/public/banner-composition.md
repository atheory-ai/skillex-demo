---
name: Banner composition
description: Public v3 Banner usage with slot-based composition.
topics: [banner, composition]
tags: [design-system-v3]
audience: consumer
package: "@demo/design-system"
version: "3.x"
---

## Use When

Use when consuming v3 Banner from apps that depend on `@demo/design-system@3`.

## Do

- Compose `Banner.Icon`, `Banner.Content`, `Banner.Title`, `Banner.Description`, and `Banner.Actions`.
- Put Button actions inside `Banner.Actions`.
- Choose tone from user impact.

## Do Not

- Pass v2 props like `title`, `description`, or `action`.
- Import Banner internals from `src/components`.

## Example

```tsx
<Banner tone="success">
  <Banner.Icon />
  <Banner.Content>
    <Banner.Title>Discount applied</Banner.Title>
    <Banner.Description>Spring discount is now active.</Banner.Description>
  </Banner.Content>
  <Banner.Actions>
    <Button href="/campaigns/123">View campaign</Button>
  </Banner.Actions>
</Banner>
```

## See Also

`migration-v2-to-v3.md`
