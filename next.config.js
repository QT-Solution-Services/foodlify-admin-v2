const { baseUrl } = require("./src/constants/env.config.ts");
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const resolvedBaseUrl = isProd ? `https://${baseUrl}` : `http://${baseUrl}`;

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
        destination: `${resolvedBaseUrl}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
