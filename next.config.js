/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages compatible configuration
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
