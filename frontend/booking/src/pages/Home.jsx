import React, { useState } from 'react'
import { Input } from '../components/input'
import "../styles/home.css"
import { Heading, useToast } from '@chakra-ui/react'
export const Home = () => {
    const [TicketCount,setTicketCount] = useState(0)
    const toast = useToast()
    const handleTicketCount = (e)=>{
        setTicketCount(Number(e.target.value))
    }
    const handleTicketSubmit = (e)=>{
        if(TicketCount>7){
            toast({
                position:"top",
                duration:"3000",
                status:"error",
                description:"Please enter valid ticket beetween 1-7"
            })
            return;
        }
    }
  return (
    <div className='Home_css_container'>
        <Heading>Book your tickets</Heading>
        <Input onchange={handleTicketCount} submitTicket={handleTicketSubmit}/>
    </div>
  )
}
