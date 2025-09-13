import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Divider,
  Grid,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  color: string;
  size: string;
  image: string;
  pricePerKg: number;
  quantity: number;
  unit: string;
  weight: number;
  price: number;
}

const ShoppingCart: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Swiss Cotton",
      color: "Red",
      size: '55"',
      image: "/images/cart1.png",
      pricePerKg: 2000,
      quantity: 3,
      unit: "Bag",
      weight: 100,
      price: 2000 * 100 * 3,
    },
    {
      id: "2",
      name: "Swiss Cotton",
      color: "Yellow",
      size: '65"',
      image: "/images/cart2.png",
      pricePerKg: 2000,
      quantity: 3,
      unit: "Bag",
      weight: 60,
      price: 2000 * 20 * 3,
    },
    {
      id: "3",
      name: "Swiss Cotton",
      color: "Black",
      size: '55"',
      image: "/images/cart3.png",
      pricePerKg: 2000,
      quantity: 3,
      unit: "Bag",
      weight: 60,
      price: 2000 * 60 * 3,
    },
  ]);

  const [couponApplied, setCouponApplied] = useState(true);

  const handleQuantityChange = (id: string, increment: boolean) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const newQuantity = increment
            ? product.quantity + 1
            : Math.max(1, product.quantity - 1);
          const newPrice = product.pricePerKg * product.weight * newQuantity;
          return {
            ...product,
            quantity: newQuantity,
            price: newPrice,
          };
        }
        return product;
      })
    );
  };

  const handleInputChange = (id: string, value: string) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            const newPrice = product.pricePerKg * product.weight * newQuantity;
            return {
              ...product,
              quantity: newQuantity,
              price: newPrice,
            };
          }
          return product;
        })
      );
    }
  };

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const discount = couponApplied ? 1000 : 0;
  const cgst = 500;
  const igst = 500;
  const total = subtotal - discount + cgst + igst;
  const bookingAmount = Math.round(total * 0.1);

  const applyCoupon = () => {
    setCouponApplied(!couponApplied);
  };

  const paperStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    border: "1px solid #40404080",
  };

  return (
    <Box sx={{ color: (theme) => theme.palette.secondary.main }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: { xs: "28px", sm: "34px", md: "44px", lg: "40px" },
            }}
            mb={2.5}
          >
            Shopping Cart
          </Typography>
          <TableContainer
            component={Paper}
            sx={paperStyle}
            className="rounded-lg"
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{minWidth:220}}>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.secondary.main,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      Product Description
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className="font-semibold"  sx={{minWidth:150}}>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.secondary.main,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      Quantity
                    </Typography>
                  </TableCell>
                  <TableCell align="center" className="font-semibold" sx={{minWidth:150}}>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.secondary.main,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      Unit
                    </Typography>
                  </TableCell>
                  <TableCell align="right" className="font-semibold" sx={{minWidth:150}}>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.secondary.main,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      Unit Price
                    </Typography>
                  </TableCell>
                  <TableCell align="right" className="font-semibold" sx={{minWidth:150}}>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.secondary.main,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      Price
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell >
                      <Box className="flex items-center gap-2">
                        <Image
                          src={product.image}
                          alt={product.name}
                          height={50}
                          width={50}
                        />
                        <Box
                          sx={{
                            color: (theme) => theme.palette.secondary.main,
                          }}
                        >
                          <Typography variant="body1" className="font-medium">
                            {product.name}
                          </Typography>
                          <Typography variant="body2">
                            #{`243562-${product.color}`}
                          </Typography>
                          <Typography variant="body2">
                            {product.size}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ color: (theme) => theme.palette.secondary.main }}
                    >
                      <Box className="flex items-center justify-center">
                        <Box
                          className="flex items-center rounded-full"
                          sx={{
                            border: "1px solid #ccc",
                            backgroundColor: "#f9f9f9",
                            padding: "4px 8px",
                          }}
                        >
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(product.id, false)
                            }
                            sx={{ color: "#555" }}
                          >
                            <Icon icon="mdi:minus" fontSize={20} />
                          </IconButton>

                          <TextField
                            value={product.quantity}
                            onChange={(e) =>
                              handleInputChange(product.id, e.target.value)
                            }
                            variant="outlined"
                            size="small"
                            sx={{
                              width: "50px",
                              textAlign: "center",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                                "& input": {
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  padding: "4px",
                                },
                              },
                              backgroundColor: "white",
                              borderRadius: "4px",
                            }}
                          />

                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(product.id, true)
                            }
                            sx={{ color: "#555" }}
                          >
                            <Icon icon="mdi:plus" fontSize={20} />
                          </IconButton>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ color: (theme) => theme.palette.secondary.main }}
                    >
                      <Typography>
                        {product.quantity} {product.unit}
                      </Typography>
                      <Typography>({product.weight} Kg)</Typography>
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{ color: (theme) => theme.palette.secondary.main }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "15px" }}>
                        ₹{product.pricePerKg}/KG
                      </Typography>
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{ color: (theme) => theme.palette.secondary.main }}
                    >
                      <Typography>₹{product.price.toLocaleString()}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box px={2}>
            <CustomButton
              gradient
              fullWidth
              startIcon={
                <Icon
                  icon="mdi:coupon-outline"
                  style={{
                    width: isMobile ? "18px" : "24px",
                    height: isMobile ? "18px" : "24px",
                  }}
                />
              }
              onClick={() => console.log("Apply Coupon")}
              sx={{
                borderRadius: "9px",
                fontSize: { xs: "15px", sm: "24px", md: "20px", lg: "24px" },
              }}
            >
              Apply Coupon
            </CustomButton>
          </Box>
          <Paper elevation={0} sx={paperStyle}>
            <Box p={2} sx={{ color: (theme) => theme.palette.secondary.main }}>
              <Typography
                variant="h6"
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  },
                }}
              >
                Order Summary
              </Typography>

              <Box className="flex justify-between mb-2" my={1}>
                <Typography>Sub Total</Typography>
                <Typography>₹{subtotal.toLocaleString()}</Typography>
              </Box>

              <Box className="flex justify-between mb-2 items-center" my={1}>
                <Box className="flex items-center gap-2">
                  <Typography>Apply Coupon</Typography>
                  <Icon
                    icon="mdi:coupon-outline"
                    className="ml-1 text-gray-500 cursor-pointer"
                    fontSize={18}
                    onClick={applyCoupon}
                  />
                </Box>
                <Typography color={couponApplied ? "error" : "textPrimary"}>
                  {couponApplied ? `-₹${discount.toLocaleString()}` : "₹0"}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", width: "100%", mb: 2 }}>
                <Typography sx={{ whiteSpace: "nowrap", mr: 1 }}>
                  GST -{" "}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ width: "100%" }}
                >
                  <Box className="flex justify-between mb-2">
                    <Typography> C-GST</Typography>
                    <Typography>₹{cgst.toLocaleString()}</Typography>
                  </Box>

                  <Box className="flex justify-between mb-4">
                    <Typography>I-GST/SGST</Typography>
                    <Typography>₹{igst.toLocaleString()}</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider className="mb-4" />

              <Box className="flex justify-between" mt={1}>
                <Typography>Total</Typography>
                <Typography variant="h6">₹{total.toLocaleString()}</Typography>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0} sx={paperStyle} className="p-4 rounded-lg mb-4">
            <Box
              p={2}
              sx={{
                color: (theme) => theme.palette.secondary.main,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box className="flex justify-between items-center">
                <Box className="flex items-center">
                  <Typography>Booking Amount</Typography>
                  <Tooltip
                    title="*The Booking Amount is a partial payment required to secure your order, the remaining balance will be payable before dispatch."
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "white",
                          color: (theme) => theme.palette.secondary.main,
                          fontSize: "12px",
                          borderRadius: "6px",
                          padding: "8px",
                          border: "1px solid #000",
                        },
                      },
                    }}
                  >
                    <Box component="span" className="ml-1 text-gray-500" ml={1}>
                      <Icon
                        icon="material-symbols:info-rounded"
                        fontSize={18}
                      />
                    </Box>
                  </Tooltip>
                </Box>
                <Typography fontWeight="medium">
                  ₹{bookingAmount.toLocaleString()}
                </Typography>
              </Box>
              <CustomButton
                gradient
                fullWidth
                startIcon={
                  <Icon
                    icon="mynaui:cart-check"
                    style={{
                      width: isMobile ? "18px" : "24px",
                      height: isMobile ? "18px" : "24px",
                    }}
                  />
                }
                onClick={() => console.log("Order placed")}
                sx={{
                  borderRadius: "9px",
                  fontSize: { xs: "15px", sm: "24px", md: "20px", lg: "24px" },
                }}
              >
                {" "}
                Place Order
              </CustomButton>
              <CustomButton
                gradient
                fullWidth
                startIcon={
                  <Icon
                    icon="raphael:cart"
                    style={{
                      width: isMobile ? "18px" : "24px",
                      height: isMobile ? "18px" : "24px",
                    }}
                  />
                }
                onClick={() => console.log("Continue shopping")}
                sx={{
                  borderRadius: "9px",
                  fontSize: { xs: "15px", sm: "24px", md: "20px", lg: "24px" },
                }}
              >
                Continue shopping
              </CustomButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
