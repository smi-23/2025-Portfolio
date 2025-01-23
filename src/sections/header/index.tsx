"use client";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import TextLogo from "./view/TextLogo";
import HeaderMenu from "./view/Menu";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useColorScheme } from "@mui/material/styles";
import TooltipIcon from "@/components/icon/tooltipIcon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";

export default function Header() {
  const { mode, systemMode, setMode } = useColorScheme();
  const [showHeader, setShowHeader] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const toggleDarkTheme = React.useCallback(() => {
    if (mode === "system") {
      setMode(systemMode === "dark" ? "light" : "dark");
    } else {
      setMode(mode === "dark" ? "light" : "dark");
    }
  }, [mode, systemMode]);

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
          backgroundColor: "white",
          borderBottom: "1px solid",
          borderColor: "#d1d1d1",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "lg",
            mx: "auto",
          }}
        >
          <TextLogo text={"About Me"} />
          <div style={{ display: "flex", alignItems: "center" }}>
            {isMobile && <HeaderMenu />}
            <TooltipIcon
              title={"theme button"}
              Icon={mode === "dark" || systemMode === "dark" ? WbSunnyIcon : BedtimeRoundedIcon}
              onClick={() => {
                toggleDarkTheme();
              }}
              sx={{ color: mode === "dark" || systemMode === "dark" ? "white" : "black" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  );
}
