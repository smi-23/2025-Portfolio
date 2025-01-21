"use client";
import ProjectCard from "@/components/card/projectCard";
import SectionLayout from "../layout";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { Grid2, useTheme } from "@mui/material";
import { PROJECT } from "@/type/project";

export interface ProjectProps {
  projects: PROJECT[];
}

export default function Project({ projects }: ProjectProps) {
  const theme = useTheme();
  return (
    <SectionLayout
      id="project"
      title="Project"
      sx={{ backgroundColor: theme.palette.mode === "dark" ? "#333333" : "#f9f9f9" }}
    >
      <CustomCarousel>
        {projects.map((project) => (
          <Grid2 key={project.pageId} justifyItems={"center"}>
            <ProjectCard project={project} />
          </Grid2>
        ))}
      </CustomCarousel>
    </SectionLayout>
  );
}
