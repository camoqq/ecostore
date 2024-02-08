const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  orderDate: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        require: true,
      },
      image: {
        type: String,
      },
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
});

//Custom validation to ensure at least one service is selected.
// orderSchema.path("product").validate(function (value) {
//   return value.length > 0;
// }, "Atleast one product must be selected for the order");

const Order = model("Order", orderSchema);

module.exports = Order;
