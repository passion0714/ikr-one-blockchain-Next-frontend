/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['utils'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig
