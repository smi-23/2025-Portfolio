import { PROJECT } from "@/type/project";

export async function fetchNotionDb(): Promise<PROJECT[]> {
  try {
    const notionApiUrl = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`;

    // fetch 요청에 cache 옵션을 추가
    const response = await fetch(notionApiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [
          {
            property: "ID",
            direction: "ascending",
          },
        ],
      }),
      cache: 'force-cache',
    });

    const data = await response.json();

    const formattedProjects = data.results.map((project: any) => ({
      pageId: project.id,
      cover: project.cover?.external?.url || "",
      title: project.properties.Title?.title[0]?.plain_text || "",
      description: project.properties.Description?.rich_text[0]?.plain_text || "",
      githubUrl: project.properties.Github?.url || "",
      youtubeUrl: project.properties.Youtube?.url || "",
      blogUrl: project.properties.Blog?.url || "",
      workPeriod: {
        start: project.properties.WorkPeriod?.date?.start || "",
        end: project.properties.WorkPeriod?.date?.end || "",
      },
      tags: project.properties.Tag?.multi_select?.map((tag: { name: string }) => tag.name) || [],
      slug: project.properties.Slug?.rich_text[0]?.plain_text || "",
    }));

    return formattedProjects;
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    throw error;
  }
}