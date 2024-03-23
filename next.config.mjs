/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
        /**
     * Set base path. This is the slug of your GitHub repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath:  process.env.NODE_ENV === 'prod' ? "/tipme" : undefined,
    // Use the CDN in production and localhost for development.
    assetPrefix: process.env.NODE_ENV === 'prod' ? 'https://dat.works' : undefined,
};

export default nextConfig;
