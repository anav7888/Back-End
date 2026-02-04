// server create krna 


const express = require("express")
const noteModel = require("./models/notes.models")

const app = express()
app.use(express.json())

/**
 * Post method
 * req.body({ title, description})
 */

app.post("/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "Notes create successfully",
        note
    })

})

module.exports = app