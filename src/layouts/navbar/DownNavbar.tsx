import { Separator } from '@/components/ui/separator'
import { LinkCategory } from '@/core/mocks/link.mock'
import React from 'react'
import { NavLink } from 'react-router-dom'

const DownNavbar: React.FC = () => {
  return (
    <div className='bg-[#2E2E2E] dark:bg-slate-400 py-2 w-full'>
      <div className="container hidden lg:flex items-center justify-between w-full gap-6 font-medium">
        {
          LinkCategory.map((sublink, index) => (
            <React.Fragment key={sublink.id}>
              <NavLink
                to={sublink.href}
                className={({ isActive }) => `flex items-center gap-2 text-nowrap ${isActive ? "text-background" : "text-background/80 duration-200"}`}
              >
                <span className="text-lg">{sublink.icon}</span>
                <span>{sublink.name}</span>
              </NavLink>

              {
                index < LinkCategory.length - 1 && (
                  <Separator orientation="vertical" className="h-6 rounded-full bg-background/60" />
                )
              }
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default DownNavbar
