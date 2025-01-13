import Education from "@/sections/education";
import Introduction from "@/sections/introduction";
import Project from "@/sections/project";
import TechStack from "@/sections/tech-stack";
import { fetchNotion } from "@/lib/notion";

export default async function Home() {
  const projects = await fetchNotion();

  return (
    <main>
      <Introduction />
      <TechStack />
      <Education />
      <Project projects={projects} />
    </main>
  );
}
