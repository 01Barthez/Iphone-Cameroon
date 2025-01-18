import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from '@/components/ui/marquee'
import playstation from "@/assets/images/PlayStation.svg"
import macbook from "@/assets/images/Macbook.svg"
import appleVision from "@/assets/images/casque.svg"
import boxe from "@/assets/images/boxe.svg"
import ipdaPro from "@/assets/images/ipad.svg"
import samsungGalaxy from "@/assets/images/samsunggalaxy.svg"
import appleWatch from "@/assets/images/applewatch.svg"
import cinemaCamera from "@/assets/images/cinemaCamera.svg"
import CTA2 from './utils/CTA2'

const BestProducts: React.FC = () => {
  return (
    <section className=''>
      {/* <div className="flex items-stretch gap-0"> */}
      <Marquee repeat={20} pauseOnHover className="[--duration:25s] p-0">
        {/* Bloc 0 */}
        <div className="w-fit lg:w-[50vw] h-full">
          <Link
            to={'/products/ipad'}
            className="bg-foreground/5 md:py-28 w-full flex items-center"
          >
            <div className="w-full h-full">
              <img
                src={ipdaPro}
                alt="Ipad Pro, Iphone The best for the best products"
                className='w-full h-full object-cover'
              />
            </div>

            <div className="px-14 space-y-4">
              <h3
                translate="no"
                className="font-extralight text-3xl md:text-4xl lg:text-5xl"
              >
                <span className="whitespace-nowrap">
                  Ipad  <span className='font-semibold'>Pro</span>
                </span>
              </h3>

              <p className="text-medium text-foreground/80 text-sm">
                iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
              </p>

              <CTA2 url='/products' />
            </div>
          </Link>
        </div>

        {/* bloc1 */}
        <div className="w-fit lg:w-[50vw] h-full flex flex-row lg:flex-col gap-0">
          {/* Up products */}
          <Link
            to={'/products/playstation'}
            className="w-full flex items-center"
          >
            <div className="w-full h-full">
              <img
                src={playstation}
                alt="Playstation apple to sell at a best price"
                className='w-full h-full object-contain'
              />
            </div>

            <div className="px-4 md:px-8 py-10 md:py-14 space-y-4">
              <h3
                translate="no"
                className="font-medium text-3xl md:text-4xl lg:text-5xl"
              >
                <span className="whitespace-nowrap">
                  Playstation 5
                </span>
              </h3>

              <p className="text-medium text-foreground/80 text-sm">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
          </Link>

          {/* Down Products */}
          <div className="w-full flex items-stretch gap-0">
            <Link
              to={'/products/apple-vision'}
              className="flex-1 bg-foreground/5 flex items-center"
            >
              <div className="w-full h-full">
                <img
                  src={appleVision}
                  alt="apple Vision, Computational audio"
                  className="w-full h-full"
                />
              </div>

              <div className="px-8 md:px-12 py-8 md:py-12 space-y-4">
                <h3
                  translate="no"
                  className="font-light text-lg md:text-xl lg:text-2xl">

                  Apple <br />
                  <span className='whitespace-nowrap'>
                    AirPods <span className="font-semibold">Max</span>
                  </span>
                </h3>

                <p className="text-medium text-foreground/80 text-sm">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </Link>

            <Link
              to={'/products/apple-vision-pro'}
              className="flex-1 flex items-center bg-foreground/80 text-background"
            >
              <div className="w-full h-full">
                <img
                  src={boxe}
                  alt="Apple vision pro"
                  className='w-full h-full'
                />
              </div>

              <div className="pl-3 md:pl-4 pr-8 md:pr-12 space-y-2">
                <h3
                  translate="no"
                  className="font-light text-lg md:text-xl lg:text-2xl">

                  Apple <br />
                  <span className="whitespace-nowrap">
                    Vision <span className="font-semibold">Pro</span>
                  </span>
                </h3>

                <p className="text-medium text-background/80 text-sm">
                  An immersive way to experience entertainment
                </p>
              </div>
            </Link>
          </div>
        </div>


        {/* bloc2 */}
        <div className="w-fit lg:w-[50vw] h-full">
          <Link
            to={'/products/mac-book'}
            className="bg-foreground/5 py-12 w-full flex items-center flex-row-reverse"
          >
            <div className="w-full h-full">
              <img
                src={macbook}
                alt="The new 15-inch MacBook Air"
                className='w-full h-full object-cover'
              />
            </div>

            <div className="px-14 space-y-4">
              <h3
                translate="no"
                className="font-extralight text-3xl md:text-4xl lg:text-5xl"
              >
                <span className="whitespace-nowrap">
                  Macbook <span className='font-semibold'>Air</span>
                </span>
              </h3>

              <p className="text-medium text-foreground/80 text-sm">
                The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
              </p>

              <CTA2 url='/products' />
            </div>
          </Link>
        </div>

        {/* bloc3 */}
        <div className="w-fit lg:w-[50vw] h-full flex flex-row lg:flex-col gap-0">
          {/* Up products */}
          <Link
            to={'/products/cinema-camera'}
            className="w-full flex items-center"
          >
            <div className="w-full h-full">
              <img
                src={cinemaCamera}
                alt="Blackmagic Pocket Cinema Camera 6k"
                className='w-full h-full object-contain'
              />
            </div>

            <div className="px-4 md:px-8 py-10 md:py-10 space-y-4">
              <h3
                translate="no"
                className="font-medium text-2xl md:text-3xl lg:text-4xl"
              >
                <span className="whitespace-nowrap">
                  Blackmagic Pocket <br />
                  Cinema Camera 6k
                </span>
              </h3>

              <p className="text-medium text-foreground/80 text-sm">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
          </Link>

          {/* Down Products */}
          <div className="w-full flex items-stretch gap-0">
            <Link
              to={'/products/samsung-galaxy'}
              className="flex-1 bg-foreground/5 flex items-center"
            >
              <div className="w-full h-full">
                <img
                  src={samsungGalaxy}
                  alt="Samsung Galaxy "
                  className="w-full h-full"
                />
              </div>

              <div className="px-2 md:px-3 py-8 md:py-12 space-y-4">
                <h3
                  translate="no"
                  className="font-light text-lg md:text-xl lg:text-2xl"
                >
                  <span className='whitespace-nowrap'>
                    Samsung <br /> Galaxy <span className="font-semibold">S 10+</span>
                  </span>
                </h3>

                <p className="text-medium text-foreground/80 text-sm">
                  Discover the latest version of samsung at the best price
                </p>
              </div>
            </Link>

            <Link
              to={'/products/apple-watch'}
              className="flex-1 flex items-center bg-foreground/80 text-background"
            >
              <div className="w-full h-full">
                <img
                  src={appleWatch}
                  alt="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case"
                  className='w-full h-full'
                />
              </div>

              <div className="pl-3 md:pl-4 pr-8 md:pr-12 space-y-2">
                <h3
                  translate="no"
                  className="font-light text-lg md:text-xl lg:text-2xl"
                >
                  <span className="whitespace-nowrap">
                    Apple <br /> Watch
                  </span>
                </h3>

                <p className="text-medium text-background/80 text-sm">
                  An immersive way to experience entertainment
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Marquee>
      {/* </div> */}
    </section>
  )
}

export default BestProducts
