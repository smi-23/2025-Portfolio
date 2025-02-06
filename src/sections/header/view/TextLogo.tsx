"use client";
import { Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface TextLogoProps {
  text: string;
}

export default function TextLogo({ text }: TextLogoProps) {
  const theme = useTheme();
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        display: "flex",
        gap: 15,
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Image src={"/assets/icon/portfolio.png"} alt="logoImg" width={40} height={40} />
      <Typography
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 700,
          fontSize: "1.2rem",
          "&:hover": {
            color: "#00cccc",
          },
          "&:active": {
            color: theme.palette.text.primary,
          },
        }}
      >
        {text}
      </Typography>
    </Link>
  );
}
