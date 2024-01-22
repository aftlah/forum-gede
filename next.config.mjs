/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
       remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.pngkey.com',
        }
       ]
   }
};

export default nextConfig;
