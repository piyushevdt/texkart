"use client"
import { Box, Container } from '@mui/material'
import React from 'react'
import AboutUsHero from './components/AboutUsHero'
import WhoWeAre from './components/WhoWeAre'
import WallOfFame from './components/WallOfFame'
import GetInTouch from '@/components/Home/components/GetInTouch'

export default function AboutUsIndex() {
  return (
    <Box >
      <AboutUsHero/>
      <Container>
        <WhoWeAre/>
        <WallOfFame/>
        <GetInTouch/>
      </Container>
    </Box>
  )
}
