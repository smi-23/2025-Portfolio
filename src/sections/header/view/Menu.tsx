import { HEADERS, Header } from "@/data/header";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <>
      {HEADERS.map((header: Header) => (
        <Link
          key={header.id} // key속 성 추가
          href={`/#${header.id}`} // 페이지에서 해당 위치로 이동
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontWeight: 700,
              fontSize: 16,
              mx: 2,
            }}
          >
            {header.title}
          </Typography>
        </Link>
      ))}
    </>
  );
}
