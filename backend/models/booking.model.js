const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({ // booking schema has isBooked and seatNo
    isBooked:Boolean,
    seatNo:Number
})

const bookingModel = mongoose.model("bookingModel",bookingSchema) // making the bookingModel collection

module.exports = bookingModel // exporting bookingModel