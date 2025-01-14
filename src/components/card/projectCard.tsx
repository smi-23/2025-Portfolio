import { PROJECT } from "@/type/project";
import { Card, CardContent, Typography, Chip, Stack, CardMedia } from "@mui/material";
export interface ProjectProps {
  project: PROJECT;
}
export default function ProjectCard({ project }: ProjectProps) {
  // 데이터 가공
  const formattedProject = {
    id: project.id,
    cover: project.cover?.external?.url || "",
    title: project.properties.Title?.title[0]?.text?.content || "",
    description: project.properties.Description?.rich_text[0]?.text?.content || "",
    github: project.properties.Github?.url || "",
    workPeriod: {
      start: project.properties.WorkPeriod?.date?.start || "",
      end: project.properties.WorkPeriod?.date?.end || "",
    },
    tags: project.properties.Tag?.multi_select.map((tag: { name: string }) => tag.name) || [],
  };

  console.log("❌❌❌ 프로젝트 카드에서 사용할 가공된 프로젝트: ", formattedProject);

  const { cover, title, description, github, workPeriod, tags } = formattedProject;

  return (
    <Card
      sx={{
        mb: 7,
        width: "94%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
        "&:hover": {
          overflow: "hidden",
          transform: "scale(1.02)",
        },
      }}
    >
      {/* 커버 이미지 */}
      {cover && <CardMedia component="img" image={cover} alt="Project Cover" sx={{ height: 200 }} />}
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          작업 기간: {workPeriod.start} ~ {workPeriod.end || "현재"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        {github && (
          <Typography
            variant="body2"
            color="primary"
            component="a"
            href={github}
            target="_blank"
            sx={{ display: "block" }}
          >
            GitHub 링크
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
