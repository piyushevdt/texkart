"use client";
import React, { useState, useEffect } from "react";
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
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";
import { useRouter, usePathname } from "next/navigation";

interface UserData {
  token: string;
  email: string;
  name?: string;
}

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Check if current path is allowed for the token
  const isAllowedRoute = pathname === "/" || pathname === "/personal-info";

  useEffect(() => {
    // Check if token exists in localStorage on component mount
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData && isAllowedRoute) {
      setUserData(JSON.parse(storedUserData));
    } else {
      setUserData(null);
    }
  }, [isAllowedRoute, pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    handleDrawerToggle();
  };

  const handleSeller = () => {
    router.push("/seller");
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDashboard = () => {
    handleMenuClose();
    router.push("/personal-info");
  };

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('userData');
    setUserData(null);
    handleMenuClose();
    // Redirect to home
    router.push("/");
  };

  return (
    <Box>
      <Box
        className="bg-[#0F2E61] text-white py-2"
      >
        <Container sx={{display: {xs: "none", md: "flex"}, justifyContent: "space-between", px: { xs: 1, sm: 3}, flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, gap: { xs: 1, sm: 0} }}>
          <Box sx={{display:"flex", flexDirection: { xs: "row", sm: "row" }, gap: { xs: 1, sm: 2 }, py:1,}}>
            <Box className="flex items-center">
              <Icon icon="mdi:phone" className="mr-1" />
              <Link href="tel:+919699360370" className="text-sm">
                +91 9699360370
              </Link>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "white", height: "16px", mx: {xs: 0, sm: 1}, mt: {xs: 0.5, sm: 0.5} }}
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
              onClick={handleSeller}
              sx={{fontSize: { xs: "10px", sm: "14px" }, whiteSpace: "nowrap"}}
            >
              Become a Seller
            </Button>
          </Box>
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
              
              {/* Show login button or user avatar with menu based on authentication status */}
              {userData && isAllowedRoute ? (
                <Box display="flex" alignItems="center" gap={1}>
                  <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                    <Avatar 
                      alt={userData.email} 
                      src="/static/images/avatar/2.jpg"
                      sx={{ width: 40, height: 40 }}
                    />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      elevation: 3,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleDashboard}>
                      <ListItemIcon>
                        <Icon icon="mdi:view-dashboard" width={24} height={24} style={{ color: "#636363" }} />
                      </ListItemIcon>
                      <Typography variant="body2">Dashboard</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Icon icon="mdi:logout" width={24} height={24} style={{ color: "#636363" }} />
                      </ListItemIcon>
                      <Typography variant="body2">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <CustomButton gradient onClick={() => router.push("/login")}>
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
            
            {/* Mobile login/logout section */}
            {userData && isAllowedRoute ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Icon icon="mdi:account" style={{ marginRight: "10px" }} />
                    <ListItemText primary={`Welcome, ${userData.email}`} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleDashboard}>
                    <Icon icon="mdi:view-dashboard" style={{ marginRight: "10px" }} />
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <Icon icon="mdi:logout" style={{ marginRight: "10px" }} />
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </>
            ) : (
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
            <Box mt={2}>
               <Button
              variant="text"
              color="inherit"
              startIcon={<Icon icon="mdi:account" />}
              className="text-white"
              size="small"
              onClick={handleSeller}
              sx={{fontSize: { xs: "10px", sm: "14px" }, whiteSpace: "nowrap"}}
            >
              Become a Seller
            </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;