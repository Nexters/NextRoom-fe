"use client";

import { StyledEngineProvider } from "@mui/styled-engine";
import Login from "./login/Login";

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <Login />
    </StyledEngineProvider>
  );
}
