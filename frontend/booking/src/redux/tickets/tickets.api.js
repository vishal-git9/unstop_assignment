import axios from "axios"
export const getTicketSeatsData = async()=>{ // making the get request to the server to get all tickets data
    const res = await axios("https://fastbook-352t.onrender.com/api/")
    const {coachData} = res.data
    return coachData

}
export const bookTicketSeatsData = async(data)=>{ // making the patch request to the server to update the state of the seats to be booked
    const res = await axios.patch("https://fastbook-352t.onrender.com/api/bookSeats",data)
    const {msg} = res.data
    return msg
}

export const getUnbookedData = async()=>{ // getting all unbooked seats data to perform the logic
    const res = await axios.get("https://fastbook-352t.onrender.com/api/unBooked")
    const {coachData} = res.data
    return coachData
}
export const resetSeatsData = async()=>{ // making the patch request to reset all seats data to false
    const res = await axios.patch("https://fastbook-352t.onrender.com/api/resetSeats")
    const {msg} = res.data
    return msg
}