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
          backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",

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
