import { FetchNotionPage } from "@/lib/notionPage";
import Renderer from "@/components/notion/Renderer";
import { fetchNotionDB } from "@/lib/notion";
import { notFound } from "next/navigation";
import { PROJECT } from "@/type/project";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projects: PROJECT[] = await fetchNotionDB();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const pageId = project.pageId;
  const data = await FetchNotionPage({ pageId });

  return (
    <main>
      <Renderer recordMap={data} rootPageId={pageId} />
    </main>
  );
}
