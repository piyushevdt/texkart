"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  TablePagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface Product {
  id: number;
  transactionId: number;
  orderDate: string;
  orderIncluded: string;
  grossSales: string;
  netPayout: string,
  product: string;
  paymentReceiveDate: string;
  status: string;
}

interface ActiveFilters {
  product: string;
  status: string;
}

const products: Product[] = [
  {
    id: 1,
    transactionId: 123,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Cotton",
    paymentReceiveDate: "25/02/2025",
    status: "Pending",
  },
  {
    id: 2,
    transactionId: 2411,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Yarn",
    paymentReceiveDate: "25/02/2025",
    status: "Pending",
  },
  {
    id: 3,
    transactionId: 21342,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Polyester",
    paymentReceiveDate: "25/02/2025",
    status: "Paid",
  },
  {
    id: 4,
    transactionId: 8282,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Polyester",
    paymentReceiveDate: "25/02/2025",
    status: "Paid",
  },
  {
    id: 5,
    transactionId: 1241,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Cotton",
    paymentReceiveDate: "25/02/2025",
    status: "Pending",
  },
  {
    id: 6,
    transactionId: 9999,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Yarn",
    paymentReceiveDate: "25/02/2025",
    status: "Pending",
  },
  {
    id: 7,
    transactionId: 456,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Polyester",
    paymentReceiveDate: "25/02/2025",
    status: "Paid",
  },
  {
    id: 8,
    transactionId: 789,
    orderDate: "25/2/24",
    orderIncluded: "5 Order",
    grossSales: "50,000",
    netPayout: "45,000",
    product: "Polyester",
    paymentReceiveDate: "25/02/2025",
    status: "Paid",
  },
];

export default function Transactions() {
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    product: "",
    status: "",
  });

  const handleClick = (event: React.MouseEvent, id: number): void => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (): void => {
    setFilterAnchorEl(null);
  };

  const handleFilterApply = (
    filterType: keyof ActiveFilters,
    value: string
  ): void => {
    setActiveFilters({
      ...activeFilters,
      [filterType]: value,
    });
    handleFilterClose();
  };

  const handleResetFilters = (): void => {
    setActiveFilters({
      product: "",
      status: "",
    });
    handleFilterClose();
  };

  const handleSortClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = (): void => {
    setSortAnchorEl(null);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !activeFilters.product || product.product === activeFilters.product;
    const matchesStatus =
      !activeFilters.status ||
      product.status === activeFilters.status;
    const matchesSearch =
      !searchQuery ||
      product.product.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const getFilterButtonText = (): string => {
    const filters = [];

    if (activeFilters.product) {
      filters.push(activeFilters.product);
    }

    if (activeFilters.status) {
      filters.push(activeFilters.status);
    }

    if (filters.length === 0) {
      return "Filter by";
    }

    return filters.join(", ");
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "20px",
        background: "#FFF",
        overflowX: "auto",
        width: "100%",
        maxWidth: { xs: "350px", lg: "100%", sm: "100%" },
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ mb: 3, flexWrap: "wrap" }}
      >
        <Typography variant="h6" component="h2" sx={{ color: "#05004E" }}>
          Transactions/ Payments
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            Bulk Update
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleFilterClick}
            endIcon={<Icon icon="mdi:filter" />}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "14px",
              whiteSpace: "nowrap",
              minWidth: "120px",
            }}
          >
            {getFilterButtonText()}
          </Button>
          <Menu
            anchorEl={filterAnchorEl}
            open={Boolean(filterAnchorEl)}
            onClose={handleFilterClose}
            PaperProps={{
              sx: {
                backgroundColor: "white",
              },
            }}
          >
            <MenuItem sx={{ fontSize: "14px", color: "#000" }}>
              Product
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply("product", "Cotton")}>
              Cotton
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply("product", "Yarn")}>
              Yarn
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply("product", "Polyester")}>
              Polyester
            </MenuItem>
            <MenuItem sx={{ fontSize: "14px", mt: 1, color: "#000" }}>
              Payment Status
            </MenuItem>
            <MenuItem
              onClick={() => handleFilterApply("status", "Paid")}
            >
              Paid
            </MenuItem>
            <MenuItem
              onClick={() => handleFilterApply("status", "Pending")}
            >
              Pending
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply("status", "")}>
              All
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "14px",
                mt: 1,
                color: "#000",
              }}
              onClick={handleResetFilters}
            >
              Reset All Filters
            </MenuItem>
          </Menu>

          <Button
            variant="outlined"
            color="primary"
            onClick={handleSortClick}
            endIcon={<Icon icon="mdi:sort" />}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            Sort by
          </Button>
          <Menu
            anchorEl={sortAnchorEl}
            open={Boolean(sortAnchorEl)}
            onClose={handleSortClose}
            PaperProps={{
              sx: {
                backgroundColor: "white",
              },
            }}
          >
            <MenuItem onClick={handleSortClose}>Name (A-Z)</MenuItem>
            <MenuItem onClick={handleSortClose}>Name (Z-A)</MenuItem>
            <MenuItem onClick={handleSortClose}>Price (Low to High)</MenuItem>
            <MenuItem onClick={handleSortClose}>Price (High to Low)</MenuItem>
            <MenuItem onClick={handleSortClose}>Stock (Low to High)</MenuItem>
            <MenuItem onClick={handleSortClose}>Stock (High to Low)</MenuItem>
          </Menu>

          <TextField
            placeholder="Search"
            size="small"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="mdi:magnify" width={20} height={20} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: { xs: "100%", sm: "200px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Stack>
      </Stack>

      <TableContainer
        sx={{
          borderRadius: "12px",
          overflowX: "auto",
          width: "100%",
          maxWidth: "100%",
          px: { xs: 0, sm: 1 },
          pt: 1,
          boxShadow: "none",
        }}
      >
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0 10px",
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
              <TableCell sx={{
                  borderRadius: "12px 0 0 12px",
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  Order Date
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
                  Transaction ID
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
                  Order Inculded
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
                  Gross Sales
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
                  Invoice
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
                  Net Payment
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
                  Status
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
                  Action
                </Typography>
              </TableCell>
              <TableCell sx={{ borderRadius: "0 12px 12px 0" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  Payment Recient Date
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => {
              return (
                <TableRow
                  key={product.id}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    "&:last-child": { marginBottom: "0px" },
                    "&:hover": { backgroundColor: "rgba(250, 250, 250, 1)" },
                  }}
                  onClick={(event) => handleClick(event, product.id)}
                  role="checkbox"
                >
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                      borderRadius: "12px 0 0 12px",
                    }}
                  >
                    {product.orderDate}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.transactionId}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography sx={{border: "1px solid #18B6BB", borderRadius: "8px", p: "5px 10px", textAlign: "center"}}>{product.orderIncluded}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.grossSales}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    <Icon icon="streamline:download-circle" style={{height: 30, width: 30, color: "#79A1E2", strokeWidth: 1}}/>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.netPayout}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      {product.status}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Button
                      size="small"
                      variant="text"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontWeight: "normal",
                      }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                      borderRadius: "0 12px 12px 0",
                    }}
                  >
                    {product.paymentReceiveDate}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredProducts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          mt: 2,
          "& .MuiTablePagination-toolbar": {
            paddingLeft: 0,
          },
        }}
        SelectProps={{
          MenuProps: {
            sx: {
              "& .MuiMenu-paper": {
                backgroundColor: "white",
              },
            },
          },
        }}
      />
    </Box>
  );
}
