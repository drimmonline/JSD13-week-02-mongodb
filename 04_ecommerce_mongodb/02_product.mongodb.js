db.createCollection("products");
db.products.insertMany([
  {
    _id: UUID(),
    product_name: "Mechanical Keyboard Gasket Mount",
    product_detail: "Wireless 75% Layout Mechanical Keyboard with RGB",
    product_image: "https://storage.googleapis.com/mybucket/kbd-01.jpg",
    product_price: { $numberDecimal: "2500.00" },
    stock_quantity: 45,
  },
  {
    _id: UUID(),
    product_name: "ชีทสรุปวิชาคณิตศาสตร์ ม.ปลาย",
    product_detail: "สรุปเนื้อหาคณิตศาสตร์ ม.4-6 ครบทุกบท พร้อมโจทย์ตัวอย่าง",
    product_image: "https://storage.googleapis.com/mybucket/math-sheet.jpg",
    product_price: { $numberDecimal: "150.00" },
    stock_quantity: 200,
  },
  {
    _id: UUID(),
    product_name: "หนังสือเตรียมสอบ ก.พ.",
    product_detail: "คู่มือเตรียมสอบภาค ก ข และ ค ครบถ้วน",
    product_image: "https://storage.googleapis.com/mybucket/gov-exam-book.jpg",
    product_price: { $numberDecimal: "350.00" },
    stock_quantity: 150,
  },
]);
