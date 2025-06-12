/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  // Suppress React 19 ref warnings temporarily
  experimental: {
    suppressHydrationWarning: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Suppress console warnings in development
    if (dev && !isServer) {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        const message = args[0];
        if (
          typeof message === 'string' && 
          message.includes('Accessing element.ref was removed in React 19')
        ) {
          return; // Suppress this specific warning
        }
        originalConsoleError.apply(console, args);
      };
    }
    return config;
  },
};

export default nextConfig;