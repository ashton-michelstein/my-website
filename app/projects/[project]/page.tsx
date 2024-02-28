import { getProject } from "@/sanity/sanity-utils"

type Props = {
    params: {project: string}
}

export default async function Project({ params } : Props) {
    const slug = params.project
    const project = await getProject(slug)
    return <div className="text-black">{project.name}</div>
    
}