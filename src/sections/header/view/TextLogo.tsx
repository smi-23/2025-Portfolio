"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
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
        display: "flex",
        gap: 15,
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Image src={"/assets/image/logo.png"} alt="logoImg" width={40} height={40} />
      <Typography
        sx={{
          color: "#000000",
          fontWeight: 700,
          fontSize: 18,
          "&:hover": {
            color: "#00cccc",
          },
        }}
      >
        {text}
      </Typography>
    </Link>
  );
}
