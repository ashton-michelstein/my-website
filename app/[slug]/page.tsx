import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react'

type Props = {
    params: {slug: string}
}
export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)

    return(
        <>
            <div className="content">
            <h1 className="header"> {page.title}</h1>
            <div className="description">
                <PortableText value={page.content} ></PortableText>
            </div>
            </div>
        </>
    )
}