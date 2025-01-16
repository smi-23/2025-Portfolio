"use client";
import Link from "next/link";
import { PROJECT } from "@/type/project";
import { Card, CardContent, Typography, Chip, Stack, CardMedia, Tooltip, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import TooltipIcon from "../icon/tooltipIcon";
import { useRouter } from "next/navigation";

export interface ProjectProps {
  project: PROJECT;
}

export default function ProjectCard({ project }: ProjectProps) {
  const router = useRouter();

  // 데이터 가공
  const formattedProject = {
    pageId: project.id,
    cover: project.cover?.external?.url || "",
    title: project.properties.Title?.title[0]?.text?.content || "",
    description: project.properties.Description?.rich_text[0]?.text?.content || "",
    githubUrl: project.properties.Github?.url || "",
    workPeriod: {
      start: project.properties.WorkPeriod?.date?.start || "",
      end: project.properties.WorkPeriod?.date?.end || "",
    },
    tags: project.properties.Tag?.multi_select.map((tag: { name: string }) => tag.name) || [],
  };

  // console.log("❌❌❌ 프로젝트 카드에서 사용할 가공된 프로젝트: ", formattedProject);

  const { pageId, cover, title, description, githubUrl, workPeriod, tags } = formattedProject;

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

      <Link href={`/project/${pageId}`}>
        {cover && <CardMedia component="img" image={cover} alt="Project Cover" sx={{ height: 200 }} />}
      </Link>
      <CardContent>
        {/* 타이틀 */}
        <Link href={`/project/${pageId}`} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            {title}
          </Typography>
        </Link>
        {/* 태그 */}
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
        {/* 작업 기간 */}
        <Typography variant="body2" color="text.secondary">
          작업 기간: {workPeriod.start} ~ {workPeriod.end || "현재"}
        </Typography>
        {/* 설명 */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        {/* 깃허브 링크 */}
        {githubUrl && (
          <TooltipIcon
            title={"Github"}
            Icon={GitHubIcon}
            onClick={() => {
              window.open(githubUrl, "_blank");
            }}
          />
        )}
        {/* 상세 페이지 이동 */}
        <TooltipIcon
          title={"상세 페이지"}
          Icon={PlagiarismIcon}
          onClick={() => {
            router.push(`/project/${pageId}`);
          }}
        />
      </CardContent>
    </Card>
  );
}
