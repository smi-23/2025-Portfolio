import { Stack, Typography } from "@mui/material";
import ProjectCard from "@/components/card/projectCard";
import SectionLayout from "../layout";

export default function Project({ projects }: { projects: any[] }) {
  return (
    <SectionLayout id="project" title="프로젝트">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </SectionLayout>
  );
}
