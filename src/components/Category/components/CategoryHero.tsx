import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface TextileItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  subcategories?: SubcategoryItem[];
}

interface SubcategoryItem {
  id: number;
  title: string;
  imageUrl: string;
}

const textileData: TextileItem[] = [
  {
    id: 1,
    title: 'YARN',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/deal4.png',
    subcategories: [
      {
        id: 101,
        title: 'Cotton Yarn',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 102,
        title: 'Wool Yarn',
        imageUrl: '/images/deal2.png',
      },
      {
        id: 103,
        title: 'Synthetic Yarn',
        imageUrl: '/images/deal3.png',
      },
      {
        id: 104,
        title: 'Synthetic Yarn',
        imageUrl: '/images/deal4.png',
      }
    ]
  },
  {
    id: 2,
    title: 'COTTON',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Cotton.png',
    subcategories: [
      {
        id: 201,
        title: 'Organic Cotton',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 202,
        title: 'Egyptian Cotton',
        imageUrl: '/images/deal2.png',
      },
      {
        id: 203,
        title: 'Organic Cotton',
        imageUrl: '/images/deal3.png',
      },
      {
        id: 204,
        title: 'Egyptian Cotton',
        imageUrl: '/images/deal4.png',
      },
    ]
  },
  {
    id: 3,
    title: 'WOOL',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Wool.png',
    subcategories: [
      {
        id: 301,
        title: 'Merino Wool',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 302,
        title: 'Cashmere',
        imageUrl: '/images/deal2.png',
      },
      {
        id: 303,
        title: 'Merino Wool',
        imageUrl: '/images/deal3.png',
      },
      {
        id: 304,
        title: 'Cashmere',
        imageUrl: '/images/deal4.png',
      },
    ]
  },
  {
    id: 4,
    title: 'POLYESTER',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Polyester.png',
    subcategories: [
      {
        id: 401,
        title: 'Regular Polyester',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 402,
        title: 'Recycled Polyester',
        imageUrl: '/images/deal2.png',
      }
    ]
  },
  {
    id: 5,
    title: 'NYLON',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Nylon.png',
    subcategories: [
      {
        id: 501,
        title: 'Nylon 6',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 502,
        title: 'Nylon 66',
        imageUrl: '/images/deal2.png',
      }
    ]
  },
  {
    id: 6,
    title: 'JUTE',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Jute.png',
    subcategories: [
      {
        id: 601,
        title: 'Raw Jute',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 602,
        title: 'Jute Blends',
        imageUrl: '/images/deal2.png',
      }
    ]
  },
  {
    id: 7,
    title: 'LINEN',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Linen.png',
    subcategories: [
      {
        id: 701,
        title: 'Pure Linen',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 702,
        title: 'Linen Blends',
        imageUrl: '/images/deal2.png',
      }
    ]
  },
  {
    id: 8,
    title: 'COTTON',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Cotton.png',
    subcategories: [
      {
        id: 801,
        title: 'Cotton Blends',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 802,
        title: 'Cotton Fabrics',
        imageUrl: '/images/deal2.png',
      }
    ]
  },
  {
    id: 9,
    title: 'WOOL',
    description: 'explore premium-quality cotton yarns for every textile need.',
    imageUrl: '/images/Wool.png',
    subcategories: [
      {
        id: 901,
        title: 'Alpaca Wool',
        imageUrl: '/images/deal1.png',
      },
      {
        id: 902,
        title: 'Lambswool',
        imageUrl: '/images/deal2.png',
      }
    ]
  },
];

