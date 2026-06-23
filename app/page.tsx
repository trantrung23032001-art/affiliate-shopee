import ConvertForm from "./ConvertForm";

export default function HomePage() {
  return (
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
  );
}