import { Stack, StackProps, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export interface sectionLayoutProps extends StackProps {
  id: string;
  title: string;
  children: ReactNode;
}
export default function SectionLayout({ id, title, children, sx }: sectionLayoutProps) {
  const mergedSx = {
    px: 1,
    py: 10,
    width: "100%",
    ...sx,
  };
  return (
    <div id={id}>
      <Stack alignItems={"center"} sx={mergedSx} spacing={7}>
        <div>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </div>
        {children}
      </Stack>
    </div>
  );
}
