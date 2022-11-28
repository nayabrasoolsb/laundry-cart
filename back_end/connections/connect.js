const mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/laundry',()=>console.log("Connected"),(e)=>console.log(e));
