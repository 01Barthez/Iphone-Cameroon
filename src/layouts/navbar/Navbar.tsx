import React from 'react'
import UpNavbar from './UpNavbar'
import DownNavbar from './DownNavbar'

const Navbar: React.FC = () => {
  return (
    <nav>
      <UpNavbar />
      <DownNavbar />
    </nav>
  )
}

export default Navbar
