"use client";
import ProjectCard from "@/components/card/ProjectCard";
import SectionLayout from "../layout";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import { PROJECT } from "@/type/project";

interface ProjectProps {
  projects: PROJECT[];
}

export default function Project({ projects }: ProjectProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SectionLayout
      id="project"
      title="Project"
      sx={{ backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)" }}
    >
      {isMobile ? (
        <Grid2 container direction="column" spacing={2} sx={{ maxWidth: "100%" }} justifyContent={"center"}>
          {projects.map((project) => (
            <Grid2
              key={project.pageId}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              size={{ xs: 12, md: 6, lg: 4 }}
            >
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <CustomCarousel>
          {projects.map((project) => (
            <Grid2 key={project.pageId} justifyItems={"center"}>
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </CustomCarousel>
      )}
    </SectionLayout>
  );
}
