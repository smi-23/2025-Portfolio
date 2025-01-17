import { HEADERS, Header } from "@/data/header";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <>
      {HEADERS.map((header: Header) => (
        <Link key={header.id} href={`/#${header.id}`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "#000000",
              fontWeight: 700,
              fontSize: 16,
              mx: 2,
              "&:hover": {
                color: "#00cccc",
              },
              "&:active": {
                color: "black",
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
