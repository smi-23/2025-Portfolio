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
        bottom: 100,
        left: "80%",
        backgroundColor: theme.palette.mode === "dark" ? "#333333" : "#f4f6f8",
        borderRadius: 20,
        padding: 1,
        zIndex: 1000,
      }}
    >
      {children}
    </Stack>
  );
}
