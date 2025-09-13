"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  InputBase,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();

  const showUpperContainerPaths = [
    "/",
    "/product-details",
    "/cart",
    "/product-category",
  ];

  const showUpperContainer = showUpperContainerPaths.includes(pathname);

  return (
    <Box
      className="w-full text-white"
      sx={{
        background: (theme) => theme.palette.backgroundGradient,
        mt: 4,
        py: 4,
      }}
    >
      {/* Upper Container - Conditionally Rendered */}
      {showUpperContainer && (
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body2" className="font-medium">
                  Daily Deals
                </Typography>
                <Link href="/about-us" passHref>
                  <Typography
                    variant="body2"
                    className="font-medium"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    About us
                  </Typography>
                </Link>
                <Link href="/contact-us" passHref>
                  <Typography
                    variant="body2"
                    className="font-medium"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    Contact us
                  </Typography>
                </Link>
                <Typography variant="body2" className="font-medium">
                  Become Seller
                </Typography>
                <Typography variant="body2" className="font-medium">
                  Blog
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body2" className="font-medium">
                  Help
                </Typography>
                <Link href="/faq" passHref>
                  <Typography
                    variant="body2"
                    className="font-medium"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    FAQs
                  </Typography>
                </Link>
                <Link href="/privacy-policy" passHref>
                  <Typography
                    variant="body2"
                    className="font-medium"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Link>
                <Typography variant="body2" className="font-medium">
                  Terms & Conditions
                </Typography>
              </Box>
            </Grid>

            {/* Newsletter Subscription Box - Conditionally Rendered */}
            {pathname === "/" && (
              <Grid item xs={12} sm={4} md={4}>
                <Box className="flex flex-col space-y-2">
                  <Typography
                    variant="body2"
                    className="flex-1 font-medium"
                    mb={2}
                    textAlign="center"
                  >
                    Subscribe to our newsletter
                  </Typography>
                  <Box className="flex-grow mx-4 max-w-xl rounded-[8px] border border-gray-300 overflow-hidden flex items-center bg-gray-50">
                    <InputBase
                      placeholder="E-Mail"
                      className="ml-4 flex-grow text-sm"
                      inputProps={{ "aria-label": "search" }}
                      sx={{ "& input": { px: 1 } }}
                    />
                    <IconButton
                      type="button"
                      aria-label="search"
                      className="rounded-none h-full px-4"
                      sx={{
                        background:
                          "linear-gradient(180deg, rgba(253, 152, 57, 0.3) 0%, rgba(237, 130, 130, 0.3) 100%)",
                        borderRadius: "8px",
                      }}
                    >
                      <Icon
                        icon="mdi:bell-outline"
                        className="text-orange-500"
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            )}

            <Grid item xs={12} sm={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                }}
              >
                <Typography variant="h3" className="text-white font-bold">
                  TexKart
                </Typography>
                <Box className="flex space-x-2 mt-2">
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:facebook" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:linkedin" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:instagram" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:youtube" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:telegram" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:whatsapp" width={24} height={24} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}

      {/* Lower Container - Shown for all other paths */}
      {!showUpperContainer && (
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} md={3.5}>
              <Box className="flex flex-col">
                <Typography variant="h3" className="text-white font-bold">
                  TexKart
                </Typography>
                <Box className="flex space-x-2 mt-2">
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:facebook" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:linkedin" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:instagram" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:youtube" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:telegram" width={24} height={24} />
                  </IconButton>
                  <IconButton
                    sx={{
                      minWidth: "auto",
                      color: "white",
                      padding: "8px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <Icon icon="mdi:whatsapp" width={24} height={24} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Link href="/about-us" passHref>
                <Typography
                  variant="body2"
                  className="font-medium"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link href="/cart" passHref>
                <Typography
                  variant="body2"
                  className="font-medium"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Cart
                </Typography>
              </Link>
              <Typography>Seller</Typography>
              <Link href="/contact-us" passHref>
                <Typography
                  variant="body2"
                  className="font-medium"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {xs: "flex-start", md: "flex-end"},
                gap: 1,
                mt: {xs: 2, md: 0}
              }}
            >
               <Link href="callto:+91 9699360370" passHref>
              <Typography
                variant="body2"
                display="flex"
                gap={1}
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Icon icon="material-symbols:call" width={20} height={20} /> +91
                9699360370
              </Typography>
              </Link>
              <Link href="mailto: support@texkart.com" passHref>
              <Typography
                variant="body2"
                display="flex"
                gap={1}
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Icon icon="uiw:mail" width={20} height={20} />
                support@texkart.com
              </Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      )}

      <Box sx={{ borderTop: "2px solid #FFFFFF1A",mt: 1 }}>
        <Container>
          <Typography variant="body2"  mt={2} sx={{textAlign: {xs: "left", sm: "right"}}}>
            © 2025 TexKart Private Limited
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
