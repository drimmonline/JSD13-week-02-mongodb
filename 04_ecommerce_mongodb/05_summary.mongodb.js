// db.createCollection("summary");

db.summary.insertMany([
  {
    _id: UUID(),
    product_id: UUID("d9d209a3-2cac-4296-a00d-f78483feec85"),
    sum_date: ISODate("2026-07-09T07:58:58.701+00:00"),
    period: "daily",
    total_sale_amount: { $numberDecimal: "125000.00" },
    total_orders_count: 1,
    top_selling_products: {
      rank_1: "Mechanical Keyboard Gasket Mount",
      units_sold: 1,
    },
  },
  {
    _id: UUID(),
    product_id: UUID("871b0350-2d68-45e9-b929-856db05ad537"),
    sum_date: new Date(),
    period: "daily",
    total_sale_amount: { $numberDecimal: "17500.00" },
    total_orders_count: 300,
    top_selling_products: {
      rank_1: "หนังสือเตรียมสอบ ก.พ.",
      units_sold: 50,
    },
  },
]);
