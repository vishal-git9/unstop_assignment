const express = require("express")
const connection = require("./config/db")
const bookingRouter = require("./routes/book.route")
require("dotenv").config()
const app = express()
app.use(express.json())


app.use("/api/",bookingRouter)

app.listen(`${process.env.PORT}`,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("couldn't connect to db")
    }

    console.log(`connected to port ${process.env.PORT}`)
})