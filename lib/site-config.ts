/**
 * Cấu hình site — ưu tiên biến môi trường (Vercel / .env.local), fallback khi không set.
 *
 * Các hàm getXxx() chỉ gọi được từ server (vd. Route Handler).
 * KHÔNG import chúng trong component `"use client"`.
 *
 * Các hằng số export được dùng trong cả server lẫn client
 * (đã được expose qua `next.config.ts` -> `env` block).
 */

// ---- Giá trị mặc định ----
const DEFAULT_AFFILIATE_ID = "17347380269";
const DEFAULT_SUB_ID = "-----";
const DEFAULT_FACEBOOK_POST_URL =
  "https://www.facebook.com/share/p/1CzBZuFbW4/?mibextid=wwXIfr";
const DEFAULT_ZALO_NOTIFY_GROUP_URL = "https://zalo.me/84378960955";
const DEFAULT_ZALO_HELP_URL = "https://zalo.me/84378960955";

// ---- Server-only functions ----

/** Lấy mã affiliate ID từ env hoặc fallback */
export function getAffiliateId(): string {
  return process.env.AFFILIATE_ID?.trim() || DEFAULT_AFFILIATE_ID;
}

/**
 * Lấy Sub ID dùng trong link affiliate để tracking nguồn traffic.
 * Giá trị mặc định: "-----" (5 dấu gạch ngang).
 */
export function getSubId(): string {
  return process.env.SUB_ID?.trim() || DEFAULT_SUB_ID;
}

// ---- Client-safe constants (được expose qua next.config.ts) ----

/** Link bài viết Facebook để user comment link affiliate nhằm áp dụng mã giảm giá */
export const FACEBOOK_POST_URL =
  process.env.FACEBOOK_POST_URL?.trim() || DEFAULT_FACEBOOK_POST_URL;

/** Link nhóm Zalo thông báo lên mã giảm giá */
export const ZALO_NOTIFY_GROUP_URL =
  process.env.ZALO_NOTIFY_GROUP_URL?.trim() || DEFAULT_ZALO_NOTIFY_GROUP_URL;

/** Link Zalo hỗ trợ / trợ giúp người dùng */
export const ZALO_HELP_URL =
  process.env.ZALO_HELP_URL?.trim() || DEFAULT_ZALO_HELP_URL;
