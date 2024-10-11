const express = require("express")
const router = express.Router()
const isloggedin = require("../middleware/isloggedin.middleware.js")
const productModel = require("../models/product.model.js")

router.get("/" , function(req , res){
    res.render("index")
})

router.get("/shop" , isloggedin , async function(req,res){
    let product = await productModel.find()
    res.render("shop" , {product})
})

router.get("/logout" , isloggedin , function(req,res){
    res.render("index")
})

module.exports = router 