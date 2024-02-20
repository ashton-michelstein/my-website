import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

const config = defineConfig({
    projectId: "54xh2kz9",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2024-02-20",
    basePath: "/admin",
    plugins: [structureTool()]
})

export default config