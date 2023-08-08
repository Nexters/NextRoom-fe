"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/style/theme";

import React, { PropsWithChildren } from "react";

function StyledProvider({ children }: PropsWithChildren) {

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export default StyledProvider;
