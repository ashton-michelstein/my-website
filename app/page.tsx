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


      <div className="terminal-container py-10">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="red-button"></span>
            <span className="yellow-button"></span>
            <span className="green-button"></span>
          </div>
        </div>

        <div className="terminal-body">
          <p className="terminal-line">AshtonShell 1.0.1</p>
          <p className="terminal-line">Copyright (c) Me. All rights reserved (not really).</p>

          <pre className="ascii-art">
          {`
           ________  ________  ___  ___  _________  ________  ________           _____ ______      
          |\\   __  \\|\\   ____\\|\\  \\|\\  \\|\\___   ___\\\\   __  \\|\\   ___  \\        |\\   _ \\  _   \\    
          \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\\\\\  \\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\\\ \\  \\       \\ \\  \\\\\\__\\ \\  \\   
           \\ \\   __  \\ \\_____  \\ \\   __  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\       \\ \\  \\\\|__| \\  \\  
            \\ \\  \\ \\  \\|____|\\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\       \\ \\  \\    \\ \\  \\ 
             \\ \\__\\ \\__\\____\\_\\  \\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\\\ \\__\\       \\ \\__\\    \\ \\__\\
              \\|__|\\|__|\\_________\\|__|\\|__|    \\|__|  \\|_______|\\|__| \\|__|        \\|__|     \\|__|
                        \\|_________|
                        `}
          </pre>
          <p className="terminal-line">ashtonm.dev:~$ cat intro.txt</p>
          <p className="terminal-line">Hello, I&apos;m Ashton!</p>
          <p className="terminal-line">I am a student at Rochester Institute of Technology, majoring in </p>
          <p className="terminal-line">Software Engineering and minoring in Cybersecurity.</p>
          <p className="terminal-line">I have a passion for learning new things and expanding my skillset.</p>
          <p className="terminal-line">On this website, you can learn about some of the personal projects I&apos;ve worked on.</p>
          <p className="terminal-line">ashtonm.dev:~$ <span className="blinking-block"></span></p>

        </div>
      </div>


      {/* some funkyness happening with spacing, temp fix */}
      <div className="h-30"></div>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <div className="h-10"></div>


      <div>
        <h2 className="font-bold text-white text-3xl"> My Projects ⬇️ </h2>
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
