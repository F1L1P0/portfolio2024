import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  title: string
  describtion: string
}

const ProjectCard = ({ src, title, describtion }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <p className="text-2xl font-semibold text-white">{title}</p>
        <p className="mt-2 text-gray-300">{describtion}</p>
      </div>
    </div>
  )
}

export default ProjectCard
