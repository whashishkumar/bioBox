/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'biobox.whdev.in',
        port: '',
        pathname: '/storage/**', // allow all images under /storage
      },
    ],
    unoptimized: process.env.NEXT_PUBLIC_DISABLE_IMAGE_OPTIMIZATION === 'true', // optional toggle
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_IMAGE_PATH: process.env.NEXT_PUBLIC_IMAGE_PATH,
    NEXT_USER_AUTH_EMAIL: process.env.NEXT_USER_AUTH_EMAIL,
    NEXT_USER_AUTH_PASSWORD: process.env.NEXT_USER_AUTH_PASSWORD,
  },
};

module.exports = nextConfig;
