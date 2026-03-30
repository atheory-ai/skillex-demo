---
topics: [button, cta, component-library]
tags: [v1, consumer]
---

# Using `@demo/component-library` v1

Version 1 uses prop-driven APIs.

## Button

Use `Button` with explicit props:

- `label`
- `kind`
- `href`

Example:

```tsx
<Button label="Start free trial" kind="primary" href="/signup" />
```

## CTA

Use `Cta` for a larger marketing block.

Example:

```tsx
<Cta
  headline="Launch faster with scoped skills"
  actionHref="/signup"
  actionLabel="Start free trial"
/>
```
