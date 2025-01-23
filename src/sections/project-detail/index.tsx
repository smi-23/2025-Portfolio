"use client";
import { PROJECT } from "@/type/project";
import FloatingButton from "@/components/button/FloatingButton";
import TooltipIcon from "@/components/icon/TooltipIcon";

import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

interface projectDetailProps {
  project: PROJECT;
}

export default function ProjectDetail({ project }: projectDetailProps) {
  const { githubUrl, youtubeUrl, blogUrl } = project;

  const links = [
    { title: "Github", url: githubUrl, icon: GitHubIcon },
    { title: "Youtube", url: youtubeUrl, icon: YouTubeIcon },
    { title: "Blog", url: blogUrl, icon: ArticleIcon },
  ];

  return (
    <FloatingButton>
      {links.map(
        (link) =>
          link.url && (
            <TooltipIcon
              key={link.title}
              title={link.title}
              Icon={link.icon}
              onClick={() => {
                window.open(link.url, "_blank");
              }}
              tooltipPlacement={"right"}
            />
          ),
      )}
    </FloatingButton>
  );
}
