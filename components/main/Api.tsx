'use client'
import React from 'react'

import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import Image from 'next/image'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Api = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200">
          <span>Performance</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '}
            &{' '}
          </span>
          <span>Design</span>
        </motion.div>
      </div>

      <div className="flex flex-row items-center justify-center absolute z-[20] w-auto h-auto flex-wrap gap-5">
        <Image
          src="/larr.png"
          alt="left arrow"
          width={120}
          height={120}
          className="basis-[30%]"
        />
        <Image
          src="/api.png"
          alt="api"
          width={120}
          height={120}
          className="basis-[30%]"
        />
        <Image
          src="/rarr.png"
          alt="right arrow"
          width={120}
          height={120}
          className="basis-[30%]"
        />
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <p className="Welcome-text text-[20px] basis-full">API</p>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <p className="Welcome-text text-[20px] basis-full">
            Update your data using API
          </p>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  )
}

export default Api
