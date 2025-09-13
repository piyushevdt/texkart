import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function PrivacyHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          backgroundImage: "url(/images/FAQ.png)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: ["200px", "200px", "500px"],
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
              fontSize: ["50px", "60px", "90px"],
            }}
          >
            Privacy Policy
          </Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
}
