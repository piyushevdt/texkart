"use client";
import {
  Box,
} from "@mui/material";
import TodaysStats from "./components/TodaysStats";
import ListOfOrder from "./components/ListOfOrder";


export default function Home() {

  return (
    <Box>
      <TodaysStats/>
      <ListOfOrder/>
    </Box>
  );
}
