import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface CustomArrowProps {
  direction: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function CustomArrow({ direction, onClick }: CustomArrowProps) {
  const isLeft = direction === "left";
  return (
    <Tooltip title={isLeft ? "Prev" : "Next"}>
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "45%",
          [isLeft ? "left" : "right"]: "-50px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          zIndex: 2,
        }}
      >
        {isLeft ? <NavigateBeforeIcon fontSize="large" /> : <NavigateNextIcon fontSize="large" />}
      </IconButton>
    </Tooltip>
  );
}
