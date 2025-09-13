import Layout from "@/components/Dashboard/Layout/Layout";
import theme from "@/theme/Theme";
import { ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <ThemeProvider theme={theme}>
         <Layout>
        {children}
        </Layout>
       </ThemeProvider>
  );
}
