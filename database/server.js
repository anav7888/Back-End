// server start krna 

const mongoose = require("mongoose")

const connectToDb = require("./src/config/databse")
connectToDb()

const app = require("./src/app")

app.listen(3000, () => {
    console.log("server is running on port 3000")
})  