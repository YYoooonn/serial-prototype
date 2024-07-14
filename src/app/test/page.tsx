import { getDB } from "@/utils/notion";
import * as NotionEndpoints from "@notionhq/client/build/src/api-endpoints";

export const revalidate = 60; // revalidate every 1 minutes

interface Properties {
  name: { rich_text: NotionEndpoints.RichTextItemResponse[] };
  status: NotionEndpoints.SelectPropertyItemObjectResponse;
  url: { rich_text: NotionEndpoints.RichTextItemResponse[] };
  title: { title: NotionEndpoints.TextRichTextItemResponse[] };
}

export default async function Page() {
  const database = await getDB();
  const datas = database.map((p) => {
    if ("properties" in p) {
      const props = p.properties as unknown as Properties;
      return {
        id: p.id,
        title: props.title.title[0].plain_text,
        name: props.name.rich_text[0].plain_text,
        status: props.status.select?.name,
        url: props.url.rich_text[0]?.plain_text,
      };
    } else return {};
  });
  return (
    <>
      <div>CMS test page</div>
      {datas.map((props) => {
        return (
          <div key={props.id}>
            {props.title} : {props.name}{" "}
          </div>
        );
      })}
    </>
  );
}
