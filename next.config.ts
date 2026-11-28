import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    webpackMemoryOptimizations: true,
    cpus: 1,
  },
};

export default nextConfig;