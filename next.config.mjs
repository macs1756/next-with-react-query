/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PRIMARY_TOKEN: process.env.PRIMARY_TOKEN,
    DOMAIN_FRONTEND: process.env.DOMAIN_FRONTEND,
    DOMAIN_BACKEND: process.env.DOMAIN_BACKEND,
  }
};

export default nextConfig;
