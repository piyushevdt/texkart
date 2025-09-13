"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography } from "@mui/material";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card
        sx={{
          maxWidth: "430px",
          // height: "250px",
          textAlign: "center",
          padding: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          bgcolor: "#FFF",
          mt: {xs: 2, sm: 0}
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            <span style={{ color: "#f7931e", fontWeight: 700 }}>Tex</span>
            <span style={{ color: "#d92027", fontWeight: 700 }}>Kart</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 2, color: "#000" }}>
            “You have successfully logged out.”
          </Typography>
          <Typography sx={{ color: "#000", fontWeight: "100 !important" }}>
            Thank you for visiting TexKart. We hope to see you again soon!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
