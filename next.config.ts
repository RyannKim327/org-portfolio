import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Required for static HTML exports on GitHub Pages
  },
  // Automatically handles basePath if deployed under a subdirectory repository
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
