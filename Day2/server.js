const express = require("express")
const server = express()

server.get('/',(req,res)=>{
 res.send("Hello world")
})

server.get('/Home',(req,res)=>{
    res.send("hello i am Home page")
})

server.get('/About',(req,res)=>{
    res.send("Hello i am About page")
})



server.listen(3000)