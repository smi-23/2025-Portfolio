"use client";
import { HEADERS, Header } from "@/data/header";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function HeaderMenu() {
  const theme = useTheme();
  return (
    <>
      {HEADERS.map((header: Header) => (
        <Link key={header.id} href={`/#${header.id}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              fontSize: 16,
              mx: 2,
              "&:hover": {
                color: "#00cccc",
              },
              "&:active": {
                color: theme.palette.text.primary,
              },
            }}
          >
            {header.title}
          </Typography>
        </Link>
      ))}
    </>
  );
}
