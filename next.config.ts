import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.steamusercontent.com",
      },
      {
        protocol: "https",
        hostname: "steamcdn-a.akamaihd.net",
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        "*.mp4": {
          loaders: ["file-loader"],
          as: "*.bin",
        },
      },
    },
  },
};

export default nextConfig;
