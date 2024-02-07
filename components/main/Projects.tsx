'use client'
import React, { useRef } from 'react'
import ProjectCard from '../sub/ProjectCard'
import { Projects_data } from '@/constants/projects'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })
  const projectVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const animationDelay = 0.175

  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-20"
      id="projects">
      <p className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </p>
      <div
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap justify-center"
        ref={ref}>
        {Projects_data.map((data, index) => (
          <motion.div
            className="flex basis-1 md:basis-2/6 lg:basis-6/6 ease-in-out"
            key={data.title}
            initial="hidden"
            variants={projectVariants}
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: index * animationDelay }}>
            <Link href={data.link} className="z-20">
              <ProjectCard
                src={data.path}
                title={data.title}
                describtion={data.desc}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
