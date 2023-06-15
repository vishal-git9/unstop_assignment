const mongoose  =  require("mongoose")
require("dotenv").config()
const connection = mongoose.connect(`${process.env.MONGO_URL}`) // making connection to MongoDB Atlas

module.exports = connection