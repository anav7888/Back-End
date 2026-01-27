/*
-- server ko create krna
-- server ko config krna
*/


const express = require("express")

const app = express() /* express ko call krte hi server create ho jata hai ho jata hai  */

app.use(express.json()) /* data use krne ke liye ek middleware use krna pdhta hai jiska naam hai express.json() aur app.use middle ware ko use krne ka trikaa hota hai*/

const notes = [
    /* {
        title: "test title 1",
        description: "test description 1"
     }*/
]

app.get('/', (req, res) => {
    res.send("hello world")
})


/*
Api kamethod hai post
Api ka naam notes
*/
app.post('/notes',(req,res)=>{
    console.log(req.body)
    notes.push(req.body)/* isho data ko push krna hai notes ke andr */
    console.log(notes)
    res.send("notes created")
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})

/*
delete method
aur api use hoga notes
 */
app.delete('/notes/:index',(req,res)=>{
 delete notes[req.params.index]
 res.send("notes delete successfully")
})

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send("notes modified successfully")
})


module.exports = app  /* server ko file ke baahr bejh dia   */