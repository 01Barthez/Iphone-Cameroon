import Logo from '@/components/custom/utils/Logo'
import React from 'react'
import FooterCol from './FooterCol'
import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'
import { Link } from 'react-router-dom'
import LanguageSelector from '@/components/custom/utils/LanguageSelector'
import ModeToogle from '@/components/custom/utils/ModeToogle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";

/**
 * Functional component for rendering a footer
 * @parmams
 * @returns JSX element representing the footer
 * */

const Footer: React.FC = () => {
  return (
    <footer className='bg-footer text-footer-foreground w-full border-t border-t-foreground/80'>
      <div className="relative container py-10 space-y-10">
        {/* First line */}
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center md:justify-items-start">
          {/* Logo and description colonn */}
          <div className="max-w-md col-span-1 lg:col-span-2 flex flex-col gap-4 items-center md:items-start">
            {/* Logo */}
            <Logo isDarkZone={true} />

            {/* Description */}
            <p className="font-medium text-sm text-center md:text-left text-footer-foreground/80">
              Unbeatable prices, fast delivery and exceptional accessories to set you apart in style.
            </p>
          </div>

          {/* Footers Links */}
          {
            FootersLinks.map((col) => (
              <FooterCol
                key={col.id}
                title={col.title}
                links={col.links}
              />
            ))
          }
        </div>

        {/* Second line line */}
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center gap-4 md:justify-between">
          {/* Socials Links */}
          <div className=" flex gap-2">
            {
              SocialLink.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  target='_blank'
                  title={`contact us on ${link.name}`}
                  className='text-lg md:text-xl p-2 text-footer-foreground/80 hover:bg-footer-foreground/10 rounded-full duration-200'
                >
                  {link.icon}
                </Link>
              ))
            }
          </div>

          {/* Setting Button */}
          <div className="flex items-center gap-2">
            {/* Change Language */}
            <LanguageSelector />

            {/* Toogle theme */}
            <ModeToogle />
          </div>
        </div>

        <div className="absolute top-10 right-10 w-20 h-20 blur-3xl bg-hero-linear rounded-full" />
        <div className="absolute bottom-28 md:top-28 md:left-80 w-20 h-20 blur-3xl bg-hero-linear rounded-full" />
      </div>

      {/* Profile */}
      <div className="w-full px-1 py-[3px] space-x-4 font-light text-sm flex justify-center bg-footer-foreground/20">
        <span>Designed and developped by</span>

        <TooltipProvider
          delayDuration={100}
        >
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={'https://www.linkedin.com/in/barthez-kenwou/'}
                target='_blank'
                className='font-normal text-sky-300/70 hover:text-sky-500/70 hover:underline duration-200 text-nowrap'
              >
                Barthez Kenwou
              </Link>
            </TooltipTrigger>

            <TooltipContent className='px-6 py-2 relative bg-footer border border-footer-foreground text-footer-foreground text-xs'>
              <p className='relative z-30 space-y-3 leading-4'>
                <p className="flex flex-col gap-2">
                  <span className="bg-footer w-fit">
                    <TextAnimate animation="slideLeft" by="character">
                      Hello, I am Barthez Kenwou,
                    </TextAnimate>
                  </span>
                  <p className="">
                  <span className="bg-footer">
                    I am a passionate <b>full-stack web</b> developer,
                  </span>
                  <br />
                  <span className="bg-footer">
                    specializing in crafting efficient and tailored digital solutions.
                  </span>
                  <br />
                  <span className="bg-footer">
                    An expert in transforming ideas into modern applications,
                  </span>
                  <br />
                  <span className="bg-footer">
                    I combine creativity with technical precision.
                  </span>
                  <br />
                  <span className="bg-footer">
                    Always seeking innovation, I am committed to tackling
                  </span>
                  <br />
                  <span className="bg-footer">
                    digital challenges with professionalism and efficiency.
                  </span>
                  </p>
                </p>


                <p className="flex items-center gap-10">
                  <p className="bg-footer flex flex-col leading-3 w-fit">
                    <span>Do you want to</span>
                    <span>contact me ?</span>
                  </p>

                  {/* Contact Informations */}
                  <div className="leading-4">
                    <p className="bg-footer w-fit">
                      Linkedin:
                      <Link
                        to={'https://www.linkedin.com/in/barthez-kenwou/'}
                        target='_blank'
                        className='font-medium text-sky-500/85 hover:text-sky-500  duration-200 text-nowrap'
                      >
                        <TextAnimate animation="blurIn" className='inline ml-2'>
                          My LinkedIn profile
                        </TextAnimate>
                      </Link>
                    </p>

                    <p className="bg-footer w-fit">
                      Whatsapp:
                      <Link
                        to={'https://wa.me/655646688'}
                        target='_blank'
                        className='font-medium text-sky-500/85 hover:text-sky-500  duration-200 text-nowrap'
                      >
                        <TextAnimate animation="blurIn" by="character" className='inline ml-2'>
                          +237 655 646 688
                        </TextAnimate>
                      </Link>
                    </p>
                  </div>
                </p>
              </p>

              <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#2f22f2"
                maxOpacity={0.3}
                flickerChance={0.8}
                height={800}
                width={800}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  )
}

export default Footer
