import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // config file upload size limit
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
