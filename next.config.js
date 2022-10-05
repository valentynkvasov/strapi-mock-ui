/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["kassandra-strapi.herokuapp.com"],
  },
}

module.exports = nextConfig
