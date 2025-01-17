import Education from "@/sections/education";
import Introduction from "@/sections/introduction";
import Project from "@/sections/project";
import TechStack from "@/sections/tech-stack";
import { fetchNotionDb } from "@/lib/notion";

export default async function Home() {
  const projects = await fetchNotionDb();

  return (
    <main>
      <Introduction />
      <TechStack />
      <Education />
      <Project projects={projects} />
    </main>
  );
}
