import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "react-interview.crd4lc.easypanel.host"
      }
    ]
  }
};

export default nextConfig;
