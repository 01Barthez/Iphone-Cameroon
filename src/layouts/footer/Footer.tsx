import Logo from '@/components/custom/utils/Logo'
import React from 'react'
import FooterCol from './FooterCol'
import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'
import { Link } from 'react-router-dom'
import LanguageSelector from '@/components/custom/utils/LanguageSelector'
import ModeToogle from '@/components/custom/utils/ModeToogle'

/**
 * Functional component for rendering a footer
 * @parmams
 * @returns JSX element representing the footer
 * */

const Footer: React.FC = () => {
  return (
    <footer className='bg-footer text-footer-foreground w-full border-t border-t-foreground/80'>
      <div className="container py-10 space-y-10">
        {/* First line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center md:justify-items-start">
          {/* Logo and description colonn */}
          <div className="max-w-md col-span-1 md:col-span-2 flex flex-col gap-4 items-center md:items-start">
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
        <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
          {/* Socials Links */}
          <div className=" flex gap-2">
            {
              SocialLink.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
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
      </div>
    </footer>
  )
}

export default Footer
