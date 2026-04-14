/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // 🔥 REQUIRED for static routing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;