import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/world-builder-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
