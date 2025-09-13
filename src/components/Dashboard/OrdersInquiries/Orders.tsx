"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  Checkbox,
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
import React, { useState, ChangeEvent } from "react";

interface Product {
  id: number;
  date: string;
  product: string;
  orderValue: string;
  stockQuantity: string;
  orderstatus: string;
  paymentstatus: string;
}

interface ActiveFilters {
  product: string;
  paymentstatus: string;
}

const products: Product[] = [
  {
    id: 1,
    date: "25/2/24",
    product: "Cotton",
    orderValue: "15000",
    stockQuantity: "100 Kg",
    orderstatus: "Pending",
    paymentstatus: "Pending",
  },
  {
    id: 2,
    date: "25/2/24",
    product: "Yarn",
    orderValue: "15000",
    stockQuantity: "50 Kg",
    orderstatus: "Pending",
    paymentstatus: "Pending",
  },
  {
    id: 3,
    date: "25/2/24",
    product: "Polyester",
    orderValue: "15000",
    stockQuantity: "250 Kg",
    orderstatus: "Shipped",
    paymentstatus: "Paid",
  },
  {
    id: 4,
    date: "25/2/24",
    product: "Polyester",
    orderValue: "15000",
    stockQuantity: "250 Kg",
    orderstatus: "Delivered",
    paymentstatus: "Paid",
  },
  {
    id: 5,
    date: "25/2/24",
    product: "Cotton",
    orderValue: "15000",
    stockQuantity: "100 Kg",
    orderstatus: "Pending",
    paymentstatus: "Pending",
  },
  {
    id: 6,
    date: "25/2/24",
    product: "Yarn",
    orderValue: "15000",
    stockQuantity: "50 Kg",
    orderstatus: "Pending",
    paymentstatus: "Pending",
  },
  {
    id: 7,
    date: "25/2/24",
    product: "Polyester",
    orderValue: "15000",
    stockQuantity: "250 Kg",
    orderstatus: "Shipped",
    paymentstatus: "Paid",
  },
  {
    id: 8,
    date: "25/2/24",
    product: "Polyester",
    orderValue: "15000",
    stockQuantity: "250 Kg",
    orderstatus: "Shipped",
    paymentstatus: "Paid",
  },
];

export default function Orders() {
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
    paymentstatus: "",
  });

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      const newSelected: number[] = products.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

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

  const isSelected = (id: number): boolean => selected.indexOf(id) !== -1;

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
      paymentstatus: "",
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
      !activeFilters.paymentstatus ||
      product.paymentstatus === activeFilters.paymentstatus;
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

    if (activeFilters.paymentstatus) {
      filters.push(activeFilters.paymentstatus);
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
          Orders
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
              onClick={() => handleFilterApply("paymentstatus", "Paid")}
            >
              Paid
            </MenuItem>
            <MenuItem
              onClick={() => handleFilterApply("paymentstatus", "Pending")}
            >
              Pending
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply("paymentstatus", "")}>
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
              <TableCell
                padding="checkbox"
                sx={{
                  borderRadius: "12px 0 0 12px",
                }}
              >
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < products.length
                  }
                  checked={
                    products.length > 0 && selected.length === products.length
                  }
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all products" }}
                />
              </TableCell>
              <TableCell>
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
                  Date
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
                  Product
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
                  Order Value
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
                  Quantity
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
                  Order Status
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
                  Payment Status
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
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => {
              const isItemSelected = isSelected(product.id);

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
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                >
                  <TableCell
                    padding="checkbox"
                    sx={{
                      borderRadius: "12px 0 0 12px",
                    }}
                  >
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": `product-${product.id}`,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.date}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.product}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.orderValue}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.stockQuantity}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            product.orderstatus === "Delivered"
                              ? "#24EF00"
                              : product.orderstatus === "Shipped"
                              ? "#0F2FFF"
                              : "#C4A700",
                          fontWeight: "medium",
                        }}
                      >
                        {product.orderstatus}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          height: "4px",
                          borderRadius: "2px",
                          position: "relative",
                          border: "1px solid #F37021",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            height: "100%",
                            borderRadius: "2px",
                            background: (theme) =>
                              theme.palette.backgroundGradient,
                            // product.orderstatus === "Delivered" ? "#4CAF50" :
                            // product.orderstatus === "Shipped" ? "#2196F3" : "#FFC107",
                            width:
                              product.orderstatus === "Delivered"
                                ? "100%"
                                : product.orderstatus === "Shipped"
                                ? "66%"
                                : "33%",
                          }}
                        />
                      </Box>
                    </Box>
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
                      {product.paymentstatus}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                      borderRadius: "0 12px 12px 0",
                    }}
                  >
                    <Button
                      size="small"
                      variant="text"
                      color="warning"
                      sx={{
                        textTransform: "none",
                        color: "#FF9800",
                        fontWeight: "normal",
                      }}
                    >
                      Edit
                    </Button>
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
