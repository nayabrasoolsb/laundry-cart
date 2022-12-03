const express = require('express');
const router = express.Router();
const productsArray = require("../productsArray")

router.get("/",(req,res)=>{
    res.status(201).json(productsArray)
})

module.exports = router;