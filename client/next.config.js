/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    env: {
        APP_URL: process.env.REACT_APP_URL,
    },
    images: {
        domains: ['localhost']
    }
};

module.exports = nextConfig;
