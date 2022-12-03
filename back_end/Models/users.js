const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    phone:{type:Number,required:true,unique:true},
    state:{type:String},
    district:{type:String},
    addres:{type:String},
    pincode:{type:Number},
    password:{type:String,required:true}

})

const userModel=mongoose.model("user",userSchema);


module.exports = userModel;
