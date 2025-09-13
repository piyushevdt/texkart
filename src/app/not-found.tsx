import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#e66a00",
        px: 2, // Padding for small screens
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          bgcolor: "white",
          borderRadius: 10,
          boxShadow: 3,
          p: { xs: 3, md: 5 }, // Responsive padding
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 2 }}>
          <Image
            src="/images/404.png"
            alt="404"
            height={53}
            width={500}
            style={{ width: "100%", maxWidth: "500px", height: "auto" }} // Makes the image responsive
          />
        </Box>
        <Typography variant="h5" fontWeight={600} color="text.primary" mt={3}>
          Oops! Page Not Found
        </Typography>
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              mb: 3,
              backgroundColor: "#ff7b00",
              "&:hover": { backgroundColor: "#e66a00" },
              px: { xs: 3, md: 5 }, // Adjusts button padding
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
            }}
          >
            Back to Home
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
