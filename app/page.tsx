import ConvertForm from "./ConvertForm";

/** Cấu hình site cho SEO content */
const siteData = {
  name: "Đổi Link Shopee",
  description:
    "Công cụ chuyển đổi link Shopee sang link affiliate miễn phí. Dán link sản phẩm Shopee, nhận link affiliate ngay lập tức.",
  features: [
    "Chuyển đổi link Shopee thường sang link affiliate chỉ với 1 click",
    "Dán link từ clipboard nhanh chóng",
    "Kiểm tra URL Shopee hợp lệ ngay từ đầu",
    "Sao chép kết quả và mua hàng ngay",
    "Hỗ trợ mọi thiết bị di động và máy tính",
    "Hoàn toàn miễn phí, không giới hạn số lần sử dụng",
  ],
  steps: [
    {
      title: "Dán link Shopee",
      desc: "Sao chép link sản phẩm từ ứng dụng Shopee và dán vào ô bên dưới.",
    },
    {
      title: "Nhấn chuyển đổi",
      desc: "Hệ thống tự động xử lý và tạo link affiliate cho bạn.",
    },
    {
      title: "Sao chép & mua",
      desc: "Sao chép link affiliate và sử dụng để mua hàng hoặc chia sẻ.",
    },
  ],
  faq: [
    {
      question: "Đổi link Shopee là gì?",
      answer:
        "Đổi link Shopee là công cụ giúp bạn chuyển đổi link sản phẩm Shopee thông thường thành link affiliate (tiếp thị liên kết). Khi ai đó mua hàng qua link của bạn, bạn sẽ nhận được hoa hồng từ Shopee.",
    },
    {
      question: "Làm thế nào để lấy link sản phẩm Shopee?",
      answer:
        "Mở ứng dụng Shopee, chọn sản phẩm bạn muốn, nhấn nút Chia sẻ và chọn Sao chép link. Sau đó dán link vào công cụ của chúng tôi để chuyển đổi.",
    },
    {
      question: "Có mất phí sử dụng không?",
      answer:
        "Hoàn toàn miễn phí. Bạn có thể sử dụng không giới hạn số lần mà không mất bất kỳ chi phí nào.",
    },
    {
      question: "Link affiliate có hiệu lực bao lâu?",
      answer:
        "Link affiliate có hiệu lực vĩnh viễn. Tuy nhiên, bạn nên kiểm tra chính sách của Shopee Affiliate để biết thời gian cookie và các điều khoản liên quan.",
    },
    {
      question: "Tôi có thể dùng link này trên Facebook không?",
      answer:
        "Có. Bạn có thể dán link affiliate vào bài viết, bình luận trên Facebook hoặc bất kỳ nền tảng nào khác để chia sẻ sản phẩm và nhận hoa hồng.",
    },
  ],
};

export default function HomePage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://doilinkshopee.vercel.app";

  return (
    <>
      {/* JSON-LD FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: siteData.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* JSON-LD HowTo Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cách đổi link Shopee sang link affiliate",
            description: siteData.description,
            step: siteData.steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step.title,
              text: step.desc,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-[#fdf5f2] flex flex-col">
        {/* Header */}
        <header className="w-full bg-[#ee4d2d] pt-6 pb-5 px-4 text-center">
          <div className="mx-auto max-w-lg">
            <h1 className="text-white text-xl font-extrabold leading-tight tracking-tight">
              ĐỔI LINK SHOPEE - CÔNG CỤ CHUYỂN ĐỔI LINK AFFILIATE
            </h1>
            <p className="text-white/80 text-sm mt-2 max-w-md mx-auto leading-relaxed">
              Chuyển đổi link sản phẩm Shopee thường thành link affiliate
              (tiếp thị liên kết) nhanh chóng, miễn phí. Hỗ trợ mọi thiết bị.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-lg mx-auto px-4 pt-5 pb-8">
          {/* Client component - interactive form */}
          <ConvertForm />

        </main>

        {/* Footer */}
        <footer className="w-full border-t border-slate-100 py-4 text-center">
          <p className="text-xs text-slate-400">
            <span className="font-bold text-slate-500">
              THUỘC QUYỀN SỞ HỮU - TMĐ
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}