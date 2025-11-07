import type { NextConfig } from "next";
import { withBetterStack } from "@logtail/next";
import { withBotId } from "botid/next/config";

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

export default withBotId(withBetterStack(nextConfig));
