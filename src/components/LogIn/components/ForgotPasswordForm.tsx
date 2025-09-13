import React, { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import toast from "react-hot-toast";

interface ForgotPasswordFormProps {
  email: string;
  onEmailChange: (email: string) => void;
  onSendOtp: () => void;
  onBackToLogin: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  email,
  onEmailChange,
  onSendOtp,
  onBackToLogin,
}) => {
  const [useMobile, setUseMobile] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleSendOtp = () => {
    if ((useMobile && !mobile) || (!useMobile && !email)) {
      toast.error("Please provide email or mobile number");
      return;
    }
    onSendOtp();
  };

  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 8 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" align="center" sx={{ color: "#000000" }}>
          Forget Password
        </Typography>

        <Typography variant="body1" sx={{ my: 4, color: "#5B5B5B" }}>
          Your One-Stop B2B Textile Marketplace! 🚀
          <br />
          Log in to explore the finest textile collections and seamless trade
          connections.
        </Typography>
      </Box>

      <Stack spacing={3}>
        <TextField
          fullWidth
          placeholder={useMobile ? "Mobile Number" : "Email"}
          variant="outlined"
          value={useMobile ? mobile : email}
          onChange={(e) =>
            useMobile
              ? setMobile(e.target.value)
              : onEmailChange(e.target.value)
          }
          sx={{
            borderRadius: "40px",
            "& fieldset": {
              borderRadius: "40px",
              borderColor: "#FCA120",
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="text"
            color="primary"
            onClick={onBackToLogin}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              display: "block",
              width: "fit-content",
              color: "#006AFF",
            }}
          >
            Back to Login
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomButton
            gradient
            onClick={handleSendOtp}
            sx={{
              textTransform: "none",
              borderRadius: "40px",
              width: "232px",
              py: 1,
              background: "#FCA120",
            }}
          >
            Send OTP
          </CustomButton>

          <Button
            variant="text"
            color="primary"
            onClick={() => setUseMobile(!useMobile)}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              mt: 2,
              color: "#FF7F27",
            }}
          >
            {useMobile ? "Use Email Instead" : "Use Mobile Instead"}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ForgotPasswordForm;
