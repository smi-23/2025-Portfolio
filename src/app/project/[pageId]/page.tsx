import { FetchNotionPage } from "@/lib/notionPage";
import Renderer from "@/components/notion/Renderer";

interface ProjectDetailPageProps {
  params: { pageId: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { pageId } = params;
  const data = await FetchNotionPage({ pageId });

  return (
    <main>
      <Renderer recordMap={data} rootPageId={pageId} />
    </main>
  );
}
