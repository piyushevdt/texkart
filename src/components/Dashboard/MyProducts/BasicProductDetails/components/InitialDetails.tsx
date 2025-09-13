import CustomButton from "@/custom/CustomButton";
import RHFAutocomplete from "@/custom/RHFAutoComplete";
import RHFTextField from "@/custom/RHFTextField";
import RHFUpload from "@/custom/RHFUpload";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function InitialDetails() {
  const methods = useForm();
  const [isParentProduct, setIsParentProduct] = useState(true);

  return (
    <FormProvider {...methods}>
      <Box
        rowGap={4}
        columnGap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={isParentProduct}
                onChange={(e) => setIsParentProduct(e.target.checked)}
              />
            }
            label="Parent Product"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Deal Of The Day"
            sx={{ color: "black" }}
          />
        </Box>
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
          }}
        >
           <FormControlLabel
          control={<Checkbox />}
          label="Best Seller"
          sx={{ color: "black" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Trending Products"
          sx={{ color: "black" }}
        />
        </Box>
        <RHFAutocomplete
          name="category"
          label="Category"
          options={["0 year", "1 year", "2 years"]}
          fullWidth
        />

        <RHFAutocomplete
          name="subCategory"
          label="Sub-Category"
          options={["Fabric", "Yarn", "Cotton", "Jute", "Wool", "Silk"]}
          fullWidth
        />
        <RHFTextField name="productName" label="Product Name" />

        {!isParentProduct && (
          <RHFAutocomplete
            name="parentProduct"
            label="Select Parent Product"
            options={["Fabric", "Yarn", "Cotton", "Jute", "Wool", "Silk"]}
            fullWidth
          />
        )}
      </Box>
      <Box
        rowGap={4}
        columnGap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        mt={4}
      >
        {" "}
        <RHFUpload name="thumbnail" label="Thumbnail" placeholder="Upload" />
        <RHFUpload
          name="sliderImage"
          label="Slider Image"
          placeholder="Upload"
        />
        <RHFTextField
          name="shortDescription"
          label="Short Description"
          multiline
          minRows={3}
        />
        <RHFTextField
          name="longDescription"
          label="Long Description"
          multiline
          minRows={3}
        />
        <RHFTextField name="currentStock" label="Current Stock" />
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <CustomButton gradient sx={{width:200,height:50 ,fontSize:'20px', mt: 4}} >Save & Next</CustomButton>
      </Box>
    </FormProvider>
  );
}
