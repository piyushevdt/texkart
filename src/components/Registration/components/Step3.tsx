// import { Box } from "@mui/material";
// import RHFTextField from "@/custom/RHFTextField";
// import CustomButton from "@/custom/CustomButton";
// import Image from "next/image";
// import { FormProvider, UseFormReturn } from "react-hook-form";
// import { Step3FormData } from "../RegistrationIndex";
// import { AnyObjectSchema } from "yup";

// interface Step3Props {
//   nextStep: () => void;
//   methods: UseFormReturn<Step3FormData>; 
//   validationSchema: AnyObjectSchema; 
// }

// export default function Step3({ nextStep, methods }: Step3Props) {

//   return (
//     <FormProvider {...methods}>
//       <Box
//         component="form"
//         noValidate
//         autoComplete="off"
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 4,
//           p: { xs: 1, md: 3 },
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Image src="/images/logo.svg" alt="Logo" height={53} width={198} />
//         </Box>
//         <RHFTextField name="companyName" label="Company/Firm Name" />
//         <Box
//           rowGap={4}
//           columnGap={3}
//           display="grid"
//           gridTemplateColumns={{
//             xs: "repeat(1, 1fr)",
//             md: "repeat(2, 1fr)",
//           }}
//         >
//           <RHFTextField fullWidth name="uniqueSupplierID" label="Unique Supplier ID" />
//           <RHFTextField fullWidth name="companyType" label="Company Type" />
//           <RHFTextField fullWidth name="contactPerson" label="Primary Contact Person" />
//           <RHFTextField fullWidth name="businessType" label="Business Type" />
//           <RHFTextField fullWidth name="gstNo" label="GST No." />
//           <RHFTextField fullWidth name="pan" label="PAN" />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <CustomButton
//             gradient
//             onClick={methods.handleSubmit(nextStep)} // Trigger validation before proceeding
//             sx={{
//               width: { xs: "100%", sm: "322px" },
//               fontSize: { xs: "18px", sm: "20px", md: "22px" },
//             }}
//           >
//             Proceed
//           </CustomButton>
//         </Box>
//       </Box>
//     </FormProvider>
//   );
// }