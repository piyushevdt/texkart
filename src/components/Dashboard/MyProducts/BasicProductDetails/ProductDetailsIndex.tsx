"use client";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";
import InitialDetails from "./components/InitialDetails";

interface TabPanelProps {
  value: string;
  index: string;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{ py: 2, display: value === index ? "block" : "none" }}
    >
      {children}
    </Box>
  );
};

export default function ProductDetailsIndex() {
  const [value, setValue] = React.useState<string>("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "30px", sm: "32px", md: "34px", lg: "36px" }, color: (theme)=> theme.palette.text.secondary }}
      >
        Add your product details
      </Typography>
      <Box sx={{py: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="product details tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            overflowX: "auto",  
            '& .MuiTabs-indicator': {
              backgroundColor: '#F7233C',
            },
            '& .Mui-selected': {
              color: '#F7233C !important',
            },
          }}
        >
         <Tab value="one" label="Initial Details" sx={{ textTransform: "none", fontFamily: "Montserrat, sans-serif" }} />
          <Tab value="two" label="Basic Details" sx={{ textTransform: "none", fontFamily: "Montserrat, sans-serif" }} />
          <Tab value="three" label="Quantity & Technical Details" sx={{ textTransform: "none", fontFamily: "Montserrat, sans-serif" }} />
          <Tab value="four" label="Packing & Dispatch Details" sx={{ textTransform: "none", fontFamily: "Montserrat, sans-serif" }} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index="one">
        <InitialDetails/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Typography variant="body2">Details of Item Two</Typography>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Typography variant="body2">Details of Item Three</Typography>
      </TabPanel>
      <TabPanel value={value} index="four">
        <Typography variant="body2">Details of Item Three</Typography>
      </TabPanel>
    </Box>
  );
}