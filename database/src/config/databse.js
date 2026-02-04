const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb+srv://anav:QT1ueafWqIjaWFLF@cluster0.jl28uua.mongodb.net/Demo-1").then(() => {
        console.log("connected to DB")
    })
}

module.exports = connectToDb