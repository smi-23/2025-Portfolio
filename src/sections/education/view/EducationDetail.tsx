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
          backgroundColor: "#F4F6F8",
          borderLeft: "4px solid #00cccc",
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
