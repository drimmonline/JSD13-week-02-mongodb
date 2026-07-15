import { useState, useEffect } from "react";
import { MOCK_BOOKS, TOP_BANNERS } from "../utils/dummybook";

import { BookCard } from "../components/BookCard";
import { productService } from "../services/productService";
export default function ProductsPage() {
  const [bestsellers] = useState(MOCK_BOOKS);
  const [trending] = useState([...MOCK_BOOKS].reverse()); // จำลองข้อมูลแถวที่สอง
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // 2. เรียกใช้งานฟังก์ชันผ่านตัวแปรวัตถุได้เลย คลีนมาก!
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("โหลดสินค้าไม่สำเร็จ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>กำลังโหลดสินค้า... ⏳</p>;
  // Component ย่อยสำหรับการวาดการ์ดแต่ละใบเพื่อไม่ให้โค้ดรก
  console.log("data:", products);
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
