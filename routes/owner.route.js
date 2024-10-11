const express = require("express")
const ownerModel = require("../models/owner.model.js")
const router = express.Router()

router.post("/create" , async function(req,res){
    let owners = await ownerModel.find()
    if(owners.length > 0){
        return res
            .send(504)
            .status("You don't have permission to create a new owner")
    }
    let { fullname , email , password } = req.body
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password
    })
})

router.get("/adminpanel" , function(req,res){
    res.render("createproducts")
})

module.exports = router