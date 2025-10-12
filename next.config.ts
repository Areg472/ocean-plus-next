import type { NextConfig } from "next";
import { withBetterStack } from "@logtail/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uptime.betterstack.com",
        pathname: "/**",
      },
    ],
  },
};

export default withBetterStack(nextConfig);
