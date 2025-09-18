"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
  IconButton,
  Container,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import BusinessInfo from "@/components/PersonalInfo/BusinessInfo";
import Order from "@/components/PersonalInfo/Order";
import Complaints from "@/components/PersonalInfo/Complaints";
import FAQ from "@/components/PersonalInfo/FAQs";
import Notification from "@/components/PersonalInfo/Notification";
import TermsPolicies from "@/components/PersonalInfo/TermsPolicies";
import ReviewsRatings from "@/components/PersonalInfo/ReviewsRatings";
import Logout from "@/components/PersonalInfo/Logout";
import { Icon } from "@iconify/react/dist/iconify.js";

interface UserData {
  token: string;
  email: string;
  name?: string;
}

const menuItems = [
  {
    text: "Business information",
    icon: "tdesign:personal-information",
    component: BusinessInfo,
  },
  { text: "Orders", icon: "solar:box-linear", component: Order },
  { text: "Complaints", icon: "la:coins", component: Complaints },
  { text: "FAQs", icon: "carbon:user-data", component: FAQ },
  { text: "Notification", icon: "uiw:copy", component: Notification },
  {
    text: "Terms & Policies",
    icon: "mdi:bell-outline",
    component: TermsPolicies,
  },
  {
    text: "Reviews & Ratings",
    icon: "carbon:review",
    component: ReviewsRatings,
  },
  { text: "Log Out", icon: "ri:logout-circle-r-line", component: Logout },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeComponent, setActiveComponent] = useState(menuItems[0].text);
  const [selectedItem, setSelectedItem] = useState("Business information");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const storedUserData = localStorage.getItem('userData');
      if (!storedUserData) {
        router.push("/");
        return;
      }

      try {
        const parsedData: UserData = JSON.parse(storedUserData);
        if (!parsedData.token) {
          router.push("/");
          return;
        }
        
        setUserData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/");
      }
    };

    checkAuth();
  }, [router]);

  const handleNavClick = (text?: string) => {
    setActiveComponent(text || "");
    setSelectedItem(text || "");
    setDrawerOpen(false); 
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const ActiveComponent =
    menuItems.find((item) => item.text === activeComponent)?.component ||
    (() => <>{children}</>);

  if (loading) {
    return (
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(241, 109, 53, 0.92)'
        }}
        open={loading}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <CircularProgress
            color="inherit"
            size={60}
            thickness={4}
          />
          <Typography variant="h6" color="inherit">
            Loading...
          </Typography>
        </Box>
      </Backdrop>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <Container>
      <div style={{ display: "flex", width: "100%" }}>
        {/* Hamburger Icon for Mobile */}
        <IconButton
          sx={{
            cursor: "pointer",
            position: "absolute",
            display: { md: "none" },
          }}
          onClick={() => toggleDrawer(true)}
        >
          <Icon icon="ep:menu" width="30" height="30" color="#FC8F2E" />
        </IconButton>

        {/* Sidebar for larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: 350,
            bgcolor: "#FFF",
            p: 2,
          }}
        >
          <Paper
            elevation={2}
            sx={{
              bgcolor: "#FFF",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <Box display="flex" alignItems="center" gap={1} p={2}>
              <Avatar src="/images/profile.png" sx={{ width: 64, height: 64 }} />
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography fontWeight="bold">
                  {userData.name || "User"}
                </Typography>
                <Typography variant="body2" color="gray">
                  {userData.email}
                </Typography>
                <Typography
                  color="primary"
                  fontSize={14}
                  sx={{ cursor: "pointer" }}
                >
                  Edit
                </Typography>
              </Box>
            </Box>
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ px: 2 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(item.text)}
                    sx={{
                      background:
                        selectedItem === item.text
                          ? "linear-gradient(90deg, rgba(247, 35, 60, 0.2) 0%, rgba(252, 161, 32, 0.2) 100%)"
                          : "transparent",
                      color: "#2E2E2E",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(247, 35, 60, 0.2) 0%, rgba(252, 161, 32, 0.2) 100%)",
                      },
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Icon
                      icon={item.icon}
                      width="22"
                      height="22"
                      style={{ marginRight: "10px" }}
                    />
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{ fontSize: "18px" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box width={280} p={2} sx={{ bgcolor: "#FFF", height: "100vh" }}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavClick(item.text)}
                    sx={{
                      background:
                        selectedItem === item.text
                          ? "linear-gradient(90deg, rgba(247, 35, 60, 0.2) 0%, rgba(252, 161, 32, 0.2) 100%)"
                          : "transparent",
                      color: "#2E2E2E",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(247, 35, 60, 0.2) 0%, rgba(252, 161, 32, 0.2) 100%)",
                      },
                      borderRadius: "12px",
                    }}
                  >
                    <Icon
                      icon={item.icon}
                      width="18"
                      height="18"
                      style={{ marginRight: "10px" }}
                    />
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{ fontSize: "16px" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Right Side Content */}
        <Container
          maxWidth="md"
          sx={{
            background: "#FFF",
            p: { xs: 0 }, 
            m: { xs: 0 }, 
            mt: {xs: 5, md: 2},
          }}
        >
          <ActiveComponent />
        </Container>
      </div>
    </Container>
  );
};

export default Layout;