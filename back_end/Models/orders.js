const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  type: { type: String, required: true },
  quantity: { type: String, required: true },
  "washing-machine": { type: Boolean, required: true },
  ironing: { type: Boolean, required: true },
  towel: { type: Boolean, required: true },
  bleach: { type: Boolean, required: true },
});

const orderSchema = new Schema(
  {
    products: [],
    storeLocation: { type: String, required: true },
    storeAddress: { type: String, required: true },
    phone: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

const orderModel = mongoose.model("Orders", orderSchema);

module.exports = orderModel;
