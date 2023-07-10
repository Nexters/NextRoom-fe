"use client";

import { useContext, useMemo } from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import {
  ThemeModeContext,
  ThemeSchemeContext,
  getMUIComponents,
  getMUIPalette,
} from "../..";

interface M3Props {
  children?: React.ReactNode;
}

const M3Theme = ({ children }: M3Props) => {
  // const { themeMode } = useContext(ThemeModeContext);
  const themeMode = "light";
  const { themeScheme } = useContext(ThemeSchemeContext);

  const m3Theme = useMemo(() => {
    const muiPalette = getMUIPalette(themeMode, themeScheme);

    let theme = createTheme(muiPalette);
    theme = deepmerge(theme, getMUIComponents(theme));

    return theme;
  }, [themeMode, themeScheme]);

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
        <ThemeProvider theme={m3Theme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
};

export default M3Theme;
