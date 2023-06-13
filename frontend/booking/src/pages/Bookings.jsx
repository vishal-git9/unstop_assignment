import React, { useEffect } from 'react'
import { Seats } from '../components/seats'
import { Box, Button, Center, Container, HStack, Heading, Spinner, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsAction, resetTicketsAction } from '../redux/tickets/tickets.actions'

export const Bookings = () => {

  const dispatch = useDispatch()
  const ticketsData = useSelector((store)=>store.tickets)
  const loading = useSelector((store)=>store.loading)
  const handleReset = ()=>{
    dispatch(resetTicketsAction())
  }
  useEffect(()=>{
    dispatch(getTicketsAction())
  },[dispatch])
  return (
    <Container display={"flex"} gap={"30px"} flexDirection={"column"} pb={10}>
        <Heading>Seats</Heading>
        <HStack justifyContent={"center"}>
        <Box width={50} height={50} bgColor={"green"} fontSize={"sm"}></Box>
        <Text>Booked</Text>
        <Box width={50} height={50} border={"1px solid #9AC6CF "}></Box>
        <Text>Not Booked</Text>
        </HStack>
        {
          loading ? <Center><Spinner/></Center> : <Seats data={ticketsData}/>
        }
        <Button onClick={handleReset}>RESET TICKETS</Button>
    </Container>
  )
}
