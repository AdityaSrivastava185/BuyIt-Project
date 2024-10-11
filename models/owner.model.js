const mongoose = require("mongoose")

const ownerSchema = mongoose.Schema({
    fullname:{
        type : String,
        required : true,
        lowercase : true,
        trim : true,
    },
    email:{
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type:String,
        required : true,
        lowercase : true,
        unique : true
    },
    contactnumber : {
        type : Number,
        required : true,
        unique : true
    },
    picture : {
        type : String,
    } ,
    product: {
        type: Array,
        default: []
    },
})

module.exports = mongoose.model("owner" , ownerSchema)