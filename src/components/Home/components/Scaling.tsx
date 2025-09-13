import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Scaling() {
  return (
    <Box py={10}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/scaling.svg"
              alt="Scaling"
              height={384}
              width={632}
              layout="responsive"
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "24px", sm: "26px", md: "28px", lg: "30px" },
                color: (theme) => theme.palette.text.disabled,
              }}
            >
              Scaling Your Business with Quality Fabrics
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "16px", lg: "18px" },
                mt: 2,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              We are revolutionizing the way businesses connect, buy, and sell
              textiles by providing a seamless, transparent, and technology-driven
              platform. Whether you are a manufacturer, wholesaler, or retailer,
              TexKart empowers you with a vast network of suppliers, high-quality
              products, and a hassle-free procurement experience. We are
              revolutionizing the way businesses connect, buy, and sell textiles
              by providing a seamless, transparent, and technology-driven
              platform.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}