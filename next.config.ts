import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.istanbultouristpass.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.istanbultouristpass.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'istanbultouristpass.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tools.applemediaservices.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play.google.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
