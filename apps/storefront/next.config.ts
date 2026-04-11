import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@demo/design-system", "@demo/api-client", "@demo/commerce-workflows"]
};

export default nextConfig;
