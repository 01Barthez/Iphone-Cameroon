import React from 'react'
import UpNavbar from './UpNavbar'
import DownNavbar from './DownNavbar'

const Navbar: React.FC = () => {
  return (
    <nav className='sticky top-0 left-0 z-50 border-b border-foreground/60 md:border-none'>
      <UpNavbar />
      <DownNavbar />
    </nav>
  )
}

export default Navbar
