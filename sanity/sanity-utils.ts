import { Page } from "@/types/Page";
import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";

const clientConfig = {
    projectId: "54xh2kz9",
    dataset: "production",
    apiVersion: "2024-02-20",
    useCdn: false // Set to true to use CDN, false to use Live API
};

export async function getProjects(): Promise<Project[]> {
    const client = createClient(clientConfig);

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
    );
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient(clientConfig);

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
    );
}

export async function getPages(): Promise<Page[]> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    );
}

export async function getPage(slug: string): Promise<Page> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        {slug}
    );
}
