import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          backgroundImage: "url(/images/ContactBG.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{ fontWeight: 400, fontSize: ["32px", "48px", "60px"] }}
            >
              GET IN TOUCH WITH US
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 400, fontSize: ["18px", "24px", "32px"] }}
            >
              We&apos;d love to hear from you! Feel free to reach out using the
              form below, and our friendly team will get back to you as soon as
              possible.
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}
