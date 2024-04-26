/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['cdn.sanity.io'],
    //   },

    images: {
        domains: [],
        loader: 'default',
        path: '/_next/image',
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [],
        domains: ['cdn.sanity.io'],
        minimumCacheTTL: 60,
        formats: ['image/webp', 'image/avif'],
        disableStaticImages: false,
        // remotePatterns: ['https://cdn.sanity.io/*'], // Use this line instead of domains
    },
};

export default nextConfig;
