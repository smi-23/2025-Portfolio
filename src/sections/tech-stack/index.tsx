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
      sx={{ backgroundColor: theme.palette.mode === "dark" ? "#333333" : "#f9f9f9" }}
    >
      <Grid2
        container
        spacing={6}
        sx={{
          maxWidth: 500,
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.mode === "dark" ? "#333333" : "#f9f9f9",
        }}
      >
        {TECH.map((techStack: TechInfo) => (
          <Grid2
            key={techStack.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              width: 70,
              height: 70,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: 3,
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
