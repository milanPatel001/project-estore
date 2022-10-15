/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "www.citypng.com"],
  },
};

module.exports = nextConfig;
