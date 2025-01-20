"use client";
import { PROJECT } from "@/type/project";
import FloatingButton from "@/components/button/FloatingButton";
import TooltipIcon from "@/components/icon/tooltipIcon";

import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

export interface projectDetailProps {
  project: PROJECT;
}

export default function ProjectDetail({ project }: projectDetailProps) {
  const { githubUrl, youtubeUrl, bloglUrl } = project;

  const links = [
    { title: "Github", url: githubUrl, icon: GitHubIcon },
    { title: "Youtube", url: youtubeUrl, icon: YouTubeIcon },
    { title: "Blog", url: bloglUrl, icon: ArticleIcon },
  ];

  return (
    <FloatingButton>
      {links.map(
        ({ title, url, icon }) =>
          url && (
            <TooltipIcon
              key={title}
              title={title}
              Icon={icon}
              onClick={() => {
                window.open(url, "_blank");
              }}
              tooltipPlacement={"right"}
            />
          ),
      )}
    </FloatingButton>
  );
}
