import { Stack, StackProps, Typography } from "@mui/material";
import React from "react";

export interface sectionLayoutProps extends StackProps {
  id: string;
  title: string;
  children: React.ReactNode;
}
export default function SectionLayout({ id, title, children, ...stackProps }: sectionLayoutProps) {
  return (
    <div id={id}>
      <Stack
        alignItems={"center"}
        sx={{
          px: 1,
          py: 10,
          width: "100%",
          ...stackProps.sx,
        }}
        spacing={2}
        {...stackProps}
      >
        <div style={{ marginBottom: 20 }}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
        </div>
        {children}
      </Stack>
    </div>
  );
}