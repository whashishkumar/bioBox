/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['biobox.whdev.in'], // allow external image domain
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_IMAGE_PATH: process.env.NEXT_PUBLIC_IMAGE_PATH,
  },
};

module.exports = nextConfig;
