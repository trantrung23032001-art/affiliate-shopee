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

          {/* Tính năng nổi bật */}
          <section className="mt-8">
            <h2 className="text-center text-base font-extrabold text-slate-700 mb-4">
              TÍNH NĂNG NỔI BẬT
            </h2>
            <ul className="space-y-2.5">
              {siteData.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-3.5 shadow-sm border border-slate-100"
                >
                  <span className="shrink-0 mt-0.5 text-green-500 text-sm">✅</span>
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Hướng dẫn sử dụng */}
          <section className="mt-8">
            <h2 className="text-center text-base font-extrabold text-slate-700 mb-4">
              HƯỚNG DẪN SỬ DỤNG
            </h2>
            <div className="space-y-3">
              {siteData.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-3.5 shadow-sm border border-slate-100"
                >
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#ee4d2d] text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-700">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-8">
            <h2 className="text-center text-base font-extrabold text-slate-700 mb-4">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <div className="space-y-2.5">
              {siteData.faq.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-100 group"
                >
                  <summary className="text-sm font-bold text-slate-700 cursor-pointer list-none flex items-center justify-between gap-2">
                    <span>{item.question}</span>
                    <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed border-t border-slate-100 pt-2">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
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