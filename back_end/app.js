const express = require("express");
const app = express();
const mongoose = require("mongoose");
const loginRoutes = require("./routes/login");
const userRoutes = require("./routes/user");
const connect = require("./connection/connect");
const bcrypt = require('bcrypt');
const postRoutes = require("./routes/posts");
const secret = "RESTAPI";
var jwt = require('jsonwebtoken');
const ordersRoute = require("./Routes/createOrder")


app.use("/create",ordersRoute)
app.use("/api/v1/posts", (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;


        if (token) {
            // verify a token symmetric
            jwt.verify(token, secret, function (err, decoded) {
                if(err){
                    return res.status(403).json({
                        status: "failed",
                        message: "invalid token"
                    })
                }
                req.user = decoded.data;
                next();
            });

        } else {
            return res.status(403).json({
                status: "failed",
                message: "invalid token"
            })
        }
    }
})


app.use("/api/v1",loginRoutes);
app.use("/api/v1",userRoutes);
app.use("/api/v1",postRoutes);



app.get("/",(req,res)=>{
    res.send("OK");
})


app.listen(5000,()=>console.log("This server is up at post 5000"));