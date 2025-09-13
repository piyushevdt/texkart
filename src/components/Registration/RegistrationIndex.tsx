"use client";
import { useState } from "react";
import { Box, Paper } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast"; 

const step1ValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits")
    .required("Mobile Number is required"),
});

const step2ValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export interface Step1FormData {
  name: string;
  email: string;
  mobileNumber: string;
}
export interface Step2FormData {
  password: string;
  confirmPassword: string;
}

export default function RegistrationIndex() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    const formData = step === 0 
      ? step1Methods.getValues() 
      : step2Methods.getValues();
    
    console.log("Step", step + 1, "form data:", formData);
    setStep((prev) => prev + 1);
  };

  const goToHome = () => {
    const step2Data = step2Methods.getValues();
    console.log("Final form submission data:", {
      ...step1Methods.getValues(),
      ...step2Data
    });
    
    // Use toast instead of Snackbar
    toast.success("Your form has been submitted", {
      duration: 3000,
      position: "top-right",
    });
    
    setTimeout(() => {
      router.push("/");
    }, 1000); 
  };

  const step1Methods = useForm({
    resolver: yupResolver(step1ValidationSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
    },
  });
  
  const step2Methods = useForm({
    resolver: yupResolver(step2ValidationSchema),
    mode: "onBlur",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  
  const steps = [
    <Step1
      key="step1"
      nextStep={nextStep}
      methods={step1Methods as UseFormReturn<Step1FormData>} 
    />,
    <Step2
      key="step2"
      nextStep={goToHome}
      prevStep={prevStep} 
      methods={step2Methods as UseFormReturn<Step2FormData>} 
      validationSchema={step2ValidationSchema} 
    />,
  ];

  return (
    <FormProvider {...step1Methods}>
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr",  md: "400px 1fr" },
          height: {xs: "100%", md: "100vh"},
        }}
      >
        <Sidebar activeStep={step} />
        <Paper
          sx={{
            flex: 1,
            padding: { xs: 2, sm: 3, md: 6 },
            borderRadius: 0,
            background: "#fff",
            boxShadow: "none"
          }}
        >
          {steps[step]}
        </Paper>
      </Box>
    </FormProvider>
  );
}