import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  turbopack: {
    root: __dirname,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
