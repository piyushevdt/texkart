import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Grid, Paper, Popper, Typography, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme } from "@mui/material";
import TextileSlider from "@/components/Home/components/TextileSlider";
import HeroSlider1 from "@/components/Home/components/HeroSlider1";
import HeroSlider2 from "@/components/Home/components/HeroSlider2";
import HeroSlider3 from "@/components/Home/components/HeroSlider3";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";


export default function Hero() {
  interface Material {
    icon: string;
    name: string;
    subcategories: string[];
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hoveredMaterial, setHoveredMaterial] = useState<Material | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();


  const handleMouseEnter = (
    event: React.MouseEvent<HTMLElement>,
    material: Material
  ) => {
    if (isMobile) return; 
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setAnchorEl(event.currentTarget);
    setHoveredMaterial(material);
  };

  const handlePopperMouseEnter = () => {
    if (isMobile) return; 
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return; 
    
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setHoveredMaterial(null);
    }, 300);
  };

  const handleAccordionChange = (materialName: string) => (
    event: React.SyntheticEvent, 
    isExpanded: boolean
  ) => {
    setExpandedAccordion(isExpanded ? materialName : false);
  };

  const materials: Material[] = [
    {
      icon: "fluent-mdl2:cotton",
      name: "Yarn",
      subcategories: ["Cotton Yarn", "Silk Yarn", "Wool Yarn"],
    },
    {
      icon: "fluent-mdl2:cotton",
      name: "Cotton",
      subcategories: ["Organic Cotton", "Egyptian Cotton"],
    },
    {
      icon: "game-icons:wool",
      name: "Wool",
      subcategories: ["Merino", "Alpaca", "Cashmere"],
    },
    {
      icon: "lucide-lab:cloth",
      name: "Polyester",
      subcategories: ["Recycled Polyester", "Microfiber"],
    },
    {
      icon: "mdi:cloth",
      name: "Nylon",
      subcategories: ["Ripstop Nylon", "Ballistic Nylon"],
    },
    {
      icon: "mdi:cloth-outline",
      name: "Jute",
      subcategories: ["Raw Jute", "Processed Jute"],
    },
    {
      icon: "memory:linen",
      name: "Linen",
      subcategories: ["Flax Linen", "Blended Linen"],
    },
  ];

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              background: (theme) => theme.palette.backgroundGradient,
              borderRadius: "12px",
              color: "#FFF",
              px: { xs: 2, lg: 4 },
              pt: 4,
              pb: 1,
              height: "100%",
            }}
          >
            <Box
              className="flex flex-col"
              sx={{ p: 1, gap: { xs: 2, md: 1.5, lg: 3 } }}
            >
              {isMobile ? (
                // Mobile Accordion View
                <>
                  {materials.map((material) => (
                    <Accordion 
                      key={material.name}
                      expanded={expandedAccordion === material.name}
                      onChange={handleAccordionChange(material.name)}
                      sx={{
                        background: 'transparent',
                        boxShadow: 'none',
                        color: '#fff',
                        '&:before': {
                          display: 'none',
                        },
                        mb: 1,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<Icon icon="mdi:chevron-down" className="text-white" fontSize={24} />}
                        sx={{
                          padding: 0,
                          minHeight: '48px',
                          '&:hover': { bgcolor: "#fe9c2e" },
                          borderRadius: "8px",
                          px: 2,
                        }}
                      >
                        <Typography 
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            fontSize: "20px",
                          }}
                        >
                          <Icon icon={material.icon} className="text-white-500" />
                          {material.name}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: 0, pl: 4 }}>
                        {material.subcategories.map((subcategory, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            sx={{
                              py: 1,
                              fontSize: "16px",
                              cursor: "pointer",
                              '&:hover': {
                                fontWeight: 'bold',
                              }
                            }}
                          >
                            {subcategory}
                          </Typography>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </>
              ) : (
                // Desktop Hover View
                <>
                  {materials.map((material) => (
                    <Typography
                      key={material.name}
                      variant="body1"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 2, md: 1, lg: 2 },
                        fontSize: {
                          xs: "22px",
                          sm: "24px",
                          md: "24px",
                          lg: "24px",
                        },
                        cursor: "pointer",
                        "&:hover": { bgcolor: "#fe9c2e", color: "#fff" },
                        width: "100%",
                        px: 2,
                        borderRadius: "8px",
                      }}
                      onMouseEnter={(e) => handleMouseEnter(e, material)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Icon icon={material.icon} className="text-white-500" />{" "}
                      {material.name}
                    </Typography>
                  ))}
                </>
              )}
            </Box>
            <Button
            onClick={() => router.push("/category")}
              fullWidth
              sx={{
                background: "#fff",
                textTransform: "none",
                borderRadius: "12px",
                mt: 2,
              }}
            >
              See all categories
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  background: "#FE9C2E",
                  borderRadius: "12px",
                  px: { xs: 2, md: 4 },
                  py: 3,
                }}
              >
                <TextileSlider />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  background: "#FA7331",
                  borderRadius: "12px",
                }}
              >
                <HeroSlider1 />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  background: "#F95B33",
                  borderRadius: "12px",
                }}
              >
                <HeroSlider2 />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  background: "#F63038",
                  borderRadius: "12px",
                }}
              >
                <HeroSlider3 />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Popper for Submenu (Desktop only) */}
      {!isMobile && (
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="right-start"
          modifiers={[
            {
              name: "preventOverflow",
              options: {
                boundary: "window",
              },
            },
          ]}
          sx={{
            zIndex: 9999,
          }}
        >
          {hoveredMaterial && (
            <Paper
              onMouseEnter={handlePopperMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                borderRadius: "12px",
                background: "#fff",
                color: "#000",
                boxShadow: 3,
                minWidth: 250,
                zIndex: 100,
                overflow: "hidden",
              }}
            >
              {hoveredMaterial?.subcategories?.map((material, index) => (
                <Box key={index}>
                  <Typography
                    variant="body2"
                    sx={{
                      maxWidth: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 2, md: 1, lg: 2 },
                      fontSize: "20px",
                      cursor: "pointer",
                      "&:hover": {
                        background: (theme) => theme.palette.backgroundGradient,
                        color: "#fff",
                      },
                      width: "100%",
                      px: 2,
                      py: 1,
                    }}
                  >
                    {material}
                  </Typography>
                </Box>
              ))}
            </Paper>
          )}
        </Popper>
      )}
    </Box>
  );
}