import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['c961427.parspack.net','uploade.storage.iran.liara.space'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'http',
        hostname: 'randomuser.me',
      }
    ],

  },
};

export default nextConfig;
