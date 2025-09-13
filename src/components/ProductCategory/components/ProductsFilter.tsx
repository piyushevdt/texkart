import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomFabricCard from "../../../custom/CustomFabricCard";
import { motion } from "framer-motion";

const MotionGrid = motion.create(Grid);
const MotionBox = motion.create(Box);
const MotionAccordion = motion.create(Accordion);
const MotionFormControl = motion.create(FormControl);

interface Tag {
  id: string;
  label: string;
}

interface FabricProduct {
  id: string;
  title: string;
  rating: number;
  price: number;
  originalPrice: number;
  discount: string;
  tags: Tag[];
  imageUrl: string;
  yarnType: string[];
  quality: string[];
  origin: string;
  color: string[];
}

const mockProducts: FabricProduct[] = [
  {
    id: "1",
    title: "Swiss 2x2 Sheer Cotton Voile",
    rating: 4.5,
    price: 1000,
    originalPrice: 1300,
    discount: "25% off",
    tags: [
      { id: "1", label: "Cotton" },
      { id: "2", label: "Twisted" },
      { id: "3", label: "Pure" },
      { id: "4", label: "Polyester" },
    ],
    imageUrl: "/images/deal1.svg",
    yarnType: ["Swiss Voile"],
    quality: ["Premium"],
    origin: "Imported",
    color: ["Green", "Brown", "Beige"],
  },
  {
    id: "2",
    title: "Swiss 2x2 Sheer Cotton Voile",
    rating: 4.8,
    price: 1000,
    originalPrice: 1300,
    discount: "25% off",
    tags: [
      { id: "1", label: "Cotton" },
      { id: "2", label: "Twisted" },
      { id: "3", label: "Pure" },
      { id: "4", label: "Polyester" },
    ],
    imageUrl: "/images/deal2.svg",
    yarnType: ["Swiss Voile"],
    quality: ["Standard"],
    origin: "Domestic",
    color: ["Blue", "Pink", "Orange"],
  },
  {
    id: "3",
    title: "Swiss 2x2 Sheer Cotton Voile",
    rating: 4.2,
    price: 1000,
    originalPrice: 1300,
    discount: "25% off",
    tags: [
      { id: "1", label: "Cotton" },
      { id: "2", label: "Twisted" },
      { id: "3", label: "Pure" },
      { id: "4", label: "Polyester" },
    ],
    imageUrl: "/images/deal3.svg",
    yarnType: ["Swiss Voile", "Polyester Yarn"],
    quality: ["Premium"],
    origin: "Domestic",
    color: ["White"],
  },
  {
    id: "4",
    title: "Swiss 2x2 Sheer Cotton Voile",
    rating: 4.5,
    price: 1000,
    originalPrice: 1300,
    discount: "25% off",
    tags: [
      { id: "1", label: "Cotton" },
      { id: "2", label: "Twisted" },
      { id: "3", label: "Pure" },
      { id: "4", label: "Polyester" },
    ],
    imageUrl: "/images/deal4.svg",
    yarnType: ["Wool Type"],
    quality: ["Standard"],
    origin: "Imported",
    color: ["Green", "Brown"],
  },
  {
    id: "5",
    title: "Swiss 2x2 Sheer Cotton Voile",
    rating: 4.7,
    price: 1000,
    originalPrice: 1300,
    discount: "25% off",
    tags: [
      { id: "1", label: "Cotton" },
      { id: "2", label: "Twisted" },
      { id: "3", label: "Pure" },
      { id: "4", label: "Polyester" },
    ],
    imageUrl: "/images/deal1.svg",
    yarnType: ["Industry Yarn"],
    quality: ["Premium"],
    origin: "Domestic",
    color: ["Blue", "Pink"],
  },
  {
    id: "6",
    title: "Swiss 2x2 Sheer Cotton Voile",
    rating: 4.3,
    price: 1000,
    originalPrice: 1300,
    discount: "25% off",
    tags: [
      { id: "1", label: "Cotton" },
      { id: "2", label: "Twisted" },
      { id: "3", label: "Pure" },
      { id: "4", label: "Polyester" },
    ],
    imageUrl: "/images/deal2.svg",
    yarnType: ["Polyester Yarn"],
    quality: ["Standard"],
    origin: "Imported",
    color: ["White"],
  },
];

const yarnTypeOptions = [
  "Swiss Voile",
  "Wool Type",
  "Yarn Type",
  "Industry Yarn",
  "Polyester Yarn",
];

const qualityOptions = ["Premium", "Standard", "Basic"];
const originOptions = ["Domestic", "Imported"];
const colorOptions = [
  "White",
  "Blue",
  "Green",
  "Pink",
  "Brown",
  "Beige",
  "Orange",
];

//Animation Contents
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    height: "auto",
    transition: {
      delay: 0.1 * custom,
      duration: 0.8,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 * custom,
      duration: 0.7,
    },
  }),
};

