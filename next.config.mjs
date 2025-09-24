/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  outputFileTracingRoot: "./",
  trailingSlash: true
};

export default nextConfig;