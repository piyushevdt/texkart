import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { OrderDetailsType } from "./types";

interface OrderDetailsProps {
  order: OrderDetailsType;
  onBackClick: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onBackClick }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Button
        startIcon={<Icon icon="mdi:arrow-left" />}
        onClick={onBackClick}
        sx={{ mb: 2, textTransform: "none", color: "#05004E" }}
      >
        Back
      </Button>

      <Paper
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          mb: 3,
          background: "#FFF",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5} p={3}>
            <CardMedia
              component="img"
              image={order.productImage}
              alt="Cotton yarn"
              sx={{
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        color="#3E3E3E"
                        sx={{
                          fontSize: {
                            xs: "18px",
                            sm: "20px",
                            md: "22px",
                            lg: "22px",
                          },
                          fontWeight: 800,
                        }}
                      >
                        {order.status}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#616161"
                        fontWeight={700}
                      >
                        On {order.deliveryDate}
                      </Typography>
                    </Box>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<Icon icon="mdi:headset" />}
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#FCA120",
                        "&:hover": { backgroundColor: "#E0911C" },
                      }}
                    >
                      Help
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "15px",
                      textTransform: "none",
                      backgroundColor: "#38BC3D",
                      "&:hover": { backgroundColor: "#32A836" },
                      mt: 1,
                    }}
                  >
                    Track order
                  </Button>
                  <Box sx={{ color: "#383838", mt: 2 }}>
                    <Typography variant="body2" fontWeight="bold">
                      Delivery Address
                    </Typography>
                    <Typography variant="body2">
                      {order.deliveryAddress.name}
                    </Typography>
                    <Typography variant="body2">
                      {order.deliveryAddress.phone}
                    </Typography>
                    <Typography variant="body2">
                      {order.deliveryAddress.address}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} mt={-2}>
                  <Typography variant="body2" fontWeight="bold" color="#383838">
                    Total Item Price:- ₹{order.payment.total.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="#38BC3D">
                    {order.payment.method}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>

        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            mt: -4
          }}
        >
          <Paper
            sx={{
              background: "#FFF",
              p: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              width: { xs: "100%", md: "35%" },
              height: "fit-content",
              color: "#383838",
            }}
          >
            <Typography variant="body2">
              Customer name:- {order.customerName}
            </Typography>
            <Typography variant="body2">
              Product Code:- {order.productCode}
            </Typography>
            <Typography variant="body2">
              Product Name:- {order.productName}
            </Typography>
            <Typography variant="body2">
              Purchased on:- {order.purchaseDate}
            </Typography>
          </Paper>

          <Paper
            sx={{
              background: "#FFF",
              p: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              width: { xs: "100%", md: "60%" },
            }}
          >
            <TableContainer sx={{ border: "none" }}>
              <Table sx={{ border: "none" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none", color: "#383838" }}>
                      Product
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "none", color: "#383838" }}
                    >
                      Qunt.
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "none", color: "#383838" }}
                    >
                      Unit Price
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ borderBottom: "none", color: "#383838" }}
                    >
                      Subtotal
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.items.map((item, index) => (
                    <TableRow key={index} sx={{ borderBottom: "none" }}>
                      <TableCell
                        sx={{ borderBottom: "none", color: "#383838" }}
                      >
                        {item.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderBottom: "none", color: "#383838" }}
                      >
                        {item.quantity}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderBottom: "none", color: "#383838" }}
                      >
                        ₹{item.unitPrice}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ borderBottom: "none", color: "#383838" }}
                      >
                        ₹{item.subtotal.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<Icon icon="mdi:download" />}
                sx={{
                  borderRadius: "15px",
                  textTransform: "none",
                  backgroundColor: "#38BC3D",
                  "&:hover": { backgroundColor: "#32A836" },
                }}
              >
                Download Invoice
              </Button>
            </Box>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderDetails;
