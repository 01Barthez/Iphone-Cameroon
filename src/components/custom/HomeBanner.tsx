import React from 'react'
import CTA from './utils/CTA'
import ipad1 from '/images/ipad1.svg'
import ipad2 from '/images/ipad-screen-violet.svg'
import ipad3 from '/images/ipad-screen-blue.svg'
import ipad4 from '/images/ipad_incline.svg'
import ipad5 from '/images/apple-watch3.svg'

const HomeBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-br from-foreground/80 to-foreground py-20 md:py-32 lg:py-40 flex items-center justify-center">
      <div className="relative z-40 container max-w-[90%] flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-fit p-0">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extralight text-center text-background">
          Big Summer <span className="font-normal">Sale</span>
        </h2>

        <span className="text-center text-sm md:text-base text-background/80">
          Dazzling offers for an unforgettable summer!
        </span>
      
        <div className="mx-auto">
          <CTA />
        </div>

        {/* gradient Decoration */}
        <div className="absolute z-10 top-1/2 right-1/2 w-20 h-20 blur-3xl bg-hero-linear rounded-full" />
      </div>

      {/* Some images */}
      <div className="block md:hidden lg:block absolute z-10 top-0 -left-14 lg:left-48 opacity-90">
        <img src={ipad1} alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="hidden md:block absolute z-20 lg:top-5 left-5 opacity-90">
        <img src={ipad2} alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="hidden lg:block absolute z-10 lg:top-48 lg:left-0 opacity-95">
        <img src={ipad3} alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="hidden md:block absolute z-10 bottom-0 lg:top-10 right-0">
        <img src={ipad4} alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="absolute z-10 -bottom-20 md:-bottom-14 lg:bottom-0 -right-16 md:right-10 opacity-90">
        <img src={ipad5} alt="Apple watch, the best for your summer" />
      </div>
    </section>
  )
}

export default HomeBanner
