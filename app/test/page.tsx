"use client";
import MainDrawer from "@/components/common/Drawer/Drawer";
import { StyledEngineProvider } from "@mui/material";
import React from "react";

type Props = {};

const TestPage = (props: Props) => {
  return (
    // <StyledEngineProvider injectFirst>
    <MainDrawer open={true}>hello</MainDrawer>
    // </StyledEngineProvider>
  );
};

export default TestPage;
