import React from 'react'
import ipad1 from '/images/ipad1.svg'
import ipad2 from '/images/ipad-screen-violet.svg'
import ipad3 from '/images/ipad-screen-blue.svg'
import ipad4 from '/images/ipad_incline.svg'
import ipad5 from '/images/apple-watch3.svg'
import CTA2 from './utils/CTA2'

const HomeBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-bl from-foreground/55 to-foreground/15 dark:from-foreground/5 dark:to-foreground/15 py-20 md:py-32 lg:py-40 flex items-center justify-center">
      <div className="relative z-40 container max-w-[90%] flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-fit p-0">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extralight text-center">
          Big Summer <span className="font-normal">Sale</span>
        </h2>

        <span className="text-center text-sm md:text-base text-foreground/90">
          Dazzling offers for an unforgettable summer!
        </span>
      
        <div className="mx-auto">
          <CTA2 url='/products' className='bg-transparent'/>
        </div>

        {/* gradient Decoration */}
        <div className="absolute z-10 top-1/2 right-1/2 w-20 h-20 blur-3xl bg-hero-linear rounded-full" />
      </div>

      {/* Some images */}
      <div className="pointer-events-none select-none block md:hidden lg:block absolute z-10 top-0 -left-14 lg:left-48 opacity-90">
        <img src={ipad1} loading="lazy" alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="pointer-events-none select-none hidden md:block absolute z-20 lg:top-5 left-5 opacity-90">
        <img src={ipad2} loading="lazy" alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="pointer-events-none select-none hidden lg:block absolute z-10 lg:top-48 lg:left-0 opacity-95">
        <img src={ipad3} loading="lazy" alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="pointer-events-none select-none hidden md:block absolute z-10 bottom-0 lg:top-10 right-0">
        <img src={ipad4} loading="lazy" alt="Ipad iphone product, the best for your summer" />
      </div>
      <div className="pointer-events-none select-none absolute z-10 -bottom-20 md:-bottom-14 lg:bottom-0 -right-16 md:right-10 opacity-90">
        <img src={ipad5} loading="lazy" alt="Apple watch, the best for your summer" />
      </div>
    </section>
  )
}

export default HomeBanner
