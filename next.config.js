/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['quantumone.b-cdn.net', 'unpkg.com', 'lh3.googleusercontent.com'],
  },
  eslint: {
    dirs: ['utils'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig
