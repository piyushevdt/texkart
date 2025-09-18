import Layout from "@/components/Dashboard/Layout/Layout";
import RouteGuard from "@/components/Home/components/RouteGuard";
import theme from "@/theme/Theme";
import { ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <ThemeProvider theme={theme}>
        <RouteGuard>
         <Layout>
        {children}
        </Layout>
       </RouteGuard>
       </ThemeProvider>
  );
}