const CategoryHero: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleExpand = (id: number) => {
    if (expandedCategory === id) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(id);
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50, 
      opacity: 0, 
    },
    onscreen: {
      y: 0, 
      opacity: 1, 
      transition: {
        type: "spring", 
        bounce: 0.4,
        duration: 0.8, 
      },
    },
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      overflow: 'hidden'
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const getRowIndex = (index: number) => Math.floor(index / 3);
  
  const getRowIndexById = (id: number) => {
    const index = textileData.findIndex(item => item.id === id);
    return getRowIndex(index);
  };

  return (
    <Box py={3}>
      <Grid container spacing={2}>
        {textileData.map((item, index) => {
          const currentRowIndex = getRowIndex(index);
          const isLastInRow = (index + 1) % 3 === 0 || index === textileData.length - 1;
          const showSubcategories = expandedCategory === item.id;
          
          return (
            <React.Fragment key={item.id}>
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}
                className="relative"
              >
                <motion.div
                  initial="offscreen" 
                  whileInView="onscreen" 
                  viewport={{ once: true, amount: 0.5 }} 
                  variants={cardVariants} 
                >
                  <Card 
                    className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl"
                    sx={{
                      borderRadius: "12px", 
                      border: "none",
                      boxShadow: "none",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                      },
                      background: "none",
                      cursor: "pointer"
                    }}
                    onClick={() => toggleExpand(item.id)}
                  >
                    <Box className="overflow-hidden" sx={{ position: "relative", height: "100%" }}>
                      <CardMedia
                        component="img"
                        className="w-full object-cover"
                        image={item.imageUrl}
                        alt={item.title}
                        sx={{
                          transition: "transform 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.2)"
                          },
                          height: 200,
                        }}
                      />
                      <CardContent className="absolute bottom-0 left-3 right-0 bg-opacity-40 text-white">
                        <Typography 
                          variant="h5" 
                          component="div" 
                          className="mb-1"
                          sx={{color: (theme) => theme.palette.primary.light, textShadow: '1px 1px 4px rgba(255, 130, 4, 0.7)'}}
                        >
                          {item.title}
                        </Typography>
                        {item.description && (
                          <Typography 
                            variant="body2" 
                            className="text-200"
                            sx={{color: (theme) => theme.palette.primary.main,}}
                          >
                            {item.description}
                          </Typography>
                        )}
                      </CardContent>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
              
              {/* For mobile: Show subcategories directly after parent category */}
              {isMobile && showSubcategories && (
                <Grid item xs={12}>
                  <AnimatePresence>
                    <motion.div
                      key={`mobile-${item.id}`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                    >
                      <Box>
                        <Grid container spacing={2}>
                          {item.subcategories?.map((subcat) => (
                            <Grid item key={subcat.id} xs={6}>
                              <motion.div variants={itemVariants}>
                                <Card 
                                  className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl"
                                  sx={{
                                    borderRadius: "12px", 
                                    border: "none",
                                    boxShadow: "none",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                                    },
                                    background: "none"
                                  }}
                                >
                                  <Box className="overflow-hidden" sx={{ position: "relative", height: "100%" }}>
                                    <CardMedia
                                      component="img"
                                      className="w-full object-cover"
                                      image={subcat.imageUrl}
                                      alt={subcat.title}
                                      sx={{
                                        transition: "transform 0.5s ease",
                                        "&:hover": {
                                          transform: "scale(1.2)"
                                        },
                                      }}
                                    />
                                    <CardContent className="absolute bottom-0 left-3 right-0 bg-opacity-40 text-white">
                                      <Typography 
                                        variant="h6" 
                                        component="div" 
                                        className="mb-1"
                                        textAlign="center">
                                        {subcat.title}
                                      </Typography>
                                    </CardContent>
                                  </Box>
                                </Card>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </motion.div>
                  </AnimatePresence>
                </Grid>
              )}
              
              {/* For desktop: Show subcategories at the end of each row */}
              {!isMobile && isLastInRow && expandedCategory !== null && getRowIndexById(expandedCategory) === currentRowIndex && (
                <Grid item xs={12}>
                  <AnimatePresence>
                    <motion.div
                      key={`desktop-${expandedCategory}`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                    >
                      <Box>
                        {textileData.find(item => item.id === expandedCategory)?.subcategories && (
                          <Grid container spacing={2}>
                            {textileData.find(item => item.id === expandedCategory)?.subcategories?.map((subcat) => (
                              <Grid item key={subcat.id} xs={12} sm={6} md={3}>
                                <motion.div variants={itemVariants}>
                                  <Card 
                                    className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl"
                                    sx={{
                                      borderRadius: "12px", 
                                      border: "none",
                                      boxShadow: "none",
                                      transition: "all 0.3s ease-in-out",
                                      "&:hover": {
                                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                                      },
                                      background: "none",
                                      cursor: "pointer"
                                    }}
                                  >
                                    <Box className="overflow-hidden" sx={{ position: "relative", height: "100%" }}>
                                      <CardMedia
                                        component="img"
                                        className="w-full object-cover"
                                        image={subcat.imageUrl}
                                        alt={subcat.title}
                                        sx={{
                                          transition: "transform 0.5s ease",
                                          "&:hover": {
                                            transform: "scale(1.2)"
                                          },
                                        }}
                                      />
                                      <CardContent className="absolute bottom-0 left-3 right-0 bg-opacity-40 text-white">
                                        <Typography 
                                          variant="h5" 
                                          component="div" 
                                          className="mb-1"
                                          textAlign="center">
                                          {subcat.title}
                                        </Typography>
                                      </CardContent>
                                    </Box>
                                  </Card>
                                </motion.div>
                              </Grid>
                            ))}
                          </Grid>
                        )}
                      </Box>
                    </motion.div>
                  </AnimatePresence>
                </Grid>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategoryHero;