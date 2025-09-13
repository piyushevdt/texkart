"use client";
import { Box } from "@mui/material";
import React from "react";
import ProductTable from "./components/ProductTable";
import CustomButton from "@/custom/CustomButton";
import { useRouter } from "next/navigation";

export default function MyProductsIndex() {
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          pb: 3,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <CustomButton
        onClick={() => router.push("/seller-dashboard/products/basic-product-details")}
          size="large"
          gradient
          sx={{
            width: { xs: "100%", sm: "50%" },
            fontSize: { xs: "32px", sm: "34px", md: "28px", lg: "36px" },
            py: 2,
            borderRadius: "16px",
          }}
        >
          Add Single Product
        </CustomButton>
        <CustomButton
        onClick={() => router.push("/seller-dashboard/products/basic-product-details")}
          size="large"
          gradient
          sx={{
            width: { xs: "100%", sm: "50%" },
            fontSize: { xs: "32px", sm: "34px", md: "28px", lg: "36px" },
            py: 2,
            borderRadius: "16px",
          }}
        >
          Add Bulk Product
        </CustomButton>
      </Box>
      <ProductTable />
    </Box>
  );
}
