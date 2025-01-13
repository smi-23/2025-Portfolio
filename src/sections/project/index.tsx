import { Stack, Typography } from "@mui/material";
import ProjectCard from "@/components/card/projectCard";

export default function Project({ projects }: { projects: any[] }) {
  return (
    <div id="project">
      <Stack
        alignItems={"center"}
        sx={{
          px: 1,
          py: 10,
          width: "100%",
        }}
        spacing={2}
      >
        <div style={{ marginBottom: 20 }}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            프로젝트
          </Typography>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
    </div>
  );
}
