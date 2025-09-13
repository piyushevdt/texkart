import CustomFabricCard from "@/custom/CustomFabricCard";
import { Box,  Grid, Typography } from "@mui/material";
import fabricProducts from "@/components/Home/Components/HomeData/DealOfDayData";
import React from "react";
import { motion } from "framer-motion"; 

interface FabricProduct {
  id: number;
  title: string;
  rating: number;
  price: number;
  originalPrice: number;
  discount: string;
  tags: { id: string; label: string }[];
  imageUrl: string;
  unit: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SimilarProduct: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          my: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: { xs: "28px", sm: "30px", md: "34px", lg: "36px" },
          }}
        >
         Similar Product
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        variants={containerVariants}
      >
        {fabricProducts.map((product: FabricProduct) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            component={motion.div}
            variants={cardVariants}
          >
            <CustomFabricCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimilarProduct;