import React from "react";
import { Box, Typography, TextField, Alert } from "@mui/material";
import CustomButton from "@/custom/CustomButton";

interface EnterOtpProps {
  otp: string;
  otpError: boolean;
  onOtpChange: (otp: string) => void;
  onSubmitOtp: () => void;
}

const EnterOtp: React.FC<EnterOtpProps> = ({
  otp,
  otpError,
  onOtpChange,
  onSubmitOtp,
}) => {
  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 6 }, textAlign: "center" }}>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: "#000000", my: 2 }}
      >
        Enter OTP
      </Typography>
      <Typography color="textSecondary" variant="body2" gutterBottom>
        The OTP was sent to your registered email. <br />
        Please check the spam folder.
      </Typography>

      {otpError && (
        <Alert severity="error" sx={{ my: 2 }}>
          Invalid OTP. Please try again.
        </Alert>
      )}

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter 6-digit OTP"
        type="text"
        value={otp}
        onChange={(e) => {
          const inputValue = e.target.value.replace(/\D/g, "").slice(0, 6);
          onOtpChange(inputValue);
        }}
        inputProps={{
          maxLength: 6,
        }}
        sx={{
          my: 3,
          borderRadius: "40px",
          "& fieldset": { borderRadius: "40px", borderColor: "#FCA120" },
        }}
      />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CustomButton
          gradient
          onClick={onSubmitOtp}
          sx={{
            textTransform: "none",
            borderRadius: "40px",
            width: "232px",
            py: 1,
            background: "#FCA120",
          }}
        >
          Reset Password
        </CustomButton>
      </Box>
    </Box>
  );
};

export default EnterOtp;
