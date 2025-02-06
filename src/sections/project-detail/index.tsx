"use client";
import { PROJECT } from "@/type/project";
import { Stack, Theme, useMediaQuery } from "@mui/material";
import Renderer from "@/components/notion/Renderer";
import FloatingMenu from "./view/FlotingMenu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

interface projectDetailProps {
  project: PROJECT;
  recordMap: any;
}

export default function ProjectDetail({ project, recordMap }: projectDetailProps) {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const { githubUrl, youtubeUrl, blogUrl } = project;

  const links = [
    { title: "Github", url: githubUrl, icon: GitHubIcon },
    { title: "Youtube", url: youtubeUrl, icon: YouTubeIcon },
    { title: "Blog", url: blogUrl, icon: ArticleIcon },
  ];

  return (
    <Stack direction={"column"} spacing={3} sx={{ margin: "auto", width: mdUp ? "70%" : "100%" }}>
      {mdUp && <FloatingMenu links={links} />}
      <Renderer recordMap={recordMap} />
    </Stack>
  );
}
