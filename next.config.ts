import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@next/next/no-img-element": "warn",
  },
};

export default nextConfig;
