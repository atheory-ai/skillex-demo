---
topics: [demo, skillex, scope]
tags: [repo, getting-started]
---

# Skillex Demo Repository

This repository exists to compare two retrieval models for agent skills.

## Goal

Given a working path and a user request, return the small set of instructions that actually apply there.

## Demo constraints

- `apps/next-legacy` uses pages-router conventions.
- `apps/next-modern` uses app-router conventions.
- Both apps depend on `@demo/component-library`.
- The installed major version differs by app.

## What to pay attention to

- Path-specific framework guidance.
- Version-specific package guidance.
- Public skills should be visible to app consumers.
- Private skills should not be injected into app work.
