import Education from "@/sections/education";
import Introduction from "@/sections/introduction";
import Project from "@/sections/project";
import TechStack from "@/sections/tech-stack";
import { fetchNotionDB } from "@/lib/notion";

export default async function Home() {
  const projects = await fetchNotionDB();

  return (
    <main>
      <Introduction />
      <TechStack />
      <Education />
      <Project projects={projects} />
    </main>
  );
}
