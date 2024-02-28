import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "54xh2kz9",
        dataset: "production",
        apiVersion: "2024-02-20",
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            date,
            content
        }`
    )
}