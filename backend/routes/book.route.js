const express = require("express")
const bookingModel = require("../models/booking.model")
const bookingRouter = express.Router()

bookingRouter.get("/",async(req,res)=>{
    try {
        const coachData = await bookingModel.find({}) // making request to the database for finding all the ticket documents
        res.status(200).send({msg:"here is all the bookings data",coachData})
    } catch (error) {
        res.status(400).send({msg:"couldn't fetch data"})
    }
})

bookingRouter.get("/unBooked",async(req,res)=>{
    try {
        const coachData = await bookingModel.find({isBooked:false}) // // making request to the database for finding all the unbooked ticket documents

        res.status(200).send({msg:"here is all the unbooked data",coachData})
    } catch (error) {
        res.status(400).send({msg:"couldn't fetch data"})
    }
})
bookingRouter.post("/postSeats",async(req,res)=>{
    const ticketReq = req.body
    try {
        const coachData = await bookingModel.insertMany(ticketReq) // making request to the database for inserting all the ticket documents
        res.status(201).send({msg:"posted new data succesfully"})
    } catch (error) {
        res.status(400).send({msg:"couldn't post data"})
    }
})
bookingRouter.patch("/bookSeats",async(req,res)=>{
    const ticketReq = req.body
    try {
        const coachData = await bookingModel.updateMany({_id:{$in:[...ticketReq]}},{$set:{isBooked:true}},{multi:true}) // making request to the database for updating/booking many ticket documents of provided _id
        res.status(201).send({msg:"ticekts booked succesfully"})
    } catch (error) {
        res.status(400).send({msg:"couldn't book tickets"})
    }
})
bookingRouter.patch("/resetSeats",async(req,res)=>{
    try {
        const coachData = await bookingModel.updateMany({},{$set:{isBooked:false}},{multi:true}) // making request to the database for updating/reseting all the ticket documents to it's intial state
        res.status(201).send({msg:"ticekts reseted succesfully"})
    } catch (error) {
        res.status(400).send({msg:"couldn't reset tickets"})
    }
})


module.exports = bookingRouter // exporting the bookingRouter