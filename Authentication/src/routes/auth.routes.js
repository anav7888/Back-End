const express = require("express");
const mongoose = require("mongoose");
const authRouter = express.Router()
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

/**
 * Post
 * /api/auth/register
 */

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExit = await userModel.findOne({ email })
    if (isUserExit) {
        return res.status(409).json({
            message: "user already exit with this email"
        })
    }

    const user = await userModel.create({
        email,
        name,
        password: crypto.createHash("md5").update(password).digest("hex")
    })

    const token = jwt.sign({
        id: user._id,
    },
        process.env.JWT_SECRET, { expiresIn: "1h" })

        res.cookie("token",token)

        res.status(201).json({
            message:"user register successfully",
            user:{
                name:user.name,
                email:user.email
            },
            token
        })

})

authRouter.get('/get-me', async(req,res)=>{
    const token = req.cookies.token

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    
    const user = await userModel.findById(decoded.id)

    res.json({
        name:user.name,
        email: user.email
    })

})

authRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")
    const isPasswordValid = hash === user.password
    if(!isPasswordValid){
        res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id: user._id
    },
    process.env.JWT_SECRET,{expiresIn: "1h"})

    res.cookie("token",token)
    res.json({
        message:"User logged in successfully",
        user:{
            name: user.name,
            email:user.email,
        }
    })

})

module.exports = authRouter