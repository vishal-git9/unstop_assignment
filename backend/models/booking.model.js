const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    isBooked:Boolean,
    seatNo:Number
})

const bookingModel = mongoose.model("bookingModel",bookingSchema)

module.exports = bookingModel