# Project

`demo-skillex-monorepo` demonstrates why knowledge retrieval needs resolution, not just more files.

The repo intentionally contains overlapping truths:

- two apps on different Next.js majors
- one package name with two major versions
- root skills that are broadly correct
- distributed skills that are correct for a specific path, dependency, version, and audience

The core demonstration component is `Banner`. Admin consumes v2 from `vendor/design-system-v2`; storefront consumes v3 from `packages/design-system`. The APIs are materially different, which makes accidental cross-version guidance easy to produce and hard to spot in a flat skill model.
