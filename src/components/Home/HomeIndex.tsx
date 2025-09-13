"use client"
import { Box, Container, } from '@mui/material';
import DealOfDay from '@/components/Home/components/DealOfDay';
import PopularCategories from './components/PopularCategories';
import BestSeller from './components/BestSeller';
import WhyChoose from './components/WhyChoose';
import OurlatestVlog from './components/OurLatestVlog';
import OurBuyers from '@/components/Home/components/OurBuyers';
import TrendingProducts from './components/TrendingProducts';
import GetInTouch from '@/components/Home/components/GetInTouch';
import Hero from './components/Hero';
// import Hero from './Components/Hero';


export default function HomeIndex() {
  return (
    <>
      <Box
        sx={{
          color: (theme) => theme.palette.text.primary,
          mt: 4
        }}
      >
        <Container>
          <Hero/>
          <DealOfDay/>
          <PopularCategories/>
          <BestSeller/>
        </Container>
        <WhyChoose/>
        <Container>
          <OurlatestVlog/>
          <OurBuyers/>
          <TrendingProducts/>
          <GetInTouch/>
        </Container>
      </Box>

    </>
  );
}
