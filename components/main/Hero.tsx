import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video autoPlay muted loop className="blackhole_nav">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero
