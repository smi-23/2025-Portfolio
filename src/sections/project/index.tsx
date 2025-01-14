import ProjectCard from "@/components/card/projectCard";
import SectionLayout from "../layout";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { Grid2 } from "@mui/material";

export default function Project({ projects }: { projects: any[] }) {
  return (
    <SectionLayout id="project" title="Projects" sx={{ backgroundColor: "#efefef" }}>
      <CustomCarousel>
        {projects.map((project) => (
          <Grid2 key={project.id} justifyItems={"center"}>
            <ProjectCard project={project} />
          </Grid2>
        ))}
      </CustomCarousel>
    </SectionLayout>
  );
}
