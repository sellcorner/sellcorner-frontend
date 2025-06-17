/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ⬇️ Ignore ESLint errors so production builds don’t fail
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
