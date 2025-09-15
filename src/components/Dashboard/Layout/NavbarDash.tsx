"use client";
import React, { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  // Typography,
  Box,
  // IconButton,
  // Drawer,
  // List,
  // ListItem,
  // useMediaQuery,
  // useTheme,
  Container,
} from "@mui/material";
// import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";
import { useRouter } from "next/navigation";
import RHFTextField from "@/custom/RHFTextField";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch } from 'react-redux'
// import { postLoginAsync } from "@/components/redux/services/auth";
// import type { AppDispatch } from '../../redux/store'
// import toast from "react-hot-toast";


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const NavbarDash: React.FC = () => {
  const router = useRouter();
  // const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // const dispatch: AppDispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const defaultValues = useMemo(
    () => ({
      email: '', // Set default to an empty string
      password: ''
    }),
    []
  )

  // Initialize useForm with validation resolver and default values
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues
  })

  const {
    handleSubmit,
  } = methods

  // const handleDrawerToggle = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("Login attempted with:", data);
    // Mock login - redirect to seller dashboard
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setLoading(false);
      router.push("/seller-dashboard");
    }, 1000);
  };

  // Commented out the original API call
  // const onSubmit = (values: { email: string; password: string }) => {
  //   setLoading(true)

  //   const payload = {
  //     email: values.email,
  //     password: values.password
  //   }

  //   dispatch(postLoginAsync(payload))
  //   .then((action) => {
  //     if (postLoginAsync.fulfilled.match(action)) {
  //       const userData = action.payload;
      
  //       localStorage.setItem('userData', JSON.stringify(userData));
      
  //       router.push("/seller-dashboard");
  //     } else {
  //       setLoading(false);
  //     }
  //   })
  // }

  const loginForm = (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, alignItems: "center", gap: 1}}>
        <RHFTextField 
          name="email" 
          placeholder="Enter your Email"
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
          placeholder="Enter your Password"
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
          sx={{ px: 6, height: "40px", fontSize: "24px" , mb: { xs: 1, sm: 0}}}
          loading={loading}
        >
          login
        </CustomButton>
      </Box>
    </FormProvider>
  );

  // const drawer = (
  //   <Box className="p-4 bg-white h-full">
  //     <FormProvider {...methods}>
  //       <Box component="form" onSubmit={handleSubmit(onSubmit)}>
  //         <List>
  //           <ListItem>
  //             <RHFTextField
  //               name="email"
  //               label="Email"
  //               size="small"
  //             />
  //           </ListItem>
  //           <ListItem>
  //             <RHFTextField
  //               name="password"
  //               label="Password"
  //               type="password"
  //               size="small"
  //             />
  //           </ListItem>
  //           <ListItem>
  //             <CustomButton gradient type="submit" fullWidth loading={loading}>
  //               login
  //             </CustomButton>
  //           </ListItem>
  //         </List>
  //       </Box>
  //     </FormProvider>
  //   </Box>
  // );
  

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
            justifyContent: "flex-end",
          }}
        >
          {/* <Typography
            variant="h3"
            className="text-white font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            TexKart
          </Typography> */}

          {/* {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <Icon icon="material-symbols:menu" width="24" height="24" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : ( */}
            <Box className="flex items-center">{loginForm}</Box>
          {/* )} */}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavbarDash;