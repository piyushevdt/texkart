// import { FormProvider, useWatch, UseFormReturn } from "react-hook-form";
// import RHFTextField from "@/custom/RHFTextField";
// import { Box } from "@mui/material";
// import CustomButton from "@/custom/CustomButton";
// import Image from "next/image";
// import RHFAutocomplete from "@/custom/RHFAutoComplete";
// import { Step4FormData } from "../RegistrationIndex";
// import { AnyObjectSchema } from "yup";

// interface Step4Props {
//   nextStep: () => void;
//   methods: UseFormReturn<Step4FormData>; 
//   validationSchema: AnyObjectSchema; 
// }

// const stateCityMap: Record<string, string[]> = {
//   "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
//   "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
//   "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior"],
// };

// export default function Step4({ nextStep, methods }: Step4Props) {

//   const selectedState = useWatch({ control: methods.control, name: "state" });

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
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <Image src="/images/logo.svg" alt="Logo" height={53} width={198} />
//         </Box>

//         <RHFTextField name="address" label="Your Address" />

//         <Box
//           rowGap={4}
//           columnGap={3}
//           display="grid"
//           gridTemplateColumns={{
//             xs: "repeat(1, 1fr)",
//             md: "repeat(2, 1fr)",
//           }}
//         >
//           <RHFAutocomplete
//             name="state"
//             label="State"
//             options={Object.keys(stateCityMap)}
//             fullWidth
//           />

//           <RHFAutocomplete
//             name="city"
//             label="City"
//             options={selectedState ? stateCityMap[selectedState] || [] : []}
//             fullWidth
//             disabled={!selectedState}
//           />
//         </Box>

//         <RHFTextField fullWidth name="pinCode" label="Pin Code" />

//         <Box
//           rowGap={4}
//           columnGap={3}
//           display="grid"
//           gridTemplateColumns={{
//             xs: "repeat(1, 1fr)",
//             md: "repeat(2, 1fr)",
//           }}
//         >
//           <RHFAutocomplete
//             name="yearsInBusiness"
//             label="Years In Business"
//             options={["0 year", "1 year", "2 years"]}
//             fullWidth
//           />

//           <RHFAutocomplete
//             name="productsYouSell"
//             label="Products You Sell"
//             options={["Fabric", "Yarn", "Cotton", "Jute", "Wool", "Silk"]}
//             fullWidth
//           />
//         </Box>

//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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