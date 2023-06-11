import React, { useEffect } from 'react'
import { Seats } from '../components/seats'
import { Center, Container, Heading, Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsAction } from '../redux/tickets/tickets.actions'

export const Bookings = () => {

  const dispatch = useDispatch()
  const ticketsData = useSelector((store)=>store.tickets)
  const loading = useSelector((store)=>store.loading)
  console.log(ticketsData)
  useEffect(()=>{
    dispatch(getTicketsAction())
  },[dispatch])
  return (
    <Container display={"flex"} gap={"10px"}flexDirection={"column"} pb={10}>
        <Heading>Seats</Heading>
        {
          loading ? <Center><Spinner/></Center> : <Seats data={ticketsData}/>
        }
    </Container>
  )
}
