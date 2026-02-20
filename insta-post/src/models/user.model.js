const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique:[true,"User name already exists"],
        required: [true,"User name is required"],
    },
    email:{
        type: String,
        unique:[true,"email is already exists"],
        required:[true,"email is required"],
    },
    password: {
        type: String,
        required: [true,"password is required"]
    },
    bio: String,
    profileImg: {
        type: String,
        default: "https://ik.imagekit.io/Anav/avatar.webp" 
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel