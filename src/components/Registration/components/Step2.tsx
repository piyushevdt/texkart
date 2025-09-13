import { Box } from "@mui/material";
import RHFTextField from "@/custom/RHFTextField";
import CustomButton from "@/custom/CustomButton";
import Image from "next/image";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { Step2FormData } from "../RegistrationIndex";

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
  methods: UseFormReturn<Step2FormData>;
  validationSchema: AnyObjectSchema;
}

export default function Step2({ nextStep, methods, prevStep }: Step2Props) {
  const onSubmit = (data: Step2FormData) => {
    console.log("Step 2 data:", data);
    nextStep();
  };

  return (
    <FormProvider {...methods}>
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
        <RHFTextField name="password" label="Password" type="password" />
        <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap"
          }}
        >
          <CustomButton
            onClick={prevStep}
            sx={{
              width: { xs: "100%", sm: "200px" },
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              background: "#F0F0F0",
              color: "black",
              "&:hover": {
                background: "#E0E0E0",
              },
            }}
          >
            Back
          </CustomButton>
          <CustomButton
            gradient
            onClick={methods.handleSubmit(onSubmit)}
            sx={{
              width: { xs: "100%", sm: "200px" },
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
            }}
          >
            Save & Next
          </CustomButton>
        </Box>
      </Box>
    </FormProvider>
  );
}