const ProductsFilter: React.FC = () => {
  const [products] = useState<FabricProduct[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<FabricProduct[]>(mockProducts);
  const [filters, setFilters] = useState({
    yarnType: [] as string[],
    quality: [] as string[],
    origin: [] as string[],
    color: [] as string[],
  });
  const [sortOption, setSortOption] = useState<string>("rating-desc");

  useEffect(() => {
    let result = [...products];

    if (filters.yarnType.length > 0) {
      result = result.filter((product) =>
        product.yarnType.some((type) => filters.yarnType.includes(type))
      );
    }

    if (filters.quality.length > 0) {
      result = result.filter((product) =>
        product.quality.some((q) => filters.quality.includes(q))
      );
    }

    if (filters.origin.length > 0) {
      result = result.filter((product) =>
        filters.origin.includes(product.origin)
      );
    }

    if (filters.color.length > 0) {
      result = result.filter((product) =>
        product.color.some((c) => filters.color.includes(c))
      );
    }

    result = sortProducts(result, sortOption);

    setFilteredProducts(result);
  }, [filters, sortOption, products]);

  const handleFilterChange = (
    filterType: keyof typeof filters,
    value: string
  ) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }
      return updatedFilters;
    });
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value);
  };

  const sortProducts = (productsToSort: FabricProduct[], option: string) => {
    const sorted = [...productsToSort];

    switch (option) {
      case "rating-desc":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "rating-asc":
        return sorted.sort((a, b) => a.rating - b.rating);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      default:
        return sorted;
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Grid container spacing={3}>
          <MotionGrid item xs={12} md={3} variants={itemVariants}>
            <Box sx={{ my: { xs: 3, md: 8 } }}>
              <MotionAccordion
                custom={0}
                variants={accordionVariants}
                defaultExpanded
                sx={{
                  background: "#FFF",
                  color: (theme) => theme.palette.text.disabled,
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  "&:before": { display: "none" },
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Icon icon="mingcute:down-line" width="20" height="20" />
                  }
                >
                  <Typography variant="body2">Yarn Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {yarnTypeOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={filters.yarnType.includes(option)}
                          onChange={() => handleFilterChange("yarnType", option)}
                          color="primary"
                          icon={<Icon icon="mdi:checkbox-blank-outline" />}
                          checkedIcon={<Icon icon="mdi:checkbox-marked" />}
                        />
                      }
                      label={option}
                    />
                  ))}
                </AccordionDetails>
              </MotionAccordion>

              <MotionAccordion
                custom={1}
                variants={accordionVariants}
                sx={{
                  background: "#FFF",
                  color: (theme) => theme.palette.text.disabled,
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  "&:before": { display: "none" },
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Icon icon="mingcute:down-line" width="20" height="20" />
                  }
                >
                  <Typography variant="body2">Yarn Quality</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {qualityOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={filters.quality.includes(option)}
                          onChange={() => handleFilterChange("quality", option)}
                          color="primary"
                          icon={<Icon icon="mdi:checkbox-blank-outline" />}
                          checkedIcon={<Icon icon="mdi:checkbox-marked" />}
                        />
                      }
                      label={option}
                    />
                  ))}
                </AccordionDetails>
              </MotionAccordion>

              <MotionAccordion
                custom={2}
                variants={accordionVariants}
                sx={{
                  background: "#FFF",
                  color: (theme) => theme.palette.text.disabled,
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  "&:before": { display: "none" },
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Icon icon="mingcute:down-line" width="20" height="20" />
                  }
                >
                  <Typography variant="body2">Yarn Origin</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {originOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={filters.origin.includes(option)}
                          onChange={() => handleFilterChange("origin", option)}
                          color="primary"
                          icon={<Icon icon="mdi:checkbox-blank-outline" />}
                          checkedIcon={<Icon icon="mdi:checkbox-marked" />}
                        />
                      }
                      label={option}
                    />
                  ))}
                </AccordionDetails>
              </MotionAccordion>

              <MotionAccordion
                custom={3}
                variants={accordionVariants}
                sx={{
                  background: "#FFF",
                  color: (theme) => theme.palette.text.disabled,
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  "&:before": { display: "none" },
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Icon icon="mingcute:down-line" width="20" height="20" />
                  }
                >
                  <Typography variant="body2">Color</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {colorOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={filters.color.includes(option)}
                          onChange={() => handleFilterChange("color", option)}
                          color="primary"
                          icon={<Icon icon="mdi:checkbox-blank-outline" />}
                          checkedIcon={<Icon icon="mdi:checkbox-marked" />}
                        />
                      }
                      label={option}
                    />
                  ))}
                </AccordionDetails>
              </MotionAccordion>
            </Box>
          </MotionGrid>

          <MotionGrid item xs={12} md={9} variants={itemVariants}>
            <MotionBox
              display="flex"
              alignItems="center"
              gap={2}
              mb={3}
              variants={itemVariants}
              sx={{ justifyContent: { xs: "flex-start", md: "flex-end" } }}
            >
              <Typography
                variant="body2"
                sx={{ color: (theme) => theme.palette.text.disabled }}
              >
                Sort By
              </Typography>
              <MotionFormControl
                variant="outlined"
                size="small"
                variants={itemVariants}
                sx={{ minWidth: 180 }}
              >
                <Select
                  labelId="sort-label"
                  value={sortOption}
                  onChange={handleSortChange}
                  IconComponent={() => (
                    <Icon
                      icon="mdi:chevron-down"
                      style={{ marginRight: "7px" }}
                    />
                  )}
                  sx={{ color: (theme) => theme.palette.text.disabled }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "white",
                        color: (theme) => theme.palette.text.disabled,
                      },
                    },
                  }}
                >
                  <MenuItem value="rating-desc">High Rating</MenuItem>
                  <MenuItem value="rating-asc">Low Rating</MenuItem>
                  <MenuItem value="price-desc">Price: High to Low</MenuItem>
                  <MenuItem value="price-asc">Price: Low to High</MenuItem>
                </Select>
              </MotionFormControl>
            </MotionBox>

            <Grid container spacing={3}>
              {filteredProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    style={{ height: "100%" }} 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    layout 
                  >
                    <CustomFabricCard
                      title={product.title}
                      rating={product.rating}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      discount={product.discount}
                      tags={product.tags}
                      imageUrl={product.imageUrl}
                      unit="yarn"
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </MotionGrid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProductsFilter;