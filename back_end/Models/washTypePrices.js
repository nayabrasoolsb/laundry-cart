const mongoose = require("mongoose");

const { Schema } = mongoose;
const washTypePrices = new Schema({
  "washing-machine": { type: String, required: true },
  ironing: { type: String, required: true },
  towel: { type: String, required: true },
  bleach: { type: String, required: true },
});

const priceModel = new Schema({
  Shirts: washTypePrices,
  "T shirts": washTypePrices,
  Trousers: washTypePrices,
  Jeans: washTypePrices,
  Boxers: washTypePrices,
  Joggers: washTypePrices,
  Others: washTypePrices,
});

module.exports = mongoose.model("prices", priceModel);
