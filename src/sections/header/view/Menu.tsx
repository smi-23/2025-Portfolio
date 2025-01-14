import { HEADERS, Header } from "@/data/header";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <>
      {HEADERS.map((header: Header) => (
        <Link
          key={header.id}
          href={`/#${header.id}`} // 페이지에서 해당 위치로 이동
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontWeight: 700,
              fontSize: 16,
              mx: 2,
              "&:hover": {
                borderBottom: "2px solid red", // 마우스를 올렸을 때 밑줄을 빨간색으로 설정
              },
              "&:focus": {
                borderBottom: "2px solid white", // 클릭 후 포커스되었을 때 밑줄을 빨간색으로 설정
              },
              "&:active": {
                borderBottom: "2px solid white", // 클릭 시 밑줄을 빨간색으로 설정
              },
            }}
          >
            {header.title}
            <span style={{ color: "red" }}>.</span>
          </Typography>
        </Link>
      ))}
    </>
  );
}
