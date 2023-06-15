import React, { useEffect } from 'react'
import { Seats } from '../components/seats'
import { Box, Button, Center, Container, HStack, Heading, Spinner, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsAction, resetTicketsAction } from '../redux/tickets/tickets.actions'

export const Bookings = () => {

  const dispatch = useDispatch()
  const {tickets,loading} = useSelector((store)=>store) // reading the value from the redux store
  const handleReset = ()=>{
    dispatch(resetTicketsAction()) // dispatching the reset tickets action
  }
  useEffect(()=>{
    dispatch(getTicketsAction()) // dispatching the get tickets action for tickets data
  },[dispatch])
  return (
    <Container display={"flex"} gap={"30px"} flexDirection={"column"} pb={10}>
        <Heading>Seats</Heading>
        <HStack justifyContent={"center"}>
        <Box width={"20px"} height={"20px"} bgColor={"green"} fontSize={"sm"}></Box>
        <Text>Booked</Text>
        <Box width={"20px"} height={"20px"} border={"1px solid #9AC6CF "}></Box>
        <Text>Not Booked</Text>
        </HStack>
        {
          loading ? <Center><Spinner/></Center> : <Seats data={tickets}/>
        }
        <Button onClick={handleReset}>RESET TICKETS</Button>
    </Container>
  )
}
