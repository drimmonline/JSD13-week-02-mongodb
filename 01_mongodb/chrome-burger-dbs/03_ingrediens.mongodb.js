use("chrome-burger-db");

//Clear existing data
db.ingredients.deleteMany({});
// Insert mock up data for ingredients collection
db.ingredients.insertMany([
  {
    _id: ObjectId("65f200000000000000000001"),
    name: "Beef Patty",
    stock_level: 50,
    unit: "pcs",
    supplier_id: ObjectId("65f000000000000000000001"), // Patty's Premium Meats
  },
  {
    _id: ObjectId("65f200000000000000000002"),
    name: "Brioche Bun",
    stock_level: 100,
    unit: "pcs",
    supplier_id: ObjectId("65f000000000000000000002"), // The Bun Barn
  },
  {
    _id: ObjectId("65f200000000000000000003"),
    name: "Lettuce",
    stock_level: 20,
    unit: "heads",
    supplier_id: ObjectId("65f000000000000000000003"), // Freshest Farm Produce
  },
]);
