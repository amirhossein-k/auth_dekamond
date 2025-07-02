import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['randomuser.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'http',
        hostname: 'randomuser.me',
        port: "",
        pathname: "/**",
      }
    ],

  },
};

export default nextConfig;
