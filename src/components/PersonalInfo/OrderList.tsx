import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  InputAdornment,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Pagination,
  SelectChangeEvent, 
} from "@mui/material";
import { Icon } from "@iconify/react";
import { styled, useTheme } from "@mui/material/styles";
import { OrderType } from "./types";

const DownloadButton = styled(IconButton)(({ theme }) => ({
  border: `2px solid #05004E`,
  borderRadius: 8,
  padding: theme.spacing(1),
  color: "#05004E",
}));

interface OrderListProps {
  orders: OrderType[];
  onOrderClick: (orderId: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onOrderClick }) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<"newest" | "oldest" | "">("");
  const [filterOption, setFilterOption] = useState<
    "pending" | "dispatched" | "delivered" | ""
  >("");
  const [page, setPage] = useState(1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value as "newest" | "oldest" | "");
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilterOption(
      event.target.value as "pending" | "dispatched" | "delivered" | ""
    );
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const filteredOrders = orders
    .filter((order) => {
      const matchesSearch =
        order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = filterOption
        ? order.status.toLowerCase() === filterOption
        : true;

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortOption === "newest") {
        return (
          new Date(b.purchaseDate).getTime() -
          new Date(a.purchaseDate).getTime()
        );
      } else if (sortOption === "oldest") {
        return (
          new Date(a.purchaseDate).getTime() -
          new Date(b.purchaseDate).getTime()
        );
      }
      return 0;
    });

  const itemsPerPage = 5;
  const paginatedOrders = filteredOrders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          backgroundColor: "#fff",
          padding: "20px 20px 0 20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              List of Orders
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              size="small"
              fullWidth
              placeholder="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="mdi:magnify" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 2 },
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <Select
                displayEmpty
                value={sortOption}
                onChange={handleSortChange}
                sx={{ borderRadius: 2 }}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      icon="mdi:sort"
                      style={{ color: theme.palette.text.secondary }}
                    />
                  </InputAdornment>
                }
                renderValue={() => "Sort by date"}
                MenuProps={{
                  PaperProps: {
                    sx: { backgroundColor: "white" },
                  },
                }}
              >
                <MenuItem value="newest">Newest first</MenuItem>
                <MenuItem value="oldest">Oldest first</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <Select
                displayEmpty
                value={filterOption}
                onChange={handleFilterChange}
                sx={{ borderRadius: 2 }}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      icon="mdi:filter"
                      style={{ color: theme.palette.text.secondary }}
                    />
                  </InputAdornment>
                }
                renderValue={() => "Filter by Status"}
                MenuProps={{
                  PaperProps: {
                    sx: { backgroundColor: "white" },
                  },
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="dispatched">Dispatched</MenuItem>
                <MenuItem value="delivered">Delivered</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <TableContainer
          sx={{
            borderRadius: "12px",
            overflowX: "auto",
            px: { xs: 0, sm: 1 },
            pt: 1,
          }}
        >
          <Table
            sx={{
              borderCollapse: "separate",
              borderSpacing: "0 10px",
              minWidth: 650,
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                }}
              >
                <TableCell
                  sx={{
                    borderRadius: "12px 0 0 12px",
                    padding: { xs: "8px", md: "16px" },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    Order ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    Product Code
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    Product Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    Purchased on
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRadius: "0 12px 12px 0",
                    padding: { xs: "8px", md: "16px" },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "12px", md: "16px" },
                    }}
                  >
                    Track
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedOrders.map((order) => (
                <TableRow
                  key={order.id}
                  hover
                  onClick={() => onOrderClick(order.id)}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "rgba(250, 250, 250, 1)",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // ✅ Only bottom shadow
                    "&:last-child": { marginBottom: "0px" },
                  }}
                >
                  {/* Order ID with Download Button */}
                  <TableCell
                    sx={{
                      borderRadius: "12px 0 0 12px",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ mr: 2 }}>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ fontSize: { xs: "12px", md: "16px" } }}
                        >
                          {order.id}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: { xs: "10px", md: "14px" } }}
                        >
                          {order.invoiceOrCompany}
                        </Typography>
                      </Box>
                      <DownloadButton size="small">
                        <Icon
                          icon="mdi:download"
                          fontSize={20}
                          style={{ color: "#05004E" }}
                        />
                      </DownloadButton>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {order.productCode}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {order.productName}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {order.purchaseDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#5178FF",
                      borderRadius: "0 12px 12px 0",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography>{order.status}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={Math.ceil(filteredOrders.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              border: "1px solid grey",
              borderRadius: "50%",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderList;
