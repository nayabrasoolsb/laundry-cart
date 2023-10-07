const bodyParser = require("body-parser");
const express = require("express");
const User = require("../models/users.js");
const router = express.Router();

router.use(bodyParser.json());
const mongoose = require("mongoose");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const users = await User.find({ _id: req.params.id });
    res.status(200).json({
      status: "Sucess",
      data: users,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
