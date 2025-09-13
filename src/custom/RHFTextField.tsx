import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, IconButton, InputAdornment, type TextFieldProps } from '@mui/material';
import { Icon } from '@iconify/react';

interface RHFTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  helperText?: React.ReactNode;
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({ name, helperText, type, ...other }) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          error={!!error}
          helperText={error ? error?.message : helperText}
          InputProps={{
            endAdornment: type === "password" && (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: 'white',
            '& .MuiInputBase-input': { backgroundColor: 'white' },
            borderRadius: "8px",
            "& fieldset": {
              borderRadius: "8px",
              borderColor: "#FCA120",
            },
          }}
          {...other}
        />
      )}
    />
  );
};

RHFTextField.propTypes = {
  name: PropTypes.string.isRequired,
  helperText: PropTypes.node,
  type: PropTypes.string,
};

export default RHFTextField;
