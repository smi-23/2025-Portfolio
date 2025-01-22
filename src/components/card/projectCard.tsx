"use client";
import Link from "next/link";
import { PROJECT } from "@/type/project";
import TooltipIcon from "../icon/tooltipIcon";
import { useRouter } from "next/navigation";
import { Card, CardContent, Typography, Chip, Stack, CardMedia, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";

export interface ProjectCardProps {
  project: PROJECT;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();
  const router = useRouter();
  const { cover, title, description, githubUrl, workPeriod, tags, slug } = project;

  const textColor = theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.54)";

  return (
    <Card
      sx={{
        width: "90%",
        mb: 1,
        height: 470, // 카드의 고정 높이 설정
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
        "&:hover": {
          overflow: "hidden",
          transform: "scale(1.02)",
        },
      }}
    >
      {/* 커버 이미지 */}
      <Link
        href={`/project/${slug}`}
        style={{
          outline: "none",
        }}
      >
        {cover && (
          <CardMedia
            component={"img"}
            image={cover}
            alt="Project Cover"
            sx={{
              height: 200,
            }}
          />
        )}
      </Link>
      <CardContent>
        {/* 타이틀 */}
        <Link href={`/project/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
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
        <Typography variant="body2" color={textColor} sx={{ mb: 2 }}>
          작업 기간: {workPeriod.start} ~ {workPeriod.end || "현재"}
        </Typography>
        {/* 설명 */}
        <Typography
          variant="body2"
          color={textColor}
          sx={{
            mb: 2,
            height: "60px", // 3줄 기준
          }}
        >
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
            router.push(`/project/${slug}`);
          }}
        />
      </CardContent>
    </Card>
  );
}
