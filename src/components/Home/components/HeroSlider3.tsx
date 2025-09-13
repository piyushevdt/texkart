import React from "react";
import Slider from "react-slick";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    text: "Bulk Fabrics, Unmatched Quality ",
    imgSrc: "/images/hero3.png",
  },
  {
    id: 2,
    text: "Bulk Fabrics, Unmatched Quality ",
    imgSrc: "/images/hero3.png",
  },
  {
    id: 3,
    text: "Bulk Fabrics, Unmatched Quality ",
    imgSrc: "/images/hero3.png",
  },
];

const HeroSlider3: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <Box
          key={slide.id}
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid container >
            <Grid item xs={6}>
              <Typography
                variant="body1"
                sx={{
                  color: (theme) => theme.palette.primary.contrastText,
                  fontSize: {
                    xs: "20px",
                    sm: "22px",
                    md: "15px",
                    lg: "18px",
                  },
                  fontWeight: 400,
                  p: 1
                }}
              >
                {slide.text}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box 
              sx={{ height: "100%" ,}}
              >
                <Image
                  src={slide.imgSrc}
                  alt={slide.text}
                  height={600}
                  width={600}
                  priority
                  layout="responsive"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider3;
