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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/registration";

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={Theme}>
          <ReduxProvider>
            <Toaster reverseOrder={false} position="top-right" />
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
