// src/lib/notionPage.ts
import { Client } from "@notionhq/client";
import { NotionAPI } from 'notion-client';
export const notion = new NotionAPI();
// interface NotionPagePropse {
//   pageId: string;
// }
export async function FetchNotionPage(pageId: string) {
  const response = await notion.getPage(pageId);
  // console.log("responseㅁㅁㅁㅁㅁㅁ : ", response)
  return response;
}
