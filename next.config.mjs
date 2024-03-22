/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://dat.works' : undefined,
};

export default nextConfig;
