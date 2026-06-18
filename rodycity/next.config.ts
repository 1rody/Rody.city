import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's root to THIS project.
  // Without this, a stray lockfile in /home/rody made `next dev` infer the
  // home directory as the workspace root, so Turbopack watched the entire
  // home tree (RAM spike -> crash) and resolved relative imports like
  // "./themes.css" from the wrong base (infinite recompile loop).
  // Docs: files outside the root are not resolved + reduced watch overhead.
  turbopack: {
    root: __dirname,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
