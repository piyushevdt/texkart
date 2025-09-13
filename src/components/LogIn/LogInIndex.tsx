"use client";
import React, { useState, useEffect } from "react";
import { Box, Grid, Container, IconButton } from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import EnterOtp from "./components/EnterOtp";
import ResetPasswordForm from "./components/ResetPasswordForm";
import OtpSent from "./components/OtpSent";
import LogInForm from "./components/LogInForm";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type AuthState =
  | "login"
  | "resetPassword"
  | "forgotPassword"
  | "otpSent"
  | "enterOtp";

const LoginIndex: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const router = useRouter();

  const handleStateChange = (state: AuthState) => {
    setAuthState(state);
  };

  useEffect(() => {
    const timer: NodeJS.Timeout | null = null;

    if (authState === "otpSent") {
      const transitionTimer = setTimeout(() => {
        setAuthState("enterOtp");
      }, 4000);

      return () => clearTimeout(transitionTimer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [authState]);

  const handleOtpComplete = (otpValue: string) => {
    setOtp(otpValue);

    if (otpValue.length === 6) {
      if (otpValue === "123456") {
        setAuthState("resetPassword");
      } else {
        setOtpError(true);
      }
    }
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Grid container sx={{ height: "100%" }}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Image
              src="/images/login.png"
              alt="Thread Background"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.default",
            px: { xs: 1, md: 4 },
            flexDirection: "column",
          }}
        >
          {authState === "login" && (
            <LogInForm
              email={email}
              password={password}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onForgotPassword={() => handleStateChange("forgotPassword")}
              onLogin={() => {
                if (!email || !password) {
                  toast.error("Please Fill All Fields");
                  return;
                }
                router.push("/personal-info");
              }}
            />
          )}
          {authState === "forgotPassword" && (
            <ForgotPasswordForm
              email={email}
              onEmailChange={setEmail}
              onSendOtp={() => {
                handleStateChange("otpSent");
              }}
              onBackToLogin={() => handleStateChange("login")}
            />
          )}
          {authState === "otpSent" && <OtpSent />}
          {authState === "enterOtp" && (
            <EnterOtp
              otp={otp}
              otpError={otpError}
              onOtpChange={setOtp}
              onSubmitOtp={() => {
                if (!otp) {
                  toast.error("Please Provide OTP");
                }
                handleOtpComplete(otp);
              }}
            />
          )}
          {authState === "resetPassword" && (
            <ResetPasswordForm
              newPassword={newPassword}
              confirmPassword={confirmPassword}
              onNewPasswordChange={setNewPassword}
              onConfirmPasswordChange={setConfirmPassword}
              onResetPassword={() => {
                if (!newPassword || !confirmPassword) {
                  toast.error("Please Enter Both Fields");
                  return;
                } else if (confirmPassword !== newPassword) {
                  toast.error("Both Passwords Must Be Same");
                  return;
                }
                return handleStateChange("login");
              }}
            />
          )}
          <Box display="flex" justifyContent="center" gap={2}>
            <IconButton>
              <Icon icon="logos:google-icon" width={32} height={32} />
            </IconButton>
            <IconButton>
              <Icon icon="logos:facebook" width={32} height={32} />
            </IconButton>
            <IconButton>
              <Icon icon="logos:apple" width={32} height={32} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginIndex;
