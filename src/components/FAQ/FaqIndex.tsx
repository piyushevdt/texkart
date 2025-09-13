"use client"
import { Box, Container } from '@mui/material'
import React from 'react'
import FAQDropDowns from './components/FAQDropDowns';
import GetInTouch from '@/components/Home/components/GetInTouch';
import FAQHero from './components/FAQHero';

export default function FaqIndex() {
  return (
    <Box>
        <FAQHero/>
        <Container sx={{my: 3}}>
      <FAQDropDowns />
      <GetInTouch/>
    </Container>
    </Box>
  )
}
