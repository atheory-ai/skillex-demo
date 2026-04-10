# Expected Outcomes

## Without Skillex

Users or agents are likely to read only broad root docs and retrieve skills that are individually true but not applicable. As the flat root skill corpus grows, common mistakes include:

- using the v3 slot Banner API in the admin app, which depends on v2
- using the v2 prop Banner API in storefront, which depends on v3
- applying storefront merchandising style to operational admin feedback
- treating consumer package guidance as maintainer implementation guidance
- mixing framework conventions between Next.js 15 and Next.js 16 apps

The output may still look credible because the root-only guidance, manifests, and source code often allow a careful agent to reconstruct the answer manually. The failure mode is brittleness: repeated manual context resolution under noisy root guidance.

## With Skillex

Skillex should narrow context before the agent acts by ignoring the root-only baseline corpus and selecting the distributed skills that match the current task:

- resolve by current file path
- inspect dependency boundaries
- select the installed package major
- distinguish public consumer skills from private maintainer skills
- narrow further by topic and tag

The expected result is less ambiguity, fewer mixed-version changes, and a clearer distinction between available knowledge and applicable knowledge.
