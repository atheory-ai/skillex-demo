# Demo Tasks

Use these exercises to compare a flat root skill workflow with Skillex-style scoped resolution.

## Task 1: Add A Promotional Banner To Admin

Goal: add a campaign notice to `apps/admin/src/app/dashboard/page.tsx`.

Intended challenge: admin uses Next.js 15 and `@demo/design-system` v2 from `vendor/design-system-v2`.

Likely failure without Skillex: the agent finds v3 slot guidance and writes `Banner.Content` in a v2 app, or follows storefront merchandising tone in an operational dashboard.

What Skillex should resolve: admin app skills, Next 15 guidance, and v2 public Banner usage.

## Task 2: Build A Settings Form In Admin

Goal: add validation, an error summary, and actions to `apps/admin/src/app/settings/page.tsx`.

Intended challenge: component APIs are only part of the work; admin has denser form layout and operational feedback conventions.

Likely failure without Skillex: the form compiles but misses admin-specific composition and error placement rules.

What Skillex should resolve: admin form guidance plus v2 Fieldset, ErrorSummary, Button, and Stack usage.

## Task 3: Add A Storefront Merchandising Message

Goal: add a promotional message to `apps/storefront/src/app/promotions/page.tsx`.

Intended challenge: storefront uses v3 slot-based Banner composition and customer-facing copy.

Likely failure without Skillex: the agent carries admin feedback conventions into the storefront or writes the v2 prop API.

What Skillex should resolve: storefront merchandising guidance, Next 16 conventions, and v3 public Banner composition.

## Task 4: Simulate A Banner Migration

Goal: migrate or document a move from v2 Banner usage to v3 Banner composition.

Intended challenge: the old and new APIs share the same package name but require different structure.

Likely failure without Skillex: partial migration, mixed props and slots, or an app dependency update without usage changes.

What Skillex should resolve: v3 migration guidance, the current consumer package version, and the target app dependency context.

## Task 5: Modify Design-System Internals

Goal: add a new Banner variation inside `packages/design-system/src/components/banner.tsx`.

Intended challenge: this is maintainer work, not consumer usage.

Likely failure without Skillex: consumer-facing Banner docs are easier to find than internal slot architecture and release guidance.

What Skillex should resolve: v3 private maintainer skills for architecture, slot patterns, styling strategy, and adding components.
