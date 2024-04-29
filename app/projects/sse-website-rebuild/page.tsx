import Cursor from "@/components/Cursor"
import { getProject } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function SSEWebsiteRebuild() {
    const project = await getProject("sse-website-rebuild")
    return (
        <>
            <Cursor />
            <div className="background">
                <div className="content">
                    <Image src={project.image} width={100} height={100} alt="SSE Logo" className="mb-5" />
                    <h1 className="header"> {project.name}</h1>
                    <br></br>
                    <h3 className="sub-header">Overview</h3>
                    <p className="description"> The old website for the Society of Software Engineers was ugly and in desperate need of a redesign.
                        This project consisted of 3 teams — front-end, back-end, and UI/UX — who worked together with the common goal to make
                        the website more appealing and accessible.</p>
                    <br></br>
                    <h3 className="sub-header">What I Learned</h3>
                    <p className="description">Here are some of my most important takeaways from this project:</p>
                    <ul className="list-disc custom-list">
                        <li className="mt-2">Organization is a must when working with a group </li>
                        <li>Clear communication with all team members is crucial</li>
                        <li>Tailwind makes using CSS much less painful</li>
                        <li>UI/UX is IMPORTANT. What the user sees and experiences determines if they will use the website again</li>
                        <li>React and Next.js encourage modularity. Complex apps can be broken into smaller, reusable pieces</li>



                    </ul>
                </div>
            </div>
        </>
    )
}