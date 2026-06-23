import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://doilinkshopee.vercel.app";
const siteName = "Đổi Link Shopee";
const siteDescription =
  "Công cụ chuyển đổi link Shopee sang link affiliate miễn phí. Dán link sản phẩm Shopee, nhận link affiliate ngay lập tức. Hỗ trợ tạo link tiếp thị liên kết Shopee nhanh chóng.";
const siteKeywords = [
  "đổi link shopee",
  "chuyển đổi link shopee",
  "link affiliate shopee",
  "tạo link shopee",
  "shopee affiliate",
  "tiếp thị liên kết shopee",
  "link shopee affiliate miễn phí",
  "công cụ affiliate shopee",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // SEO: allow zoom for accessibility
  themeColor: "#ee4d2d",
};

export const metadata: Metadata = {
  title: {
    default: `${siteName} - Chuyển Đổi Link Shopee Sang Link Affiliate Miễn Phí`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: "HOANXU.VN" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "HOANXU.VN",
  publisher: "HOANXU.VN",

  // Canonical URL
  alternates: {
    canonical: siteUrl,
    languages: {
      "vi-VN": siteUrl,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: siteName,
    title: `${siteName} - Chuyển Đổi Link Shopee Sang Link Affiliate`,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Công cụ chuyển đổi link Shopee`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Chuyển Đổi Link Shopee Sang Link Affiliate`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (Google Search Console, etc.)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // PWA
  manifest: "/manifest.json",

  // Performance
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": siteName,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "VND",
  },
  author: {
    "@type": "Organization",
    name: "HOANXU.VN",
    url: "https://hoanxu.vn",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Người dùng Shopee Affiliate",
  },
  featureList: [
    "Chuyển đổi link Shopee thường sang link affiliate",
    "Sao chép link nhanh",
    "Hỗ trợ mọi thiết bị",
    "Miễn phí 100%",
  ],
  browserRequirements: "Requires JavaScript",
  softwareVersion: "1.0",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "100",
    reviewCount: "100",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" prefix="og: https://ogp.me/ns#">
      <head>
        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        {/* Breadcrumb JSON-LD */}
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Trang chủ",
                  item: siteUrl,
                },
              ],
            }),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}