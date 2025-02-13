"use client";

import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo } from "react";
import type {} from "@mui/material/themeCssVarsAugmentation";

const AppThemeContext = createContext(null);

export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        typography: {
          fontFamily: "var(--font-pretendard)",
        },
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        colorSchemes: {
          light: {
            palette: {
              primary: {
                main: "#fff",
              },
              text: {
                primary: "#000000", // 기본 텍스트 색상 (라이트 모드에서)
              },
            },
          },
          dark: {
            palette: {
              primary: {
                main: "#121212",
              },
              text: {
                primary: "#fff", // 다크 모드에서 텍스트 색상
              },
            },
          },
        },
      }),
    );
  }, []);
  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export const useAppThemeContext = () => useContext(AppThemeContext);
