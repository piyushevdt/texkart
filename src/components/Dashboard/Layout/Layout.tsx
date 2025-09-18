"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  InputBase,
  Badge,
  useTheme,
  useMediaQuery,
  Paper,
  Container,
  Popover,
  MenuList,
  MenuItem,
  Collapse,
} from "@mui/material";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

const drawerWidth = 300;

interface SubMenuItem {
  text: string;
  path: string;
}

interface MenuItem {
  text: string;
  icon: string;
  path: string;
  subMenuItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { text: "Home", icon: "mdi:home", path: "/seller-dashboard" },
  { text: "My Profile", icon: "mdi:user", path: "/seller-dashboard/user" },
  {
    text: "My Products",
    icon: "mdi:package-variant",
    path: "/seller-dashboard/products",
  },
  {
    text: "Transactions",
    icon: "mdi:receipt",
    path: "/seller-dashboard/transactions",
  },
  {
    text: "Orders & Inquiries",
    icon: "mdi:file-document",
    path: "/seller-dashboard/orders-inquiries",
    subMenuItems: [
      { text: "Orders", path: "/seller-dashboard/orders-inquiries/orders" },
      { text: "Inquiries", path: "/seller-dashboard/orders-inquiries/inquiries" },
    ],
  },
  {
    text: "Order Requests",
    icon: "mdi:file-document",
    path: "/seller-dashboard/order-requests",
  },
  {
    text: "Notification",
    icon: "mdi:bell",
    path: "/seller-dashboard/notification",
  },
  {
    text: "Pricing & Offers",
    icon: "mdi:tag",
    path: "/seller-dashboard/pricing",
  },
  {
    text: "Inquiries",
    icon: "mdi:message-question",
    path: "/seller-dashboard/inquiries",
  },
  {
    text: "Analytics & Reports",
    icon: "mdi:chart-bar",
    path: "/seller-dashboard/analytics",
  },
  {
    text: "Account & Settings",
    icon: "mdi:cog",
    path: "/seller-dashboard/settings",
  },
  {
    text: "Help & Support",
    icon: "mdi:help-circle",
    path: "/seller-dashboard/support",
  },
  { text: "FAQ's", icon: "mdi:help-box", path: "/seller-dashboard/faqs" },
  {
    text: "Terms & Policies",
    icon: "mdi:file-document",
    path: "/seller-dashboard/terms",
  },
  {
    text: "Reviews & Ratings",
    icon: "mdi:star",
    path: "/seller-dashboard/reviews",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});

  const [notificationAnchor, setNotificationAnchor] =
    useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const [sellerName, setSellerName] = useState("");

  useEffect(() => {
    // Check for seller data instead of user data
    const sellerData = localStorage.getItem("sellerData");
    if (sellerData) {
      const parsedSellerData = JSON.parse(sellerData);
      setSellerName(parsedSellerData.name || "Seller");
    } else {
      // Redirect to seller login if no seller data found
      router.push("/seller");
    }
  }, [router]);

  useEffect(() => {
    const initialExpandedState: { [key: string]: boolean } = {};
    menuItems.forEach(item => {
      if (item.subMenuItems && item.subMenuItems.some(subItem => pathname === subItem.path)) {
        initialExpandedState[item.path] = true;
      }
    });
    setExpandedMenus(initialExpandedState);
  }, [pathname]);

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setNotificationAnchor(null);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setProfileAnchor(null);
  };

  const notificationOpen = Boolean(notificationAnchor);
  const profileOpen = Boolean(profileAnchor);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }) +
          " " +
          new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.subMenuItems && item.subMenuItems.length > 0) {
      setExpandedMenus(prev => ({
        ...prev,
        [item.path]: !prev[item.path]
      }));
    } else {
      router.push(item.path);
      if (isMobile) setMobileOpen(false);
    }
  };

  const isMenuActive = (item: MenuItem) => {
    if (item.path === "/seller-dashboard") {
      return pathname === item.path;
    }
    
    if (pathname.startsWith(item.path)) {
      return true;
    }
    
    if (item.subMenuItems) {
      return item.subMenuItems.some(subItem => pathname === subItem.path);
    }
    
    return false;
  };

  const isSubMenuActive = (path: string) => {
    return pathname === path;
  };

  const handleSellerLogout = () => {
    localStorage.removeItem("sellerData"); 
    router.push("/seller"); 
    toast.success("Logged out successfully");
  };

  const drawer = (
    <Box
      sx={{
        bgcolor: "#FF5733",
        color: "white",
        display: "flex",
        flexDirection: "column",
        px: 2,
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #FFFFFF",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          onClick={() => router.push("/seller")}
          sx={{ fontWeight: "bold", cursor: "pointer" }}
        >
          TexKart Seller
        </Typography>
      </Box>
      <List sx={{ flexGrow: 1, overflow: 'auto', scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" }, }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.path}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item)}
                sx={{
                  color: isMenuActive(item) ? "white" : "#D9D9D9",
                  "&.Mui-selected": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                  },
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "white",
                  },
                }}
                selected={isMenuActive(item)}
              >
                <ListItemIcon
                  sx={{
                    color: isMenuActive(item) ? "white" : "#D9D9D9",
                    minWidth: 40,
                  }}
                >
                  <Icon icon={item.icon} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {item.subMenuItems && item.subMenuItems.length > 0 && (
                  <Icon 
                    icon={expandedMenus[item.path] ? "mdi:chevron-down" : "mdi:chevron-right"} 
                    width={20} 
                    height={20} 
                  />
                )}
              </ListItemButton>
            </ListItem>
            
            {/* Submenu items */}
            {item.subMenuItems && (
              <Collapse in={expandedMenus[item.path]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenuItems.map((subItem) => (
                    <ListItemButton
                      key={subItem.path}
                      component={Link}
                      href={subItem.path}
                      onClick={() => isMobile && setMobileOpen(false)}
                      sx={{
                        pl: 7,
                        color: isSubMenuActive(subItem.path) ? "white" : "#D9D9D9",
                        "&.Mui-selected": {
                          bgcolor: "rgba(255,255,255,0.15)",
                          color: "white",
                        },
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.1)",
                          color: "white",
                        },
                      }}
                      selected={isSubMenuActive(subItem.path)}
                    >
                      <ListItemText 
                        primary={subItem.text} 
                        primaryTypographyProps={{ 
                          fontSize: '0.9rem',
                          fontWeight: isSubMenuActive(subItem.path) ? 'medium' : 'normal' 
                        }} 
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <ListItemButton
          sx={{
            color: "#D9D9D9",
            borderRadius: 1,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.1)",
              color: "white",
            },
          }}
          onClick={handleSellerLogout}
        >
          <ListItemIcon sx={{ color: "#D9D9D9", minWidth: 40 }}>
            <Icon icon="mdi:logout" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: "#EFF3FD",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Icon icon="mdi:menu" width={24} height={24} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
              <Typography variant="h6" noWrap component="div">
                Hello {sellerName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentTime}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 3, md: 1, sm: 1 },
              }}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: 130, sm: 280, md: 250, lg: 400 },
                  mr: 2,
                  borderRadius: "8px",
                  background: "#FFF",
                  boxShadow: "none",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <Icon icon="mdi:magnify" width={24} height={24} />
                </IconButton>
              </Paper>
              <IconButton onClick={handleNotificationClick}>
                <Badge badgeContent={4} color="error">
                  <Icon icon="mdi:bell" width={24} height={24} />
                </Badge>
              </IconButton>
              <Popover
                open={notificationOpen}
                anchorEl={notificationAnchor}
                onClose={handleCloseNotification}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <MenuList sx={{ minWidth: 150, bgcolor: "#FFF" }}>
                  {notifications.map((data, index) => (
                    <MenuItem onClick={handleCloseNotification} key={index}>
                      {" "}
                      {data?.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Popover>
              <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ mr: 1, display: { xs: "none", md: "block" } }}
                >
                  {sellerName}
                </Typography>
                <Avatar
                  alt={sellerName}
                  src="/images/seller.png"
                  onClick={handleProfileClick}
                  sx={{ cursor: "pointer" }}
                />

                <Popover
                  open={profileOpen}
                  anchorEl={profileAnchor}
                  onClose={handleCloseProfile}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <MenuList sx={{ minWidth: 150, bgcolor: "#FFF" }}>
                    <MenuItem onClick={() => router.push("/seller-dashboard")}>
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                  </MenuList>
                </Popover>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowY: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, lg: 3 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "#FFF",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

const notifications = [
  {
    id: 1,
    name: "Notification 1",
  },
  {
    id: 2,
    name: "Notification 2",
  },
  {
    id: 3,
    name: "Notification 3",
  },
  {
    id: 4,
    name: "Notification 4",
  },
];