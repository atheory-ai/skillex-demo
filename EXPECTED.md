# Expected Outcomes

## Without Skillex

Users or agents are likely to read broad root docs and retrieve skills that are individually true but not applicable. As the flat skill corpus grows, common mistakes include:

- using the v3 slot Banner API in the admin app, which depends on v2
- using the v2 prop Banner API in storefront, which depends on v3
- applying storefront merchandising style to operational admin feedback
- treating consumer package guidance as maintainer implementation guidance
- mixing framework conventions between Next.js 15 and Next.js 16 apps

The output may look credible because the wrong guidance comes from the same repository.

## With Skillex

Skillex should narrow context before the agent acts:

- resolve by current file path
- inspect dependency boundaries
- select the installed package major
- distinguish public consumer skills from private maintainer skills
- narrow further by topic and tag

The expected result is less ambiguity, fewer mixed-version changes, and a clearer distinction between available knowledge and applicable knowledge.
