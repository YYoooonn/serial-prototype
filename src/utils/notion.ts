import { Client } from "@notionhq/client";
import { cache } from "react";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDB = cache(async () => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return results;
});

export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});
