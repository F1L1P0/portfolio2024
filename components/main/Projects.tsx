import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { Projects_data } from '@/constants/projects'
import Link from 'next/link'

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects">
      <p className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </p>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap justify-center">
        {Projects_data.map((data) => (
          <div
            className="flex basis-1 md:basis-2/6 lg:basis-6/6"
            key={data.title}>
            <Link href={data.link} className="z-20">
              <ProjectCard
                src={data.path}
                title={data.title}
                describtion={data.desc}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
