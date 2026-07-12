import { useState } from "react";
import { MOCK_BOOKS, TOP_BANNERS } from "../utils/dummybook";

export default function ProductsPage() {
  const [bestsellers] = useState(MOCK_BOOKS);
  const [trending] = useState([...MOCK_BOOKS].reverse()); // จำลองข้อมูลแถวที่สอง

  // Component ย่อยสำหรับการวาดการ์ดแต่ละใบเพื่อไม่ให้โค้ดรก
  const BookCard = ({ book }) => {
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

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* 1. โซนแบนเนอร์โปรโมชัน 4 บล็อกด้านบน */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOP_BANNERS.map((banner) => (
            <div
              key={banner.id}
              className={`${banner.bgClass} text-white p-5 rounded-2xl shadow-sm flex flex-col justify-center min-h-[100px] hover:opacity-95 transition-opacity cursor-pointer`}
            >
              <h2 className="text-base font-bold tracking-tight">
                {banner.title}
              </h2>
              <p className="text-xs text-white/80 mt-1">{banner.subtitle}</p>
            </div>
          ))}
        </div>

        {/* 2. โซนกลุ่มสินค้า: ขายดี */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
            <div className="flex items-center space-x-1.5">
              <h2 className="text-xl font-extrabold text-slate-900">ขายดี</h2>
              <span className="text-slate-400 text-sm">🗂️</span>
            </div>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              ดูทั้งหมด
            </a>
          </div>

          {/* แถวแสดงผล 5 คอลัมน์สำหรับจอใหญ่เดสก์ท็อปตามภาพ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bestsellers.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </section>

        {/* 3. โซนกลุ่มสินค้า: ใหม่มาแรง */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
            <h2 className="text-xl font-extrabold text-slate-900">ใหม่มาแรง</h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              ดูทั้งหมด
            </a>
          </div>

          {/* แถวแสดงผล 5 คอลัมน์สำหรับจอใหญ่เช่นกัน */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {trending.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
