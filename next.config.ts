import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // 301 Permanent Redirects for Common Typo & Legacy URLs
      {
        source: '/seo-services-tirupur',
        destination: '/seo-services-tiruppur',
        permanent: true,
      },
      {
        source: '/seo-services-thippur',
        destination: '/seo-services-tiruppur',
        permanent: true,
      },
      {
        source: '/seo-services-tiruchirappalli',
        destination: '/seo-services-trichy',
        permanent: true,
      },
      {
        source: '/seo-services-thiruchirapalli',
        destination: '/seo-services-trichy',
        permanent: true,
      },
      {
        source: '/seo-services-tiruchy',
        destination: '/seo-services-trichy',
        permanent: true,
      },
      {
        source: '/seo-services-thiruchy',
        destination: '/seo-services-trichy',
        permanent: true,
      },
      {
        source: '/seo-services-thircy',
        destination: '/seo-services-trichy',
        permanent: true,
      },
      {
        source: '/seo-services-coimabatore',
        destination: '/seo-services-coimbatore',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/seo-services-:location',
        destination: '/seo-services/:location',
      },
    ];
  },
};

export default nextConfig;
