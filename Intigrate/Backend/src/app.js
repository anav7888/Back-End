/**
 * server create krna
 * Api Bnana
 */

const express = require("express")
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())

/**
 * Method hoga Post Naam hoga notes
 * create new notes and save data in mongoDB
 */

app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })
})

/**
 * Method hoga Get Naam hoga notes
 * fetch all the data from mangoDB and send them in the response
 */

app.get('/api/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({

        message: "Notes fetched successfully",
        notes
    })
})

/**
 * Api method hoga Delete
 * /Api?notes/:id---- jish v api ko delete krna yaha uski id aye gi
 * delete notes with the help of id from req.params
 */

app.delete('/api/notes/:id', async (req,res) => {
    const id = req.params.id
       await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Notes deleted successfully"
    })

})

/**
 * Api method patch  /Api?notes/:id
 * update the description of notes
 */
app.patch('/api/notes/:id', async (req,res)=>{
    const id = req.params.id
    const {description} = req.body
  await  noteModel.findByIdAndUpdate(id, {description})

  res.status(200).json({
    message:"Notes update successfully"
  })
})


module.exports = app

