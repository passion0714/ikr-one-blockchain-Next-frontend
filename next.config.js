/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['utils'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')],
  },

}

module.exports = nextConfig
