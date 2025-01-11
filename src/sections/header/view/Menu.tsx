import { HEADER_MENU_ITEMS, HeaderMenuItem } from "@/data/HeaderMenuItem";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <>
      {HEADER_MENU_ITEMS.map((headerMenuItem: HeaderMenuItem) => (
        <Link
          href={`/#${headerMenuItem.id}`} // 페이지에서 해당 위치로 이동
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
            {headerMenuItem.title}
          </Typography>
        </Link>
      ))}
    </>
  );
}
