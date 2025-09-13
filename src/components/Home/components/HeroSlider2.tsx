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
    text: "Scale Your Business with Quality Textiles",
    image: "/images/hero2.png",
  },
  {
    id: 2,
    text: "Scale Your Business with Quality Textiles",
    image: "/images/hero2.png",
  },
  {
    id: 3,
    text: "Scale Your Business with Quality Textiles",
    image: "/images/hero2.png",
  },
];

const HeroSlider2: React.FC = () => {
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
              p: 1,
            }}
          >
            {slide.text}
          </Typography>
          <Box sx={{ 
            // display: "flex", justifyContent: "flex-end",
             pt:{xs: 6.5 , sm: 13, md: 6.7, lg: 8.7  },}}>
            <Image
              src={slide.image}
              alt={slide.text}
              height={185}
              width={185}
              priority
              layout="responsive"
              style={{ borderRadius: "12px"}}
            />
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider2;
