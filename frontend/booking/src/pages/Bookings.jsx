import React from 'react'
import { Seats } from '../components/seats'
import { Container, Heading } from '@chakra-ui/react'

export const Bookings = () => {
  return (
    <Container display={"flex"} gap={"10px"}flexDirection={"column"} pb={10}>
        <Heading>Seats</Heading>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
        <Seats/>
    </Container>
  )
}
