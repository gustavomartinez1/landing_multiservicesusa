/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages compatible configuration
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
