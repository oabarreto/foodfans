import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_BASE_URL: "https://api.escortfans.eu",
  },
};

export default nextConfig;
