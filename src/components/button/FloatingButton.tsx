"use client";
import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

export default function FloatingButton({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <Stack
      position={"fixed"}
      direction={"column"}
      spacing={1}
      sx={{
        bottom: "10vh",
        right: "15vh",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        borderColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        borderWidth: "4px",
        borderStyle: "solid",
        padding: 1,
        zIndex: 1000,
        opacity: 1,
      }}
    >
      {children}
    </Stack>
  );
}
