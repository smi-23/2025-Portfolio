import { fetchNotionDb } from "@/lib/notion";
import { FetchNotionPage } from "@/lib/notionPage";
import Renderer from "@/components/notion/Renderer";
import { PROJECT } from "@/type/project";
import { notFound } from "next/navigation";
import ProjectDetail from "@/sections/project-detail";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projects: PROJECT[] = await fetchNotionDb();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const pageId = project.pageId;
  const data = await FetchNotionPage({ pageId });

  console.log("url이 제대로 들어가 있는지 확인용", project);

  return (
    <main>
      <ProjectDetail project={project} />
      <Renderer recordMap={data} rootPageId={pageId} />
    </main>
  );
}
