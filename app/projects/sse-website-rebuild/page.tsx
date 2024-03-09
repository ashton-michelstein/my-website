import Cursor from "@/components/Cursor"
import { getProject } from "@/sanity/sanity-utils"
import Image from "next/image"

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
                Here is what it looked like before:
                <br/>
                <br/>
                <Image
                src = "/old-sse.png"
                width={750}
                height={750}
                alt="Old SSE Website"
                />
                <br/>
                I joined this project when I first switched into the Software Engineering program at RIT, and it has been a great
                learning experience so far. I had no exposure to Typescript, React, or Next.js prior to joining this project, so this
                redesign has pushed me to explore new things.
                <br/>
                <br/>
                I am working with the front-end development team, which consists of 5 students. This is still an ongoing project
                which has been in progress for about 6 months. We hope to have the website finished by the end of the 2023-2024 school year.
                </p>
			</div>
		</div>
		</>
    )
}