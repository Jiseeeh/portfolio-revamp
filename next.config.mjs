/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*", // Proxy to PostHog
      },
    ];
  },
};

export default nextConfig;
