"use client"
import { Box, Container } from '@mui/material'
import React from 'react'
import OrderNow from './components/OrderNow'
import GetSample from './components/GetSample'
import SimilarProduct from './components/SimilarProduct'
import OurBuyers from '@/components/Home/components/OurBuyers'
import GetInTouch from '@/components/Home/components/GetInTouch'

export default function ProductDetailsIndex() {
  return (
    <Container sx={{my: 3}}>
      <OrderNow/>
      <GetSample/>
      <SimilarProduct/>
      <OurBuyers/>
      <Box mt={6}>
      <GetInTouch/>
      </Box>
    </Container>
  )
}
