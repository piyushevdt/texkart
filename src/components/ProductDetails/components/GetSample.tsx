import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const popUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function GetSample() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Box>
        <Box
          component={motion.div}
          variants={containerVariants}
          sx={{
            borderRadius: "12px",
            p: 2,
            background: "#FE9C2E",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            my: 3,
          }}
        >
          <Box py={2}>
            <Typography
              component={motion.div}
              variants={popUpVariants}
              variant="h1"
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
                color: (theme) => theme.palette.primary.contrastText,
              }}
              className="font-bold"
            >
              If interested get sample
            </Typography>
            <Typography
              component={motion.div}
              variants={popUpVariants}
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
          </Box>
          <Button
            component={motion.div}
            variants={popUpVariants}
            variant="contained"
            sx={{
              backgroundColor: "white",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#f5f5f5" },
              color: (theme) => theme.palette.primary.main,
              borderRadius: "12px",
              textTransform: "none",
              px: 3,
              py: 1,
              height: "40px",
              mr: { xs: "none", sm: 4 },
            }}
          >
            Get Sample
          </Button>
        </Box>

        <Box
          component={motion.div}
          variants={containerVariants}
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="h1"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontSize: { xs: "28px", sm: "30px", md: "34px", lg: "36px" },
              mb: 2,
            }}
          >
            Description
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            Content: 100% Cotton
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            Width: 57/58 inches
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            Weight: 70 GSM
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            Thickness: 0.20 mm
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            Care: Machine Wash With Like Colors; Tumble Dry, Low
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            2 x 2 Weave
          </Typography>

          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
            mt={2}
          >
            Premium fabrics, seamless sourcing—grow your business with quality
            you can trustPremium fabrics, seamless sourcing—grow your business
            with quality you can trustPremium fabrics, seamless sourcing—grow
            your business with quality you can trustPremium fabrics, seamless
            sourcing—grow your business with quality you can trustPremium
            fabrics, seamless sourcing—grow your business with quality you can
            trustPremium fabrics, seamless sourcing—grow your business with
            quality you can trustPremium fabrics, seamless sourcing—grow your
            business with quality you can trust
          </Typography>
          <Typography
            component={motion.div}
            variants={popUpVariants}
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            }}
            my={2}
          >
            Premium fabrics, seamless sourcing—grow your business with quality
            you can trustPremium fabrics, seamless sourcing—grow your business
            with quality you can trustPremium fabrics, seamless sourcing—grow
            your business with quality you can trustPremium fabrics, seamless
            sourcing—grow your business with quality you can trustPremium
            fabrics, seamless sourcing—grow your business with quality you can
            trustPremium fabrics, seamless sourcing—grow your business with
            quality you can trustPremium fabrics, seamless sourcing—grow your
            business with quality you can trustPremium fabrics, seamless
            sourcing—grow your business with quality you can trustPremium
            fabrics, seamless sourcing—grow your business with quality you can
            trustPremium fabrics, seamless sourcing—grow your business with
            quality you can trust
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
