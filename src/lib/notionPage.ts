import { NotionAPI } from 'notion-client';
import { notFound } from "next/navigation";

const notion = new NotionAPI();

interface NotionPagePropse {
  pageId: string;
}

export async function FetchNotionPage({ pageId }: NotionPagePropse) {
  try {
    const response = await notion.getPage(pageId);
    return response;
  } catch (err) {
    console.error(err);
    notFound();
  }
}
