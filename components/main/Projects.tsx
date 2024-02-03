import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </p>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/html.png"
          title="title"
          describtion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum veniam in
        molestiae ratione quas reprehenderit eligendi voluptate illum modi
        fugiat."
        />
        <ProjectCard
          src="/html.png"
          title="title"
          describtion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum veniam in
        molestiae ratione quas reprehenderit eligendi voluptate illum modi
        fugiat."
        />
        <ProjectCard
          src="/html.png"
          title="title"
          describtion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum veniam in
        molestiae ratione quas reprehenderit eligendi voluptate illum modi
        fugiat."
        />
      </div>
    </div>
  )
}

export default Projects
