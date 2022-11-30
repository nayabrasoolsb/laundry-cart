const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    phone:{type:Number,required:true},
    addres:{type:String},
    pin:{type:Number},
    password:{type:String,required:true}

},{timestamps:true})

const userModel=mongoose.model("user",userSchema);


module.exports = userModel;
