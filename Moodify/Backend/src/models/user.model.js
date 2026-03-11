const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is requied"],
        unique: [true, "username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be required"]
    },
    password: {
        type : String,
        required : [true, "Password is required"]
    },
})

// userSchema.pre("save", function (next) { })
// userSchema.post("save", function (next) { })

const userModel = mongoose.model("users", userSchema)

module.exports = userModel;