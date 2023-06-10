import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Buttons } from './buttons'

export const Seats = () => {
    const seats = [1,2,3,4,5,6,7]
  return (
    <Container>
        <Grid width={"100%"} gridTemplateColumns={"repeat(7,1fr)"} gap={2}>
            {
                seats.map((el)=>(
                    <GridItem>
                        <Buttons text={el} padding={2}/>
                    </GridItem>
                ))
            }
        </Grid>
    </Container>
  )
}
