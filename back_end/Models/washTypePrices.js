const mongoose = require("mongoose");

const { Schema } = mongoose;
const washTypePrices = {
  "washing-machine": { type: String, required: true },
  ironing: { type: String, required: true },
  towel: { type: String, required: true },
  bleach: { type: String, required: true },
};

const priceModel = new Schema({
  Shirts: {type: "objectId",required:true},
  "T shirts": {type: "objectId",required:true},
  Trousers: {type: "objectId",required:true},
  Jeans: {type: "objectId",required:true},
  Boxers: {type: "objectId",required:true},
  Joggers: {type: "objectId",required:true},
  Others: {type: "objectId",required:true},
});

module.exports = mongoose.model("prices", priceModel);
