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
        maxWidth: 345,
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* 커버 이미지 */}
      {cover && <CardMedia component="img" height="140" image={cover} alt="Project Cover" />}
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginBottom: 2 }}>
          {tags.map((index, tag) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          작업 기간: {workPeriod.start} ~ {workPeriod.end || "현재"}
        </Typography>
        {github && (
          <Typography
            variant="body2"
            color="primary"
            component="a"
            href={github}
            target="_blank"
            sx={{ marginTop: 2, display: "block" }}
          >
            GitHub 링크
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
