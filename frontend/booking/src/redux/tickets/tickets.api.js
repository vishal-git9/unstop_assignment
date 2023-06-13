import axios from "axios"
export const getTicketSeatsData = async()=>{

    const res = await axios("https://fastbook-352t.onrender.com/api/")
    const {coachData} = res.data
    return coachData

}
export const bookTicketSeatsData = async(data)=>{
    const res = await axios.patch("https://fastbook-352t.onrender.com/api/bookSeats",data)
    const {msg} = res.data
    return msg
}

export const getUnbookedData = async()=>{
    const res = await axios.get("https://fastbook-352t.onrender.com/api/unBooked")
    const {coachData} = res.data
    return coachData
}
export const resetSeatsData = async()=>{
    const res = await axios.patch("https://fastbook-352t.onrender.com/api/resetSeats")
    const {msg} = res.data
    console.log(msg)
    return msg
}