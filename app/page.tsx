import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Projects";
import Image from 'next/image'
import Link from "next/link";


export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="mx-auto py-20 bg-zinc-900">
      <h1 className="text-7xl font-extrabold text-white">
        Hello, I'm Ashton </h1>
      <p className="mt-3 text-xl text-white"> i'll put my projects and stuff on here lol 🫴🟣. </p>
      <h2 className="mt-24 font-bold text-white text-3xl"> My Projects ⬇️ </h2>
      <div className = "mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: Project) => (
        <Link 
        href = {`/projects/${project.slug}`}
        key={project._id} className= "border-2 border-white rounded-lg p-1 hover:scale-105 hover:border-sky-400 transition">
          {project.image && (
            <Image
            src  = {project.image}
            alt = {project.name}
            width = {750}
            height = {300}
            />
          )}
            <div className = "mt-2 font-extrabold text-white"> {project.name} </div>
        </Link>
      ))}
      </div>
    </div>
  );
}
