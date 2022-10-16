/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "www.citypng.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
