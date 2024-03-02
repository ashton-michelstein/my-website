import Cursor from "@/components/Cursor"
import { getProject } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function SecondTest() {
    const project = await getProject("second-test")
    return (
        <>
        <Cursor/>
        <div className="bg-neutral-900">
    	<div className="max-w-3xl mx-auto py-20 bg-neutral-900">
				<h1 className="text-7xl font-extrabold text-white"> {project.name} </h1>
				<p className = "ml-3 mt-20 text-base text-white"> PLACEHOLDER TEXT
                </p>
			</div>
		</div>
		</>
    )
}