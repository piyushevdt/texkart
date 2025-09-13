import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const whyChooseData = [
  {
    id: 1,
    image: "/images/whyChoose1.svg",
    alt: "why-choose-1",
    title: "Buyer Protection",
    description: "Committed to buyer interests to provide a smooth shopping experience.",
  },
  {
    id: 2,
    image: "/images/whyChoose2.png",
    alt: "why-choose-2",
    title: "Return within 7 days",
    description: "of receiving your order",
  },
  {
    id: 3,
    image: "/images/whyChoose3.png",
    alt: "why-choose-3",
    title: "100% Safe & Secure Payment",
    description: "Pay using secure payment methods",
  },
  {
    id: 4,
    image: "/images/whyChoose4.png",
    alt: "why-choose-4",
    title: "100% Original",
    description: "guarantee for all products",
  },
  {
    id: 5,
    image: "/images/whyChoose5.png",
    alt: "why-choose-5",
    title: "Complete products",
    description: "20,00,000+ products from 1200+ Brands",
  },
  {
    id: 6,
    image: "/images/whyChoose6.png",
    alt: "why-choose-6",
    title: "Helpline Number",
    description: "Call: +91 8448449073 <br /> (Mon - Sun: 9am- 8pm)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.2, 
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChoose() {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.backgroundGradient,
        color: (theme) => theme.palette.primary.contrastText,
        py: 3,
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", sm: "34px", md: "36px", lg: "40px" },
            textAlign: "center",
          }}
        >
          Why choose TexKart
        </Typography>

        <Grid
          container
          spacing={4}
          py={2}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {whyChooseData.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              component={motion.div}
              variants={cardVariants}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <Image src={item.image} alt={item.alt} width={72} height={72} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "18px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "12px", sm: "14px", md: "14px", lg: "12px" },
                  }}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}