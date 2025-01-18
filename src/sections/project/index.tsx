import ProjectCard from "@/components/card/projectCard";
import SectionLayout from "../layout";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { Grid2 } from "@mui/material";
import { PROJECT } from "@/type/project";

export interface ProjectProps {
  projects: PROJECT[];
}

export default function Project({ projects }: ProjectProps) {
  return (
    <SectionLayout id="project" title="Project" sx={{ backgroundColor: "#f9f9f9" }}>
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
