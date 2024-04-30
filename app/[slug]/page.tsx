import PortableText from "react-portable-text";
import { getPage } from "@/sanity/sanity-utils";

// Define your custom serializer for list items
const ListItemSerializer = ({ children }: { children: React.ReactNode }) => (
    <ul className="special-list">
        <li className="special-list-item">{children}</li>
    </ul>
);

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);


  const customSerializers = {
    li: ListItemSerializer
  }

  const hasContent = page?.content && page.content.length > 0
  let hasPDF = true
  if (page.hasPDF !== "true") {
    hasPDF = false
  }
  return (
      <>
      <div className="content">
        <h1 className="header">{page.title}</h1>
        <div className="description">
          {hasContent && <PortableText
            content={page.content}
            serializers={customSerializers}
          />}
         {hasPDF && (
            <iframe src="Ashton_Michelstein_Resume.pdf" className="mt-10" width="100%" height="800px" title="PDF Viewer" />
          )}
        </div>
      </div>
    </>
  );
}
