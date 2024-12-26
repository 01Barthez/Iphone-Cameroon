import React from 'react'
import CTA from './utils/CTA'
import heroImg from '@/assets/images/iphone-14-pro-max.svg'

const Hero: React.FC = () => {
  return (
    <div className='min-h-[90vh] pt-16 bg-hero text-background'>
      <div className="container flex flex-col lg:flex-row items-center gap-10 justify-between">
        {/* Left part for description */}
        <div className="max-w-md flex flex-col gap-4">
          <span translate='no' className="font-semibold text-sm sm:text-lg md:text-2xl">
            Pro.Beyond.
          </span>

          <h1 translate='no' className="font-extralight text-6xl md:text-7xl lg:text-8xl text-nowrap">
            IPhone 14 <span className='font-extrabold'>Pro</span>
          </h1>

          <p className="text-base md:text-lg font-medium">
            Created to change everything for the better. For everyone
          </p>

          {/* cta */}
          <CTA />
        </div>

        {/* Right part for image */}
        <div className="max-w-md">
          <img
            src={heroImg}
            alt="discorver, Iphone 14 Pro"
            loading='lazy'
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
