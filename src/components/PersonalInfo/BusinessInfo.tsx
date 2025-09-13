// "use client";

// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import {
//   Grid,
//   TextField,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Container,
// } from "@mui/material";
// import CustomButton from "@/custom/CustomButton";

// const schema = yup.object().shape({
//   fullName: yup.string().required("Full Name is required"),
//   companyName: yup.string().required("Company Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   phoneNumber: yup
//     .string()
//     .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
//     .required("Phone number is required"),
//   primaryContact: yup.string().required("Primary Contact Person is required"),
//   businessType: yup.string().required("Business Type is required"),
//   gstNumber: yup.string().required("GST Number is required"),
//   businessAddress: yup.string().required("Business Address is required"),
//   state: yup.string().required("State is required"),
//   city: yup.string().required("City is required"),
//   pincode: yup
//     .string()
//     .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
//     .required("Pincode is required"),
// });

// const BusinessForm = () => {
//   interface BusinessFormData {
//     fullName: string;
//     companyName: string;
//     email: string;
//     phoneNumber: string;
//     primaryContact: string;
//     businessType: string;
//     gstNumber: string;
//     businessAddress: string;
//     state: string;
//     city: string;
//     pincode: string;
//   }

//   const { handleSubmit, control, formState: { errors } } = useForm<BusinessFormData>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       fullName: "",
//       companyName: "",
//       email: "",
//       phoneNumber: "",
//       primaryContact: "",
//       businessType: "",
//       gstNumber: "",
//       businessAddress: "",
//       state: "",
//       city: "",
//       pincode: "",
//     },
//   });

//   const onSubmit = (data: BusinessFormData) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <Container sx={{ py: {xs: 2, md: 8} }}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={4}>
//           {/* Full Name */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="fullName"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Full Name"
//                   error={!!errors.fullName}
//                   helperText={errors.fullName?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Company Name */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="companyName"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Company Name"
//                   error={!!errors.companyName}
//                   helperText={errors.companyName?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="email"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Email"
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Phone Number */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="phoneNumber"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Primary Phone Number"
//                   error={!!errors.phoneNumber}
//                   helperText={errors.phoneNumber?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Primary Contact Person */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="primaryContact"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Primary Contact Person"
//                   error={!!errors.primaryContact}
//                   helperText={errors.primaryContact?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Business Type */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="businessType"
//               control={control}
//               render={({ field }) => (
//                 <FormControl fullWidth error={!!errors.businessType} size="small">
//                   <InputLabel>Business Type</InputLabel>
//                   <Select
//                     {...field}
//                     label="Business Type"
//                     sx={{
//                       backgroundColor: "#F9F9F9",
//                       borderRadius: "8px",
//                     }}
//                   >
//                     <MenuItem value="Retail">Retail</MenuItem>
//                     <MenuItem value="Wholesale">Wholesale</MenuItem>
//                     <MenuItem value="Manufacturing">Manufacturing</MenuItem>
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </Grid>

//           {/* GST Number */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="gstNumber"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="GST Number"
//                   error={!!errors.gstNumber}
//                   helperText={errors.gstNumber?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Business Address */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="businessAddress"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Business Address"
//                   error={!!errors.businessAddress}
//                   helperText={errors.businessAddress?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* State */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="state"
//               control={control}
//               render={({ field }) => (
//                 <FormControl fullWidth error={!!errors.state} size="small">
//                   <InputLabel>State</InputLabel>
//                   <Select
//                     {...field}
//                     label="State"
//                     sx={{
//                       backgroundColor: "#F9F9F9",
//                       borderRadius: "8px",
//                     }}
//                   >
//                     <MenuItem value="Maharashtra">Maharashtra</MenuItem>
//                     <MenuItem value="Karnataka">Karnataka</MenuItem>
//                     <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </Grid>

//           {/* City */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="city"
//               control={control}
//               render={({ field }) => (
//                 <FormControl fullWidth error={!!errors.city} size="small">
//                   <InputLabel>City</InputLabel>
//                   <Select
//                     {...field}
//                     label="City"
//                     sx={{
//                       backgroundColor: "#F9F9F9",
//                       borderRadius: "8px",
//                     }}
//                   >
//                     <MenuItem value="Mumbai">Mumbai</MenuItem>
//                     <MenuItem value="Bangalore">Bangalore</MenuItem>
//                     <MenuItem value="Chennai">Chennai</MenuItem>
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </Grid>

//           {/* Pincode */}
//           <Grid item xs={12} sm={6}>
//             <Controller
//               name="pincode"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   size="small"
//                   {...field}
//                   fullWidth
//                   label="Pincode"
//                   error={!!errors.pincode}
//                   helperText={errors.pincode?.message}
//                   sx={{
//                     backgroundColor: "#F9F9F9",
//                     "& fieldset": {
//                       borderRadius: "8px"
//                     }
//                   }}
//                 />
//               )}
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12} sm={6}>
//             <CustomButton
//               type="submit"
//               gradient
//               size="small"
//               sx={{ width: "100%", height: "100%", fontSize: "20px" }}
//             >
//               Submit
//             </CustomButton>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default BusinessForm;

"use client";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Grid,
  Container,
} from "@mui/material";
import CustomButton from "@/custom/CustomButton";
import RHFTextField from "@/custom/RHFTextField"; // Assuming you have a custom RHFTextField component
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
  gstNumber: yup.string().required("GST Number is required"),
  businessAddress: yup.string().required("Business Address is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
});

const BusinessForm = () => {
  interface BusinessFormData {
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
  }

  const methods = useForm<BusinessFormData>({
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
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: BusinessFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <Container sx={{ py: { xs: 2, md: 8 } }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {/* Full Name */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="fullName" label="Full Name" />
            </Grid>

            {/* Company Name */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="companyName" label="Company Name" />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="email" label="Email" />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="phoneNumber" label="Primary Phone Number" />
            </Grid>

            {/* Primary Contact Person */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="primaryContact" label="Primary Contact Person" />
            </Grid>

            {/* Business Type */}
            <Grid item xs={12} sm={6}>
              <RHFAutocomplete
                name="businessType"
                label="Business Type"
                options={["Retail", "Wholesale", "Manufacturing"]}
                fullWidth
                size="medium"
              />
            </Grid>


            {/* GST Number */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="gstNumber" label="GST Number" />
            </Grid>

            {/* Business Address */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="businessAddress" label="Business Address" />
            </Grid>

            {/* State */}
            <Grid item xs={12} sm={6}>
              <RHFAutocomplete
                name="state"
                label="State"
                options={["Maharashtra", "Karnataka", "Tamil Nadu"]}
                fullWidth
                size="medium"
              />
            </Grid>


            {/* City */}
            <Grid item xs={12} sm={6}>
              <RHFAutocomplete
                name="city"
                label="City"
                options={["Mumbai", "Bangalore", "Chennai"]}
                fullWidth
                size="medium"
              />
            </Grid>


            {/* Pincode */}
            <Grid item xs={12} sm={6}>
              <RHFTextField name="pincode" label="Pincode" />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sm={6}>
              <CustomButton
                type="submit"
                gradient
                size="small"
                sx={{ width: "100%", height: "100%", fontSize: "20px" }}
              >
                Submit
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Container>
  );
};

export default BusinessForm;