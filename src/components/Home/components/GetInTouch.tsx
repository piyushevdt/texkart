"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Dialog, DialogContent } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "@/custom/CustomButton";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: yup
    .string()
    .matches(/^\d{10,}$/, "Mobile number must be at least 10 digits")
    .required("Mobile number is required"),
  queryType: yup.string().required("Please select a query type"),
  message: yup
    .string()
    .min(5, "Message must be at least 5 characters")
    .required("Message is required"),
});

type FormValues = yup.InferType<typeof formSchema>;

export default function GetInTouch() {
  const [openDialog, setOpenDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted", data);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box className="flex flex-col md:flex-row w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-8 md:w-1/2 bg-gradient-to-r from-orange-400 to-red-500 text-white"
          p={2}
        >
          <Typography variant="h5" className="mb-4 font-semibold" >
            Get In Touch Today
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: {xs: 2, md: 1, lg: 2}, mt: 2,pr: {xs:0, md: 8, lg: 10 }}}>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Name
            </Typography>
            <Box>
              <TextField
                size="small"
                {...register("name")}
                placeholder="Name"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  "& fieldset": { borderRadius: "12px", border: "none" },
                }}
                error={!!errors.name}
              />
              {errors.name && (
                <Typography sx={{ color: "white", fontSize: "10px", mt: 0.1 }}>
                  {errors.name.message}
                </Typography>
              )}
            </Box>

            <Typography>Email</Typography>
            <Box>
              <TextField
                size="small"
                {...register("email")}
                placeholder="Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  "& fieldset": { borderRadius: "12px", border: "none" },
                }}
                error={!!errors.email}
              />
              {errors.email && (
                <Typography sx={{ color: "white", fontSize: "10px", mt: 0.1 }}>
                  {errors.email.message}
                </Typography>
              )}
            </Box>

            <Typography>Mobile</Typography>
            <Box>
              <TextField
                size="small"
                {...register("mobile")}
                placeholder="Mobile"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  "& fieldset": { borderRadius: "12px", border: "none" },
                }}
                error={!!errors.mobile}
              />
              {errors.mobile && (
                <Typography sx={{ color: "white", fontSize: "10px", mt: 0.1 }}>
                  {errors.mobile.message}
                </Typography>
              )}
            </Box>

            <Typography>Query Type</Typography>
            <Box>
            <TextField
                size="small"
                {...register("queryType")}
                placeholder="Query Type"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  "& fieldset": { borderRadius: "12px", border: "none" },
                }}
                error={!!errors.queryType}
              />
              {errors.queryType && (
                <Typography sx={{ color: "white", fontSize: "10px", mt: 0.1 }}>
                  {errors.queryType.message}
                </Typography>
              )}
            </Box>

            <Typography>Message</Typography>
            <Box>
              <TextField
                size="small"
                {...register("message")}
                placeholder="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  "& fieldset": { borderRadius: "12px", border: "none" },
                }}
                error={!!errors.message}
              />
              {errors.message && (
                <Typography sx={{ color: "white", fontSize: "10px", mt: 0.1 }}>
                  {errors.message.message}
                </Typography>
              )}
            </Box>
          </Box>

          <Button
            type="submit"
            sx={{
              backgroundColor: "white",
              color: "red",
              fontWeight: "600",
              "&:hover": { backgroundColor: "#f0f0f0" },
              borderRadius: "12px",
              mt: 2,
              textTransform: "none",
              py:2,
              mr: {xs:0, md: 8, lg: 10 }
            }}
          >
            Submit
          </Button>
        </Box>

        <Box className="md:w-1/2">
          <Image
            src="/images/form.svg"
            alt="Handshake"
            className="w-full h-full object-cover"
            height={400}
            width={400}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Order Quantity Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            maxWidth: "450px",
            width: "100%",
            p: 2,
            position: "relative",
            background: "#fff"
          }
        }}
      >
        <Button 
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            minWidth: "auto",
            p: 0.5,
            fontSize: "24px",
            color: "#000"
          }}
        >
          ×
        </Button>
        <DialogContent sx={{ p: 3, textAlign: "center" }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: "18px", 
              color: "#000",
              mb: 2
            }}
          >
            As your order quantity is high, please place the query of your order and our supplier will check and approve from his existing inventory within 24 hrs.
          </Typography>
          
          <CustomButton gradient  onClick={handleCloseDialog}>  Request Order</CustomButton>
        </DialogContent>
      </Dialog>
    </>
  );
}