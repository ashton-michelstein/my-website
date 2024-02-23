import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "54xh2kz9",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2024-02-20",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config