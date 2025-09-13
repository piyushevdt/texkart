import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Autocomplete, TextField, type AutocompleteProps } from "@mui/material";

interface RHFAutocompleteProps<T>
  extends Omit<
    AutocompleteProps<T, boolean, boolean, boolean>,
    "name" | "renderInput"
  > {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
}

const RHFAutocomplete = <T,>({
  name,
  label,
  helperText,
  placeholder,
  multiple = false,
  ...other
}: RHFAutocompleteProps<T>) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ref }, field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          multiple={multiple}
          value={value ?? (multiple ? [] : null)}
          onChange={(_, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          componentsProps={{
            paper: { sx: { backgroundColor: "white" } }, 
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              inputRef={ref}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& fieldset": {
                  borderRadius: "8px",
                  borderColor: "#FCA120",
                },
                "& .MuiInputBase-input": { backgroundColor: "white" },
              }}
            />
          )}
          {...other}
        />
      )}
    />
  );
};

export default RHFAutocomplete;
