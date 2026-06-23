import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { getAffiliateId, getSubId } from "@/lib/site-config";

/**
 * Tạo link affiliate Shopee.
 *
 * Format: https://s.shopee.vn/an_redir?origin_link=<encodeUrl>&affiliate_id=<id>&sub_id=<tracking>
 *
 * @param baseUrl - URL sản phẩm thật (vd: https://shopee.vn/product/12345)
 * @param affiliateId - Mã affiliate
 * @param subId - Sub ID để tracking nguồn (mặc định "-----")
 */
function buildAffiliateLink(
  baseUrl: string,
  affiliateId: string,
  subId: string,
): string {
  const encodedUrl = encodeURIComponent(baseUrl);
  return [
    "https://s.shopee.vn/an_redir",
    `?origin_link=${encodedUrl}`,
    `&affiliate_id=${affiliateId}`,
    `&sub_id=${subId}`,
  ].join("");
}

/**
 * Chuẩn hoá URL đầu vào:
 * - Trim whitespace
 * - Nếu rỗng → throw Error
 * - Nếu thiếu scheme → thêm `https://`
 */
function normalizeInputUrl(raw: string): string {
  const trimmed = (raw || "").trim();
  if (!trimmed) throw new Error("Vui lòng nhập link Shopee");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

/** Regex kiểm tra URL sản phẩm Shopee hợp lệ */
const SHOPEE_PRODUCT_REGEX =
  /^(https?:\/\/)?(shopee\.vn|shp\.ee|s\.shopee\.vn)\//i;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const rawUrl: string = body.url;

    if (!rawUrl || !rawUrl.trim()) {
      return NextResponse.json(
        { error: "Vui lòng nhập link Shopee" },
        { status: 400 },
      );
    }

    const url = normalizeInputUrl(rawUrl);

    let realUrl: string;

    try {
      const response = await axios.get(url, {
        maxRedirects: 0,
        validateStatus: (status: number) => status >= 200 && status < 400,
      });

      const redirectUrl = response.headers["location"];
      const finalUrl = redirectUrl || url;
      const parsed = new URL(finalUrl);

      if (!parsed.hostname.includes("shopee.vn")) {
        return NextResponse.json(
          { error: "Không lấy được link sản phẩm. Kiểm tra lại URL." },
          { status: 400 },
        );
      }

      realUrl = `https://shopee.vn${parsed.pathname}`;
    } catch {
      return NextResponse.json(
        { error: "Không lấy được link sản phẩm. Kiểm tra lại URL." },
        { status: 400 },
      );
    }

    /*
     * Edge case: Đôi khi Shopee trả về path chứa "opaanlp" thay vì "product"
     * (vd: /opaanlp/12345 thay vì /product/12345).
     * Đây là biến thể URL internal của Shopee, cần replace để chuẩn hoá.
     */
    const normalizedRealUrl = realUrl.replace("opaanlp", "product");

    const affiliateUrl = buildAffiliateLink(
      normalizedRealUrl,
      getAffiliateId(),
      getSubId(),
    );

    return NextResponse.json({
      realUrl: normalizedRealUrl,
      affiliateUrl,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Có lỗi xảy ra";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}