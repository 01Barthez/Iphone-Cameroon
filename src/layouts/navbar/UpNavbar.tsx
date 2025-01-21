import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from '@/components/custom/utils/Logo'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/custom/utils/SearchInput";

const userNameSlug = "barthez";

const UpNavbar: React.FC = () => {
  return (
    <div className="bg-background py-2 md:py-4  w-full ">
      <div className='container flex items-center gap-10 justify-between'>
        {/* Logo website */}
        <Logo />

        {/* Left part */}
        <div className="hidden md:block">
          {/* Details part, for large screens */}
          <div className="flex items-center gap-10">
            {/* Search Input */}
            <div className="lg:block hidden">
              <SearchInput />
            </div>

            {/* Navlinks */}
            <div className="flex items-center gap-4">
              <NavLink
                to={`/`}
                className={({ isActive }) => `font-medium text-nowrap ${isActive ? "text-foreground" : "text-foreground/80 duration-200"}`}
              >
                Home
              </NavLink>

              <NavLink
                to={`/products`}
                className={({ isActive }) => `font-medium text-nowrap ${isActive ? "text-foreground" : "text-foreground/80 duration-200"}`}
              >
                Products
              </NavLink>

              <NavLink
                to={`/blog`}
                className={({ isActive }) => `font-medium text-nowrap ${isActive ? "text-foreground" : "text-foreground/80 duration-200"}`}
              >
                Blog
              </NavLink>

              <NavLink
                to={`/contact`}
                className={({ isActive }) => `font-medium text-nowrap ${isActive ? "text-foreground" : "text-foreground/80 duration-200"}`}
              >
                Contact Us
              </NavLink>
            </div>

            {/* Acount Tools */}
            <div className="flex items-center gap-1">
              {/* Search Button for small screens */}
              <Button className="mr-3 hidden md:block lg:hidden w-auto h-auto shadow-none border-none text-xl p-2 hover:bg-foreground/10 rounded-full duration-200">
                <BiSearch />
              </Button>

              {/* Card */}
              <Link
                to={`/${userNameSlug}/orders`}
                className='text-lg md:text-xl p-2 hover:bg-foreground/10 rounded-full duration-200'
              >
                <AiOutlineShoppingCart />
              </Link>

              {/* Whislist */}
              <Link
                to={`/${userNameSlug}/wishlist`}
                className='text-lg md:text-xl p-2 hover:bg-foreground/10 rounded-full duration-200'
              >
                <AiOutlineHeart />
              </Link>

              {/* Notifications */}
              <Link
                to={`/${userNameSlug}/notifications`}
                className='text-lg md:text-xl p-2 hover:bg-foreground/10 rounded-full duration-200'
              >
                <AiOutlineBell />
              </Link>

              {/* User Account */}
              <Link
                to={`/account`}
                className='text-lg md:text-xl p-2 hover:bg-foreground/10 rounded-full duration-200'
              >
                <AiOutlineUser />
              </Link>
            </div>
          </div>
        </div>

        {/* Menu button, for small screens */}
        <div className="block md:hidden group">
          <Button className="w-auto h-auto shadow-none border-none p-2.5 rounded-lg bg-transparent group-hover:bg-foreground/15 text-foreground/95 group-hover:text-foreground duration-200">
            <AiOutlineMenu size={32}/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UpNavbar
