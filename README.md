# Đổi Link Shopee - Affiliate Converter 🛒

Ứng dụng web chuyển đổi link sản phẩm Shopee thông thường thành **link affiliate** (tiếp thị liên kết). Xây dựng bằng **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**.

## 🚀 Tính năng

- 🔗 Chuyển đổi link Shopee → link affiliate chỉ với 1 click
- 📋 Dán link từ clipboard
- ✅ Validation URL Shopee ngay từ client (shopee.vn, shp.ee, s.shopee.vn)
- 📱 Tối ưu mobile (chống zoom iOS, touch manipulation)
- 🎨 Giao diện thân thiện, 2 bước đơn giản
- 📊 Tích hợp Vercel Analytics & Speed Insights

## ⚙️ Cài đặt

### 1. Clone & cài dependencies

```bash
npm install
```

### 2. Cấu hình biến môi trường

Copy file `.env.example` thành `.env.local` và điền thông tin của bạn:

```bash
cp .env.example .env.local
```

### 3. Biến môi trường

| Biến | Bắt buộc | Mô tả | Mặc định |
|---|---|---|---|
| `AFFILIATE_ID` | ✅ Có | Mã affiliate ID của bạn trên Shopee | `17337630000` |
| `FACEBOOK_POST_URL` | ❌ Không | Link bài viết Facebook để comment | `https://www.facebook.com` |
| `ZALO_NOTIFY_GROUP_URL` | ❌ Không | Link nhóm Zalo thông báo mã | `https://zalo.me` |
| `ZALO_HELP_URL` | ❌ Không | Link Zalo trợ giúp | `https://zalo.me` |
| `SUB_ID` | ❌ Không | Sub ID tracking nguồn traffic | `-----` |

### 4. Chạy development

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

### 5. Build production

```bash
npm run build
npm run start
```

## 🌐 Deploy lên Vercel

```bash
npx vercel
```

Hoặc kết nối GitHub repo với Vercel. Nhớ set các **Environment Variables** trong Vercel Dashboard.

## 🧱 Kiến trúc

```
app/
├── layout.tsx          # Root layout (metadata, font, Analytics)
├── page.tsx            # UI chính (client component)
├── globals.css         # Global styles (Tailwind, animation, mobile)
└── api/
    └── convert/
        └── route.ts    # API Route xử lý chuyển đổi link

lib/
└── site-config.ts      # Config (affiliate ID, links, env vars)
```

### Luồng xử lý

1. **Client**: User dán link → validation client (regex Shopee) → POST `/api/convert`
2. **Server**: Nhận URL → GET request với `maxRedirects: 0` để bắt redirect → parse pathname → kiểm tra `shopee.vn` → build link affiliate
3. **Client**: Hiển thị link affiliate + nút Sao chép / Mua ngay

## 📝 Ghi chú

- Edge case `opaanlp` → `product`: Shopee đôi khi trả về path chứa `opaanlp` thay vì `product`, code tự động chuẩn hoá.
- `sub_id` dùng để tracking nguồn traffic, có thể cấu hình qua biến môi trường `SUB_ID`.
- API dùng `axios` với `maxRedirects: 0` để bắt HTTP redirect từ Shopee.

## 📄 License

Private project.