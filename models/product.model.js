const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        lowercase : true
    },
    image:{
        type : Buffer,
    },
    panelcolor : {
        type:String,
        required : true,
    },
    bgcolor : {
        type:String,
        required : true
    },
    discount : {
        type :Number,
        default : 0
    },
    price : {
        type : Number,
        required : true,
    },
    textcolor : {
        type : String,
    }
})

module.exports = mongoose.model("product" , productSchema)