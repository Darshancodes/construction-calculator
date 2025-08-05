import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Skips type checking
  },
};

export default nextConfig;
