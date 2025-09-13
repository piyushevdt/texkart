import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  Grid,
  Typography,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";
import RHFTextField from "@/custom/RHFTextField";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phoneNo: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  emailId: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  companyName: yup.string().required("Company Name is required"),
  designation: yup.string().optional(),
  queries: yup.string().required("Queries/Suggestions are required"),
});

interface ContactFormData {
  name: string;
  phoneNo: string;
  emailId: string;
  companyName: string;
  designation?: string;
  queries: string;
}

const ContactForm: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // const [dialogOpen, setDialogOpen] = useState(false);

  const methods = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      phoneNo: "",
      emailId: "",
      companyName: "",
      designation: "",
      queries: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setDialogOpen(true);
    reset(); // Reset form after successful submission
  };

  // const {
  //   control,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<ContactFormData>({
  //   resolver: yupResolver(contactSchema),
  //   defaultValues: {
  //     name: "",
  //     phoneNo: "",
  //     emailId: "",
  //     companyName: "",
  //     designation: "",
  //     queries: "",
  //   },
  // });

  // const handleCloseDialog = () => {
  //   setDialogOpen(false);
  // };
  // const methods = useForm();
  // const {
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = methods;

  // const onSubmit = (data) => {
  //   console.log(data);
  //   setDialogOpen(true);
  //   reset();
  // };


  // const onSubmit = (data: ContactFormData) => {
  //   console.log("Form submitted:", data);
  //   setDialogOpen(true);
  //   reset(); // Reset form after successful submission
  // };

  return (
    <>
      <Container sx={{ px: { xs: 2, md: 8 } }}>
        <Grid
          container
          sx={{
            borderRadius: "12px",
            boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              background: (theme) => theme.palette.backgroundGradient,
              color: (theme) => theme.palette.primary.contrastText,
              p: 2,
              borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" },
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h1" sx={{ fontSize: "55px" }}>
              Contact Us
            </Typography>

            <Box className="flex items-center">
              <Box
                sx={{
                  background: (theme) => theme.palette.background.default,
                  color: (theme) => theme.palette.text.primary,
                  borderRadius: "12px",
                  p: 1,
                  mr: 2,
                }}
              >
                <Icon
                  icon="material-symbols:call"
                  style={{ fontSize: "24px" }}
                />
              </Box>
              <Box>
                <Typography variant="body1">Phone Number</Typography>
                <Typography variant="body1">
                  <Link
                    href="tel:+91234567899"
                    underline="none"
                    color="inherit"
                  >
                    +91234567899
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box className="flex items-center">
              <Box
                sx={{
                  background: (theme) => theme.palette.background.default,
                  color: (theme) => theme.palette.text.primary,
                  borderRadius: "12px",
                  p: 1,
                  mr: 2,
                }}
              >
                <Icon
                  icon="ic:baseline-whatsapp"
                  style={{ fontSize: "24px" }}
                />
              </Box>
              <Box>
                <Typography variant="body1">WhatsApp Number</Typography>
                <Typography variant="body1">
                  <Link
                    href="https://wa.me/91234567899"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    +91234567899
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box className="flex items-center">
              <Box
                sx={{
                  background: (theme) => theme.palette.background.default,
                  color: (theme) => theme.palette.text.primary,
                  borderRadius: "12px",
                  p: 1,
                  mr: 2,
                }}
              >
                <Icon
                  icon="material-symbols:mail-outline"
                  style={{ fontSize: "24px" }}
                />
              </Box>
              <Box>
                <Typography variant="body1">Email-ID</Typography>
                <Typography variant="body1">
                  <Link
                    href="mailto:xyzz123@gmail.com"
                    underline="none"
                    color="inherit"
                  >
                    xyzz123@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            p={3}
            sx={{
              background: (theme) => theme.palette.background.default,
              borderRadius: {
                xs: "0px 0px 12px 12px",
                md: "0 12px 12px 0",
              },
            }}
          >
            <FormProvider {...methods}>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: { xs: "20px", md: "23px" } }}>
                  NEED ASSISTANCE? CONTACT OUR TEAM TODAY!
                </Typography>

                <Box sx={{ width: "100%" }}>
                  <Typography variant="body2" sx={{ color: "#000000", py: 1 }}>
                    Name<span style={{ color: "#FF0000" }}>*</span>
                  </Typography>
                  <RHFTextField
                    name="name"
                    size="small"
                    fullWidth
                    placeholder="Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={{
                      borderRadius: "12px",
                      "& fieldset": {
                        borderRadius: "12px",
                        borderColor: "#FCA120",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography variant="body2" sx={{ color: "#000000", py: 1 }}>
                    Phone no.<span style={{ color: "#FF0000" }}>*</span>
                  </Typography>
                  <RHFTextField
                    name="phoneNo"
                    size="small"
                    fullWidth
                    placeholder="Phone No"
                    variant="outlined"
                    error={!!errors.phoneNo}
                    helperText={errors.phoneNo?.message}
                    sx={{
                      borderRadius: "12px",
                      "& fieldset": {
                        borderRadius: "12px",
                        borderColor: "#FCA120",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Typography variant="body2" sx={{ color: "#000000", py: 1 }}>
                    Email<span style={{ color: "#FF0000" }}>*</span>
                  </Typography>
                  <RHFTextField
                    name="emailId"
                    size="small"
                    fullWidth
                    placeholder="Email ID"
                    variant="outlined"
                    error={!!errors.emailId}
                    helperText={errors.emailId?.message}
                    sx={{
                      borderRadius: "12px",
                      "& fieldset": {
                        borderRadius: "12px",
                        borderColor: "#FCA120",
                      },
                    }}
                  />
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="body2" sx={{ color: "#000000", py: 1 }}>
                        Company Name<span style={{ color: "#FF0000" }}>*</span>
                      </Typography>
                      <RHFTextField
                        name="companyName"
                        size="small"
                        fullWidth
                        placeholder="Enter company name"
                        variant="outlined"
                        error={!!errors.companyName}
                        helperText={errors.companyName?.message}
                        sx={{
                          borderRadius: "12px",
                          "& fieldset": {
                            borderRadius: "12px",
                            borderColor: "#FCA120",
                          },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="body2" sx={{ color: "#000000", py: 1 }}>
                        Designation
                      </Typography>
                      <RHFTextField
                        name="designation"
                        size="small"
                        fullWidth
                        placeholder="Enter Designation"
                        variant="outlined"
                        sx={{
                          borderRadius: "12px",
                          "& fieldset": {
                            borderRadius: "12px",
                            borderColor: "#FCA120",
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ width: "100%" }}>
                  <Typography variant="body2" sx={{ color: "#000000", py: 1 }}>
                    Queries/Suggestion<span style={{ color: "#FF0000" }}>*</span>
                  </Typography>
                  <RHFTextField
                    name="queries"
                    size="small"
                    fullWidth
                    placeholder="Tell us how we can assist you ..."
                    variant="outlined"
                    multiline
                    rows={4}
                    error={!!errors.queries}
                    helperText={errors.queries?.message}
                    sx={{
                      borderRadius: "12px",
                      "& fieldset": {
                        borderRadius: "12px",
                        borderColor: "#FCA120",
                      },
                    }}
                  />
                </Box>

                <CustomButton type="submit" gradient sx={{ width: "40%" }}>
                  Submit
                </CustomButton>
              </Box>
            </FormProvider>

          </Grid>
        </Grid>
      </Container>

      {/* Success Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
            padding: "16px 0",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#000",
          }}
        >
          <Icon icon="mdi:close" />
        </IconButton>
        <DialogContent sx={{ p: 3, textAlign: "center" }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: "#000",
              // fontWeight: "bold",
              fontSize: "24px",
              lineHeight: 1.5,
            }}
          >
            Thank you for reaching out! Our team will contact you within 24
            Hours
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
