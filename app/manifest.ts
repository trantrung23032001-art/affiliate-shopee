import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Đổi Link Shopee - Công cụ chuyển đổi link affiliate",
    short_name: "Đổi Link Shopee",
    description:
      "Chuyển đổi link sản phẩm Shopee thường thành link affiliate miễn phí.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fdf5f2",
    theme_color: "#ee4d2d",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["utilities", "shopping"],
    lang: "vi-VN",
  };
}