import Cursor from "@/components/Cursor"
import { getProject } from "@/sanity/sanity-utils"

export default async function SSEWebsiteRebuild() {
    const project = await getProject("sse-website-rebuild")
    return (
        <>
        <Cursor/>
        <div className="bg-neutral-900">
    	<div className="max-w-3xl mx-auto py-20 bg-neutral-900">
				<h1 className="text-7xl font-extrabold text-white"> {project.name} </h1>
				<p className = "ml-3 mt-20 text-base text-white"> First off, let me just say that I'm so glad this project
                happened, because the old website is <a href="https://www.merriam-webster.com/dictionary/ugly" target= "_blank" className = "underline hover:no-underline hover:text-indigo-600 text-indigo-300">UGLY</a>.
                We redesigned the website using Next.js and DaisyUI, a plugin for Tailwind.
                
                
                </p>
			</div>
		</div>
		</>
    )
}