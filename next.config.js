/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/apprentiq' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/apprentiq/' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 