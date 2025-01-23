"use client";
import { Stack, Typography, useTheme } from "@mui/material";
import Contact from "./view/Contact";

export default function Footer() {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.54)";
  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          width: "100%",
          py: 10,
          px: 1,
        }}
      >
        <Typography
          variant="body2"
          color={textColor}
          textAlign={"center"}
        >
          Copyright © 2025, All right reserved.
        </Typography>
        <Contact />
      </Stack>
    </>
  );
}
