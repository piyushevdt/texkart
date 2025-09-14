import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Image from "next/image";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box
        sx={{
          background: (theme) => theme.palette.backgroundGradient,
          display: "flex",
          justifyContent: "space-between",
          pt: 1,
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: "12px",
        }}
      >
        <Box sx={{ p: { xs: 3, sm: 4 } }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
                color: (theme) => theme.palette.primary.contrastText,
              }}
              className="font-bold"
            >
              Your Trusted Textile Partner
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                color: (theme) => theme.palette.primary.contrastText,
                mt: 3,
                width: { xs: "100%", md: "90%" },
              }}
            >
              High-quality fabrics, competitive rates, seamless sourcing
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
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
                px: 3,
                py: 1,
              }}
            >
              Get a Quote
            </Button>
          </motion.div>
        </Box>

        <motion.div variants={itemVariants}>
          <Box
            className="flex justify-end"
            sx={{ mt: { xs: 0, sm: 1 }, mb: { xs: -4, sm: -8, md: -5, lg: -7 } }}
          >
            <Image
              src="/images/ProductCategoryHero.png"
              alt="Image"
              width={300}
              height={100}
              className="rounded-lg"
              priority
              layout="responsive"
            />
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}