"use client"
import { Container } from '@mui/material'
import React from 'react'
import CategoryHero from './components/CategoryHero'
import DealOfDay from '@/components/Home/components/DealOfDay'
import GetInTouch from '@/components/Home/components/GetInTouch'

export default function CategoryIndex() {
  return (
    <Container sx={{mt: 3}}>
      <CategoryHero/>
      <DealOfDay/>
      <GetInTouch/>
    </Container>
  )
}
