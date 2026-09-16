import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const forbiddenDirectories = [
  "skillex",
  "apps/admin/skills",
  "apps/storefront/skills",
  "packages/api-client/skills",
  "packages/commerce-workflows/skills",
  "packages/design-system/skills",
  "vendor/design-system-v2/skills",
];

if (existsSync("skillex.yaml")) {
  throw new Error("Baseline must not contain skillex.yaml");
}

function containsMarkdown(directory) {
  if (!existsSync(directory)) {
    return false;
  }

  return readdirSync(directory, { withFileTypes: true }).some((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? containsMarkdown(path) : entry.name.endsWith(".md");
  });
}

for (const directory of forbiddenDirectories) {
  if (containsMarkdown(directory)) {
    throw new Error(
      `Baseline must not expose scoped treatment guidance: ${directory}`,
    );
  }
}

function countSkillFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).reduce((count, entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      return count + countSkillFiles(path);
    }
    return count + Number(entry.name === "SKILL.md");
  }, 0);
}

const skillCount = countSkillFiles("skills");
if (skillCount < 20) {
  throw new Error(`Expected a broad root-only corpus, found ${skillCount} skills`);
}

console.log(`Verified isolated baseline with ${skillCount} root skills.`);
