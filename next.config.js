/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["foodlify-files.s3.amazonaws.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
