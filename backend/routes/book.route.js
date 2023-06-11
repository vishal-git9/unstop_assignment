const express = require("express")
const bookingModel = require("../models/booking.model")
const bookingRouter = express.Router()


bookingRouter.get("/",async(req,res)=>{
    try {
        const coachData = await bookingModel.find({})

        res.status(200).send({msg:"here is all the bookings data",coachData})
    } catch (error) {
        res.status(400).send({msg:"couldn't fetch data"})
    }
})

bookingRouter.get("/unBooked",async(req,res)=>{
    try {
        const coachData = await bookingModel.find({isBooked:false})

        res.status(200).send({msg:"here is all the unbooked data",coachData})
    } catch (error) {
        res.status(400).send({msg:"couldn't fetch data"})
    }
})
bookingRouter.post("/postSeats",async(req,res)=>{
    const ticketReq = req.body
    try {
        const coachData = await bookingModel.insertMany(ticketReq)
        res.status(201).send({msg:"posted new data succesfully"})
    } catch (error) {
        res.status(400).send({msg:"couldn't post data"})
    }
})
bookingRouter.patch("/bookSeats",async(req,res)=>{
    const ticketReq = req.body
    try {
        const coachData = await bookingModel.updateMany({_id:{$in:[...ticketReq]}},{$set:{isBooked:true}},{multi:true})
        res.status(201).send({msg:"ticekts booked succesfully"})
    } catch (error) {
        res.status(400).send({msg:"couldn't book tickets"})
    }
})


module.exports = bookingRouter