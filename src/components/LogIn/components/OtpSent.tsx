import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const OtpSent: React.FC = () => {
  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 4 }, textAlign: "center" }}>
      <Typography variant="body1" align="center" sx={{ color: "#000000", my: 2 }}>
        Forget Password
      </Typography>
      <Box
        sx={{
          borderRadius: "50%",
          width: 111,
          height: 111,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 2,
        }}
      >
        <Icon
          icon="simple-line-icons:check"
          width={100}
          height={100}
          color="#000000"
        />
      </Box>
      <Typography
        variant="body1"
        sx={{ fontWeight: 600, fontSize: "20px", color: "#191C1F" }}
      >
        OTP is successfully sent to your registered Email
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "16px", fontWeight: 400, color: "#191C1F" }}
      >
        Pls check Your EMAIL-ID
      </Typography>
    </Box>
  );
};

export default OtpSent;
