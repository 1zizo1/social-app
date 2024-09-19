/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'example.com',
            port: '',
            pathname: '/account123/**',
          },{
            protocol: 'https',
            hostname: 'linked-posts.routemisr.com',
            pathname: '/uploads/**',
          }

        ],
      },
};

export default nextConfig;
