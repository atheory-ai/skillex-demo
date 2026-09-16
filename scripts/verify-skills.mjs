import { execFileSync } from "node:child_process";

const executable = process.platform === "win32" ? "skillex.cmd" : "skillex";

function run(arguments_) {
  return JSON.parse(
    execFileSync(executable, arguments_, {
      encoding: "utf8",
    }),
  );
}

function query({ path, search, topic, tags, packageName }) {
  const arguments_ = [
    "query",
    "--path",
    path,
    "--search",
    search,
    "--limit",
    "8",
    "--json",
  ];

  if (topic) {
    arguments_.push("--topic", topic);
  }
  if (tags) {
    arguments_.push("--tags", tags);
  }
  if (packageName) {
    arguments_.push("--package", packageName);
  }

  const result = run(arguments_);
  if (result.type !== "results" || result.too_broad === true) {
    throw new Error(`Expected focused results for ${path}: ${JSON.stringify(result)}`);
  }

  return result;
}

function requireResult(label, result, expected) {
  const match = result.results.find((entry) => entry.name === expected.name);
  if (!match) {
    const names = result.results.map((entry) => entry.name);
    throw new Error(`${label}: expected ${expected.name} in ${JSON.stringify(names)}`);
  }

  for (const [key, value] of Object.entries(expected)) {
    if (match[key] !== value) {
      throw new Error(
        `${label}: expected ${key}=${JSON.stringify(value)}, got ${JSON.stringify(match[key])}`,
      );
    }
  }

  return match;
}

function requirePackageVersion(label, result, expectedVersion) {
  const packageResults = result.results.filter(
    (entry) => entry.package === "@demo/design-system",
  );
  if (
    packageResults.length === 0 ||
    packageResults.some((entry) => entry.version !== expectedVersion)
  ) {
    throw new Error(
      `${label}: expected only @demo/design-system ${expectedVersion}: ${JSON.stringify(packageResults)}`,
    );
  }
}

function requireNoMatch(label, arguments_) {
  const result = run(["query", ...arguments_, "--limit", "8", "--json"]);
  if (result.type !== "no_match") {
    throw new Error(`${label}: expected no_match, got ${JSON.stringify(result)}`);
  }
}

const adminApp = requireResult(
  "admin app guidance",
  query({
    path: "apps/admin/src/app/dashboard/page.tsx",
    search: "dashboard-feedback",
    topic: "banner",
    tags: "design-system-v2",
  }),
  {
    name: "Admin dashboard feedback",
    source_type: "repo",
  },
);

const adminPackage = query({
  path: "apps/admin/src/app/dashboard/page.tsx",
  search: "banner-usage",
  tags: "design-system-v2",
  packageName: "@demo/design-system",
});
requireResult(
  "admin package guidance",
  adminPackage,
  {
    name: "Banner usage",
    package: "@demo/design-system",
    version: "2.0.0",
    source_type: "dependency",
  },
);
requirePackageVersion("admin package guidance", adminPackage, "2.0.0");

requireResult(
  "storefront app guidance",
  query({
    path: "apps/storefront/src/app/promotions/page.tsx",
    search: "promotions-copy",
    tags: "design-system-v3",
  }),
  {
    name: "Storefront promotions copy",
    source_type: "repo",
  },
);

const storefrontPackage = query({
  path: "apps/storefront/src/app/promotions/page.tsx",
  search: "banner-composition",
  tags: "design-system-v3",
  packageName: "@demo/design-system",
});
requireResult(
  "storefront package guidance",
  storefrontPackage,
  {
    name: "Banner composition",
    package: "@demo/design-system",
    version: "3.0.0",
    source_type: "dependency",
  },
);
requirePackageVersion("storefront package guidance", storefrontPackage, "3.0.0");

requireResult(
  "maintainer guidance",
  query({
    path: "packages/design-system/src/components/banner.tsx",
    search: "banner-internals",
    topic: "internals",
    tags: "private",
  }),
  {
    name: "Banner internals",
    source_type: "repo",
  },
);

requireNoMatch("admin private boundary", [
  "--path",
  "apps/admin/src/app/dashboard/page.tsx",
  "--tags",
  "private",
]);
requireNoMatch("storefront private boundary", [
  "--path",
  "apps/storefront/src/app/promotions/page.tsx",
  "--tags",
  "private",
]);

const boundedRead = run(["read", "--ref", adminApp.ref, "--section", "do", "--json"]);
if (
  boundedRead.section?.id !== "do" ||
  !boundedRead.content.includes("Prefer v2 Banner props") ||
  boundedRead.content.includes("## Do Not")
) {
  throw new Error(`Unexpected bounded read response: ${JSON.stringify(boundedRead)}`);
}

console.log("Verified focused query and bounded read journeys for Skillex 0.9.0.");
