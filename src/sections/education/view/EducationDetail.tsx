"use client";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import { Stack, Typography } from "@mui/material";

interface EducationDtailProps {
  description: string;
  mdFilePath: string;
}
export default function EducationDetail({ description, mdFilePath }: EducationDtailProps) {
  return (
    <Stack sx={{ ml: 4 }}>
      <Stack
        sx={{
          width: "100%",
          p: 3,

          backgroundColor: "#efefef",
        }}
      >
        <Typography>{description}</Typography>
      </Stack>
      <Stack sx={{ py: 2 }}>
        <CustomMarkdown mdFilePath={mdFilePath} />
      </Stack>
    </Stack>
  );
}
