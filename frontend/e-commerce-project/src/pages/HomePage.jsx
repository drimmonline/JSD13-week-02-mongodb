import { useState } from "react";

// สมมติข้อมูลหนังสือเด่นในร้าน
const FEATURED_BOOKS = [
  {
    id: 1,
    title: "The Art of Clean Code",
    author: "Robert C. Martin",
    price: 390,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    tag: "Programming",
  },
  {
    id: 2,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    price: 550,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
    tag: "Database",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 285,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    tag: "Self-Improvement",
  },
  {
    id: 4,
    title: "Psychology of Money",
    author: "Morgan Housel",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    tag: "Finance",
  },
];

const CATEGORIES = [
  "ทั้งหมด",
  "คอมพิวเตอร์/ไอที",
  "จิตวิทยา/พัฒนาตนเอง",
  "บริหาร/การเงิน",
  "นิยาย/วรรณกรรม",
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {" "}
      {/* pt-20 เผื่อพื้นที่ให้ Navbar ที่เป็น fixed */}
      {/* 1. Hero Section (ส่วนหัวต้อนรับ) */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 text-center md:py-24">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          ยินดีต้อนรับสู่แหล่งเรียนรู้ยุคใหม่
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-950 tracking-tight md:text-5xl">
          ค้นพบหนังสือที่ใช่ <br className="hidden md:inline" />
          เพื่อเปิดประตูสู่ศักยภาพในตัวคุณ
        </h1>
        <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto">
          ศูนย์รวมหนังสือคอมพิวเตอร์ ข้อสอบ และหนังสือพัฒนาตนเองคัดสรรพิเศษ
          ช้อปง่าย อ่านสนุก พร้อมบริการจัดส่งถึงบ้านคุณ
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          {/* ใช้สีน้ำเงินสดโทนเดียวกับปุ่มในภาพของคุณ */}
          <a
            href="/products"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            เลือกดูหนังสือทั้งหมด
          </a>
          <a
            href="#featured"
            className="rounded-xl bg-white border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            หนังสือขายดี
          </a>
        </div>
      </section>
      {/* 2. Category Filter Section (แถบเลือกหมวดหมู่มินิมอล) */}
      <section className="max-w-screen-xl mx-auto px-4 mb-10">
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-600 text-white" // แทร็กสีปุ่มหลักตามธีม
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      {/* 3. Featured Books Grid (รายการหนังสือขายดี) */}
      <section id="featured" className="max-w-screen-xl mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            หนังสือแนะนำประจำสัปดาห์
          </h2>
          <a
            href="/products"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ดูทั้งหมด &rarr;
          </a>
        </div>

        {/* ตารางแสดงการ์ดหนังสือ */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {FEATURED_BOOKS.map((book) => (
            <div
              key={book.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                {/* ปกหนังสือ */}
                <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-xl bg-slate-100 mb-4 h-60">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* รายละเอียดหนังสือ */}
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {book.tag}
                </span>
                <h3 className="mt-2 text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">{book.author}</p>
              </div>

              {/* ราคาและปุ่มลงตะกร้า */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-50">
                <span className="text-base font-bold text-slate-900">
                  ฿{book.price}
                </span>
                <button
                  className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  title="เพิ่มลงตะกร้า"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
