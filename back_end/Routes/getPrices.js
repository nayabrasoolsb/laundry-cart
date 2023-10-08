const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.json());
const Prices = require("../models/washTypePrices")

router.get("/", async(req, res) => {
  try {
    const prices = await Prices.find();
    res.status(200).send({
      status:"success",
      prices
    })
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
})
/*
router.post("/", async(req, res) => {
  try {
    const prices = await Prices.create(req.body);
    // console.log(prices)
    res.status(200).send({
      status:"success",
      prices
    })
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
})
*/

module.exports = router;