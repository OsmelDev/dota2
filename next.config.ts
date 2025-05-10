import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.mp4": {
        loaders: ["file-loader"],
        as: "*.bin",
      },
    },
  },
};

export default nextConfig;
