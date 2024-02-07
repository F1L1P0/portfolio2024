import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-1 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center min-w-[50px] max-w-14">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-full p-2"
          />

          <span className="font-bold ml-[10px] hidden lg:block text-gray-300">
            Filip Drábek
          </span>
        </a>

        <div className="min-w-[235px] w-[500px] h-full flex flex-row items-center justify-between md:mx-20">
          <div className="flex items-center justify-between text-sm sm:text-lg w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex-row gap-5 min-w-[50px] max-w-14 hidden sm:flex">
          <Link href="https://github.com/F1L1P0" passHref target="_blank">
            <Image
              src="linkedin.svg"
              width={42}
              height={42}
              alt="redirect to my linkedin"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
