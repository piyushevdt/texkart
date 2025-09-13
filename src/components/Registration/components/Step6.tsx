// import {  FormProvider, UseFormReturn } from "react-hook-form";
// import { Box } from "@mui/material";
// import CustomButton from "@/custom/CustomButton";
// import Image from "next/image";
// import RHFUpload from "@/custom/RHFUpload";
// import { Step6FormData } from "../RegistrationIndex";
// import { AnyObjectSchema } from "yup";

// interface Step6Props {
//   nextStep: () => void;
//   methods: UseFormReturn<Step6FormData>;
//   validationSchema: AnyObjectSchema;
// }

// export default function Step6({ nextStep, methods }: Step6Props) {


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
//           alignItems: "center",
//         }}
//       >
//         <Image src="/images/logo.svg" alt="Logo" height={53} width={198} />
//         <RHFUpload name="gstCertificate" label="GST Certificate (PDF/Image)" placeholder="Upload" />
//         <RHFUpload name="bankPassbook" label="Bank Passbook (PDF/Image)" placeholder="Upload" />
//         <RHFUpload name="panCard" label="PAN Card" placeholder="Upload" />
//         <CustomButton
//           gradient
//           onClick={methods.handleSubmit(nextStep)} 
//           sx={{
//             width: { xs: "100%", sm: "322px" },
//             fontSize: { xs: "18px", sm: "20px", md: "22px" },
//           }}
//         >
//           Proceed
//         </CustomButton>
//       </Box>
//     </FormProvider>
//   );
// }