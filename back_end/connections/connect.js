const mongoose = require("mongoose");
const dontenv = require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to mongoDB"))
  .catch((e) => console.log(e));
