import React from 'react'
import CTA from './utils/CTA'
import heroImg from '/images/iphone-14-pro-max.svg'
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className='relative overflow-hidden min-h-[90vh] pt-16 bg-hero text-footer-foreground'>
      <div className="container flex flex-col lg:flex-row items-center gap-16 md:gap-6 justify-between">
        {/* Left part for description */}
        <motion.div className="relative flex flex-col gap-4"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
          <span translate='no' className="font-semibold text-sm sm:text-lg md:text-2xl text-footer-foreground/70">
            Pro.Beyond.
          </span>

          <h1 translate='no' className="font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap">
            IPhone 14 <span className='font-extrabold'>Pro</span>
          </h1>

          <p className="text-base md:text-lg font-medium">
            Created to change everything for the better. For everyone
          </p>

          {/* cta */}
          <CTA />
        </motion.div>

        {/* Right part for image */}
        <motion.div className="max-w-[13rem] sm:max-w-xs md:max-w-sm relative z-20"
          initial={{ y: "100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: .25 }}
        >
          <img
            src={heroImg}
            alt="discorver, Iphone 14 Pro"
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
      {/* linear bg */}
      <div className="absolute bottom-10 right-1/2 w-44 h-44 blur-3xl bg-hero-linear rounded-full" />
      <div className="absolute top-10 right-10 w-20 h-20 blur-3xl bg-hero-linear rounded-full" />
    </div>
  )
}

export default Hero
