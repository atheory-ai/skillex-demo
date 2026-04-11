---
name: Migration guidance
description: Broad migration guidance for versioned package work.
topics: [migration, versions]
tags: [baseline]
audience: all
---

## Use When

Use this when moving usage from one package major to another.

## Do

- Identify the current dependency version first.
- Update call sites and dependency metadata together.
- Keep mixed-version examples out of migrated files.

## Do Not

- Change app usage to v3 syntax while leaving a v2 dependency in place.
- Assume the same package name means the same API.

## Example

Migrating Banner from v2 to v3 means replacing prop-driven usage with slot composition.

## See Also

Use the v3 public migration skill for concrete Banner mapping.
