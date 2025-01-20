"use client";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

export default function FloatingButton({ children }: { children: ReactNode }) {
  return (
    <Stack
      position={"fixed"}
      direction={"column"}
      spacing={1}
      sx={{
        bottom: 100,
        left: "80%",
        backgroundColor: "#f4f6f8",
        borderRadius: 20,
        padding: 1,
        zIndex: 1000,
      }}
    >
      {children}
    </Stack>
  );
}
