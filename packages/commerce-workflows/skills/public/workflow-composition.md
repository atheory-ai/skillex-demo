---
name: Workflow composition
description: Public guidance for combining workflow outputs with app UI.
topics: [commerce-workflows, composition]
tags: [consumer]
audience: consumer
package: "@demo/commerce-workflows"
version: "0.x"
---

## Use When

Use when a workflow package produces content for a page-level component.

## Do

- Keep workflow packages responsible for business phrasing and rules.
- Keep visual composition in the app.
- Pass workflow outputs directly into the relevant UI slots or props.

## Do Not

- Turn workflow functions into JSX factories.
- Hide business rules inside view code.

## Example

Generate a promotion message in the package and render it inside a storefront Banner.

## See Also

`promotion-messaging.md`
