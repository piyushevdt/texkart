"use client";

import "./globals.css";
import { ThemeProvider } from "@mui/material";
import Theme from "../theme/Theme";
import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/ReduxProvider";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { useState, useEffect } from "react";
import { Backdrop, CircularProgress, Box, Typography } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/registration";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const startTime = Date.now();
    
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);
      
      // Wait until at least 2 seconds have passed
      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      // Page is already loaded, but we still want to show loader for 2 seconds
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: Always hide after 4 seconds max
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={Theme}>
          <ReduxProvider>
            <Toaster reverseOrder={false} position="top-right" />
            
            {/* Global Loading Backdrop */}
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

            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
            {!hideLayout && <ScrollToTop />}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}