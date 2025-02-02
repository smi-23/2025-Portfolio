"use client";

import { CircularProgress, Box } from "@mui/material";
import { useEffect, useState } from "react";

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // 300ms 이후에 로딩 UI를 표시
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <CircularProgress
        sx={{
          color: "#00cccc",
        }}
        size={60}
      />
    </Box>
  );
};

export default Loading;
