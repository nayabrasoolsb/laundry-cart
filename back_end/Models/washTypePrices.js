const mongoose = require('mongoose');
const { Schema } = mongoose;

const washTypePrices = {
  "washing-machine": { type: String, required: true },
  ironing: { type: String, required: true },
  towel: { type: String, required: true },
  bleach: { type: String, required: true },
};

const priceModel = new Schema({
  Shirts: {
    type: washTypePrices,
    required: true,
  },
  "T-shirts": {
    type: washTypePrices,
    required: true,
  },
  Trousers: {
    type: washTypePrices,
    required: true,
  },
  Jeans: {
    type: washTypePrices,
    required: true,
  },
  Boxers: {
    type: washTypePrices,
    required: true,
  },
  Joggers: {
    type: washTypePrices,
    required: true,
  },
  Others: {
    type: washTypePrices,
    required: true,
  },
});

const PriceModel = mongoose.model('Price', priceModel);

module.exports = PriceModel;
