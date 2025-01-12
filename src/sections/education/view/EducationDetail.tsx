"use client";
import { Stack, Typography } from "@mui/material";

interface EducationDtailProps {
  description: string;
  mdFilePath: string;
}
export default function EducationDetail({ description, mdFilePath }: EducationDtailProps) {
  return (
    <Stack sx={{ ml: 3 }}>
      <Stack
        sx={{
          width: "100%",
          p: 2,

          backgroundColor: "#efefef",
        }}
      >
        <Typography>{description}</Typography>
      </Stack>
      <Stack sx={{ paddingLeft: 1, mt: 3 }}>여기에 마크다운 넣고 싶어</Stack>
    </Stack>
  );
}
