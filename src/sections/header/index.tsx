"use client";
import { AppBar, Toolbar } from "@mui/material";
import TextLogo from "./view/TextLogo";
import HeaderMenu from "./view/Menu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false); // 섹션이 아직 없어서 임시로 true로 설정
  const pathname = usePathname();

  // 스크롤 위치가 5px초과라면 setShowHeader가 true로 바뀌고 헤더가 보이게 됨
  const handleHeaderByScroll = () => {
    const currentScrollPos = window.scrollY;

    if (pathname === "/") {
      setShowHeader(currentScrollPos > 5);
    }
  };

  useEffect(() => {
    // 홈 위치가 아닌 경우 헤더를 보이게 함
    if (pathname !== "/") {
      setShowHeader(true);
    }

    // 스크롤 이벤트 발생 시 handleHeaderByScroll 함수 호출
    window.addEventListener("scroll", handleHeaderByScroll);
    return () => window.removeEventListener("scroll", handleHeaderByScroll);
  }, []);

  return (
    showHeader && (
      <AppBar
        component="div"
        elevation={0}
        sx={{
          display: "block",
          backgroundColor: "gray",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex", // 수평으로 배치
            justifyContent: "space-between", // 왼쪽과 오른쪽 끝으로 요소 배치
          }}
        >
          {/* 홈 버튼을 뒤에 추가하는게 좋겠네 */}
          <TextLogo text={"About Me"} />
          <div style={{ display: "flex" }}>
            <HeaderMenu />
          </div>
        </Toolbar>
      </AppBar>
    )
  );
}
