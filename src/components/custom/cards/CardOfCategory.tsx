import React from 'react'
import type { IcardCategory } from '@/interface/interface'
import { Link } from 'react-router-dom'

const CardOfCategory: React.FC<IcardCategory> = ({ icon, name, href }) => {
    return (
        <Link 
            to={`${href}`} 
            className='group inline-block w-32 h-32 shrink-0 bg-foreground/10 hover:bg-foreground/15 duration-300 rounded-lg p-2'
        >
            <div className='flex items-center justify-center flex-col gap-2'>
                {/* Icon */}
                <div className="w-12 h-12 text-3xl md:text-4xl flex items-center justify-center text-foreground/80 group-hover:text-foreground duration-300">
                    {icon}
                </div>
                {/* name */}
                <span className="font-medium text-center text-foreground/80 group-hover:text-foreground duration-300">
                    {name}
                </span>
            </div>
        </Link>
    )
}

export default CardOfCategory
