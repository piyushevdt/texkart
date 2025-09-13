import { Button, ButtonProps, useTheme } from '@mui/material';
import { FC } from 'react';

interface CustomButtonProps extends ButtonProps {
  gradient?: boolean; 
}

const CustomButton: FC<CustomButtonProps> = ({ gradient = false, sx, ...props }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        // mt: 2,
        background: gradient ? theme.palette.backgroundGradient : theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: "9px",
        textTransform: "none",
        // '&:hover': {
         //   background: gradient
        //     ? 'linear-gradient(90.9deg, #F73A37 0%, #FC8F2E 101.51%)'
        //     : theme.palette.primary.dark,
        // },
        ...sx, 
      }}
      {...props} 
    />
  );
};

export default CustomButton;
