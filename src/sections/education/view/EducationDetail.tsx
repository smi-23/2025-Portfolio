"use client";
import CustomMarkdown from "@/components/markdown/CustomMarkdown";
import { Stack, Typography, useTheme } from "@mui/material";

interface EducationDtailProps {
  description: string;
  mdFilePath: string;
}
export default function EducationDetail({ description, mdFilePath }: EducationDtailProps) {
  const theme = useTheme();
  return (
    <Stack sx={{ ml: { xs: 0, sm: 4 } }}>
      <Stack
        sx={{
          width: "100%",
          p: 2,
          backgroundColor: theme.palette.mode === "dark" ? theme.palette.action.selected : "#F4F6F8",
          borderLeft: "4px solid #00cccc",
        }}
      >
        <Typography>{description}</Typography>
      </Stack>
      <Stack sx={{ width: "100%", p: 2 }}>
        <CustomMarkdown mdFilePath={mdFilePath} />
      </Stack>
    </Stack>
  );
}
