import { Box } from "@mui/material";
import React from "react";

export default function Location() {
  return (
    <Box sx={{my: {xs: 3, md: 19}}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.52235320774!2d76.88171935493969!3d29.3963358600469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1741347980223!5m2!1sen!2sin"
        width="100%"
        height="400"
        loading="lazy"
      ></iframe>
    </Box>
  );
}
