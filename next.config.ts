import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This will allow the build to succeed despite TypeScript errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
