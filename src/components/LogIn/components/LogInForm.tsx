import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onForgotPassword: () => void;
  onLogin: () => void;
}

const LogInForm: React.FC<LoginFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onForgotPassword,
  onLogin,
}) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const router = useRouter();
  const handleRegister = () => {
    router.push("/registration");
  };
  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/images/logo2.png"
          alt="logo"
          height={98}
          width={280}
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            borderRadius: "9999px",
            backgroundColor: "#FFBA58",
            padding: 1,
            mt: 2,
          }}
        >
          <Button
            onClick={() => setActiveTab("login")}
            sx={{
              borderRadius: "9999px",
              px: 6,
              py: 1,
              transition: "all 0.3s",
              backgroundColor:
                activeTab === "login" ? "#FF7F27" : "transparent",
              color: (theme) => theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor:
                  activeTab === "login" ? "orange.600" : "orange.50",
              },
              textTransform: "none",
            }}
          >
            Login
          </Button>
          <Button
            // onClick={() => setActiveTab("register")}
            onClick={handleRegister}
            sx={{
              borderRadius: "9999px",
              px: 4,
              py: 1,
              transition: "all 0.3s",
              backgroundColor:
                activeTab === "register" ? "#FF7F27" : "transparent",
              color: (theme) => theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor:
                  activeTab === "register" ? "orange.600" : "orange.50",
              },
              textTransform: "none",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ my: 2, color: "#5B5B5B" }}>
        Log in to explore the finest textile collections and seamless trade
        connections.
      </Typography>
      <Stack spacing={3}>
        <TextField
          fullWidth
          placeholder="Mobile No./E-mail"
          variant="outlined"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          sx={{
            borderRadius: "40px",
            "& fieldset": {
              borderRadius: "40px",
              borderColor: "#FCA120",
            },
          }}
        />
        <TextField
          fullWidth
          type="password"
          placeholder="Enter your Password"
          variant="outlined"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          sx={{
            borderRadius: "40px",
            "& fieldset": {
              borderRadius: "40px",
              borderColor: "#FCA120",
            },
          }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "12px",
                fontWeight: 300,
                color: "#000000",
              },
            }}
          />
          <Button
            variant="text"
            color="primary"
            onClick={onForgotPassword}
            sx={{
              textTransform: "none",
              fontSize: "12px",
              fontWeight: 300,
              color: "#000000",
            }}
          >
            Forgot Password?
          </Button>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <CustomButton
            gradient
            onClick={onLogin}
            sx={{
              textTransform: "none",
              borderRadius: "40px",
              width: "232px",
              py: 1,
              background: "#FCA120",
            }}
          >
            Login
          </CustomButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default LogInForm;
