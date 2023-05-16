/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  jsc: {
    transform: {
      react: {
        throwIfNamespace: false,
      },
    },
  },
  experimental: {
    appDir: true
  },
  images: {
    // domains: ['tailwindui.com"'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      // {
      //   protocol:'https',
      //   hostname:'tailwindui.com',
      //   port: '',
      //   pathname: '/img/**',
      // }
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
