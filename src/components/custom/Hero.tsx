import React from 'react'
import CTA from './utils/CTA'
import heroImg from '@/assets/images/iphone-14-pro-max.svg'
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className='relative min-h-[90vh] pt-16 bg-hero text-background'>
      <div className="container flex flex-col lg:flex-row items-center gap-10 justify-between">
        {/* Left part for description */}
        <motion.div className=" relative max-w-md flex flex-col gap-4"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          <span translate='no' className="font-semibold text-sm sm:text-lg md:text-2xl text-background/70">
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

          {/* linear bg */}
          <div className="hidden md:block absolute -bottom-20 -right-20 w-44 h-44 blur-3xl bg-hero-linear rounded-full" />
        </motion.div>

        {/* Right part for image */}
        <motion.div className="max-w-md"
          initial={{ y: "100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: .25 }}
        >
          <img
            src={heroImg}
            alt="discorver, Iphone 14 Pro"
            loading='lazy'
            className='w-full h-full'
          />
        </motion.div>
      </div>

      {/* Background */}
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <div className="absolute top-10 right-10 w-20 h-20 blur-3xl bg-hero-linear rounded-full" />
    </div>
  )
}

export default Hero
