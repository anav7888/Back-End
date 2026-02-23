const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({

    follower: {
        type: mongoose.Schema.types.ObjectId,
        ref: "users",
        required: [true, "Follwers is required"]

    },
    following: {
        type: mongoose.Schema.types.ObjectId,
        ref: "users",
        required: [true, "Following is required"]
    }

},{
    timestamps : true
})

const followModel = mongoose.Model("follows", followSchema) ;

module.exports = followModel