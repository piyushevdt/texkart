import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, 
};

const slides = [
  {
    id: 1,
    text: " Premium Fabrics at Wholesale Prices",
    image: "/images/hero1.png",
  },
  {
    id: 2,
    text: " Premium Fabrics at Wholesale Prices",
    image: "/images/hero1.png",
  },
  {
    id: 3,
    text: " Premium Fabrics at Wholesale Prices",
    image: "/images/hero1.png",
  },
];

const HeroSlider1: React.FC = () => {
  return (
    <Slider {...sliderSettings}>
      {slides.map((slide) => (
        <Box
          key={slide.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 2,
            p: 0,
            height: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
              fontSize: { xs: "20px", sm: "22px", md: "16px", lg: "18px" },
              fontWeight: 400,
              p: 1
            }}
          >
            {slide.text}
          </Typography>
          <Box sx={{ 
             pl: 10, pt:{xs: 1, md: 1.9, lg: 1.5}, }}>
            <Image
              src={slide.image}
              alt={slide.text}
              height={180}
              width={180}
              priority
              layout="responsive"
            />
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider1;
