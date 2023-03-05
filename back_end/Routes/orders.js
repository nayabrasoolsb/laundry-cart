const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Orders = require("../models/orders.js");

router.use(bodyParser.json());
router.post("/create", async (req, res) => {
  try {
    const orders = await Orders.create({
      ...req.body,
      user: req.user,
    });
    res.status(200).json({
      status: "sucess",
      orders,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      messege: e.errors,
    });
  }
});

router.get("/order-history", async (req, res) => {
  try {
    const orders = await Orders.find({ user: req.user });
    res.status(200).json({
      status: "sucess",
      orders,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      messege: error,
    });
  }
});

module.exports = router;
