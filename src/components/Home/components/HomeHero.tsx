import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  mobileNumber: yup.string().matches(/^\d{10}$/, "Invalid mobile number").required("Mobile number is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function HomeHero() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const queryParams = new URLSearchParams(data as Record<string, string>).toString();
    router.push(`/registration?${queryParams}`); 
    console.log('data :>> ', data);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/heroBG.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        width: "100%",
      }}
    >
      <Container sx={{ pt: 26, pb: 16 }}>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="body1" sx={{fontSize: {xs: "28px", sm: "30px", md: "32px", lg: "34px"}, }}>Scaling Your Business with Quality Fabrics</Typography>
              <Typography variant="body2" sx={{fontSize: {xs: "14px", sm: "16px", md: "16px", lg: "18px"}, mt: 3}}>
                Join thousands of textile businesses growing with TexKart.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: {xs: "center", md: "flex-end"}, pr: {xs: 0, md:1, lg: 0 }}}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{display: "flex", justifyContent: "flex-end", }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  background: (theme) => theme.palette.backgroundGradient,
                  p: 3,
                  pr: {xs: 3, md: 4},
                  width: {xs: "100%", md: "85%", lg: "100%"}
                }}
              >
                <Typography variant="body1" sx={{fontSize: {xs: "24px", sm: "26px", md: "28px", lg: "30px"}}}>
                  Start Selling Today
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr 2fr",
                      gap: { xs: 2, md: 3 },
                      mt: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                    >
                      Name
                    </Typography>
                    <Box>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
                            sx={{
                              backgroundColor: "white",
                              borderRadius: "12px",
                              "& .MuiOutlinedInput-root": {
                                height: "32px", 
                                fontSize: "14px", 
                                padding: "0 12px", 
                              },
                              "& fieldset": { borderRadius: "12px", border: "none" },
                            }}
                          />
                        )}
                      />
                    </Box>

                    <Typography>Email Address</Typography>
                    <Box>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            variant="outlined"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ""}
                            sx={{
                              backgroundColor: "white",
                              borderRadius: "12px",
                              "& .MuiOutlinedInput-root": {
                                height: "32px", 
                                fontSize: "14px", 
                                padding: "0 12px", 
                              },
                              "& fieldset": { borderRadius: "12px", border: "none" },
                            }}
                          />
                        )}
                      />
                    </Box>

                    <Typography>Password</Typography>
                    <Box>
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            type="password"
                            size="small"
                            variant="outlined"
                            fullWidth
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ""}
                            sx={{
                              backgroundColor: "white",
                              borderRadius: "12px",
                              "& .MuiOutlinedInput-root": {
                                height: "32px", 
                                fontSize: "14px", 
                                padding: "0 12px", 
                              },
                              "& fieldset": { borderRadius: "12px", border: "none" },
                            }}
                          />
                        )}
                      />
                    </Box>

                    <Typography>Mobile Number</Typography>
                    <Box>
                      <Controller
                        name="mobileNumber"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            size="small"
                            variant="outlined"
                            fullWidth
                            error={!!errors.mobileNumber}
                            helperText={errors.mobileNumber ? errors.mobileNumber.message : ""}
                            sx={{
                              backgroundColor: "white",
                              borderRadius: "12px",
                              "& .MuiOutlinedInput-root": {
                                height: "32px", 
                                fontSize: "14px", 
                                padding: "0 12px", 
                              },
                              "& fieldset": { borderRadius: "12px", border: "none" },
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      color: (theme) => theme.palette.backgroundGradient,
                      fontWeight: "400",
                      "&:hover": { backgroundColor: "#f0f0f0" },
                      borderRadius: "12px",
                      mt: 3,
                      textTransform: "none",
                      py: 1,
                      mr: { xs: 0, md: 8, lg: 10 },
                      fontSize: "26px",
                    }}
                  >
                    Proceed
                  </Button>
                </form>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}