import { Grid2, Stack, Typography } from "@mui/material";
import ProjectCard from "@/components/card/projectCard";
import SectionLayout from "../layout";

export default function Project({ projects }: { projects: any[] }) {
  return (
    <SectionLayout id="project" title="프로젝트" sx={{ backgroundColor: "#efefef" }}>
      <Grid2 container sx={{ width: "80%", pl: 3 }}>
        {projects.map((project) => (
          <Grid2 key={project.id} size={{ md: 4 }}>
            <ProjectCard project={project} />
          </Grid2>
        ))}
      </Grid2>
    </SectionLayout>
  );
}
