"use client"
import { Container } from '@mui/material'
import React from 'react'
import ShoppingCart from './components/ShoppingCart'

export default function CartIndex() {
  return (
    <Container sx={{my: 2}}>
      <ShoppingCart/>
    </Container>
  )
}
