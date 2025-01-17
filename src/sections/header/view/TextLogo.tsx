"use client";
import { Typography } from "@mui/material";
import Link from "next/link";

interface TextLogoProps {
  text: String;
}

export default function TextLogo({ text }: TextLogoProps) {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
      }}
    >
      <Typography
        sx={{
          color: "#000000",
          fontWeight: 700,
          fontSize: 18,
          "&:hover": {
            color: "#22d3d6",
          },
        }}
      >
        {text}
      </Typography>
    </Link>
  );
}
