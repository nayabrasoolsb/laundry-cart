const mongoose = require("mongoose")

const {Schema} = mongoose;

const productModel = new Schema({
    productType : String,
    description : String,
    washingRate:Number,
    ironingRate:Number,
    towelRate:Number,
    bleach:Number,
})

module.exports = mongoose.model("products",productModel)