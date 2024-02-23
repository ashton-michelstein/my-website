import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Projects";
import Image from 'next/image'

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="mx-auto py-20 bg-zinc-900">
      <h1 className="text-7xl font-extrabold text-white">
        Hello, I'm Ashton </h1>
      <p className="mt-3 text-xl text-white"> i'll put my projects and stuff on here lol 🫴🟣. </p>
      <h2 className="mt-24 font-bold text-white text-3xl"> My Projects ⬇️ </h2>
      {projects.map((project: Project) => (
        <div key={project._id} className= "border border-gray-700 rounded-lg">
          {project.image && (
            <Image
            src  = {project.image}
            alt = {project.name}
            width = {250}
            height = {100}
            className = "object-cover rounded-lg border border-gray-500" />
          )}
            <div className = "font-extrabold bg-gradient-to-r from-emerald-500 to-blue-700 bg-clip-text text-transparent"> {project.name} </div>
        </div>
      ))}
    </div>
  );
}
