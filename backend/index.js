const express = require("express")
const connection = require("./config/db")
const bookingRouter = require("./routes/book.route")
require("dotenv").config()
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())


app.use("/api/",bookingRouter) // api endpoint for booking tickets

app.listen(`${process.env.PORT}`,async()=>{
    try {
        await connection // making connection to db
        console.log("connected to db")
    } catch (error) {
        console.log("couldn't connect to db")
    }

    console.log(`connected to port ${process.env.PORT}`) // running on port
})