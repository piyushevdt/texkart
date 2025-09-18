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
} from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import { useRouter, usePathname } from "next/navigation";
import RHFTextField from "@/custom/RHFTextField";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);
  const [sellerData, setSellerData] = useState<SellerData | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  const userMenu = (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="body2" sx={{ color: "white" }}>
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
          <Box className="flex items-center">
            {/* Only show seller menu if we're on a seller route and have seller data */}
            {(sellerData && isSellerRoute) ? userMenu : loginForm}
          </Box>
        </Toolbar>
         <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
            Demo credentials: seller@texkart.com / seller123
          </Typography>
      </AppBar>
    </Container>
  );
};

export default NavbarDash;