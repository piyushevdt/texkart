"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";
import { useRouter, usePathname } from "next/navigation";
import NavbarDash from "@/components/Dashboard/Layout/NavbarDash";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sellerDropdownOpen, setSellerDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    handleDrawerToggle();
  };

  const toggleSellerDropdown = () => {
    setSellerDropdownOpen(!sellerDropdownOpen);
  };

  return (
    <Box>
      <Box
        className="bg-[#0F2E61] text-white py-2"
        // sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Container sx={{display: "flex", justifyContent: "space-between", px: { xs: 1, sm: 3}, flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, gap: { xs: 1, sm: 0} }}>
          <Box sx={{display:"flex", flexDirection: { xs: "row", sm: "row" }, gap: { xs: 1, sm: 2 }, pt:1}}>
            <Box className="flex items-center">
              <Icon icon="mdi:phone" className="mr-1" />
              <Link href="tel:+919699360370" className="text-sm">
                +91 9699360370
              </Link>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "white", height: "16px", mx: {xs: 0, sm: 1}, mt: {xs: 0.5, sm: 1} }}
            />
            <Box className="flex items-center">
              <Icon icon="mdi:email" style={{ marginRight: "10px" }} />
              <Link href="mailto:support@texkart.com" className="text-sm">
                support@texkart.com
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, width: { xs: "100%", sm: "auto" }  }}>
            <Button
              variant="text"
              color="inherit"
              startIcon={<Icon icon="mdi:account" />}
              className="text-white"
              size="small"
              onClick={toggleSellerDropdown}
              endIcon={
                <Icon
                  icon={
                    sellerDropdownOpen
                      ? "mdi:chevron-up"
                      : "mdi:chevron-down"
                  }
                />
              }
              sx={{fontSize: { xs: "10px", sm: "14px" }, whiteSpace: "nowrap"}}
            >
              Become a Seller
            </Button>
            
            {/* Seller Dropdown */}
          </Box>
        </Container>
           <Container>
             <Collapse 
              in={sellerDropdownOpen} 
              sx={{ 
                // position: "absolute", 
                top: "100%", 
                right: 0, 
                zIndex: 999,
                // width: "300px",
                // backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "4px",
                mt: 1
              }}
            >
              <NavbarDash />
            </Collapse>
           </Container>
      </Box>

      <Container>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "white", padding: 0, margin: 0 }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              padding: "0 !important",
              margin: "0 !important",
              backgroundColor: "white",
            }}
          >
            <Link href="/" className="flex items-center">
              <Box className="mr-2 relative">
                <div className="text-3xl font-bold">
                  <span className="text-orange-500">Tex</span>
                  <span className="text-red-500">Kart</span>
                </div>
              </Box>
            </Link>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="ml-auto"
                sx={{ color: (theme) => theme.palette.primary.light }}
              >
                <Icon icon="mdi:menu" style={{}} />
              </IconButton>
            )}

            <Box
              className="flex-grow mx-4 max-w-xl rounded-[8px] border border-gray-300 overflow-hidden flex items-center bg-gray-50"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <InputBase
                placeholder="Search for Yarn Fabrics and Niwar etc..."
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
                <Icon icon="mdi:magnify" className="text-orange-500" />
              </IconButton>
            </Box>

            <Box
              className="flex items-center  gap-4"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                variant="text"
                color="inherit"
                className="text-gray-700 font-normal"
                startIcon={
                  <Box className="text-gray-600">
                    <Icon icon="mdi:heart-outline" />
                  </Box>
                }
                sx={{color: "#636363",  textTransform: "none"}}
              >
                Wishlist
              </Button>

              <Button
                variant="text"
                color="inherit"
                className="text-gray-700 font-normal"
                startIcon={
                  <Box className="text-gray-600">
                    <Icon icon="mdi:cart-outline" />
                  </Box>
                }
                sx={{color: "#636363", textTransform: "none"}}
                 onClick={() => router.push("/cart")}
              >
                Cart
              </Button>

              <CustomButton
                startIcon={<Icon icon="fluent:location-ripple-20-regular" />}
                gradient
              >
                {" "}
                Track Order
              </CustomButton>
              {pathname !== "/personal-info" && (
                <CustomButton gradient onClick={() => router.push("/login")}>
                  {" "}
                  Login/Signup
                </CustomButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            p: 2,
            background: (theme) => theme.palette.background.default,
          },
        }}
      >
        <Box className="p-2">
          <Box className="p-4 mb-2">
            <Link href="/" passHref>
              <Typography
                sx={{
                  color: (theme) => theme.palette.backgroundGradient,
                  fontSize: "34px",
                  cursor: "pointer",
                }}
                onClick={handleDrawerToggle}
              >
                TexKart
              </Typography>
            </Link>
          </Box>

          <Box className=" mb-4">
            <Box className="flex rounded-md border border-gray-300 overflow-hidden">
              <InputBase
                placeholder="Search..."
                className=" flex-grow text-sm"
                inputProps={{ "aria-label": "search" }}
                sx={{ px: 1 }}
              />
              <IconButton type="button" aria-label="search">
                <Icon icon="mdi:magnify" />
              </IconButton>
            </Box>
          </Box>

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <Icon
                  icon="mdi:heart-outline"
                  style={{ marginRight: "10px" }}
                />
                <ListItemText primary="Wishlist" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <Icon icon="mdi:cart-outline" style={{ marginRight: "10px" }} />
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <Icon
                  icon="mdi:package-variant-closed"
                  style={{ marginRight: "10px" }}
                />
                <ListItemText primary="Track Order" />
              </ListItemButton>
            </ListItem>
            {pathname !== "/personal-info" && (
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation("/login")}>
                <Icon icon="mdi:login" style={{ marginRight: "10px" }} />
                <ListItemText
                  primary="Login/Signup"
                  className="text-orange-500"
                />
              </ListItemButton>
            </ListItem>
            )}
            <ListItem disablePadding>
              <ListItemButton onClick={toggleSellerDropdown}>
                <Icon icon="mdi:account" style={{ marginRight: "10px" }} />
                <ListItemText primary="Become a Seller" />
                <Icon
                  icon={
                    sellerDropdownOpen
                      ? "mdi:chevron-up"
                      : "mdi:chevron-down"
                  }
                />
              </ListItemButton>
              <Collapse in={sellerDropdownOpen} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2 }}>
                  <NavbarDash />
                </Box>
              </Collapse>
            </ListItem>
          </List>

          <Box className="mt-4 border-t">
            <Box className="flex items-center " mt={2}>
              <Icon
                icon="mdi:phone"
                className="mr-2 text-gray-600"
                style={{ marginRight: "10px" }}
              />
              <Link
                href="tel:+919699360370"
                className="text-sm"
                onClick={handleDrawerToggle}
              >
                +91 9699360370
              </Link>
            </Box>
            <Box className="flex items-center " mt={2}>
              <Icon
                icon="mdi:email"
                className="mr-2 text-gray-600"
                style={{ marginRight: "10px" }}
              />
              <Link
                href="mailto:support@texkart.com"
                className="text-sm"
                onClick={handleDrawerToggle}
              >
                support@texkart.com
              </Link>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;