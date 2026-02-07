import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  // Use the repository name for basePath and assetPrefix in production
  basePath: isProd ? '/Web3-Sprint-Swap' : '',
  assetPrefix: isProd ? '/Web3-Sprint-Swap/' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
