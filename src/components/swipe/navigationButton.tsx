import { Grid2 } from "@mui/material";
import { ReactNode } from "react";

export interface NavigateIconProps {
  id: string;
  position: string;
  icon: ReactNode;
}
export default function NavigationIcon({ id, position, icon }: NavigateIconProps) {
  const isLeft = position === "left";
  return (
    <Grid2
      id={id}
      sx={{
        position: "absolute",
        top: "45%",
        [isLeft ? "left" : "right"]: "4vw",
        zIndex: 1000,
        visibility: "visible",
      }}
    >
      {icon}
    </Grid2>
  );
}
