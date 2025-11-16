import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for GitHub Pages
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: Uncomment if deploying to github.io/repo-name (not custom domain)
  // basePath: "/LLMTom",
};

export default nextConfig;
