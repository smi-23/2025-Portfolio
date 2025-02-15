import { Box, Typography, Chip, Stack, useTheme, Divider } from "@mui/material";

interface TitleAndChipProps {
  pageTitle: string;
  tags: string[];
}

export default function TitleAndChip({ pageTitle, tags }: TitleAndChipProps) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        px: 2,
      }}
    >
      <Typography
        sx={{
          mt: 8,
          mb: 2,
          fontSize: "3.5rem",
          fontWeight: "bold",
          color: theme.palette.mode === "dark" ? "#ffffffe6" : "#37352f",
        }}
      >
        {pageTitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // 칩들이 화면 크기에 맞춰 여러 줄로 배치되도록
          gap: 1,
        }}
      >
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="medium"
            sx={{
              backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
              borderRadius: "18px",
              fontWeight: 500,
            }}
          />
        ))}
      </Box>
      <Divider sx={{ mt: 2, mb: -2 }} />
    </Stack>
  );
}
