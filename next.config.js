const { baseUrl } = require("./src/constants/env.config.ts");
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["foodlify-files.s3.amazonaws.com"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${baseUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
