import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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

export default function WhoWeAre() {
  return (
    <Box mt={4}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "34px", sm: "36px", md: "38px" },
                  color: "#000",
                }}
              >
                WHO WE ARE?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "22px", sm: "24px", md: "24px" },
                  color: "#353535",
                  textAlign: "justify",
                  mt: 2,
                }}
              >
                Welcome to TexKart, your one-stop multi-vendor B2B marketplace for
                the textile industry. We are revolutionizing the way businesses
                connect, buy, and sell textiles by providing a seamless,
                transparent, and technology-driven platform. Whether you are a
                manufacturer, wholesaler, or retailer, TexKart empowers you with a
                vast network of suppliers, high-quality products, and a hassle-free
                procurement experience.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={5.5}>
            <motion.div variants={itemVariants}>
              <Image
                src="/images/about.png"
                alt="about us"
                height={400}
                width={400}
                layout="responsive"
                style={{ borderRadius: "12px" }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "34px", sm: "36px", md: "38px" },
                  color: "#000",
                }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "22px", sm: "24px", md: "24px" },
                  color: "#353535",
                  mt: 2,
                }}
              >
                Our mission is to create an efficient, transparent, and scalable B2B
                textile marketplace that helps businesses of all sizes grow and
                succeed.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "34px", sm: "36px", md: "38px" },
                  color: "#000",
                }}
              >
                OUR VISION
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "22px", sm: "24px", md: "24px" },
                  color: "#353535",
                  mt: 2,
                }}
              >
                At TexKart, we envision a future where textile businesses across the
                globe can seamlessly collaborate and thrive in a digital-first
                marketplace.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "34px", sm: "36px", md: "38px" },
                  color: "#000",
                }}
              >
                OUR VALUES
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "22px", sm: "24px", md: "24px" },
                  color: "#353535",
                  mt: 2,
                }}
              >
                We believe in fostering honest and transparent relationships between
                buyers and sellers. Every transaction on our platform ensures a
                trustworthy experience.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}