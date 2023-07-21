"use client";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import themeMui from "@/style/ThemeMUI.json";

import React, { PropsWithChildren } from "react";

function MuiProvider({ children }: PropsWithChildren) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme = createTheme(themeMui as any);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default MuiProvider;
