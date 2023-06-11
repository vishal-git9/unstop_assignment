import axios from "axios"
export const getTicketSeatsData = async()=>{

    const res = await axios("http://localhost:4500/api/")
    const {coachData} = res.data
    return coachData

}
export const bookTicketSeatsData = async(data)=>{
    const res = await axios.patch("http://localhost:4500/api/bookSeats",data)
    const {msg} = res.data
    return msg
}

export const getUnbookedData = async()=>{
    const res = await axios.get("http://localhost:4500/api/unBooked")
    const {coachData} = res.data
    return coachData
}