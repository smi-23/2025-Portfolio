"use client";

import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo } from "react";
import type {} from "@mui/material/themeCssVarsAugmentation";

const AppThemeContext = createContext(null);

export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        palette: {
          primary: {
            main: `rgb(10, 18, 42)`,
            contrastText: `rgb(255, 255, 255)`,
          },
          secondary: {
            main: `rgb(10, 18, 42)`,
            contrastText: `rgb(255, 255, 255)`,
          },
          text: {
            primary: "#000000", // 기본 텍스트 색상 (라이트 모드에서)
            secondary: "#ffffff", // 다크 모드에서 텍스트 색상
          },
        },
        colorSchemes: {
          light: {
            palette: {
              primary: {
                main: `rgb(10, 18, 42)`,
              },
              secondary: {
                main: `rgb(27, 59, 111)`,
              },
              text: {
                primary: "#000000", // 기본 텍스트 색상 (라이트 모드에서)
              },
            },
          },
          dark: {
            palette: {
              primary: {
                main: `rgb(10, 18, 42)`,
              },
              secondary: {
                main: `rgb(27, 59, 111)`,
              },
              text: {
                primary: "#ffffff", // 다크 모드에서 텍스트 색상
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
