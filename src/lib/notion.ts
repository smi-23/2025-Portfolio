import { Client } from "@notionhq/client";
import { PROJECT } from "@/type/project";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function fetchNotionDB(): Promise<PROJECT[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [
        {
          property: 'ID',
          direction: 'ascending',
        },
      ],
    });

    const formattedProjects = response.results.map((project: any) => ({
      pageId: project.id,
      cover: project.cover?.external?.url || "",
      title: project.properties.Title?.title[0]?.plain_text || "",
      description: project.properties.Description?.rich_text[0]?.plain_text || "",
      githubUrl: project.properties.Github?.url || "",
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

