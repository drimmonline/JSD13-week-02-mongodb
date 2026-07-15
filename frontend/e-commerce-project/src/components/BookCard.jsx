export const BookCard = ({ book }) => {
  const finalPrice = parseFloat(book.product_price.$numberDecimal);

  return (
    <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
      {/* 🏷️ แถบส่วนลดและป้าย Bestseller ที่มุมขวาบนตามภาพตัวอย่าง */}
      <div className="absolute top-3 right-3 z-10 flex flex-col items-end space-y-1">
        {book.discount_percent && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            -{book.discount_percent}%
          </span>
        )}
        {book.is_bestseller && (
          <span className="bg-blue-600 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded shadow-sm">
            Best Seller
          </span>
        )}
      </div>

      <div>
        {/* รูปปกหนังสือ */}
        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-100 mb-3">
          <img
            src={book.product_image}
            alt={book.product_name}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* ชื่อเรื่อง */}
        <h3 className="text-sm font-bold text-slate-800 line-clamp-2 min-h-[40px] leading-snug">
          {book.product_name}
        </h3>

        {/* รายละเอียด/ชื่อผู้แต่ง */}
        <p className="text-xs text-slate-400 truncate mt-1">
          {book.product_detail}
        </p>
      </div>

      {/* ส่วนเรตติ้ง และราคาด้านล่าง */}
      <div className="mt-4 pt-2 border-t border-slate-50 flex flex-col space-y-2">
        {/* ส่วนเรตติ้งดาวมินิมอล */}
        <div className="flex items-center space-x-1">
          <div className="flex text-amber-400 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < book.rating ? "★" : "☆"}</span>
            ))}
          </div>
          <span className="text-[10px] text-slate-400">
            ({book.rating_count})
          </span>
        </div>

        {/* ปุ่มราคาธีมขาว-น้ำเงินสดแบบพรีเมียม */}
        <button className="w-full bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center space-x-1 cursor-pointer">
          <span>฿ {Math.floor(finalPrice)}</span>
        </button>
      </div>
    </div>
  );
};
