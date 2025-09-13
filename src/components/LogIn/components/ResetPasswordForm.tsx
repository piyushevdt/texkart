import React, { useState } from "react";
import { Box, Typography, TextField, Stack, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";

interface ResetPasswordFormProps {
  newPassword: string;
  confirmPassword: string;
  onNewPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (password: string) => void;
  onResetPassword: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  newPassword,
  confirmPassword,
  onNewPasswordChange,
  onConfirmPasswordChange,
  onResetPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 4 } }}>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: "#000000", my: 2 }}
      >
        Reset Password
      </Typography>
      <Typography
        align="center"
        sx={{ color: "#616161", fontSize: "12px", mb: 2 }}
      >
        Your New Password must be different from previously used passwords
      </Typography>
      <Stack spacing={3}>
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          variant="outlined"
          value={newPassword}
          onChange={(e) => onNewPasswordChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton edge="end">
                <Icon
                  icon="mdi:eye-outline"
                  width={24}
                  height={24}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </IconButton>
            ),
          }}
          sx={{
            borderRadius: "40px",
            "& fieldset": { borderRadius: "40px", borderColor: "#FCA120" },
          }}
        />
        <TextField
          fullWidth
          type={showNewPassword ? "text" : "password"}
          placeholder="Confirm New Password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton edge="end">
                <Icon
                  icon="mdi:eye-outline"
                  width={24}
                  height={24}
                  onClick={() => setNewShowPassword(!showNewPassword)}
                />
              </IconButton>
            ),
          }}
          sx={{
            borderRadius: "40px",
            "& fieldset": { borderRadius: "40px", borderColor: "#FCA120" },
          }}
        />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <CustomButton
            gradient
            onClick={onResetPassword}
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
      </Stack>
    </Box>
  );
};

export default ResetPasswordForm;
