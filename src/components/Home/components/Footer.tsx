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

const Footer: React.FC = () => {
  return (
    <Box
      className="w-full text-white"
      sx={{
        background: (theme) => theme.palette.backgroundGradient,
        mt: 4,
        py: 4,
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start" },
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
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ fontSize: {xs: "16px", lg: "18px"}, mt: 1 }}
              >
                Subscribe to our newsletter
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Box>
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
                  <Icon icon="mdi:bell-outline" className="text-orange-500" />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{display:"flex",flexDirection: 'column', justifyContent: "flex-end"}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2, alignItems: {xs: "flex-start", md: "flex-end"}, mt: 1}}>
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
            </Box>
            <Box sx={{ display: "flex", gap: 2,justifyContent: {xs: "flex-start", md: "flex-end"}, mt: 2, flexDirection: {xs: "column", sm: "row"} }}>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Policies
              </Typography>
              <Link href="/faq" passHref>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  FAQs
                </Typography>
              </Link>
              <Link href="/privacy-policy" passHref>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Terms & Conditions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ borderTop: "2px solid #FFFFFF1A", mt: 1 }}>
        <Container>
          <Typography
            variant="body2"
            mt={2}
            sx={{ textAlign: { xs: "left", sm: "right" } }}
          >
            © 2025 TexKart Private Limited
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
