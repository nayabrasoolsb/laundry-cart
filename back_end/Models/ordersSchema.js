const mongoose = require("mongoose");
const {Schema} = mongoose;

const ordersSchema = new Schema({
    dateAndTime : {timestamps : true},
    storeLocation : String,
    city : String,
    storePhone : Number,
    totalItems : Number,
    price : Number,
    status : String,

})

module.exports = mongoose.model("ordersModel",)
