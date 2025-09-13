// import {FormProvider, UseFormReturn } from "react-hook-form";
// import RHFTextField from "@/custom/RHFTextField";
// import { Box } from "@mui/material";
// import CustomButton from "@/custom/CustomButton";
// import Image from "next/image";
// import { Step5FormData } from "../RegistrationIndex";
// import { AnyObjectSchema } from "yup";

// interface Step5Props {
//   nextStep: () => void;
//   methods: UseFormReturn<Step5FormData>; 
//   validationSchema: AnyObjectSchema;
// }

// export default function Step5({ nextStep,  methods }: Step5Props) {


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
//         <RHFTextField name="accountNo" label="Enter Your Account No." />
//         <Box
//           rowGap={4}
//           columnGap={3}
//           display="grid"
//           gridTemplateColumns={{
//             xs: "repeat(1, 1fr)",
//             md: "repeat(2, 1fr)",
//           }}
//         >
//           <RHFTextField fullWidth name="ifscCode" label="Enter IFSC Code" />
//           <RHFTextField fullWidth name="accountHolderName" label="Account Holder Name" />
//         </Box>
//         <RHFTextField fullWidth name="accountType" label="Account Type" />
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <CustomButton
//             gradient
//             onClick={methods.handleSubmit(nextStep)} 
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