const express = require("express")
const router = express.Router()
const upload = require("../config/multer-config.js")
const productModel = require("../models/product.model.js")

router.post("/create", upload.single("image"), async function (req, res) {
    // console.log(req.file.buffer); // Log the file object
    // console.log(req.body); // Log the body to see if other fields are being sent

    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            panelcolor,
            textcolor,
            bgcolor
        });

        res.redirect("/shop");
        // console.log("product added")
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router