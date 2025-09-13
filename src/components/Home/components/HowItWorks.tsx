import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 

const cardData = [
  {
    icon: "/images/HowItWorks1.svg",
    title: "Register yourself as a supplier",
    description: "Get your GST, cheque and PAN card handy",
  },
  {
    icon: "/images/HowItWorks2.svg",
    title: "Create catalog of your product",
    description: "Our Easy Interface listing system Creates catlog in seconds",
  },
  {
    icon: "/images/HowItWorks3.svg",
    title: "Get orders from Thousands of customers ",
    description: "Don’t worry Texkart will take care of the logistics",
  },
];

export default function HowItWorks() {
  return (
    <Box pb={2}>
      <Box
        sx={{ 
          // background: (theme) => theme.palette.banner, 
          height: "300px" }}
      >
        <Typography
          textAlign="center"
          variant="body1"
          sx={{
            fontSize: { xs: "30px", sm: "32px", md: "34px", lg: "36px" },
            color: (theme) => theme.palette.primary.contrastText,
            pt: 4,
          }}
        >
          How It Works
        </Typography>
      </Box>
      <Container sx={{ mt: -25 }}>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }} 
              >
                <Card
                  sx={{
                    background: "#363636",
                    boxShadow: "4px 8px 12px 0px #0000001F",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    p: 2,
                  }}
                >
                  <Image src={card.icon} alt="icon" height={85} width={84} />

                  <Box className="text-center" sx={{color: (theme)=> theme.palette.primary.contrastText}}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                          md: "22px",
                          lg: "24px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      {(() => {
                        const words = card.title.trim().split(/\s+/); 
                        const firstLine = words.slice(0, -3).join(" ");
                        const secondLine = words.slice(-3).join(" ");
                        return (
                          <>
                            {firstLine} <br /> {secondLine}
                          </>
                        );
                      })()}
                    </Typography>

                    <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", fontSize: {xs: "14px", sm: "16px", md: "18px",}}} px={4} pt={1}>
                      {card.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}