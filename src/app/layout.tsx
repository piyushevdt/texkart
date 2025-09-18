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
import { useState, useEffect, useRef } from "react";
import { Backdrop, CircularProgress, Box, Typography } from "@mui/material";

interface LenisInstance {
  raf: (time: number) => void;
  scrollTo: (target: number | string | HTMLElement, options?: { immediate?: boolean }) => void;
  destroy: () => void;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/registration"|| pathname ==="/seller" ||pathname ==="/seller-dashboard" || pathname.startsWith("/seller-dashboard/");;
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const initLenis = async () => {
      // Dynamically import Lenis to avoid SSR issues
      const Lenis = (await import('lenis')).default;

      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        lerp: 0.1, // Lower values = smoother but slower scrolling
        infinite: false,
        // Additional options:
        syncTouch: true, // Sync with touch events
        syncTouchLerp: 0.1, // Smoothing for touch events
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    // Clean up Lenis on component unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  // Update Lenis when route changes
  useEffect(() => {
    if (lenisRef.current) {
      // Scroll to top on route change
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

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
            <ScrollToTop />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}