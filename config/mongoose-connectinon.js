const mongoose = require("mongoose");

mongoose
    .connect('<DATABASE URL>')
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("Error while connecting to the database", error);
    });

module.exports = mongoose.connection;
