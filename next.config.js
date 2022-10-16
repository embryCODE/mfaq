/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
