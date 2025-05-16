/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    domains: [
      "cdn.shopify.com",
      "epomaker.com",
      "kbd.news",
      "www.mchose.store",
      "www.nouvolo.com",
      "www.wobkey.com",
      "diykeycap.com",
      "www.dekada.com",
    ],
  },
}

export default nextConfig
