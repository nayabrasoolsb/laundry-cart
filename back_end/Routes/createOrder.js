const express = require('express');
const router = express.Router()
const bodyparser = require("body-parser")
const Orders = require("../Models/ordersSchema")

router.use(bodyparser.json())

router.post("/",async(req,res)=>{
    try{
        console.log(req.body)
        const orders = await Orders.create(req.body)
        res.status(200).json({
            status : "Sucess",
            orders
        })
    }
    catch(e){
        res.status(500).json({
            message : e.message,
            status : "Failed"
        })
    }
})

module.exports = router;