/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quantumone.b-cdn.net',
        pathname: '/Ikb/**',
      },
    ],
  },
  eslint: {
    dirs: ['utils'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig
