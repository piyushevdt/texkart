import { Box } from "@mui/material";
import RHFTextField from "@/custom/RHFTextField";
import CustomButton from "@/custom/CustomButton";
import Image from "next/image";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { Step1FormData } from "../RegistrationIndex"; 

interface Step1Props {
  nextStep: () => void;
  methods: UseFormReturn<Step1FormData>; 
}

export default function Step1({ nextStep }: Step1Props) {
  const { handleSubmit } = useFormContext<Step1FormData>(); 

  const onSubmit = (data: Step1FormData) => {
    console.log("Step 1 data:", data); 
    nextStep(); 
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: { xs: 1, md: 3 },
        alignItems: "center",
      }}
    >
      <Image src="/images/logo.svg" alt="Logo" height={53} width={198} />
      <RHFTextField name="name" label="Name" />
      <RHFTextField name="email" label="Email" />
      <RHFTextField name="mobileNumber" label="Mobile Number" />
     <Box sx={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
     <CustomButton
        gradient
        onClick={handleSubmit(onSubmit)}
        sx={{ width: { xs: "100%", sm: "200px" }, fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
      >
        Save & Next
      </CustomButton>
     </Box>
    </Box>
  );
}