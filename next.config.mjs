/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",//configure to tell next that we are using of others images like google
        },
      ],
    },
  };

export default nextConfig;
