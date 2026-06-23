import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    FACEBOOK_POST_URL: process.env.FACEBOOK_POST_URL ?? "",
    ZALO_NOTIFY_GROUP_URL: process.env.ZALO_NOTIFY_GROUP_URL ?? "",
    ZALO_HELP_URL: process.env.ZALO_HELP_URL ?? "",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://doilinkshopee.vercel.app",
    NEXT_PUBLIC_GOOGLE_VERIFICATION:
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },

  // SEO: Compress & cache
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // SEO: Headers for security & SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/og-image.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;