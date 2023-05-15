/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    // domains: ['tailwindui.com"'],
    // remotePatterns:[
    //   {
    //     protocol:'https',
    //     hostname:'tailwindui.com',
    //     port: '',
    //     pathname: '/img/**',
    //   }
    // ]
  }
}

module.exports = nextConfig
