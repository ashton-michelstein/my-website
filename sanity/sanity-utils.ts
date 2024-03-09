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
            status,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId: "54xh2kz9",
        dataset: "production",
        apiVersion: "2024-02-20",
    })

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            date,
            status,
            content
        }`,
        {slug}
    )
}