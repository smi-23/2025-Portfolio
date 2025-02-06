"use client";
import { TECH, TechInfo } from "@/data/tech";
import { Grid2, useTheme } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import SectionLayout from "../layout";

export default function TechStack() {
  const theme = useTheme();
  return (
    <SectionLayout
      id="tech-stack"
      title="Tech Stack"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
      }}
    >
      <Grid2
        container
        spacing={{ xs: 2, sm: 7 }}
        sx={{
          maxWidth: { xs: 400, sm: 550 },
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        {TECH.map((techStack: TechInfo) => (
          <Grid2
            key={techStack.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 70,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "18px",
              backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e " : "white",
            }}
          >
            <Tooltip title={techStack.id}>
              <Image src={techStack.icon} alt={techStack.id} width={50} height={50} />
            </Tooltip>
          </Grid2>
        ))}
      </Grid2>
    </SectionLayout>
  );
}
