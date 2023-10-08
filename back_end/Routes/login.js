const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const router = express.Router();
const { body, validationResult } = require("express-validator");
router.use(bodyParser.json());
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const secret = "RESTAPI";
const cors = require("cors");
router.use(cors());
router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 8, max: 15 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        name,
        email,
        password,
        address,
        state,
        district,
        pincode,
        phone,
      } = req.body;
      let user = await User.findOne({ email });

      if (user) {
        return res.status(401).json({
          status: "failed",
          message: "email already exists",
        });
      }
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          return res.status(400).json({
            status: "failed",
            message: err.message,
          });
        }
        const user = await User.create({
          name,
          email,
          phone,
          address,
          pincode,
          state,
          district,
          password: hash,
        });

        return res.json({
          status: "success",
          message: "Registration Sucessfull",
          user,
        });
      });
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.message,
      });
    }
  },
);

router.post("/sign-in", body("email").isEmail(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "User Doesn't exists ",
      });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: err.message,
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user._id,
          },
          secret,
        );
        return res.status(401).json({
          status: "success",
          message: "login sucessfull",
          user,
          token,
        });
      } else {
        return res.status(401).json({
          status: "failed",
          message: "wrong password/email  !!Please check credentials",
        });
      }
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
