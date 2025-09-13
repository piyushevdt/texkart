import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Stack,
  TablePagination,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState, ChangeEvent, MouseEvent } from "react";

const orders = [
  {
    id: "44545",
    code: "#234052",
    name: "Cotton Yarn",
    date: "27 June 2024",
    status: "New",
  },
  {
    id: "54545",
    code: "#234052",
    name: "Swiss Yarn",
    date: "27 June 2024",
    status: "Dispatched",
  },
  {
    id: "65655",
    code: "#234052",
    name: "Polyester Thread",
    date: "27 June 2024",
    status: "Delivered",
  },
  {
    id: "44541",
    code: "#234052",
    name: "Cotton Yarn",
    date: "27 June 2024",
    status: "New",
  },
  {
    id: "54541",
    code: "#234052",
    name: "Swiss Yarn",
    date: "27 June 2024",
    status: "Dispatched",
  },
  {
    id: "65651",
    code: "#234052",
    name: "Polyester Thread",
    date: "27 June 2024",
    status: "Delivered",
  },
  {
    id: "44542",
    code: "#234052",
    name: "Cotton Yarn",
    date: "27 June 2024",
    status: "New",
  },
  {
    id: "54542",
    code: "#234052",
    name: "Swiss Yarn",
    date: "27 June 2024",
    status: "Dispatched",
  },
  {
    id: "65652",
    code: "#234052",
    name: "Polyester Thread",
    date: "27 June 2024",
    status: "Delivered",
  },
  {
    id: "44543",
    code: "#234052",
    name: "Cotton Yarn",
    date: "27 June 2024",
    status: "New",
  },
  {
    id: "54543",
    code: "#234052",
    name: "Swiss Yarn",
    date: "27 June 2024",
    status: "Dispatched",
  },
  {
    id: "65653",
    code: "#234052",
    name: "Polyester Thread",
    date: "27 June 2024",
    status: "Delivered",
  },
];

export default function ListOfOrder() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOrders = orders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
        <Typography variant="h6" component="h2" sx={{ color: "#000" }}>
          List of Orders
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <Button
            variant={activeTab === "ongoing" ? "contained" : "outlined"}
            onClick={() => setActiveTab("ongoing")}
            sx={{
              borderRadius: "16px",
              background:
                activeTab === "ongoing"
                  ? (theme) => theme.palette.backgroundGradient
                  : "transparent",
              textTransform: "none",
              px: 4,
            }}
          >
            Ongoing Orders
          </Button>
          <Button
            variant={activeTab === "completed" ? "contained" : "outlined"}
            onClick={() => setActiveTab("completed")}
            sx={{
              borderRadius: "16px",
              background:
                activeTab === "completed"
                  ? (theme) => theme.palette.backgroundGradient
                  : "transparent",
              textTransform: "none",
              px: 3,
            }}
          >
            Completed Orders
          </Button>
        </Stack>
        <TextField
          placeholder="Search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:magnify" width={20} height={20} />
              </InputAdornment>
            ),
          }}
          sx={{ width: 200 }}
        />
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
                  Status
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
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow
                key={order.id}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  "&:last-child": { marginBottom: "0px" },
                  "&:hover": { backgroundColor: "rgba(250, 250, 250, 1)" },
                }}
              >
                <TableCell
                  sx={{
                    borderRadius: "12px 0 0 12px",
                    padding: { xs: "8px", md: "16px" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {order.id}
                </TableCell>
                <TableCell
                  sx={{
                    color: "text.secondary",
                    padding: { xs: "8px", md: "16px" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {order.code}
                </TableCell>
                <TableCell
                  sx={{
                    color: "text.secondary",
                    padding: { xs: "8px", md: "16px" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {order.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: "text.secondary",
                    padding: { xs: "8px", md: "16px" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {order.date}
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
                        order.status === "New"
                          ? "green"
                          : order.status === "Dispatched"
                          ? "blue"
                          : "purple",
                    }}
                  >
                    {order.status}
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
                    color="success"
                    sx={{ mr: 1 }}
                  >
                    Accept
                  </Button>
                  <Button size="small" variant="text" color="error">
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={orders.length}
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
