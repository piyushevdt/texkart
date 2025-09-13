"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const slides = [
  {
    title: "Your Trusted Textile Partner",
    subtitle: "High-quality fabrics, competitive rates, seamless sourcing",
    img: "/images/slider1.png",
  },
  {
    title: "Premium Quality Fabrics",
    subtitle: "High-quality fabrics, competitive rates, seamless sourcing",
    img: "/images/slider1.png",
  },
];

const CustomArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) => (
  <Box
    className={`${props.className} bg-gray-300/50 p-2 rounded-full absolute z-10 cursor-pointer`}
    style={{ ...props.style }}
    onClick={props.onClick}
  />
);

const TextileSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <Box className="w-full  mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} className="relative flex items-center" sx={{p:1}}>
            <Typography variant="h1" sx={{fontSize: {xs: "24px", sm: "28px", md: "32px", lg: "36px"}, color: (theme) => theme.palette.primary.contrastText,}} className="font-bold">
              {slide.title}
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', pt: 1, flexDirection: {xs: "column", sm: "row"}}} className="w-full">
              <Box className=" px-6">
                <Typography variant="body1" sx={{fontSize: {xs: "14px", sm: "16px", md: "18px", lg: "20px"}, color: (theme) => theme.palette.primary.contrastText,}}>{slide.subtitle}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "none",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                    color: (theme) => theme.palette.primary.main,
                    mt: 2,
                    borderRadius: "12px",
                    textTransform: "none",
                  }}
                  className="mt-4"
                >
                  Get a Quote
                </Button>
              </Box>

              <Box className=" flex justify-end" sx={{mt: {xs: 1, sm: -2}}}>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={300}
                  height={100}
                  className="rounded-lg"
                  priority
                  // layout="responsive"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TextileSlider;
