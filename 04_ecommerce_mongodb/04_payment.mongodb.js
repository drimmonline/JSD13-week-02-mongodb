// db.createCollection("payments");

db.payments.insertMany([
  {
    _id: UUID(),
    order_id: UUID("d356e532-08a8-4208-beeb-a33ebd026522"),
    user_id: UUID("9af85972-5909-4720-9cca-46190b5a5ff8"),
    amount: { $numberDecimal: "1050.00" },
    currency: "THB",
    payment_status: "completed",
    transaction_detail: {
      gateway: "omise",
      charge_id: "chrg_test_5xyz1234",
      card_last4: "4242",
    },
  },
  {
    _id: UUID(),
    order_id: UUID("c68dbbd8-3b0c-4f9c-b979-8b3a36e2118c"),
    user_id: UUID("fddd799d-c4d2-410f-8344-a6003e61ce95"),
    amount: { $numberDecimal: "150.00" },
    currency: "THB",
    payment_status: "completed",
    transaction_detail: {
      gateway: "omise",
      charge_id: "chrg_test_5xyz1235",
      card_last4: "5678",
    },
  },
]);
