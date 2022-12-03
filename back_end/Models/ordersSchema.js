const mongoose = require("mongoose");
const {Schema} = mongoose;

const ordersSchema = new Schema({
    dateAndTime : {type : Date,default : Date.now},
    storeLocation : String,
    city : String,
    storePhone : {type : Number , required:true} ,
    totalItems : Number,
    price : Number,
    status : String,
    productType : [{
        product : String,
        washing : Boolean,
        ironing : Boolean,
        towel : Boolean,
        bleaching : Boolean
    }],
    address : {
        type : Schema.Types.ObjectId,
        ref : "user"
    }
})

module.exports =  mongoose.model("ordersModel",ordersSchema)
