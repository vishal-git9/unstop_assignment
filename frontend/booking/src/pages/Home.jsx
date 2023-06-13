import React, { useState } from 'react'
import { Input } from '../components/input'
import "../styles/home.css"
import { Center, Heading, Spinner, Text, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUnbookedData } from '../redux/tickets/tickets.api'
import { closeBook } from '../logic_functions/booking'
import { bookTicketsAction } from '../redux/tickets/tickets.actions'
export const Home = () => {
    const [TicketCount,setTicketCount] = useState(0)
    const [seats,setSeats] = useState("")
    const {error} = useSelector((store)=>store)
    const {loading} = useSelector((store)=>store)
    const toast = useToast()
    const dispatch = useDispatch()
    const handleTicketCount = (e)=>{
        setTicketCount(Number(e.target.value))
    }
    const handleTicketSubmit = async(e)=>{
        if(TicketCount>7){
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:"Please enter valid ticket beetween 1-7"
            })
            return;
        }
        const res = await getUnbookedData()
        if(res.length<TicketCount){
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:`only ${res.length} seats are left`
            })
            return;
        }
        const {idsArray,seatNumber} =  closeBook(res,TicketCount)
        dispatch(bookTicketsAction(idsArray))
        setTicketCount("")
        setSeats(seatNumber)

        if(error){
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:"Please try later server is not responding"
            })
        }else{
            toast({
                position:"top",
                duration:"3000",
                status:"success",
                description:"Tickets booked successfully"
            })
        }
    }
  return (
    <div className='Home_css_container'>
        <Heading>Book your tickets</Heading>
        <Input count={TicketCount} onchange={handleTicketCount} submitTicket={handleTicketSubmit}/>
        {loading && <Center><Spinner/></Center>}
        {seats.length>0 && <Text> you have booked {seats} seats</Text>}
    </div>
  )
}
