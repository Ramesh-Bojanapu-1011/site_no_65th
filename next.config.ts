import type { NextConfig } from "next";

// Configuration object for Next.js with strict React mode enabled and custom image settings 🚀🖼️
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] },
};

export default nextConfig;
