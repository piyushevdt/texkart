"use client"
import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeHero from './components/HomeHero'
import Scaling from './components/Scaling'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import OurBuyers from './components/OurBuyers'
import GetInTouch from './components/GetInTouch'
import NavbarDash from '../Layout/NavbarDash'

export default function SellingHome() {
    const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
        <Box
        sx={{
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? "inherit" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          boxShadow: scrolled ? 1 : "none",
        }}
      >
        <NavbarDash />
      </Box>
       <Box
        sx={{
          color: (theme) => theme.palette.text.primary,
          pb: 4,
        }}
      >
          <HomeHero/>
        <Container>
            <Scaling/>
        </Container>
            <HowItWorks/>
        <Container>
        <WhyChooseUs/>
          <OurBuyers/>
          <GetInTouch/>
        </Container>
      </Box>
    </div>
  )
}
