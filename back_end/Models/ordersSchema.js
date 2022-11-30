const mongoose = require("mongoose");
const {Schema} = mongoose;

const ordersSchema = new Schema({
    dateAndTime : Date,
    storeLocation : String,
    city : String,
    storePhone : String ,
    totalItems : Number,
    price : Number,
    status : String

})

module.exports = mongoose.model("ordersModel",ordersSchema)
