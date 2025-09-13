import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/Polyester.png",
  "/images/Polyester.png",
  "/images/Polyester.png",
  "/images/Polyester.png",
  "/images/Polyester.png",
  "/images/Polyester.png",
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WallOfFame() {
  return (
    <Box my={5}>
      <Typography
        sx={{
          fontSize: { xs: "34px", sm: "36px", md: "38px" },
          color: "#000",
          textAlign: "center",
          mb: 4,
        }}
      >
        WALL OF FAME
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <Grid container spacing={2} rowSpacing={6}>
          {images.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    borderRadius: "12px",
                    padding: "2px",
                    background:
                      "linear-gradient(180deg, #FCA120 0%, #F7233C 100%)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Wall of Fame ${index + 1}`}
                    height={400}
                    width={400}
                    layout="responsive"
                    style={{ borderRadius: "12px" }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}