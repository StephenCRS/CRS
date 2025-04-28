/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' for now to fix development issues
};

module.exports = nextConfig;
