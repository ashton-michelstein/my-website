import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Projects";
import Image from 'next/image'
import Link from "next/link";
import { PortableText } from '@portabletext/react'
import Cursor from "../Cursor"

const description = (project: Project) => {
  return (
    <PortableText value={project.content} />
  )
}

export default async function Home() {
  const projects = await getProjects()
  return (
    <>
      {/* <Cursor/> */}
        <div className="py-20">
          <h1 className="text-7xl font-extrabold text-white"> Hello, I'm Ashton </h1>
          <p className="mt-3 text-xl text-white"> I am a Software Engineer
          at Rochester Institute of Technology. I have a passion for </p>
          <h2 className="mt-24 font-bold text-white text-3xl"> My Projects ⬇️ </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: Project) => (
              project.status === "finished" ? (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project._id} className="border-2 border-neutral-700 rounded-lg p-1 hover:scale-105 hover:border-white transition">
                  <div className="flow-root">
                    <div className="float-left ml-4 mt-4 text-lg font-semibold text-white"> {project.name} </div>
                    <div className="float-right mr-4 mt-4 text-lg font-semibold text-indigo-300"> {project.date} </div>
                  </div>
                  <div className="mt-3 ml-4 mr-4 mb-4 text-base text-white"> {description(project)} </div>
                </Link>
              )
                :
                <div key={project._id} className="border-2 border-neutral-700 rounded-lg p-1 hover:scale-105 hover:border-white transition">
                  <div className="flow-root">
                    <div className="float-left ml-4 mt-4 text-lg font-semibold text-white"> {project.name} </div>
                    <div className="float-right mr-4 mt-4 text-lg font-semibold text-indigo-300"> {project.date} </div>
                  </div>
                  <div className="mt-3 ml-4 mr-4 mb-4 text-base text-white"> {description(project)} </div>
                </div>
            ))}
          </div>
        </div>
    </>
  );
}
