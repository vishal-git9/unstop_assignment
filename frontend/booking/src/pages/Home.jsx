import React, {useState } from 'react'
import { Input } from '../components/input'
import "../styles/home.css"
import {Heading, Text, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUnbookedData } from '../redux/tickets/tickets.api'
import { closeBook } from '../logic_functions/booking'
import { bookTicketsAction } from '../redux/tickets/tickets.actions'
import { Bookings } from './Bookings'
export const Home = () => {
    const [TicketCount,setTicketCount] = useState(0) // user input ticket count
    const [seats,setSeats] = useState("") // seats that are booked by the system for the user
    const {error} = useSelector((store)=>store) // reading error from store during api call
    const toast = useToast()
    const dispatch = useDispatch()
    const handleTicketCount = (e)=>{
        setTicketCount(Number(e.target.value))
    }
    const handleTicketSubmit = async(e)=>{
        if(TicketCount>7 || TicketCount<=0){ // handling the input edge cases
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:"Please enter valid ticket beetween 1-7"
            })
            return;
        }
        const res = await getUnbookedData() // calling the api to get the unbooked seats
        if(res.length<TicketCount){ // if seats are lesser than asked by the user we show a popup
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:`only ${res.length} seats are left`
            })
            return;
        }
        const {idsArray,seatNumber} =  closeBook(res,TicketCount) // else we call the api to book the closest ticket
        dispatch(bookTicketsAction(idsArray)) // dispatching the actions of booking the tickets of given id
        setTicketCount("") // emptying the value
        setSeats(seatNumber) // storing the seat numbers
        if(error){ // error popup
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:"Please try later server is not responding"
            })
        }else{ // success popup
            toast({
                position:"top",
                duration:"3000",
                status:"success",
                description:"Tickets booked successfully"
            })
        }
    }
  return (
    <div className='Home_css_parent_container'>
    <div className='Home_css_container'>
        <Heading>Book your tickets</Heading>
        <Input count={TicketCount} onchange={handleTicketCount} submitTicket={handleTicketSubmit}/>
        {seats.length>0 && <Text> you have booked {seats} seats</Text>}
    </div>
    <Bookings/>
    </div>
  )
}
