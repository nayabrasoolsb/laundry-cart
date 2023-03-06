const mongoose = require("mongoose");

const { Schema } = mongoose;
const washTypePrices = {
  "washing-machine": { type: String, required: true },
  ironing: { type: String, required: true },
  towel: { type: String, required: true },
  bleach: { type: String, required: true },
};

const priceModel = new Schema({
  Shirts: {required:true},
  "T shirts": {required:true},
  Trousers: {required:true},
  Jeans: {required:true},
  Boxers: {required:true},
  Joggers: {required:true},
  Others: {required:true},
});

module.exports = mongoose.model("prices", priceModel);
