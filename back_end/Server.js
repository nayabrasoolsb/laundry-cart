const express = require("express");
const app = express();
const mongoose = require("mongoose");
const secret = "RESTAPI";
const jwt = require("jsonwebtoken");
const connect = require("./connections/connect");
const priceRoute = require("./Routes/getPrices")
const loginRoute = require("./routes/login");
const usersRoute = require("./routes/user");
const orderRoute = require("./routes/orders");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded())

app.use("/api/v1/user", (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    if (token) {
      // verify a token symmetric
      jwt.verify(token, secret, function (err, decoded) {
        if (err) {
          return res.status(403).json({
            status: "failed",
            message: "invalid token",
          });
        }
        req.user = decoded.data;
        next();
      });
    } else {
      return res.status(403).json({
        status: "failed",
        message: "invalid token",
      });
    }
  }
});

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.use("/api/v1", loginRoute);

app.use("/api/v1/user", orderRoute);
app.use("/api/v1", usersRoute);


app.use("/api/v1/prices", priceRoute)

app.get("*", (req, res) => {
  res.status(400).json({
    status: "page not found",
  });
});

app.listen(3004, () => console.log("This server is up at post 3004"));
