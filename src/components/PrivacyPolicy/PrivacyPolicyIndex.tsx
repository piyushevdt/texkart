"use client";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PrivacyHero from "./components/PrivacyHero";
import PolicyContents from "./components/PolicyContents";

export default function PrivacyPolicyIndex() {
  return (
    <Box>
      <PrivacyHero />
      <Container>
        <PolicyContents />
      </Container>
    </Box>
  );
}
