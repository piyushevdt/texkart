import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Box, Chip } from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import fabrics from "./HomeData/PopularCategoriesData";
import { motion } from "framer-motion"; 
import { useRouter } from "next/navigation";


interface FabricItem {
  id: string;
  name: string;
  imageUrl: string;
  subCategories: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PopularCategories: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontSize: { xs: "28px", sm: "30px", md: "34px", lg: "36px" },
          py: 2,
        }}
      >
        Popular Categories
      </Typography>

      <Grid
        container
        spacing={3}
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        variants={containerVariants}
      >
        {fabrics.map((fabric: FabricItem) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={fabric.id}
            component={motion.div}
            variants={cardVariants}
            onMouseEnter={() => setHoveredId(fabric.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className="h-64 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              sx={{
                position: "relative",
                backgroundImage: `url(${fabric.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
                  opacity: hoveredId === fabric.id ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  zIndex: 1,
                },
              }}
            >
              <Box className="flex items-end justify-center h-full">
                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    className="text-white text-center font-medium"
                    py={1}
                  >
                    {fabric.name}
                  </Typography>
                  <Box
                    className="flex justify-center gap-1 mt-2"
                    sx={{
                      position: "absolute",
                      bottom: hoveredId === fabric.id ? "5%" : "-20%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      opacity: hoveredId === fabric.id ? 1 : 0,
                      transition:
                        "bottom 0.3s ease-in-out, opacity 0.3s ease-in-out",
                      zIndex: 2,
                    }}
                  >
                    {fabric.subCategories
                      .slice(0, 3)
                      .map((subCategory, index) => (
                        <Chip
                          key={index}
                          label={subCategory}
                          size="small"
                          className="m-1"
                          sx={{
                            background: (theme) =>
                              theme.palette.backgroundGradient,
                            color: (theme) =>
                              theme.palette.primary.contrastText,
                          }}
                        />
                      ))}
                    {fabric.subCategories.length > 3 && (
                      <Chip
                        label="more"
                        size="small"
                        className="m-1"
                        sx={{
                          background: (theme) =>
                            theme.palette.backgroundGradient,
                          color: (theme) => theme.palette.primary.contrastText,
                        }}
                      />
                    )}
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="flex justify-center mt-4" mt={4}>
        <CustomButton gradient  onClick={() => router.push("/category")}>View All Category</CustomButton>
      </Box>
    </Box>
  );
};

export default PopularCategories;