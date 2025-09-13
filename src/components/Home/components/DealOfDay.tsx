import CustomFabricCard from "@/custom/CustomFabricCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Grid, Typography } from "@mui/material";
// import fabricProducts from "@/components/Home/Components/HomeData/DealOfDayData";
import React from "react";
import { motion } from "framer-motion"; 
import { useRouter } from "next/navigation";

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

const fabricProducts = [
    {
      id: 1,
      title: "Swiss 2x2 Sheer Cotton Voile",
      rating: 3.5,
      price: 1000,
      originalPrice: 1200,
      discount: "25% off",
      tags: [
        { id: "1", label: "Cotton" },
        { id: "2", label: "Twisted" },
        { id: "3", label: "Pure" },
        { id: "4", label: "Polyster" },
        { id: "5", label: "Polyster" },
        { id: "6", label: "Polyster" },
      ],
      imageUrl: "/images/deal1.png",
      unit: "yarn",
    },
    {
      id: 2,
      title: "Swiss 2x2 Sheer Cotton Voile",
      rating: 4.2,
      price: 1500,
      originalPrice: 1800,
      discount: "15% off",
      tags: [
        { id: "1", label: "Cotton" },
        { id: "2", label: "Twisted" },
        { id: "3", label: "Pure" },
        { id: "4", label: "Polyster" },
        { id: "5", label: "Polyster" },
        { id: "6", label: "Polyster" },
      ],
      imageUrl: "/images/deal2.png",
      unit: "yarn",
    },
    {
      id: 3,
      title: "Swiss 2x2 Sheer Cotton Voile",
      rating: 4.1,
      price: 1300,
      originalPrice: 1600,
      discount: "20% off",
      tags: [
        { id: "1", label: "Cotton" },
        { id: "2", label: "Twisted" },
        { id: "3", label: "Pure" },
        { id: "4", label: "Polyster" },
        { id: "5", label: "Polyster" },
        { id: "6", label: "Polyster" },
      ],
      imageUrl: "/images/deal3.png",
      unit: "yarn",
    },
    {
      id: 4,
      title: "Swiss 2x2 Sheer Cotton Voile",
      rating: 4.2,
      price: 1300,
      originalPrice: 1600,
      discount: "20% off",
      tags: [
        { id: "1", label: "Cotton" },
        { id: "2", label: "Twisted" },
        { id: "3", label: "Pure" },
        { id: "4", label: "Polyster" },
        { id: "5", label: "Polyster" },
        { id: "6", label: "Polyster" },
      ],
      imageUrl: "/images/deal4.png",
      unit: "yarn",
    },
  ];

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

const DealOfDay: React.FC = () => {
  const router = useRouter();
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
          Deal of the day
        </Typography>
        <Button
        onClick={() => router.push("/product-category")}
          endIcon={<Icon icon="mingcute:right-line" />}
          sx={{
            color: "#636363",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: 400,
            border: "2px solid transparent",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              border: "2px solid #636363",
              borderRadius: "12px",
              backgroundColor: "transparent",
            },
          }}
        >
          View all deals
        </Button>
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

      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <Button
         onClick={() => router.push("/product-category")}
          sx={{
            color: "#636363",
            textTransform: "none",
            fontSize: "20px",
            fontWeight: 400,
            border: "2px solid transparent",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              border: "2px solid #636363",
              borderRadius: "12px",
              backgroundColor: "transparent",
            },
          }}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default DealOfDay;