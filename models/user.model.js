const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    cart: {
        type: Array,
        default: []
    },
    order: {
        type: Array,
        default: []
    },
    picture: {
        type: String,
    },
})

module.exports = mongoose.model("user", userSchema)