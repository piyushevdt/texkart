import { Icon } from '@iconify/react/dist/iconify.js';
import { 
  Box, 
  Button, 
  Checkbox, 
  IconButton, 
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
  Typography 
} from '@mui/material';
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';

interface Product {
  id: number;
  productName: string;
  color: string;
  category: string;
  subCategory: string;
  stockQuantity: string;
  image: string;
  status: string;
  unitPrice: string;
}

interface ActiveFilters {
  category: string;
  status: string;
}

const products: Product[] = [
  {
    id: 1,
    productName: "Swiss Cotton",
    color: "#234052",
    category: "Cotton",
    subCategory: "UV Yarn",
    stockQuantity: "100 Kg",
    image: "/images/product.png",
    status: "Active",
    unitPrice: "₹1000"
  },
  {
    id: 2,
    productName: "Yarn Cotton",
    color: "#234052",
    category: "Yarn",
    subCategory: "UV Yarn",
    stockQuantity: "50 Kg",
    image: "/images/product.png",
    status: "Active",
    unitPrice: "₹1000"
  },
  {
    id: 3,
    productName: "Jute Yarn",
    color: "#234052",
    category: "Polyester",
    subCategory: "UV Yarn",
    stockQuantity: "250 Kg",
    image: "/images/product.png",
    status: "Inactive",
    unitPrice: "₹1000"
  },
  {
    id: 4,
    productName: "Jute Yarn",
    color: "#234052",
    category: "Polyester",
    subCategory: "UV Yarn",
    stockQuantity: "250 Kg",
    image: "/images/product.png",
    status: "Inactive",
    unitPrice: "₹1000"
  },
  {
    id: 5,
    productName: "Swiss Cotton",
    color: "#234052",
    category: "Cotton",
    subCategory: "UV Yarn",
    stockQuantity: "100 Kg",
    image: "/images/product.png",
    status: "Active",
    unitPrice: "₹1000"
  },
  {
    id: 6,
    productName: "Yarn Cotton",
    color: "#234052",
    category: "Yarn",
    subCategory: "UV Yarn",
    stockQuantity: "50 Kg",
    image: "/images/product.png",
    status: "Active",
    unitPrice: "₹1000"
  },
  {
    id: 7,
    productName: "Jute Yarn",
    color: "#234052",
    category: "Polyester",
    subCategory: "UV Yarn",
    stockQuantity: "250 Kg",
    image: "/images/product.png",
    status: "Inactive",
    unitPrice: "₹1000"
  },
  {
    id: 8,
    productName: "Jute Yarn",
    color: "#234052",
    category: "Polyester",
    subCategory: "UV Yarn",
    stockQuantity: "250 Kg",
    image: "/images/product.png",
    status: "Inactive",
    unitPrice: "₹1000"
  },
];

export default function ProductTable() {
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    category: '',
    status: ''
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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (): void => {
    setFilterAnchorEl(null);
  };

  const handleFilterApply = (filterType: keyof ActiveFilters, value: string): void => {
    setActiveFilters({
      ...activeFilters,
      [filterType]: value
    });
    handleFilterClose();
  };

  const handleResetFilters = (): void => {
    setActiveFilters({
      category: '',
      status: ''
    });
    handleFilterClose();
  };

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = (): void => {
    setSortAnchorEl(null);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = !activeFilters.category || product.category === activeFilters.category;
    const matchesStatus = !activeFilters.status || product.status === activeFilters.status;
    const matchesSearch = !searchQuery || 
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const getFilterButtonText = (): string => {
    const filters = [];
    
    if (activeFilters.category) {
      filters.push(activeFilters.category);
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
          My products
        </Typography>
        <Stack 
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
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
              Categories
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply('category', 'Cotton')}>Cotton</MenuItem>
            <MenuItem onClick={() => handleFilterApply('category', 'Yarn')}>Yarn</MenuItem>
            <MenuItem onClick={() => handleFilterApply('category', 'Polyester')}>Polyester</MenuItem>
            <MenuItem sx={{ fontSize: "14px", mt: 1, color: "#000" }}>
              Status
            </MenuItem>
            <MenuItem onClick={() => handleFilterApply('status', 'Active')}>Active</MenuItem>
            <MenuItem onClick={() => handleFilterApply('status', 'Inactive')}>Inactive</MenuItem>
            <MenuItem onClick={() => handleFilterApply('status', '')}>All</MenuItem>
            <MenuItem 
              sx={{ 
                fontSize: "14px", 
                mt: 1, 
                color: "#000"
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="mdi:magnify" width={20} height={20} />
                </InputAdornment>
              ),
            }}
            sx={{ 
              width: { xs: "100%", sm: "200px" },
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              }
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
                  indeterminate={selected.length > 0 && selected.length < products.length}
                  checked={products.length > 0 && selected.length === products.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all products' }}
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
                  Category
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
                  Sub-Category
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
                  Stock Quantity
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
                  Image
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
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Unit Price
                  <IconButton size="small">
                    <Icon icon="mdi:arrow-down" width={16} height={16} />
                  </IconButton>
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
                      inputProps={{ 'aria-labelledby': `product-${product.id}` }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.productName}
                    <br />
                    <Typography sx={{ fontSize: "10px", color: "#666" }}>#{product.color.substring(1)}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.category}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "text.secondary",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.subCategory}
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
                    <Box sx={{ width: 40, height: 40, borderRadius: 1, overflow: 'hidden' }}>
                      <Image
                        src={product.image}
                        alt={product.productName}
                        height={40}
                        width={40}
                      />
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
                        color:
                          product.status === "Active"
                            ? "#27C308"
                            : product.status === "Inactive"
                            ? "#9B9B9B" 
                            : "purple",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      {product.status}
                      <Icon
                        icon="icon-park-outline:down-c"
                        width={16}
                        height={16}
                        style={{ 
                          color: "#000" 
                        }}
                      />
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#3F51B5",
                      padding: { xs: "8px", md: "16px" },
                      whiteSpace: "nowrap",
                      fontWeight: "600",
                    }}
                  >
                    ₹{product.unitPrice.replace("₹", "")}
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
  )
};