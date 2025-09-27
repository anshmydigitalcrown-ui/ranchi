/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: true
  },
  async redirects() {
    return [
      {
        source: '/rates',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/booking',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/about',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;