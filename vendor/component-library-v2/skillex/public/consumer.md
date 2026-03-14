---
topics: [button, cta, component-library]
tags: [v2, consumer]
---

# Using `@demo/component-library` v2

Version 2 uses more compositional APIs.

## Button

Use `Button` with children:

- `tone`
- `href`
- `children`

Example:

```tsx
<Button tone="brand" href="/signup">
  Start free trial
</Button>
```

## CTA

Use `CallToAction` for a larger marketing block.

Example:

```tsx
<CallToAction title="Ship the right skills" href="/signup">
  Start free trial
</CallToAction>
```
