import React, { useEffect, useState } from 'react'
import { Input } from '../components/input'
import "../styles/home.css"
import {Heading, Text, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUnbookedData } from '../redux/tickets/tickets.api'
import { closeBook } from '../logic_functions/booking'
import { bookTicketsAction } from '../redux/tickets/tickets.actions'
import { Bookings } from './Bookings'
export const Home = () => {
    const [TicketCount,setTicketCount] = useState(0)
    const [seats,setSeats] = useState("")
    const [book,setBook] = useState(false)
    const {error} = useSelector((store)=>store)
    const toast = useToast()
    const dispatch = useDispatch()
    const handleTicketCount = (e)=>{
        setTicketCount(Number(e.target.value))
    }
    const handleTicketSubmit = async(e)=>{
        if(TicketCount>7 || TicketCount<=0){
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
        setBook(!book)
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
    useEffect(()=>{
    },[dispatch])
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
