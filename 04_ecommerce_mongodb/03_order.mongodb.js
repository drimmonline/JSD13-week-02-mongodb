db.createCollection("orders");

db.orders.insertMany([
  {
    _id: UUID(),
    user_id: UUID("f6d71866-40b1-4e82-83ac-82e438d5c6c2"),
    order_date: ISODate("2026-07-01T13:30:00Z"),
    total_amount: { $numberDecimal: "2500.00" },
    order_status: "delivered",
    shipping_address: "123/45 Sukhumvit Rd, Bangkok, Thailand",
    order_details: [
      {
        product_id: UUID("d9d209a3-2cac-4296-a00d-f78483feec85"),
        product_name: "ชีทสรุปวิชาคณิตศาสตร์ ม.ปลาย",
        quantity: 1,
        price_at_purchase: { $numberDecimal: "150.00" },
      },
    ],
  },
  {
    _id: UUID(),
    user_id: UUID("fddd799d-c4d2-410f-8344-a6003e61ce95"),
    order_date: ISODate("2026-07-02T09:15:00Z"),
    total_amount: { $numberDecimal: "3200.00" },
    order_status: "delivered",
    shipping_address: "456/78 Ratchada Rd, Bangkok, Thailand",
    order_details: [
      {
        product_id: UUID("2be0e543ba3745b8a0b9bf3b"),
        product_name: "หนังสือสอบ IELTS ครบวงจร",
        quantity: 1,
        price_at_purchase: { $numberDecimal: "550.00" },
      },
      {
        product_id: UUID("efdcd3d0fd5d41f68ca031bd"),
        product_name: "ชีทสรุปวิชาคณิตศาสตร์ ม.ปลาย",
        quantity: 3,
        price_at_purchase: { $numberDecimal: "150.00" },
      },
      {
        product_id: UUID("c2c6b480f9de42dcb327d0ea"),
        product_name: "หนังสือเตรียมสอบ ก.พ.",
        quantity: 5,
        price_at_purchase: { $numberDecimal: "350.00" },
      },
    ],
  },
]);
