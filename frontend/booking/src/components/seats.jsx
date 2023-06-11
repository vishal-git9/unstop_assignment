import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Buttons } from './buttons'

export const Seats = ({data}) => {
  return (
    <Container>
        <Grid width={"100%"} gridTemplateColumns={"repeat(7,1fr)"} gap={2}>
            {
                data?.map((el)=>(
                    <GridItem key={el._id}>
                        <Buttons text={el.seatNo} padding={2} isActive={el.isBooked}/>
                    </GridItem>
                ))
            }
        </Grid>
    </Container>
  )
}
