"use client"
import { Container } from '@mui/material'
import React from 'react'
import ProductHero from './components/ProductHero'
import ProductsFilter from './components/ProductsFilter'

export default function ProductCategoryIndex() {
  return (
    <Container sx={{my:3}}>
      <ProductHero/>
      <ProductsFilter/>
    </Container>
  )
}
