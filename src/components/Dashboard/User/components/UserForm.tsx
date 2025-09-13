"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Box } from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import RHFTextField from "@/custom/RHFTextField";
import RHFAutocomplete from "@/custom/RHFAutoComplete";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  companyName: yup.string().required("Company Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  primaryContact: yup.string().required("Primary Contact Person is required"),
  businessType: yup.string().required("Business Type is required"),
  gstNumber: yup
    .string()
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST No."
    )
    .required("GST No. is required"),
  // 11ABCDE1234F5Z6 Sample GST Number
  businessAddress: yup.string().required("Business Address is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
  accountNo: yup
    .string()
    .required("Account Number is required")
    .matches(/^\d{9,18}$/, "Account Number must be between 9 and 18 digits"),
  ifscCode: yup
    .string()
    .required("IFSC Code is required")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code"),
  // IOBA0123456 Sample IFSC
});

const UserForm = () => {
  interface UserFormData {
    fullName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    primaryContact: string;
    businessType: string;
    gstNumber: string;
    businessAddress: string;
    state: string;
    city: string;
    pincode: string;
    accountNo: string;
    ifscCode: string;
  }

  const methods = useForm<UserFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      primaryContact: "",
      businessType: "",
      gstNumber: "",
      businessAddress: "",
      state: "",
      city: "",
      pincode: "",
      accountNo: "",
      ifscCode: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: UserFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <Box >
      <Button
        size="large"
        variant="contained"
        sx={{
          "&:hover": {
            background: (theme) => theme.palette.backgroundGradient,
          },
          mb: 2,
          textTransform: "none",
          // background: (theme) => theme.palette.banner,
          boxShadow: "none",
          borderRadius: "8px",
        }}
      >
        Edit
      </Button>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            rowGap={2}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            py={2}
          >
            <RHFTextField name="fullName" label="Full Name" />

            <RHFTextField name="companyName" label="Company Name" />

            <RHFTextField name="email" label="Email" />

            <RHFTextField name="phoneNumber" label="Primary Phone Number" />

            <RHFTextField
              name="primaryContact"
              label="Primary Contact Person"
            />

            <RHFAutocomplete
              name="businessType"
              label="Business Type"
              options={["Retail", "Wholesale", "Manufacturing"]}
              fullWidth
              size="medium"
            />

            <RHFTextField name="gstNumber" label="GST Number" />

            <RHFTextField name="businessAddress" label="Business Address" />

            <RHFAutocomplete
              name="state"
              label="State"
              options={["Maharashtra", "Karnataka", "Tamil Nadu"]}
              fullWidth
              size="medium"
            />

            <RHFAutocomplete
              name="city"
              label="City"
              options={["Mumbai", "Bangalore", "Chennai"]}
              fullWidth
              size="medium"
            />

            <RHFTextField name="pincode" label="Pincode" />

            <Box
              rowGap={4}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(2, 1fr)",
              }}
            >
              <RHFTextField name="accountNo" label="Account No. " />

              <RHFTextField name="ifscCode" label="IFSC Code" />
            </Box>

          </Box>
            <CustomButton
              type="submit"
              gradient
              size="small"
              sx={{ width: "100%", height: "100%", fontSize: "20px", mt: 2 }}
            >
              Submit
            </CustomButton>
        </form>
      </FormProvider>
    </Box>
  );
};

export default UserForm;
