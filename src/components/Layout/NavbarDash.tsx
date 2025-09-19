"use client";
import React, { useMemo, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Divider,
  Button,
  Drawer,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import { useRouter, usePathname } from "next/navigation";
import RHFTextField from "@/custom/RHFTextField";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from "react-hot-toast";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

// Separate seller credentials
const SELLER_CREDENTIALS = {
  email: "seller@texkart.com",
  password: "seller123"
};

interface SellerData {
  token: string;
  email: string;
  name: string;
  role: "seller";
}

const NavbarDash: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(false);
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check if current path requires seller authentication
  const isSellerRoute = pathname?.startsWith("/seller") || pathname?.startsWith("/seller-dashboard");

  useEffect(() => {
    // Check if seller token exists in localStorage on component mount
    const storedSellerData = localStorage.getItem('sellerData');
    if (storedSellerData) {
      const parsedData = JSON.parse(storedSellerData);
      
      // Only set seller data if we're on a seller route
      if (isSellerRoute) {
        setSellerData(parsedData);
      } else {
        // Clear seller data if we're not on a seller route
        setSellerData(null);
      }
    }
  }, [isSellerRoute, pathname]);

  const defaultValues = useMemo(
    () => ({
      email: '',
      password: ''
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues
  });

  const {
    handleSubmit,
  } = methods;

  const onSubmit = (data: { email: string; password: string }) => {
    // Validate against seller credentials
    if (data.email !== SELLER_CREDENTIALS.email || data.password !== SELLER_CREDENTIALS.password) {
      toast.error("Invalid seller credentials");
      return;
    }

    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock response with seller token
      const mockSellerData: SellerData = {
        token: "seller-jwt-token-789012",
        email: data.email,
        name: "TexKart Seller",
        role: "seller"
      };
      
      // Store seller token in localStorage separately
      localStorage.setItem('sellerData', JSON.stringify(mockSellerData));
      
      // Set seller data
      setSellerData(mockSellerData);
      setLoading(false);
      setDrawerOpen(false); // Close drawer after login
      router.push("/seller-dashboard");
    }, 1000);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDashboard = () => {
    handleMenuClose();
    router.push("/seller-dashboard");
  };

  const handleLogout = () => {
    // Remove seller token from localStorage
    localStorage.removeItem('sellerData');
    setSellerData(null);
    handleMenuClose();
    
    // If we're on a seller route, redirect to seller home
    if (isSellerRoute) {
      router.push("/seller");
    }
  };

  const handleBuyer = () => {
    router.push("/");
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const loginForm = (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, alignItems: "center", gap: 1}}>
        <RHFTextField 
          name="email" 
          placeholder="Seller Email"
          size="small"
          className="bg-white rounded-xl mr-2"
          sx={{
            mr: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "black",
              opacity: 1
            }
          }}
        />
        <RHFTextField 
          name="password" 
          placeholder="Seller Password"
          type="password"
          size="small"
          className="bg-white rounded-xl mr-2"
          sx={{
            mr: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "transparent" },
              "&:hover fieldset": { borderColor: "transparent" },
              "&.Mui-focused fieldset": { borderColor: "transparent" },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "black",
              opacity: 1
            }
          }}
        />
        <CustomButton 
          gradient 
          type="submit" 
          sx={{ px: 6, height: "40px", fontSize: "20px" , mb: { xs: 1, sm: 0}, whiteSpace: "nowrap", py: 1}}
          loading={loading}
        >
          Seller Login
        </CustomButton>
      </Box>
    </FormProvider>
  );

  const mobileLoginForm = (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{display: "flex", flexDirection: "column", gap: 2, p: 2}}>
        <RHFTextField 
          name="email" 
          placeholder="Seller Email"
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#FCA120" },
              "&:hover fieldset": { borderColor: "#FCA120" },
              "&.Mui-focused fieldset": { borderColor: "#FCA120" },
            },
          }}
        />
        <RHFTextField 
          name="password" 
          placeholder="Seller Password"
          type="password"
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#FCA120" },
              "&:hover fieldset": { borderColor: "#FCA120" },
              "&.Mui-focused fieldset": { borderColor: "#FCA120" },
            },
          }}
        />
        <CustomButton 
          gradient 
          type="submit" 
          sx={{ height: "40px", fontSize: "16px", whiteSpace: "nowrap" }}
          loading={loading}
          fullWidth
        >
          Seller Login
        </CustomButton>
        <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", textAlign: "center" }}>
          Demo credentials: seller@texkart.com / seller123
        </Typography>
      </Box>
    </FormProvider>
  );

  const userMenu = (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="body2" sx={{ color: "white", display: { xs: "none", sm: "block" } }}>
        Welcome, {sellerData?.name}
      </Typography>
      <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
        <Avatar alt="Seller Avatar" src="/static/images/seller-avatar.jpg" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 0,
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
          <Typography textAlign="center">Dashboard</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );

  return (
    <>
      <Box className="bg-[#0F2E61] text-white py-2">
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
              onClick={handleBuyer}
              sx={{fontSize: { xs: "10px", sm: "14px" }, whiteSpace: "nowrap"}}
            >
              Become a Buyer
            </Button>
          </Box>
        </Container>
      </Box>
      
      <Container disableGutters sx={{ px: { xs: 2, sm: 0 } }}>
        <AppBar
          position="static"
          sx={{
            background: "transparent",
            boxShadow: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <Toolbar
            sx={{
              boxShadow: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ color: "white", cursor: "pointer" }} onClick={() => router.push("/seller")}>
                TexKart Seller
              </Typography>
            </Box>
            
            {/* Desktop view */}
            <Box className="flex items-center" sx={{ display: { xs: "none", md: "flex" } }}>
              {(sellerData && isSellerRoute) ? userMenu : loginForm}
            </Box>
            
            {/* Mobile view - hamburger menu or login button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {sellerData && isSellerRoute ? (
                userMenu
              ) : (
                <IconButton onClick={() => toggleDrawer(true)} sx={{ color: "white" }}>
                  <Icon icon="mdi:login" width={24} height={24} />
                </IconButton>
              )}
            </Box>
          </Toolbar>
          
          <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", display: { xs: "none", md: "block" } }}>
            Demo credentials: seller@texkart.com / seller123
          </Typography>
        </AppBar>

        {/* Mobile Drawer for Login */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: { xs: "80%", sm: 400 },
              p: 2,
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h6">Seller Login</Typography>
              <IconButton onClick={() => toggleDrawer(false)}>
                <Icon icon="mdi:close" />
              </IconButton>
            </Box>
            {mobileLoginForm}
            <Button
              variant="text"
              color="inherit"
              startIcon={<Icon icon="mdi:account" />}
              className="text-white"
              size="small"
              onClick={handleBuyer}
              sx={{fontSize: { xs: "10px", sm: "14px" }, whiteSpace: "nowrap"}}
            >
              Become a Buyer
            </Button>
          </Box>
        </Drawer>
      </Container>
    </>
  );
};

export default NavbarDash;