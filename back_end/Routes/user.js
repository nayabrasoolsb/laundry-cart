const bodyParser = require("body-parser");
const express = require('express');

const User = require("../models/users");

const router = express.Router();


router.use(bodyParser.json());

//  Read the data --- READ OPERATION
router.get("/users", async (req, res) => {
    try {
        // write the code to fetch all the users
        const users = await User.find();
        res.status(200).json({
            status: "Sucess",
            data: users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.get("/users/:id", async (req, res) => {
    try {
        console.log(req.params);
        const users = await User.find({_id: req.params.id});
        res.status(200).json({
            status: "Sucess",
            data: users
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

router.post("/users", async (req, res) => {
    try {

        // console.log(req.body);
        // const users = await User.create({
        //     name:req.body.name,
        //     email:req.body.email,
        //     phone:req.body.phone,
        //     pin:req.body.pin
        // });
        const users =await User.create(req.body);
        res.status(200).json({
            status: "Sucess",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

router.get("*",(req,res)=>{
    res.status(404).json({
         status:"failed",
         message:"invalid request"
    })
});

module.exports = router;