/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/apprentiq' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/apprentiq/' : '',
};

module.exports = nextConfig; 