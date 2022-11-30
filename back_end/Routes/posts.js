const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.use(bodyParser.json());
const Posts = require("../models/posts");
const e = require('express');
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";

router.post("/posts",async(req,res)=>{
    const posts = await Posts.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user 

    });
    res.json({
        status : "sucess",
        posts
    })
})

router.get("/posts",async(req,res)=>{
    const posts = await Post.find();
    res.json({
        status : "sucess",
        posts
    })
})

module.exports = router;