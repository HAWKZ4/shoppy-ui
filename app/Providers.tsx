"use client"

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Container } from "@mui/material";
import darkTheme from "./dark.theme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>{children}</Container>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}