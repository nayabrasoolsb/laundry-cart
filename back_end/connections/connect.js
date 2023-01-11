const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/laundry")
  .then(() => console.log("Connected to mongo"))
  .catch((e) => console.log(e));
