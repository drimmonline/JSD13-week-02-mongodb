export const TOP_BANNERS = [
  {
    id: 1,
    title: "ชีทสรุป อ่านง่าย เข้าใจ",
    subtitle: "ง่ายสุด เยอะสุด สนุกสุดที่นี่",
    bgClass: "bg-blue-900",
  },
  {
    id: 2,
    title: "สมัครขายชีทสรุป",
    subtitle: "คุณเขียน เราขาย สบายใจได้",
    bgClass: "bg-blue-700",
  },
  {
    id: 3,
    title: "ทำข้อสอบออนไลน์",
    subtitle: "แหล่งพบปานใหม่สำหรับคนรักนิยาย",
    bgClass: "bg-blue-600",
  },
  {
    id: 4,
    title: "หนังสือแนะนำ",
    subtitle: "เลือกดูหนังสือที่น่าสนใจ",
    bgClass: "bg-slate-800",
  },
];

// 📦 ข้อมูลสินค้าที่สมมติโครงสร้างมาตามภาพ (รองรับ $numberDecimal)
export const MOCK_BOOKS = [
  {
    _id: "book-1",
    product_name: "เมียลับหมอร้าย",
    product_detail: "พราวพริ้ม (พลิ้วอ่อน) • นิยายโรมานซ์",
    product_image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
    product_price: { $numberDecimal: "249.00" },
    discount_percent: 26,
    is_bestseller: true,
    rating: 5,
    rating_count: 139,
  },
  {
    _id: "book-2",
    product_name: "ชาตินี้ไม่ขอทำโอที เลิกตายฟรีแทนฮ่องเต้ เล่ม 1 [3เล่มจบ]",
    product_detail: "ธารธารา • นิยายแปล",
    product_image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
    product_price: { $numberDecimal: "189.00" },
    discount_percent: 55,
    is_bestseller: true,
    rating: 5,
    rating_count: 141,
  },
  {
    _id: "book-3",
    product_name: "ชาตินี้ไม่ขอทำโอที เลิกตายฟรีแทนฮ่องเต้ เล่ม 2 [3เล่มจบ]",
    product_detail: "ธารธารา • นิยายแปล",
    product_image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    product_price: { $numberDecimal: "189.00" },
    discount_percent: 55,
    is_bestseller: true,
    rating: 5,
    rating_count: 87,
  },
  {
    _id: "book-4",
    product_name: "ชาตินี้ไม่ขอทำโอที เลิกตายฟรีแทนฮ่องเต้ เล่ม 3 [3เล่มจบ]",
    product_detail: "ธารธารา • นิยายแปล",
    product_image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    product_price: { $numberDecimal: "229.00" },
    discount_percent: 51,
    is_bestseller: true,
    rating: 4,
    rating_count: 77,
  },
  {
    _id: "book-5",
    product_name: "PLS LOVE รักได้ไหม",
    product_detail: "Reverse • นิยาย Girl Love/Yuri",
    product_image:
      "https://images.unsplash.com/photo-1610116306796-6ebd3051c330?auto=format&fit=crop&w=400&q=80",
    product_price: { $numberDecimal: "299.00" },
    discount_percent: 23,
    is_bestseller: true,
    rating: 5,
    rating_count: 352,
  },
];

export const FEATURED_BOOKS = [
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

export const CATEGORIES = [
  "ทั้งหมด",
  "คอมพิวเตอร์/ไอที",
  "จิตวิทยา/พัฒนาตนเอง",
  "บริหาร/การเงิน",
  "นิยาย/วรรณกรรม",
];
