import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Bookings } from '../pages/Bookings'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/book' element={<Bookings/>}></Route>
    </Routes>
  )
}
