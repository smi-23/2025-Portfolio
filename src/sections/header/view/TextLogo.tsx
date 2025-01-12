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
        textDecoration: "none", // 밑줄이 생기지 않게 함
        marginRight: "8px",
      }}
    >
      <Typography
        sx={{
          color: "#000000",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        {text}
        <span
          style={{
            color: "red", // 초록색으로 변경
          }}
        >
          .
        </span>
      </Typography>
    </Link>
  );
}
