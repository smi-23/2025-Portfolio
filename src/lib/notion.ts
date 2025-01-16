import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function fetchNotionDB() {
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
    return response.results;
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    throw error;
  }
}

