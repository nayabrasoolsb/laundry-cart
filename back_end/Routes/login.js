const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.use(bodyParser.json());
const User = require("../models/users");
const e = require('express');
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";


router.post("/register", body('email').isEmail(),
   body('password').isLength({ min: 6, max: 15 }), async (req, res) => {
      try {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
         }
         const { name, email, phone,state,district, address, pincode, password} = req.body;

         let user = await User.findOne({ email });

         if (user) {
            return res.status(401).json({
               status: "failed",
               message: "email already exists"
            });
         }

         bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
               return res.status(400).json({
                  status: "failed",
                  message: err.message
               });
            }
            console.log(err, hash);
            const user = await User.create({
               name,
               email,
               phone,
               state,
               district,
               address,
               pincode,
               password: hash
            })

            return res.json({
               status: "sucess",
               message:"Registration Sucessfull",
               user
            });
            // Store hash in your password DB.
         });
      } catch (e) {
         res.status(500).json({
            status: "failed",
            message: e.message
         })
      }
      // Finds the validation errors in this request and wraps them in an object with handy functions


      //  user = await User.create(req.body);
      // res.json({status:"Sucess", user})

   })

router.post("/login", body('email').isEmail(),async (req, res) => {
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
               message: "User Doesn't exists "
            });
         }
         // Load hash from your password DB.
         bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            if(err){
               return res.status(500).json({
                  status: "failed",
                  message: err.message
                });
            }
            if(result){
               const token =  jwt.sign({
                  exp: Math.floor(Date.now() / 1000) + (60 * 60),
                  data: user._id
                }, secret);
                  return res.status(401).json({
                  success:true,  
                  message:"login sucessfull",
                  token
               });
            }else{
               return res.status(401).json({
                  status: "failed",
                  message:"Wrong Password  !!Please provide correct password"
               });
            }
         });
         
      } catch (e) {
         res.status(500).json({
            status: "failed",
            message: e.message
         })
      }
      // Finds the validation errors in this request and wraps them in an object with handy functions


      //  user = await User.create(req.body);
      // res.json({status:"Sucess", user})

   })

module.exports = router;