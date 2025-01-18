import { fetchNotionDb } from "@/lib/notion";
import { FetchNotionPage } from "@/lib/notionPage";
import Renderer from "@/components/notion/Renderer";
import { PROJECT } from "@/type/project";
import { notFound } from "next/navigation";

// interface ProjectDetailPageProps {
//   params: { slug: string };
// }

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects: PROJECT[] = await fetchNotionDb();
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
