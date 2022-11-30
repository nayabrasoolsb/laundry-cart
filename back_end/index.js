const express = require("express")
const mongoose = require("mongoose")
const connect = require("./connections/connect")
 const ordersRoute = require("./Routes/createOrder")

 const app = express()

app.use("/create",ordersRoute)

 app.listen(8000,()=>console.log("Server up at 8000"))