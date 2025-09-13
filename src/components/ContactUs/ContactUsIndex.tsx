"use client"
import { Box, Container } from '@mui/material'
import React from 'react'
import ContactForm from './Components/ContactForm'
import Location from './Components/Location'
import ContactHero from './Components/ContactHero'

export default function ContactUsIndex() {
  return (
   <Box>
    <ContactHero/>
     <Container sx={{mt: -20}}>
      <ContactForm/>
      <Location/>
    </Container>
   </Box>
  )
}
