//Update ข้อมูล Document ทุกอันของ Customer ที่มีชื่อว่า Jack ด้วย updateMany
db.pizzaOrders.updateMany(
  { customer_name: "Jack" },
  { $set: { isAdmin: false } }
);

//Update ข้อมูล Document ทุกอันด้วย updateMany
db.pizzaOrders.updateMany(
  {
    type: "Documentary",
  },
  {
    $set: { country: "Thailand" },
  }
);

//Update ข้อมูล Document ด้วย updateOne
db.pizzaOrders.updateOne(
  {
    customer_name: "M",
  },
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  },
  {
    upsert: true,
  }
);
