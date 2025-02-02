import { fetchNotionDb } from "@/lib/notion";
import Renderer from "@/components/notion/Renderer";
import { PROJECT } from "@/type/project";
import { notFound } from "next/navigation";
import ProjectDetail from "@/sections/project-detail";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function getRecodeMap(pageId: string) {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/notion?pageId=${pageId}`, {
    next: { revalidate: 3600 },
  });
  return await res.json();
}

export async function generateStaticParams() {
  const projects: PROJECT[] = await fetchNotionDb();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projects: PROJECT[] = await fetchNotionDb();
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.description,
    cover: project.cover,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projects: PROJECT[] = await fetchNotionDb();
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    notFound();
  }

  const { pageId } = project;
  const recordMap = await getRecodeMap(pageId);

  return (
    <main>
      <ProjectDetail project={project} />
      <Renderer recordMap={recordMap} rootPageId={pageId} />
    </main>
  );
}
